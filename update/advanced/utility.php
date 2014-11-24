<?php

/* 
This php file processes the initial import of the meeting data and adds types 
and bus routes to each meeting based on what's in he special notes field.
*/
exit;


require_once('../includes/Constants.php');

function db_connect() {
	$result = mysql_pconnect('localhost', 'indyaaor_aa', '44aa44');
	if (!$result) { return false; }
	if (!mysql_select_db('indyaaor_AA')) { return false; }
	return $result;
}

function parseBusFromNotes($notes) {
	$retval = Array();
	$tokens = explode(";",$notes);
	foreach($tokens as $token) {
		$pos = strpos($token,"BUS");
		if ($pos === false) {
    		continue;
		} else {
			return trim(str_replace("BUS ","",$token));
		}
	}
	return "";
}

function parseTypesFromNotes($notes) {

	//1 Closed C
	//3 Discussion D 
	//4 Speaker S 
	//2 Open O
	//6 Gay & Lesbian ***
	//7 Alateen Same Location ATN 
	//8 No Smoking NS
	//9 Men's M
	//10 Women's W
	//11 Wheelchair Accessible WCA 
	//12 Invite Required I
	//15 Spanish language SP 
	//13 Alanon Same Location AFG 
	//14 Literature LIT 

	$retval = Array();
	$tokens = explode(";",$notes);
	foreach ($tokens as $token) {
		$token = trim($token);
		switch ($token) {
			case "AFG":
				$retval[] = 13;
				break;
			case "AFG & ATN":
				$retval[] = 13;
				$retval[] = 7;
				break;
			case "C-D":
				$retval[] = 1;
				$retval[] = 3;
				break;
			case "C-D lit":
				$retval[] = 1;
				$retval[] = 3;
				$retval[] = 14;
				break;
			case "C-S":
				$retval[] = 1;
				$retval[] = 4;				
				break;
			case "GENDER: GL":
				$retval[] = 6;
				break;
			case "GENDER: M":
				$retval[] = 9;				
				break;
			case "GENDER: W":
				$retval[] = 10;
				break;
			case "NS":
				$retval[] = 8;
				break;
			case "O-D":
				$retval[] = 2;
				$retval[] = 3;
				break;
			case "O-D lit":
				$retval[] = 2;
				$retval[] = 3;
				$retval[] = 14;
				break;
			case "O-D/S":
				$retval[] = 2;
				$retval[] = 3;
				$retval[] = 4;
				break;
			case "O-S":
				$retval[] = 2;
				$retval[] = 4;
				break;
			case "Sp":
				$retval[] = 15;
				break;
			case "WCA":
				$retval[] = 11;
				break;
			case "0-S Lit":
				$retval[] = 2;
				$retval[] = 4;
				$retval[] = 14;
				break;
		}
	}
	return $retval;	
}

function addMeetingTypes($meetingId,$meetingTypes) {
	if ($meetingId>0) {
		foreach ($meetingTypes as $meetingType) {
			$query = "INSERT INTO meetings_meetingtypes (MeetingId, TypeId) VALUES (".$meetingId.", ".$meetingType.")";
			//echo $query."\n";
			mysql_query($query);
		}
	}
}

function clearMeetingTypes($meetingId) {
	if ($meetingId > 0) {
		$query = "DELETE FROM meetings_meetingtypes WHERE MeetingId = ".$meetingId;
		//echo $query."\n";
		mysql_query($query);	
	}
}


$conn = db_connect();
$result = mysql_query("SELECT MeetingId, SpecialNotes FROM meetings");
$numrows = mysql_num_rows($result);

for ($n=0; $n< $numrows; $n++) {
	$notes = stripslashes(mysql_result($result, $n, 'SpecialNotes'));
	$meetingId = stripslashes(mysql_result($result, $n, 'MeetingId'));
	$meetingTypes = parseTypesFromNotes($notes);
	clearMeetingTypes($meetingId);
	addMeetingTypes($meetingId,$meetingTypes);
	$bus = parseBusFromNotes($notes);
	$query = "UPDATE meetings SET BusLines = '".$bus."', blnHide = 0, blnConfirmed = 1 WHERE MeetingId = ".$meetingId;
	//echo $query."\n";
	$res = mysql_query($query);
}

?>