<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once APPPATH . 'vb/Vb.php';

class BasicService  {
    
    public function evalScript($script, $session)
    {
        $basic_session = $session->userdata('basic');
        $resultArray = Vb::evalScript($script, $basic_session);
        $result = $resultArray[0];
        $basic_session = $resultArray[1];
        $session->set_userdata('basic', $basic_session);
        return $result;
    }
    
}