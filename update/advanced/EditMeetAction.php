<?php
require_once('../includes/DBFuncts.php');
require_once('../includes/Constants.php');

//create short variable names
//Get the meeting info for the Meeting ID passed in.

$intMeetId = $_POST["hdnMeetingId"];
$strMeetName = stripslashes($_POST["txtMeetName"]);
$intDayId = $_POST["selDayId"];
$intHour = $_POST["selHour"];
$intMinute = $_POST["selMinute"];
$strAMorPM = $_POST["selAMOrPM"];
$strBuildName = stripslashes($_POST["txtBuildName"]);
$strAddress = stripslashes($_POST["txtAddress"]);
$strArea = $_POST["txtArea"];
$strAreaCustom = stripslashes($_POST["txtAreaCustom"]);
$strBusLines = $_POST["txtBusLines"];
$intZip = $_POST["txtZip"];
$strSpcNotes = $_POST["txtSpcNotes"];
$intOpenOrClosed = $_POST["rdoOpenOrClosed"];
$intMeetTypes = $_POST["selMeetTypes"];

if ( !empty($_POST["chkViewable"])  )
{
	//Is Viewable CheckBox WAS checked, so Don't hide this meeting.
	$blnHide = 0;
}
else
{
	//Is Viewable CheckBox WAS NOT checked, so we need to hide this meeting.
	$blnHide = 1;
}

$str24HrTime = Convert12hrTo24hr($strAMorPM, $intHour, $intMinute);

// connect to db
$conn = db_connect();

if (!$conn)
{
	return 'no conn';
}

$strMeetName = addslashes(TRIM($strMeetName));
$strAddress = addslashes(TRIM($strAddress));
$strBusLines = addslashes(TRIM($strBusLines));

if ( !empty($strBuildName)  )
{
	$strBuildName = addslashes(TRIM($strBuildName));
}

if ( !empty($strAreaCustom)  ) {
	$strArea = addslashes(TRIM($strAreaCustom));
} else if ( !empty($strArea) ) {
	$strArea = addslashes(TRIM($strArea));
}

if ( !empty($strSpcNotes)  )
{
	$strSpcNotes = addslashes(TRIM($strSpcNotes));
}

if ( !empty($intZip)  )
{
	$intZip = (int)(TRIM($intZip));
}
else
{
	$intZip = 0;
}

$query = "UPDATE meetings
			SET MeetingName = '".$strMeetName."', 
				DayId = ".$intDayId.", 
				MeetTime = '".$str24HrTime."', 
				BuildingName = '".$strBuildName."', 
				Address = '".$strAddress."', 
				Area = '".$strArea."', 
				Zip = ".$intZip.", 
				BusLines = '".$strBusLines."',
				blnHide = ".$blnHide.", 
				blnConfirmed = 1, 
				SpecialNotes = '".$strSpcNotes."'
			WHERE MeetingId = ".$intMeetId;

//echo $query;
$result = mysql_query($query);

//First, clean out all the old meeting types, then insert the new.

$query = "DELETE FROM meetings_meetingtypes
		  WHERE MeetingId = ".$intMeetId;

mysql_query($query);

//Next, insert the Closed or Open Meeting Type, ask this separately because
//any meeting must be either open or closed.

$query = "INSERT INTO meetings_meetingtypes
				(MeetingId, TypeId) 
			VALUES
				(".$intMeetId.", ".$intOpenOrClosed.")";

$result = mysql_query($query);

//Finally, Looped de doop for each remaining meeting type selected.

foreach ($_POST['selMeetTypes'] as $intMeetType)
{
$query = "INSERT INTO meetings_meetingtypes
				(MeetingId, TypeId)
			VALUES
				(".$intMeetId.", ".$intMeetType.")";

$result = mysql_query($query);
}


//Send back to Admin Home Page.

header('Location: index.php?MID='.$intMeetId);


//All functions below:

function Convert12hrTo24hr($strAMOrPM, $intHour, $intMinute)
{
	/*
	To convert from 12-hour time to 24-hour time:
	
	  A. If the P.M. hour is from 1 through 11, add 12.
	
	  B. If the P.M. hour is 12, leave it as is.
	
	  C. If the A.M. hour is 12, make it 0.
	
	  D. Otherwise, leave the hour unchanged.
	
	  Then drop the A.M. or P.M., of course.
	*/
	if ($strAMOrPM == "PM")
	{
		if ($intHour != 12)
		{
			$intHour = (int)$intHour + 12;
		}
	}
	else
	{
		if ($intHour == 12)
		{
			$intHour = 0;
		}
	}
	
	return $intHour.":".$intMinute;
}
?>