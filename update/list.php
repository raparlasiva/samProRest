<?php
require_once('includes/DBFuncts.php');

$conn = db_connect();

function getMeetingIdsByType($typeIds) {
	$result3 = mysql_query("SELECT DISTINCT meetings_meetingtypes.MeetingId
		FROM meetingtypes inner join
		meetings_meetingtypes 
		on meetingtypes.TypeId = meetings_meetingtypes.TypeId
		WHERE meetingtypes.TypeId IN (".$typeIds.")");
	for ($b = 0; $b < mysql_num_rows($result3); $b++) {
		$row3 = mysql_fetch_array($result3);
		if ( $b == 0) {
			$strMeetIds = $row3['MeetingId'];
		} else {
			$strMeetIds = $strMeetIds.",".$row3['MeetingId'];
		}
	}
	return $strMeetIds;
}

function findMeetingsByType($type) {
	$strSQL = "SELECT MeetingId, MeetingName, days.Day,
	LEFT(TIME_FORMAT(MeetTime,'%r'),2) AS MyHour,
	TIME_FORMAT(MeetTime,'%i') AS MyMinutes,
	RIGHT(TIME_FORMAT(MeetTime,'%r'),2) AS MyAmOrPM,
	BuildingName, Address, Area, Zip, BusLines, SpecialNotes
	FROM meetings inner join days
	ON meetings.DayId = days.DayId
	WHERE (blnHide = 0 AND blnConfirmed = 1) ";

	$strMeetIds = getMeetingIdsByType($type);
	$strSQL = $strSQL." AND meetings.MeetingId IN (".$strMeetIds.") ";
	$strSQL = $strSQL." Order By days.DayId, MeetTime, MeetingName";
	$result = mysql_query($strSQL);
	return $result;
}

if ( $HTTP_POST_VARS['hdnAction'] == "FindAMeetNow" ) {
	//We're 0 Hours behind our new Host, so Add 0 hours to now function.
	$result = mysql_query("SELECT MeetingId, MeetingName, days.Day,
	LEFT(TIME_FORMAT(MeetTime,'%r'),2) AS MyHour,
	TIME_FORMAT(MeetTime,'%i') AS MyMinutes,
	RIGHT(TIME_FORMAT(MeetTime,'%r'),2) AS MyAmOrPM,
	BuildingName, Address, Area, Zip, BusLines, SpecialNotes
	FROM meetings inner join days
	ON meetings.DayId = days.DayId
	WHERE (blnHide = 0 AND blnConfirmed = 1)
	AND (MeetTime BETWEEN TIME_FORMAT(NOW( ) + INTERVAL 0 HOUR,'%H:%i:%s')
	AND TIME_FORMAT(NOW( ) + INTERVAL 4 HOUR,'%H:%i:%s'))
	AND (DAYNAME(CURDATE( )) = days.Day)
	Order By days.DayId, MeetTime, MeetingName");

} else if ( $HTTP_POST_VARS['hdnAction'] == "menOnly" ) {
	$result = findMeetingsByType("9");

} else if ( $HTTP_POST_VARS['hdnAction'] == "womenOnly" ) {
	$result = findMeetingsByType("10");

} else if ( $HTTP_POST_VARS['hdnAction'] == "busRoutes" ) {
	$result = mysql_query("SELECT MeetingId, MeetingName, days.Day,
	LEFT(TIME_FORMAT(MeetTime,'%r'),2) AS MyHour,
	TIME_FORMAT(MeetTime,'%i') AS MyMinutes,
	RIGHT(TIME_FORMAT(MeetTime,'%r'),2) AS MyAmOrPM,
	BuildingName, Address, Area, Zip, BusLines, SpecialNotes
	FROM meetings inner join days
	ON meetings.DayId = days.DayId
	WHERE (blnHide = 0 AND blnConfirmed = 1)
	AND BusLines != ''
	Order By days.DayId, MeetTime, MeetingName");

} else if ( $HTTP_POST_VARS['hdnAction'] == "gayLesbian" ) {
	$result = findMeetingsByType("6");

} else if ( $HTTP_POST_VARS['hdnAction'] == "spanish" ) {
	$result = findMeetingsByType("15");


} else if (isset($HTTP_POST_VARS['selDays']) & isset($HTTP_POST_VARS['selTimes'] )
			& isset($HTTP_POST_VARS['selMeetTypes'] ) & isset($HTTP_POST_VARS['selAreas'] )) {
	//Build query based on user's selections. if any options = 0 the
	//user selected the any option, so no filter is required.
	
	$strSQL = "SELECT MeetingId, MeetingName, days.Day,
	LEFT(TIME_FORMAT(MeetTime,'%r'),2) AS MyHour,
	TIME_FORMAT(MeetTime,'%i') AS MyMinutes,
	RIGHT(TIME_FORMAT(MeetTime,'%r'),2) AS MyAmOrPM,
	BuildingName, Address, Area, Zip, BusLines, SpecialNotes
	FROM meetings inner join days
	ON meetings.DayId = days.DayId
	WHERE (blnHide = 0 AND blnConfirmed = 1) ";

	//First, figure out how many if any days were selected.

	if ( !in_array("0", $HTTP_POST_VARS['selDays'] ) ) {
		$strDays = join(',', $HTTP_POST_VARS['selDays']);
		$strSQL = $strSQL." AND meetings.DayId IN (".$strDays.") ";
	}

	//next, figure out how many, if any, times were selected.
	if ( !in_array("0", $HTTP_POST_VARS['selTimes'] ) ) {
		$strTimes = stripslashes(join(',', $HTTP_POST_VARS['selTimes']));
		$strSQL = $strSQL." AND meetings.MeetTime IN (".$strTimes.") ";
	}

	//next, figure out how many, if any, times were selected.
	if ( !in_array("0", $HTTP_POST_VARS['selAreas'] ) ) {
		$strAreas = '"'.stripslashes(join('","', $HTTP_POST_VARS['selAreas'])).'"';
		$strSQL = $strSQL." AND meetings.Area IN (".$strAreas.") ";
	}

	//Just found out MySQL does not support Subquery's so have to do the following to filter by meeting types.
	if ( !in_array("0", $HTTP_POST_VARS['selMeetTypes'] ) ) {
		$strMeetTypes = join(',', $HTTP_POST_VARS['selMeetTypes']);

		$result3 = mysql_query("SELECT DISTINCT meetings_meetingtypes.MeetingId
			FROM meetingtypes inner join
			meetings_meetingtypes 
			on meetingtypes.TypeId = meetings_meetingtypes.TypeId
			WHERE meetingtypes.TypeId IN (".$strMeetTypes.")");

		for ($b = 0; $b < mysql_num_rows($result3); $b++) {
			$row3 = mysql_fetch_array($result3);
			if ( $b == 0) {
				$strMeetIds = $row3['MeetingId'];
			}
			else {
				$strMeetIds = $strMeetIds.",".$row3['MeetingId'];
			}
		}

		//Make sure this meeting is in their.
		$strSQL = $strSQL." AND meetings.MeetingId IN (".$strMeetIds.") ";
	}
	//echo $strSQL;
	//exit;
	$result = mysql_query($strSQL." Order By days.DayId, MeetTime, MeetingName");
} else {
	$result = mysql_query("SELECT MeetingId, MeetingName, days.Day,
	LEFT(TIME_FORMAT(MeetTime,'%r'),2) AS MyHour,
	TIME_FORMAT(MeetTime,'%i') AS MyMinutes,
	RIGHT(TIME_FORMAT(MeetTime,'%r'),2) AS MyAmOrPM,
	BuildingName, Address, Area, Zip, BusLines, SpecialNotes
	FROM meetings inner join days
	ON meetings.DayId = days.DayId
	WHERE (blnHide = 0 AND blnConfirmed = 1)
	Order By days.DayId, MeetTime, MeetingName");
}
if (!$result) {
 $intCompsFound = 0;
} else {
 $intCompsFound = mysql_num_rows($result);
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
	xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Indianapolis Intergroup Inc.</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link href="../aastyle.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="../menustyle3.css" />
<link rel="stylesheet" type="text/css" href="meetings.css" />

<script type="text/javascript" src="../aamenu.js"></script>
<script src="list.js" type="text/javascript"></script>

</head>
<body bgcolor="#FFFFFF"
	onload="MM_preloadImages('../images/btn_home_over.gif','../images/btn_about_over.gif','../images/btn_meetings_over.gif','../images/btn_events_over.gif','../images/btn_resources_over.gif','../images/btn_sitemap_over.gif')">

<table id="Table_01" width="802" border="0" cellpadding="0"
	cellspacing="0" align="center">
	<tr>
		<td colspan="11" background="../images/top_banner.gif" height="121"></td>
	</tr>
	<tr>
		<td colspan="11">
		<div class="chromestyle" id="chromemenu">
		<ul>
			<li><a href="../index.htm">Home</a></li>

			<li><a href="#" rel="dropmenu1">About Us</a></li>
			<li><a href="#" rel="dropmenu2">Informational</a></li>
			<li><a href="#" rel="dropmenu3">Meetings</a></li>
			<li><a href="#" rel="dropmenu4">Events</a></li>
			<li><a href="../resources/resources.htm">Resources</a></li>
			<li><a href="../general/sitemap.htm">Sitemap</a></li>
		</ul>
		</div>

		<!--1st drop down menu -->
		<div id="dropmenu1" class="dropmenudiv"><a
			href="../general/about_us.htm">About A.A.</a> <a
			href="../general/aa_in_indianapolis.htm">Indianapolis Intergroup</a>
		<a href="../general/contact_us.htm">Contact Us</a> 
<a href="../general/volunteer_form.htm">Volunteer</a>
<a href="../archives/archives.htm">Archives</a>
</div>


		<!--2nd drop down menu -->
		<div id="dropmenu2" class="dropmenudiv"><a
			href="../general/how_it_works.htm">How It Works</a> <a
			href="../resources/aa_structure.htm">A.A. Structure</a> <a
			href="../central_sales/central_sales.htm">Central Sales</a> <a
			href="../general/concepts_checklist.htm">Concepts Checklist</a> <a
			href="../general/message_of_hope.htm">Message of Hope</a> <a
			href="../general/traditions_checklist.htm">Traditions Checklist</a> <a
			href="../general/twelve_questions.htm">Twelve Questions</a> <a
			href="../general/twelve_steps.htm">Twelve Steps</a></div>

		<!--3rd drop down menu -->
		<div id="dropmenu3" class="dropmenudiv" style="width: 180px;"><a
			href="../meetings/find.php">Search for Meeting</a> <a
			href="../meetings/list.php">Complete List of Meetings</a>
			<a href="../general/clubs.htm">Club Locations</a>
			<a href="../meetings/everywhere.htm">A.A. Everywhere</a>
</div>

		<!--4th drop down menu -->
		<div id="dropmenu4" class="dropmenudiv"><a
			href="../events/january.htm">January Events</a> <a
			href="../events/february.htm">February Events</a> <a
			href="../events/march.htm">March Events</a> <a
			href="../events/april.htm">April Events</a> <a
			href="../events/may.htm">May Events</a> <a href="../events/june.htm">June
		Events</a> <a href="../events/july.htm">July Events</a> <a
			href="../events/august.htm">August Events</a> <a
			href="../events/september.htm">September Events</a> <a
			href="../events/october.htm">October Events</a> <a
			href="../events/november.htm">November Events</a> <a
			href="../events/december.htm">December Events</a></div>

<script type="text/javascript">
	cssdropdown.startchrome("chromemenu")
</script></td>

	</tr>
	<tr>
		<td rowspan="3" background="../images/body_left.gif" width="52"
			height="419"></td>
		<td colspan="9" bgcolor="#FFFFFF" height="14"></td>
		<td rowspan="3" background="../images/body_right.gif" width="23"
			height="419"></td>
	</tr>
	<tr>

		<td BGCOLOR="#FFFFFF" colspan="9" height="26" valign="top">
		<p class="title">Meeting List</p>
		</td>
	</tr>

	<tr>
		<td colspan="9" bgcolor="#FFFFFF" valign="top"><?php
		require_once('includes/DBFuncts.php');

		$conn = db_connect();
		?>


		<TABLE WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0"
			BGCOLOR="#FFFFFF" SUMMARY="This table contains the home page text.">
			<TR>
				<TD>&nbsp;</TD>
				<TD COLSPAN="3" CLASS="BodyMeat" WIDTH="600">
				<P>Groups listed in the directory are listed at their own request. A
				directory listing does not constitute or imply approval or
				endorsement of any group&rsquo;s approach to or practice of the
				traditional A.A. program.</P>
				</TD>
				<TD>&nbsp;</TD>
			</TR>
			<TR>
				<TD>&nbsp;</TD>
				<TD COLSPAN="3" CLASS="BodyMeat">&nbsp;</TD>
				<TD>&nbsp;</TD>
			</TR>
			<TR>
				<TD WIDTH="4%">&nbsp;</TD>
				<TD COLSPAN="3" VALIGN="top" CLASS="BodyMeat">
				<TABLE WIDTH="600" BORDER="0" ALIGN="LEFT" CELLPADDING="1"
					CELLSPACING="0" CLASS="GreenBackGround" SUMMARY="This is a table.">
					<TR>
						<TD WIDTH="81%" ALIGN="left" CLASS="WhiteTblHeading">&nbsp;<?php echo $intCompsFound ?>
						Meetings Found:</TD>
						<TD style="padding: 5px;" WIDTH="19%" ALIGN="right" NOWRAP CLASS="WhiteTblHeading"><A
							HREF="javascript:history.back();">
<strong>Go Back</strong>
</A></TD>
					</TR>
					<TR>
						<TD COLSPAN="2">
						<TABLE WIDTH="100%" BORDER="0" CELLPADDING="5" CELLSPACING="0"
							BGCOLOR="#FFFFFF" SUMMARY="Inner table">
<?php
if ($intCompsFound != 0) {
	for ($i = 0; $i < mysql_num_rows($result); $i++)
	{
		$row = mysql_fetch_array($result);

		if ( $i % 2 == 0 )
		$strBGColor = "#FFFFFF";
		else
		$strBGColor = "#D8D8D8";

		if ( $i == 0 )
		{
			echo "<TR bgcolor='".$strBGColor."' ALIGN='left' CLASS='Body'>
				<TD COLSPAN='5' VALIGN='middle' CLASS='MeetingDayHeading'>".$row['Day']."</TD>
				</TR>";
		}
		elseif ( $strTempDay != $row['Day'] )
		{
			if ( $strBGColor == "#FFFFFF" )
			{
				$strBARBGColor = "#D8D8D8";
			}
			else
			{
				$strBARBGColor = "#FFFFFF";
			}

			echo "<TR bgcolor='".$strBARBGColor."' CLASS='Body'>
				<TD COLSPAN='5' VALIGN='middle'>
				<IMG SRC='../images/YellowBar.gif' ALT='Yellow bar' NAME='YellowBar' ID='YellowBar' WIDTH='450' HEIGHT='2' BORDER='0'></TD>
				</tr>
				<TR bgcolor='".$strBGColor."' ALIGN='left' CLASS='Body'>
				<TD COLSPAN='5' VALIGN='middle' CLASS='MeetingDayHeading'>".$row['Day']."</TD>
				</TR>";
		}

		$strTempDay = $row['Day'];

		echo " <TR bgcolor='".$strBGColor."' ALIGN='left' VALIGN='top' CLASS='Body'>
			<TD NOWRAP WIDTH='2%' CLASS='BodyMeat'>".$row['MyHour'].":".$row['MyMinutes']." ".$row['MyAmOrPM']."</TD>";

		//another db hit to find out the meeting types for this meeting.

		$resultTypes = mysql_query("SELECT meetingtypes.TypeId, meetingtypes.TypeSymbol, meetingtypes.Type, meetingtypes.TypeDesc
			FROM meetingtypes inner join
			meetings_meetingtypes on meetingtypes.TypeId = meetings_meetingtypes.TypeId
			WHERE meetings_meetingtypes.MeetingId = ".$row['MeetingId']."
			ORDER BY SortBy");

		echo "<TD CLASS='SmallNote'><div align='left'>";

		for ($j = 0; $j < mysql_num_rows($resultTypes); $j++)
		{
			$rowTypes = mysql_fetch_array($resultTypes);

			$strTemp = str_replace("'", "\'", $rowTypes['Type']);

			echo "<A HREF=\"#\"
				ONCLICK=\"return ShowDesc('This meeting is: ".$strTemp." ".$rowTypes['TypeDesc']."');\"
				CLASS='LinkSmallBlue'
				TITLE=\"".stripslashes($rowTypes['Type'])." ".stripslashes($rowTypes['TypeDesc'])."\"><b>".$rowTypes['TypeSymbol']."</b></A><br>";
		}

		echo "</div></TD>
			<TD VALIGN='top' COLSPAN='2' nowrap ALIGN='left' CLASS='BodyMeat'>
			<div align='left'><B>".stripslashes($row['MeetingName'])."</B><br>";

		if ($row['BuildingName'] != "")
		{
			echo stripslashes($row['BuildingName'])."<br>";
		}

		echo stripslashes($row['Address'])."<br>";

		if ($row['Area'] != "")
		{
			echo stripslashes($row['Area'])." ";
		}

		if ( $row['Zip'] != 0)
		{
			echo $row['Zip']." ";
		}

		if ($row['BusLines'] != "")
		{
			echo "<br>IndyGo Bus Line(s): ".stripslashes($row['BusLines']);
		}


		echo "<br></div></TD><TD VALIGN='top' ALIGN='left' CLASS='BodyMeat'><A HREF='http://maps.google.com/maps?f=q&hl=en&q=".urlencode(stripslashes($row['Address']))."+".$row['Zip']."' TARGET='_blank'><B>Map and Directions </B></A></TD></TR>";


		if ($row['SpecialNotes'] != "")
		{
			echo "<TR bgcolor='".$strBGColor."' VALIGN='top' CLASS='Body'>
				<td COLSPAN='2'>&nbsp;</td>
				<TD ALIGN='LEFT' COLSPAN='3' CLASS='SmallNote'><I>(".stripslashes($row['SpecialNotes']).")</I></TD>
				</tr>";
		}
	}
}
else
{
	echo "<TR bgcolor='#FFFFFF' ALIGN='left' CLASS='Body'>
		<TD COLSPAN='5' VALIGN='middle' CLASS='BodyMeat'><BR><B>Sorry, no meetings found.</B><BR><BR></TD>
		</TR>";
}
?>
						</TABLE>
						</TD>
					</TR>
					<TR>
						<TD>&nbsp;</TD>
						<TD ALIGN="right" style="padding: 5px;"><SPAN CLASS="WhiteTblHeading"><A
							HREF="javascript:history.back();"><strong>Go Back</strong></A></SPAN></TD>
					</TR>
				</TABLE>
				</TD>
				<TD WIDTH="4%">&nbsp;</TD>
			</TR>

		</TABLE>
		</td>
	</tr>
	<tr>
		<td colspan="11" background="../images/body_footer.gif" height="29">

		<p class="copyright">Copyright © 2007 Indianapolis Intergroup - A.A.</p>
		</td>
	</tr>
	<tr>
		<td><img src="../images/spacer.gif" width="20" height="1" alt="" /></td>
		<td width="20"><img src="../images/spacer.gif" width="20" height="1"
			alt="" /></td>
		<td width="120"><img src="../images/spacer.gif" width="120" height="1"
			alt="" /></td>
		<td width="85"><img src="../images/spacer.gif" width="85" height="1"
			alt="" /></td>
		<td width="36"><img src="../images/spacer.gif" width="36" height="1"
			alt="" /></td>
		<td width="120"><img src="../images/spacer.gif" width="120" height="1"
			alt="" /></td>
		<td width="120"><img src="../images/spacer.gif" width="120" height="1"
			alt="" /></td>

		<td width="121"><img src="../images/spacer.gif" width="121" height="1"
			alt="" /></td>
		<td width="120"><img src="../images/spacer.gif" width="120" height="1"
			alt="" /></td>
		<td width="17"><img src="../images/spacer.gif" width="17" height="1"
			alt="" /></td>
		<td><img src="../images/spacer.gif" width="23" height="1" alt="" /></td>
	</tr>

</table>

</body>

</html>
<?php
function getThisMeetTypes($intMeetId) {
	$rstMeetTypes = mysql_query("SELECT TypeId FROM meetings_meetingtypes 
		WHERE MeetingId = ".$intMeetId);
	for ($j = 0; $j < mysql_num_rows($rstMeetTypes); $j++) {
		$rowTyps = mysql_fetch_array($rstMeetTypes);
		$aMeetTyps[] = (int)$rowTyps['TypeId'];
	}
	return $aMeetTyps;
}
?>