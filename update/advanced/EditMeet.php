<?php
require_once('Session.php');
require_once('../includes/DBFuncts.php');

$conn = db_connect();

//Get the meeting info for the Meeting ID passed in.


$intMeetId = $_POST['selMeetId'];


$result = mysql_query("SELECT MeetingName, DayId, 
								LEFT(TIME_FORMAT(MeetTime,'%r'),2) AS MyHour, 
								TIME_FORMAT(MeetTime,'%i') AS MyMinutes, 
								RIGHT(TIME_FORMAT(MeetTime,'%r'),2) AS MyAmOrPM, 
								BuildingName, Address, Area, Zip, BusLines, blnHide, SpecialNotes
						FROM meetings
						WHERE MeetingId = ".$intMeetId);
//Create Short Names  //12:00:00 AM 

$strMeetName = stripslashes(mysql_result($result, 0, 'MeetingName'));

$intDayId = mysql_result($result, 0, 'DayId');

$intHour = mysql_result($result, 0, 'MyHour');
$intMinute = mysql_result($result, 0, 'MyMinutes');
$strAMorPM = mysql_result($result, 0, 'MyAmOrPM');

$strBuildName = stripslashes(mysql_result($result, 0, 'BuildingName'));
$strAddress = stripslashes(mysql_result($result, 0, 'Address'));
$strArea = stripslashes(mysql_result($result, 0, 'Area'));
$intZip = mysql_result($result, 0, 'Zip');
$blnHidden = mysql_result($result, 0, 'blnHide');
$strSpcNotes = stripslashes(mysql_result($result, 0, 'SpecialNotes'));
$strBusLines = stripslashes(mysql_result($result, 0, 'BusLines'));

//Get previous meeting types

$aThisMeetTypes = getThisMeetTypes($intMeetId);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>AA Admin</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="LouAAStyles.css" rel="stylesheet" type="text/css">
<SCRIPT SRC="FormValidationFunctions.js" TYPE="text/javascript"></SCRIPT>
<script language="JavaScript">
	function validate(frm)
	{
		if (!Has_Value(frm.txtMeetName,'Please enter the Meeting Name.'))
		{
			return false;
		}
		if (!Has_Value(frm.txtAddress,'Please enter the Address.'))
		{
			return false;
		}
		if (!Is_Valid_Zip(frm.txtZip,'Zip code must be a five digit number or 10 digit number seperated by a space or a -'))
		{
			return false;
		}	
		return true;
	}
</SCRIPT>
</head>

<BODY ONLOAD="document.form1.txtMeetName.focus();">
<form name="form1" method="post" action="EditMeetAction.php" onsubmit="return validate(this)">
	<input TYPE="Hidden" NAME="hdnMeetingId" VALUE="<?php echo $intMeetId; ?>">
  <BR><BR>
  <table bgcolor="#7A8E85" width="90%"  border="0" align="center" cellpadding="1" cellspacing="1">
    <tr>
      <td bgcolor="#7A8E85" class="WhiteTblHeading">Edit Meeting </td>
    </tr>
    <tr>
      <td bgcolor="#7A8E85"><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#FFFFFF">
        <tr valign="top">
          <td width="15%" align="right" nowrap class="FormFieldsSearch"><p class="BodyMeat"><strong>Meeting Name:&nbsp;&nbsp; </strong></p></td>
          <td colspan="5" class="FormFieldsSearch">
		  	<input name="txtMeetName" type="text" tabindex="1" size="75" maxlength="200" VALUE="<?php echo $strMeetName; ?>"></td>
        </tr>
        <tr>
          <td align="right" valign="top" nowrap class="BodyMeat"><strong>Day:&nbsp;&nbsp; </strong></td>
          <td width="16%" valign="top"><select name="selDayId" size="7" class="SelectMult" accesskey="d" tabindex="2">
			  <?php
				$result = mysql_query("SELECT DayId, Day
										FROM `days`
										Order By DayId");
				
				for ($i = 0; $i < mysql_num_rows($result); $i++)
				{
					$row = mysql_fetch_array($result);
					
					echo "<OPTION VALUE='".$row['DayId']."'";
					
					if ( (int)$intDayId == (int)$row['DayId'] )
					{
						echo " SELECTED";
					}
					
					echo ">".$row['Day']."</OPTION>";
				}
			?>
          </select></td>
          <td width="5%" align="right" valign="top"><span class="BodyMeat"><strong>Time:&nbsp;&nbsp;</strong></span></td>
          <td colspan="3" valign="top"><span class="FormFieldsSearch">
            <select name="selHour" tabindex="3">
				<?php
				for ($i = 1; $i <= 12; $i++)
				{
					echo "<OPTION VALUE='".$i."'";
					
					if ( (int)$intHour == $i )
					{
						echo " SELECTED";
					}
					
					echo ">".$i."</OPTION>";
				}
				?>
            </select>            
            <strong>:</strong>
            <select name="selMinute" tabindex="4">
				<?php
				for ($i = 0; $i <= 60; $i = $i + 5)
				{
					echo "<OPTION VALUE='".$i."'";
					
					if ( (int)$intMinute == $i )
					{
						echo " SELECTED";
					}
					
					switch ($i)
					{
					    case 0:
							      echo ">00</OPTION>";
							      break;
					    case 5:
						          echo ">05</OPTION>";
							      break;
					    default:
							      echo ">".$i."</OPTION>";
					}
				}
				?>
			</select>            
            <select name="selAMOrPM" tabindex="5">
              <option value="AM"<?php if ($strAMorPM == "AM") echo " SELECTED";?>>am</option>
              <option value="PM"<?php if ($strAMorPM == "PM") echo " SELECTED";?>>pm</option>
            </select>
</span></td>
        </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Building Name:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <input name="txtBuildName" type="text" tabindex="5" size="55" maxlength="200" VALUE="<?php echo $strBuildName; ?>">
          </span></td>
        </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Address:&nbsp;&nbsp;</strong></td>
          <td colspan="5">
          <span class="FormFieldsSearch">
            <input name="txtAddress" type="text" tabindex="6" size="75" maxlength="200" VALUE="<?php echo $strAddress;?>">
          </span></td>
        </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Area:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
<SELECT NAME="txtArea" TABINDEX="7" size="1">
<OPTION VALUE="0"></OPTION>
<?php
    $result = mysql_query("SELECT DISTINCT Area AS Area FROM meetings WHERE (blnConfirmed = 1) ORDER BY Area ASC");
    for ($i = 0; $i < mysql_num_rows($result); $i++) {
        $row = mysql_fetch_array($result);
        if ($strArea==$row['Area']) {
            echo "<OPTION VALUE='".$row['Area']."' SELECTED>".$row['Area']."</OPTION>";
        } else {
            echo "<OPTION VALUE='".$row['Area']."'>".$row['Area']."</OPTION>";
        }
    }
?>
</SELECT>
          </span>
          &nbsp;&nbsp; or enter a new area: &nbsp;&nbsp;
          <span class="FormFieldsSearch">
            <input name="txtAreaCustom" type="text" tabindex="8" size="30" maxlength="30" VALUE=""/>
          </span>
</td>
        </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Zip:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <input name="txtZip" type="text" tabindex="8" size="10" maxlength="6" VALUE="<?php echo $intZip; ?>">
          </span></td>
        </tr>
        <tr valign="top">
          <td align="right" nowrap class="BodyMeat"><strong>Bus Lines:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <input name="txtBusLines" type="text" tabindex="9" size="25" VALUE="<?php echo $strBusLines; ?>">
          </span></td>
        </tr>
        <tr>
          <td align="right" valign="top" nowrap class="BodyMeat"><strong>Special Notes:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <textarea name="txtSpcNotes" cols="55" tabindex="10"><?php echo $strSpcNotes; ?></textarea>
          </span></td>
        </tr>
        <tr>
          <td align="right" valign="middle" nowrap class="BodyMeat"><strong>Open or Closed:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><p class="FormFieldsSearch">
            <label>
            <input name="rdoOpenOrClosed" type="radio" value="1"<?php
				foreach($aThisMeetTypes as $intThisTypeId)
				{
					if ( (int)$intThisTypeId == 1 )
					{
						echo " CHECKED";
					}
				}
				 ?>> Closed (for alcoholics only)</label>
            <br>
            <label>
            <input type="radio" name="rdoOpenOrClosed" value="2"<?php
				foreach($aThisMeetTypes as $intThisTypeId)
				{
					if ( (int)$intThisTypeId == 2 )
					{
						echo " CHECKED";
					}
				}
				 ?>> Open (anyone may attend)</label>
            <br>
          </p></td>
        </tr>
        <tr>
          <td align="right" valign="middle" nowrap class="BodyMeat"><strong>Meeting Type(s):&nbsp;&nbsp;</strong></td>
          <td colspan="5">
            
            <?php
		$result = mysql_query("SELECT TypeId, TypeSymbol, Type
					FROM `meetingtypes`
					WHERE IsDefault = 0
					ORDER BY SortBy");
		$numrows = mysql_num_rows($result);
            ?>
            <select name="selMeetTypes[]" size="<?php echo $numrows; ?>" multiple class="SelectMult" accesskey="t" tabindex="11">
				<?php

				for ($i = 0; $i < mysql_num_rows($result); $i++)
				{
					$row = mysql_fetch_array($result);
					
					echo "<OPTION VALUE='".$row['TypeId']."'";
					
					foreach($aThisMeetTypes as $intThisTypeId)
					{
						if ( $intThisTypeId == (int)$row['TypeId'] )
						{
							echo " SELECTED";
						}
					}
					
					echo ">(".$row['TypeSymbol'].") ".$row['Type']."</OPTION>";
				}
			?>
         </select>
		</td>
          </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Viewable on Web:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <input name="chkViewable" type="checkbox" tabindex="10" value="TRUE"<?php if ((int)$blnHidden == 0) echo " CHECKED";?>>
          </span></td>
        </tr>
        <tr>
          <td nowrap>&nbsp;</td>
          <td colspan="5"><input type="submit" name="Submit" value="Submit" tabindex="12"></td>
        </tr>
        <tr>
          <td colspan="6">&nbsp;</td>
        </tr>
      </table></td>
    </tr>
  </table>
  <BR>
  <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:history.back();">&lt;&lt; Go Back</a><br>
  <br>
  </strong>
</form>
</body>
</html>
<?php
function getThisMeetTypes($intMeetId)
{
	$rstMeetTypes = mysql_query("SELECT TypeId
									FROM meetings_meetingtypes
							   		WHERE MeetingId = ".$intMeetId);
	
	for ($j = 0; $j < mysql_num_rows($rstMeetTypes); $j++)
	{
		$rowTyps = mysql_fetch_array($rstMeetTypes);
		
		$aMeetTyps[] = (int)$rowTyps['TypeId'];
	}
	
	return $aMeetTyps;
}
?>