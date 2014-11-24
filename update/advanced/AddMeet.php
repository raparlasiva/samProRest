<?php
require_once('Session.php');
require_once('../includes/DBFuncts.php');

$conn = db_connect();
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
<form name="form1" method="post" action="AddMeetAction.php" onsubmit="return validate(this)">
  <p>&nbsp;<a href="/Admin/index.php">AA Admin</a></p>
  <table bgcolor="#7A8E85" width="90%"  border="0" align="center" cellpadding="1" cellspacing="1">
    <tr>
      <td bgcolor="#7A8E85" class="WhiteTblHeading">Add Meeting </td>
    </tr>
    <tr>
      <td bgcolor="#7A8E85"><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#FFFFFF">
        <tr valign="top">
          <td width="15%" align="right" nowrap class="BodyMeat"><strong>Meeting Name:&nbsp;&nbsp; </strong></td>
          <td colspan="5" class="FormFieldsSearch"><input name="txtMeetName" type="text" tabindex="1" size="75" maxlength="200"></td>
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
					
					if ( $i == 0 )
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8" SELECTED>8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>            
            <strong>:</strong>
            <select name="selMinute" tabindex="4">
              <option value="00" SELECTED>00</option>
              <option value="05">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
			</select>            
            <select name="selAMOrPM" id="selAMOrPM" tabindex="5">
              <option value="AM" selected>am</option>
              <option value="PM">pm</option>
            </select>
</span></td>
        </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Building Name:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <input name="txtBuildName" type="text" tabindex="5" size="55" maxlength="200">
          </span></td>
        </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Address:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <input name="txtAddress" type="text" tabindex="6" size="75" maxlength="200">
          </span></td>
        </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Area:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
<SELECT NAME="txtArea" TABINDEX="7" size="1">
	<OPTION VALUE="0" SELECTED></OPTION>
	<?php
		$result = mysql_query("SELECT DISTINCT Area AS Area FROM meetings WHERE (blnConfirmed = 1) ORDER BY Area ASC");
		for ($i = 0; $i < mysql_num_rows($result); $i++) {
			$row = mysql_fetch_array($result);
			echo "<OPTION VALUE='".$row['Area']."'>".$row['Area']."</OPTION>";
		}
	?>
</SELECT>
          </span>
          &nbsp;&nbsp; or enter a new area: &nbsp;&nbsp;
          <span class="FormFieldsSearch">
            <input name="txtAreaCustom" type="text" tabindex="8" size="30" maxlength="30" VALUE="">
          </span>
</td>
        </tr>
        <tr>
          <td align="right" nowrap class="BodyMeat"><strong>Zip:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <input name="txtZip" type="text" tabindex="8" size="10" maxlength="6">
          </span></td>
        </tr>
        <tr valign="top">
          <td align="right" nowrap class="BodyMeat"><strong>Bus Lines:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <input name="txtBusLines" type="text" tabindex="9" size="25">
          </span></td>
        </tr>
        <tr>
          <td align="right" valign="top" nowrap class="BodyMeat"><strong>Special Notes:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><span class="FormFieldsSearch">
            <textarea name="txtSpcNotes" cols="55" tabindex="9"></textarea>
          </span></td>
        </tr>
        <tr>
          <td align="right" valign="middle" nowrap class="BodyMeat"><strong>Open or Closed:&nbsp;&nbsp;</strong></td>
          <td colspan="5"><p class="FormFieldsSearch">
            <label>
            <input name="rdoOpenOrClosed" type="radio" value="1" checked>
  Closed (for alcoholics only)</label>
            <br>
            <label>
            <input type="radio" name="rdoOpenOrClosed" value="2">
  Open (anyone may attend)</label>
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
					
					if ( $i == 0 )
					{
						echo " SELECTED";
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
            <input name="chkViewable" type="checkbox" tabindex="10" value="TRUE" checked>
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
  </table><BR>
  <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:history.back();">&lt;&lt; Go Back</a><br>
  <br>
  </strong>
</form>
</body>
</html>