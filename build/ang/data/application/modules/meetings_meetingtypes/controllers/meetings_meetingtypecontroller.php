<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Meetings_MeetingtypeController extends MX_Controller 
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('meetings_meetingtypemodel');
    }
    
    public function index( )
    {
    $this->load->view('meetings_meetingtypeview');
    }
    
}