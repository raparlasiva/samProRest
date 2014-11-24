<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MeetingTypeController extends MX_Controller 
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('meetingtypemodel');
    }
    
    public function index()
    {
        $this->load->view('meetingtypeview');
    }
    
    public function getMeetingType()
    {
        $data['result'] = $this->meetingtypemodel->getMeetingType();
        $this->load->view('meetingtypeselect', $data);
    }
    
}