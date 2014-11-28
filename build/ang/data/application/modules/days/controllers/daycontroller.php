<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class DayController extends MX_Controller 
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('daymodel');
    }
    
    public function index( )
    {
    $this->load->view('dayview');
    }
    
}