<?php
require_once('../includes/DBFuncts.php');
require_once('../includes/Constants.php');

//create short variable names
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
	return 'no mysql connection';
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

$query = "INSERT INTO meetings
				(MeetingName, DayId, MeetTime, BuildingName, Address, Area, Zip, BusLines, blnHide, SpecialNotes) 
			VALUES
				('".$strMeetName."', ".$intDayId.", '".$str24HrTime."', '".$strBuildName."', 
					 '".$strAddress."', '".$strArea."', ".$intZip.",'".$strBusLines."',".$blnHide.",'".$strSpcNotes."')";


$result = mysql_query($query);

if (!$result)
{
	return 'no results';
}
else
{
	$intMeetingId = mysql_insert_id();
	
	//First, insert the Closed or Open Meeting Type, ask this seperately because
	//any meeting must be either open or closed.
	
	$query = "INSERT INTO meetings_meetingtypes
					(MeetingId, TypeId) 
				VALUES
					(".$intMeetingId.", ".$intOpenOrClosed.")";
	
	$result = mysql_query($query);
	
	//Next, Looped de doop for each remaining meeting type selected.
	
    foreach ($_POST['selMeetTypes'] as $intMeetType)
    {
		$query = "INSERT INTO meetings_meetingtypes
						(MeetingId, TypeId) 
					VALUES
						(".$intMeetingId.", ".$intMeetType.")";
		
		$result = mysql_query($query);
    }
}

//Send back to Admin Home Page.

header('Location: index.php?MID='.$intMeetingId);


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