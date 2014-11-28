<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    class MeetingtypeModel extends CI_Model 
    {
        public function getMeetingType()
        { 
                //Active Record Method Chaining
                $selectArray = array('TypeSymbol', 'Type', 'Sortby');
                
                $this->db->
                            select($selectArray)->
                            from('meetingtypes')->
                            order_by('SortBy', 'Asc');
                
                $query = $this->db->get();
                
                return $query->result();

        } 
        
       
        
        
    }
?>


