<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class RenameController extends MX_Controller 
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('renamemodel');
    }
    
    public function index( )
    {
    $this->load->view('renameview');
    }
    
}