<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><!-- InstanceBegin template="/Templates/indy_aa_inside.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<title>Indianapolis Intergroup Inc.</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link href="../aastyle.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="../menustyle3.css" />
<link rel="stylesheet" type="text/css" href="meetings.css" />
<script type="text/javascript" src="../aamenu.js"></script>
<script type="text/javascript" src="find.js"></script>

</head>
<body bgcolor="#FFFFFF" onload="MM_preloadImages('../images/btn_home_over.gif','../images/btn_about_over.gif','../images/btn_meetings_over.gif','../images/btn_events_over.gif','../images/btn_resources_over.gif','../images/btn_sitemap_over.gif')">

<table id="Table_01" width="802" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td colspan="11" background="../images/top_banner.gif" height="121">	</td>
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

<div id="dropmenu1" class="dropmenudiv">

<a href="../general/about_us.htm">About A.A.</a>
<a href="../general/aa_in_indianapolis.htm">Indianapolis Intergroup</a>
<a href="../general/contact_us.htm">Contact Us</a>
<a href="../general/volunteer_form.htm">Volunteer</a>
<a href="../archives/archives.htm">Archives</a>

</div>


<div id="dropmenu2" class="dropmenudiv">
<a href="../general/how_it_works.htm">How It Works</a>
<a href="../resources/aa_structure.htm">A.A. Structure</a>
<a href="../central_sales/central_sales.htm">Central Sales</a>

<a href="../general/concepts_checklist.htm">Concepts Checklist</a>
<a href="../general/message_of_hope.htm">Message of Hope</a>
<a href="../general/traditions_checklist.htm">Traditions Checklist</a>
<a href="../general/twelve_questions.htm">Twelve Questions</a>
<a href="../general/twelve_steps.htm">Twelve Steps</a>

</div>

<div id="dropmenu3" class="dropmenudiv" style="width: 180px;">
<a href="../meetings/find.php">Search for Meeting</a>
<a href="../meetings/list.php">Complete List of Meetings</a>
<a href="../general/clubs.htm">Club Locations</a>
<a href="../meetings/everywhere.htm">A.A. Everywhere</a>

</div>

<div id="dropmenu4" class="dropmenudiv">
<a href="../events/january.htm">January Events</a>
<a href="../events/february.htm">February Events</a>
<a href="../events/march.htm">March Events</a>
<a href="../events/april.htm">April Events</a>
<a href="../events/may.htm">May Events</a>
<a href="../events/june.htm">June Events</a>

<a href="../events/july.htm">July Events</a>
<a href="../events/august.htm">August Events</a>
<a href="../events/september.htm">September Events</a>
<a href="../events/october.htm">October Events</a>
<a href="../events/november.htm">November Events</a>
<a href="../events/december.htm">December Events</a></div>

<script type="text/javascript">

cssdropdown.startchrome("chromemenu")

</script>
		</td>

	</tr>
	<tr>
		<td rowspan="3" background="../images/body_left.gif" width="52" height="419">		</td>
		<td colspan="9" bgcolor="#FFFFFF" height="14" >		</td>
		<td rowspan="3" background="../images/body_right.gif" width="23" height="419" >		</td>
	</tr>
	<tr>

		<td BGCOLOR="#FFFFFF" colspan="9" height="26" valign="top">
			<p class="title">Find a Meeting </p>	  </td>
	</tr>

	<tr>
		<td colspan="9" bgcolor="#FFFFFF" valign="top" >


<?php
require_once('includes/DBFuncts.php');

$conn = db_connect();
?>

