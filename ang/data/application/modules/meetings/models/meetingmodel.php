<?php //if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MeetingModel extends CI_Model 
{
    public function getAllMeetingData()
    {
        $this->datatables
                 ->select('meetings.MeetingId,meetings.MeetingName,days.Day,
                           DATE_FORMAT(meetings.MeetTime,\'%l:%i %p\'),
                           meetings.BuildingName,meetings.Address,meetings.Area,meetings.Zip,
                           GROUP_CONCAT(DISTINCT meetingtypes.TypeSymbol SEPARATOR ",") AS Symbol, 
                           meetings.BusLines,meetings.blnHide,
                           meetings.latitude,meetings.Longitude,days.DayId,meetings.MeetTime,
                           GROUP_CONCAT(DISTINCT meetingtypes.Type SEPARATOR ",") AS TName,',false)
                 ->from('meetings')
                 ->where('meetings.blnHide', '0')
                 ->join('days', 'meetings.DayId = days.DayId', 'LEFT OUTER')
                 ->join('meetings_meetingtypes', 'meetings.MeetingId = meetings_meetingtypes.MeetingID', 'LEFT OUTER')
                 ->join('meetingtypes', 'meetings_meetingtypes.TypeID = meetingtypes.TypeId', 'LEFT OUTER')
                 ->group_by('meetings.MeetingID');


        return $this->datatables->generate();
    }
    public function getAllMeetingDataAng()
    {
        $this->db->
                select('meetings.MeetingId,meetings.MeetingName,days.Day,
                           DATE_FORMAT(meetings.MeetTime,\'%l:%i %p\'),
                           meetings.BuildingName,meetings.Address,meetings.Area,meetings.Zip,
                           GROUP_CONCAT(DISTINCT meetingtypes.TypeSymbol SEPARATOR ",") AS Symbol, 
                           meetings.BusLines,meetings.blnHide,
                           meetings.latitude,meetings.Longitude,days.DayId,meetings.MeetTime,
                           GROUP_CONCAT(DISTINCT meetingtypes.Type SEPARATOR ",") AS TName,',false)
                 ->from('meetings')
                 ->where('meetings.blnHide', '0')
                 ->join('days', 'meetings.DayId = days.DayId', 'LEFT OUTER')
                 ->join('meetings_meetingtypes', 'meetings.MeetingId = meetings_meetingtypes.MeetingID', 'LEFT OUTER')
                 ->join('meetingtypes', 'meetings_meetingtypes.TypeID = meetingtypes.TypeId', 'LEFT OUTER')
                 ->group_by('meetings.MeetingID');

        $query = $this->db->get();
        
        return $query->result_array();
    }        

    public function getHours()
    { 
            $sql = "SELECT meetings.MeetingId, 
                    days.`Day`, 
                    meetings.MeetTime, 
                    meetings.MeetingName, 
                    meetings.BuildingName, 
                    meetings.Address, 
                    meetings.Area, 
                    meetings.Zip, 
                    meetings.BusLines, 
                    GROUP_CONCAT(DISTINCT meetingtypes.TypeSymbol) AS Symbol, 
                    meetings.blnHide, 
                    meetings.blnConfirmed
                    FROM meetings INNER JOIN days ON meetings.DayId = days.DayId
                             INNER JOIN meetings_meetingtypes ON meetings.MeetingId = meetings_meetingtypes.MeetingID
                             INNER JOIN meetingtypes ON meetings_meetingtypes.TypeID = meetingtypes.TypeId
                    WHERE (blnHide = 0 AND blnConfirmed = 1)
                            AND (MeetTime BETWEEN TIME_FORMAT(NOW( ) + INTERVAL 2 HOUR,'%H:%i:%s')
                            AND TIME_FORMAT(NOW( ) + INTERVAL 5 HOUR,'%H:%i:%s'))
                            AND (DAYNAME(CURDATE( )) = days.Day)
                    GROUP BY meetings.MeetingId
                    ORDER BY days.DayId ASC, meetings.MeetTime ASC, meetings.MeetingName ASC"; 

            $query =  $this->db->query($sql);



            return $query->result();




    } 

    public function getMen()
    { 
            $sql = "SELECT meetings.MeetingId, 
                    days.`Day`, 
                    meetings.MeetTime, 
                    meetings.MeetingName, 
                    meetings.BuildingName, 
                    meetings.Address, 
                    meetings.Area, 
                    meetings.Zip, 
                    meetings.BusLines, 
                    GROUP_CONCAT(DISTINCT meetingtypes.TypeSymbol) AS Symbol, 
                    meetings.blnHide, 
                    meetings.blnConfirmed
                    FROM meetings INNER JOIN days ON meetings.DayId = days.DayId
                             INNER JOIN meetings_meetingtypes ON meetings.MeetingId = meetings_meetingtypes.MeetingID
                             INNER JOIN meetingtypes ON meetings_meetingtypes.TypeID = meetingtypes.TypeId
                    WHERE (blnHide = 0 AND blnConfirmed = 1)
                            AND meetings_meetingtypes.TypeID = 9
                    GROUP BY meetings.MeetingId
                    ORDER BY days.DayId ASC, meetings.MeetTime ASC, meetings.MeetingName ASC"; 

            $query =  $this->db->query($sql);



            return $query->result();




    } 

    public function getWomen()
    { 
            $sql = "SELECT meetings.MeetingId, 
                    days.`Day`, 
                    meetings.MeetTime, 
                    meetings.MeetingName, 
                    meetings.BuildingName, 
                    meetings.Address, 
                    meetings.Area, 
                    meetings.Zip, 
                    meetings.BusLines, 
                    GROUP_CONCAT(DISTINCT meetingtypes.TypeSymbol) AS Symbol, 
                    meetings.blnHide, 
                    meetings.blnConfirmed
                    FROM meetings INNER JOIN days ON meetings.DayId = days.DayId
                             INNER JOIN meetings_meetingtypes ON meetings.MeetingId = meetings_meetingtypes.MeetingID
                             INNER JOIN meetingtypes ON meetings_meetingtypes.TypeID = meetingtypes.TypeId
                    WHERE (blnHide = 0 AND blnConfirmed = 1)
                            AND meetings_meetingtypes.TypeID = 10
                    GROUP BY meetings.MeetingId
                    ORDER BY days.DayId ASC, meetings.MeetTime ASC, meetings.MeetingName ASC"; 

            $query =  $this->db->query($sql);



            return $query->result();




    } 

    public function getGlbt()
    { 
            $sql = "SELECT meetings.MeetingId, 
                    days.`Day`, 
                    meetings.MeetTime, 
                    meetings.MeetingName, 
                    meetings.BuildingName, 
                    meetings.Address, 
                    meetings.Area, 
                    meetings.Zip, 
                    meetings.BusLines, 
                    GROUP_CONCAT(DISTINCT meetingtypes.TypeSymbol) AS Symbol, 
                    meetings.blnHide, 
                    meetings.blnConfirmed
                    FROM meetings INNER JOIN days ON meetings.DayId = days.DayId
                             INNER JOIN meetings_meetingtypes ON meetings.MeetingId = meetings_meetingtypes.MeetingID
                             INNER JOIN meetingtypes ON meetings_meetingtypes.TypeID = meetingtypes.TypeId
                    WHERE (blnHide = 0 AND blnConfirmed = 1)
                            AND meetings_meetingtypes.TypeID = 6
                    GROUP BY meetings.MeetingId
                    ORDER BY days.DayId ASC, meetings.MeetTime ASC, meetings.MeetingName ASC"; 

            $query =  $this->db->query($sql);



            return $query->result();




    } 

    public function getSpanish()
    { 
            $sql = "SELECT meetings.MeetingId, 
                    days.`Day`, 
                    meetings.MeetTime, 
                    meetings.MeetingName, 
                    meetings.BuildingName, 
                    meetings.Address, 
                    meetings.Area, 
                    meetings.Zip, 
                    meetings.BusLines, 
                    GROUP_CONCAT(DISTINCT meetingtypes.TypeSymbol) AS Symbol, 
                    meetings.blnHide, 
                    meetings.blnConfirmed
                    FROM meetings INNER JOIN days ON meetings.DayId = days.DayId
                             INNER JOIN meetings_meetingtypes ON meetings.MeetingId = meetings_meetingtypes.MeetingID
                             INNER JOIN meetingtypes ON meetings_meetingtypes.TypeID = meetingtypes.TypeId
                    WHERE (blnHide = 0 AND blnConfirmed = 1)
                            AND meetings_meetingtypes.TypeID = 15
                    GROUP BY meetings.MeetingId
                    ORDER BY days.DayId ASC, meetings.MeetTime ASC, meetings.MeetingName ASC"; 

            $query =  $this->db->query($sql);



            return $query->result();




    } 

    public function getMeeting($id)
    {

            $this->db
                                 ->select('meetings.MeetingId,meetings.MeetingName,days.Day,
                                           DATE_FORMAT(meetings.MeetTime,\'%l:%i %p\') AS Time,
                                           meetings.BuildingName,meetings.Address,meetings.Area,meetings.Zip,
                                           GROUP_CONCAT(DISTINCT meetingtypes.TypeSymbol SEPARATOR ",") AS Symbol, 
                                           meetings.BusLines,meetings.blnHide,
                                           meetings.latitude,meetings.Longitude',false)
                                 ->from('meetings')
                                 ->where('meetings.blnHide', '0')
                                 ->where('meetings.MeetingId', $id )
                                 ->join('days', 'meetings.DayId = days.DayId', 'LEFT OUTER')
                                 ->join('meetings_meetingtypes', 'meetings.MeetingId = meetings_meetingtypes.MeetingID', 'LEFT OUTER')
                                 ->join('meetingtypes', 'meetings_meetingtypes.TypeID = meetingtypes.TypeId', 'LEFT OUTER')
                                 ->group_by('meetings.MeetingID');


            $query = $this->db->get();
            $result=$query->result_array();
            return $result;

    } 

}



