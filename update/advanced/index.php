<?php
require_once('Session.php');
require_once('../includes/DBFuncts.php');

//Grab Meeting id from query string if it exists. It exists after Adding a meeting.

if ( !isset($HTTP_GET_VARS['MID']) || strlen(trim($HTTP_GET_VARS['MID'])) == 0 )
{
	$intQSMeetId = -13;  //bogus id.
}
else
{
	$intQSMeetId = trim($HTTP_GET_VARS['MID']);
}

$conn = db_connect();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>AA Admin</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="LouAAStyles.css" rel="stylesheet" type="text/css">
<SCRIPT SRC="stuff.js" TYPE="text/javascript"></SCRIPT>
</head>
<body>
  <br>
  <table width="50%"  border="0" align="center" cellpadding="1" cellspacing="1">
    <tr>
      <td bgcolor="#7A8E85"><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#FFFFFF">
          <tr>
            <td colspan="3">&nbsp;</td>
          </tr>
		  <FORM name="form1" method="post" action="EditMeet.php">
          <tr valign="bottom">
            <td colspan="3" class="FormFieldsSearch"><strong>Add Meeting:&nbsp;&nbsp;
              <input type="button" name="Submit2" value="Add" onClick="javascript:location.href='AddMeet.php';">
            </strong></td>
          </tr>
          <tr>
            <td colspan="3">&nbsp;</td>
          </tr>
          <tr>
            <td width="22%" valign="top" nowrap class="FormFieldsSearch"><strong>Viewable Meeting(s): 
              
            </strong></td>
            <td width="28%" valign="top" class="FormFieldsSearch"><strong>
              <SELECT NAME="selMeetId" SIZE="15" class="SelectMult">
			  	<?php
				
					$result = mysql_query("SELECT MeetingId, MeetingName, days.Day, 
													LEFT(TIME_FORMAT(MeetTime,'%r'),2) AS MyHour, 
													TIME_FORMAT(MeetTime,'%i') AS MyMinutes, 
													RIGHT(TIME_FORMAT(MeetTime,'%r'),2) AS MyAmOrPM, 
													blnHide
											FROM meetings inner join days
											                  ON meetings.DayId = days.DayId
											WHERE blnHide = 0 AND blnConfirmed = 1
											Order By days.DayId, MeetTime, MeetingName");
					
					for ($i = 0; $i < mysql_num_rows($result); $i++)
					{
						$row = mysql_fetch_array($result);
						
						echo "<OPTION VALUE='".$row['MeetingId']."'";
						
						if ( $i == 0 || $intQSMeetId == $row['MeetingId'])
						{
							echo " SELECTED";
						}
						
						echo ">".$row['Day']." ".$row['MyHour'].":".$row['MyMinutes']." ".$row['MyAmOrPM']." - \"".stripslashes($row['MeetingName'])."\"</OPTION>";
					}
				?>
              </SELECT>
			  <?php
			  echo "<BR><B>Total Viewable Meetings = ".mysql_num_rows($result)."</B><BR>";
			  ?>
            </strong></td>
            <td width="50%" valign="top" class="FormFieldsSearch"><input type="submit" name="Submit" value="Edit">
			<BR><BR><input type="button" value="Hide" onClick="javascript:HideMeet(this.form)"></td>
          </tr>
		  </FORM>
		  <tr>
            <td colspan="3">&nbsp;</td>
          </tr>
		  <FORM name="form2" method="post" action="EditMeet.php">
		  <tr>
            <td width="22%" valign="top" nowrap class="FormFieldsSearch"><strong>Hidden Meeting(s): 
              
            </strong></td>
            <td width="28%" valign="top" class="FormFieldsSearch"><strong>
              <SELECT NAME="selMeetId" SIZE="5" class="SelectMult">
			  	<?php
				
					$result = mysql_query("SELECT MeetingId, MeetingName, days.Day, 
													LEFT(TIME_FORMAT(MeetTime,'%r'),2) AS MyHour, 
													TIME_FORMAT(MeetTime,'%i') AS MyMinutes, 
													RIGHT(TIME_FORMAT(MeetTime,'%r'),2) AS MyAmOrPM 
											FROM meetings inner join days
											                  ON meetings.DayId = days.DayId
											WHERE blnHide = 1 AND blnConfirmed = 1
											Order By days.DayId, MeetTime, MeetingName");
					
					for ($i = 0; $i < mysql_num_rows($result); $i++)
					{
						$row = mysql_fetch_array($result);
						
						echo "<OPTION VALUE='".$row['MeetingId']."'";
						
						if ( $i == 0 )
						{
							echo " SELECTED";
						}
						
						echo ">".$row['Day']." ".$row['MyHour'].":".$row['MyMinutes']." ".$row['MyAmOrPM']." - \"".$row['MeetingName']."\"</OPTION>";
					}
				?>
              </SELECT>
            </strong></td>
            <td width="50%" valign="top" class="FormFieldsSearch"><input type="submit" name="Submit" value="Edit">
			<BR><BR><input type="button" value="Delete" onClick="javascript:DeleteMeet(this.form)"></td>
          </tr>
		  </FORM>
		  <tr>
            <td colspan="3">&nbsp;</td>
          </tr>
      </table></td>
    </tr>
  <TR>
      <td colspan="3"><a href="Logout.php">Click here to log out.</a></td>
    </tr>

  </table>

</body>
</html>