<FORM NAME="frmMeetFind" METHOD="POST" ACTION="list.php">
<INPUT NAME="hdnAction" type="hidden" value=""></input>
<TABLE WIDTH="85%" BORDER="0" CELLPADDING="0" CELLSPACING="0"
	BGCOLOR="#FFFFFF" SUMMARY="This table contains the home page text.">
	<TR>
		<TD WIDTH="4%">&nbsp;</TD>
		<TD COLSPAN="3" CLASS="BodyMeat">
		<p>For a list of all local meetings within the next four hours, click
		&#8220;<a class="norm" href="javascript:FindAMeetNow(document.frmMeetFind);"><b>Find
		a meeting Now</b></a>&#8221;. You may also search the Indianapolis Area
		Meetings posted on this site using the Meeting Search below.</p>
		<div class="QuickSearchLink" ><a class="norm" href="javascript:FindAMeetNow(document.frmMeetFind);">Find a meeting Now</a></div>
		<div class="QuickSearchLink" ><a class="norm" href="javascript:FindMenOnlyMtg(document.frmMeetFind);">Men only meetings</a></div>
		<div class="QuickSearchLink" ><a class="norm" href="javascript:FindWomenOnlyMtg(document.frmMeetFind);">Women only meetings</a></div>
		<div class="QuickSearchLink" ><a class="norm" href="javascript:FindBusRouteMtg(document.frmMeetFind);">Meetings on IndyGo bus routes</a></div>
		<div class="QuickSearchLink" ><a class="norm" href="javascript:FindSpanishMtg(document.frmMeetFind);">Spanish language meetings</a></div>
		<div class="QuickSearchLink" ><a class="norm" href="javascript:FindGayLesbianMtg(document.frmMeetFind);">Gay &amp; lesbian meetings</a></div>
		<div class="QuickSearchLink" ><a class="norm" href="../meetings/everywhere.htm">AA Everywhere</a></div>
		</TD>
	</TR>
	<TR>
		<TD>&nbsp;</TD>
		<TD COLSPAN="3">
		<TABLE WIDTH="80%" BORDER="0" CELLSPACING="2" CELLPADDING="2"
			SUMMARY="This table contains all the ways to search for an AA meeting.">
			<TR VALIGN="bottom">
				<TD COLSPAN="6" VALIGN="top" NOWRAP class="Heading"><STRONG>Meeting Search</STRONG></TD>
				<TD NOWRAP>&nbsp;</TD>
			</TR>
			<TR>
				<TD WIDTH="3%" ALIGN="left" VALIGN="top" NOWRAP>&nbsp;</TD>
				<TD COLSPAN="5" ALIGN="left" VALIGN="top">
				<SPAN CLASS="SmallNote">To select multiple items, hold down the
				&lt;Ctrl&gt; key while clicking selections in the Day, Meeting 
				Type, Time, and Area windows. Click the Search button when you are 
				finished making your selections.</SPAN></TD>
				<TD ALIGN="left" VALIGN="top">&nbsp;</TD>
			</TR>
			<TR>
				<TD VALIGN="top" CLASS="SmallNote">&nbsp;</TD>
				<TD COLSPAN="5" VALIGN="top" CLASS="SmallNote">
				
				
				<table border="0" cellpadding="5" cellspacing="0">
					<tbody>
					<tr>
						<td valign="top" class="FormFieldsSearch" >
							<strong><label>Day:</label> </strong>
							<SELECT NAME="selDays[]" SIZE="8" MULTIPLE
							CLASS="SelectMult" ACCESSKEY="d" TABINDEX="3">
							<OPTION VALUE="0" SELECTED>-- any day --</OPTION>
							<?php
							$result = mysql_query("SELECT DayId, Day
												FROM `days`
												Order By DayId");

							for ($i = 0; $i < mysql_num_rows($result); $i++)
							{
								$row = mysql_fetch_array($result);
									
								echo "<OPTION VALUE='".$row['DayId']."'>".$row['Day']."</OPTION>";
							}
							?>
							</SELECT>
						</td>
						<td valign="top"><img src="images/clear.gif" alt="" height="8" width="10"/></td>
						<td valign="top" class="FormFieldsSearch">
							<strong> <label>Meeting Type:</label> </strong><br/>
							<SELECT NAME="selMeetTypes[]" SIZE="8" MULTIPLE CLASS="SelectMult" ACCESSKEY="t" TABINDEX="4">
							<OPTION VALUE="0" SELECTED>-- any type --</OPTION>
							<OPTION VALUE="1">(C) Closed (for alcoholics only)</OPTION>
							<OPTION VALUE="2">(O) Open Meeting (anyone may attend)</OPTION>
							<?php
							$result = mysql_query("SELECT TypeId, TypeSymbol, Type
													FROM `meetingtypes`
													WHERE IsDefault = 0
													ORDER BY SortBy");

							for ($i = 0; $i < mysql_num_rows($result); $i++)
							{
								$row = mysql_fetch_array($result);

								echo "<OPTION VALUE='".$row['TypeId']."'>(".$row['TypeSymbol'].") ".$row['Type']."</OPTION>";
							}
							?>
							</SELECT>
						</td>
					</tr>
					<tr>
						<td class="FormFieldsSearch" >
							<strong><label>Time:</label> </strong><br/>
							<SELECT NAME="selTimes[]" SIZE="8" MULTIPLE
							CLASS="SelectMult" ACCESSKEY="i" TABINDEX="5">
							<OPTION VALUE="0" SELECTED>-- any time --</OPTION>
							<?php
							$result = mysql_query("SELECT DISTINCT TIME_FORMAT(MeetTime,'%r') AS PrettyTime, MeetTime
											FROM meetings
											WHERE (blnHide = 0 AND blnConfirmed = 1) 
											ORDER BY MeetTime ASC");

							for ($i = 0; $i < mysql_num_rows($result); $i++)
							{
								$row = mysql_fetch_array($result);

								echo "<OPTION VALUE=\"'".$row['MeetTime']."'\">".date("h:i A",(strtotime($row['PrettyTime'])))."</OPTION>";
							}
							?>
							</SELECT>
						</td>
						<td>&nbsp;</td>
						<td class="FormFieldsSearch">
							<strong><label>Area:</label> </strong><br/>
							<SELECT NAME="selAreas[]" SIZE="8" MULTIPLE CLASS="SelectMult" ACCESSKEY="r" TABINDEX="6">
							<OPTION VALUE="0" SELECTED>-- any area --</OPTION>
							<?php
							$result = mysql_query("SELECT DISTINCT Area AS Area
							 FROM meetings WHERE (blnHide = 0 AND blnConfirmed = 1) ORDER BY Area ASC");

							for ($i = 0; $i < mysql_num_rows($result); $i++)
							{
								$row = mysql_fetch_array($result);
								echo "<OPTION VALUE='".$row['Area']."'>".$row['Area']."</OPTION>";
							}
							?>
							</SELECT>
						</td>
					</tr>
					<tr>
						<td colspan="3">
							<center>
							<input type="button" value="Search" name="B1" onclick="javascript:MeetingSearch(document.frmMeetFind);" />
							</center>
						</td>
					</tr>
				</tbody></table>				
				
				</TD>
				<TD VALIGN="top" CLASS="SmallNote">&nbsp;</TD>
			</TR>
		</TABLE>
		</TD>
	</TR>
</TABLE>
</FORM>



		</td>
	</tr>
	<tr>
		<td colspan="11" background="../images/body_footer.gif" height="29">

			<p class="copyright">Copyright © 2007 Indianapolis Intergroup - A.A.</p>		</td>
	</tr>
	<tr>
		<td>
			<img src="../images/spacer.gif" width="20" height="1" alt="" /></td>
		<td width="20">
			<img src="../images/spacer.gif" width="20" height="1" alt="" /></td>
		<td width="120">

			<img src="../images/spacer.gif" width="120" height="1" alt="" /></td>
		<td width="85">
			<img src="../images/spacer.gif" width="85" height="1" alt="" /></td>
		<td width="36">
			<img src="../images/spacer.gif" width="36" height="1" alt="" /></td>
		<td width="120">
			<img src="../images/spacer.gif" width="120" height="1" alt="" /></td>
		<td width="120">
			<img src="../images/spacer.gif" width="120" height="1" alt="" /></td>

		<td width="121">
			<img src="../images/spacer.gif" width="121" height="1" alt="" /></td>
		<td width="120">
			<img src="../images/spacer.gif" width="120" height="1" alt="" /></td>
		<td width="17">
			<img src="../images/spacer.gif" width="17" height="1" alt="" /></td>
		<td>
			<img src="../images/spacer.gif" width="23" height="1" alt="" /></td>
	</tr>

</table>
</body>
</html>