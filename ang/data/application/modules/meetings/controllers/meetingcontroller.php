<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MeetingController extends MX_Controller 
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('meetingmodel');
    }
    
    public function index( )
    {
        ////$data['result'] = $this->meetings_model->getall();
        //$this->load->view('test_view', $data);
        
        $this->load->view('test_view');
    }
    
    public function getMeetingTable()
    {
        echo $this->meetingmodel->getAllMeetingData();
    }        
    
    public function getHours()
    {
        echo $this->meetingmodel->getHours();
    }        
    
    public function getAll( )
    {

        //$data['result'] = $this->meetingmodel->getAllMeetingData();  
        $data['result2'] = $this->meetingmodel->getHours();
        $data['result3'] = $this->meetingmodel->getMen();
        $data['result4'] = $this->meetingmodel->getWomen();
        $data['result5'] = $this->meetingmodel->getGlbt();
        $data['result6'] = $this->meetingmodel->getSpanish();
        $data['result7'] = Modules::run('meetingtypes/meetingtypecontroller/getMeetingType');
         
        $this->load->view('meetings_view', $data);
    }
    
    public function getMeeting()
    {
        $meeting = $this->input->post('i'); // finds i = meetingID
        echo json_encode($this->meetingmodel->getMeeting($meeting));


    }
    
}
