<?php
require_once('../includes/DBFuncts.php');
require_once('../includes/Constants.php');

//create short variable names
//Get the meeting info for the Meeting ID passed in.

$intMeetId = $_POST['selMeetId'];

// connect to db

$conn = db_connect();

if (!$conn)
{
	return 'no conn';
}

$query = "UPDATE meetings
			SET blnHide = 1  
			WHERE MeetingId = ".$intMeetId;

$result = mysql_query($query);

//Send back to Admin Home Page.

header('Location: index.php');

?>