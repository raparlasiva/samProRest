<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    class Meetings_MeetingtypeModel extends CI_Model 
    {
        public function getallrows($DateYmd)
        { 
                //Active Record Method Chaining
                $selectArray = array('kp_OrderID', 't_ServiceLevel', 't_CustCompany', 't_JobName', 'ti_JobDue', 't_JobStatus', 'nb_SureDate', 'n_OrderItemCount', 
                    'n_OICSqFtSum', 'n_DurationTime', 't_MachineAb', 'n_Complexity', 't_OrderItemAb', 't_OrdShip', 'nb_JobFinished');
                
                $this->db->
                            select($selectArray)->
                            from('vH_ActiveDate')->
                            where(array('d_JobDue' => $DateYmd, 'nb_JobFinished' => null ))->
                            order_by('n_SortOrder', 'Asc');
                
                $query = $this->db->get();

                //Active Record
                //$query = $this->db->get_where('vH_ActiveDate', array('d_JobDue' => $DateYmd, 'nb_JobFinished' => null )); 
                
                //Below also works as a standard Query:  
                //$query = $this->db->query("SELECT * FROM vH_ActiveDate WHERE d_JobDue='$JobDue'");         
                
                $returnedArray=$query->result_array();
                
                // Run Function to Create Table
                $table = $this->tableCreate($returnedArray);
                return $table;
        } 
        
       
        
        
    }
?>


