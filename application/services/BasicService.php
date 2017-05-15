<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once APPPATH . 'vb/Vb.php';

class BasicService  {
    
    public function performMethod($session, $methodName, $args=[]) {
        switch($methodName) {
            case 'callSubroutine':
                return $this->callSubroutine($session, $args);
            case 'classNames':
                return $this->classNames($session);
            case 'evalScript':
                return $this->evalScript($session, $args);
            default:
                return "method [$methodName] not found";
        }
    }
    
    public function callSubroutine($session, $args)
    {
        $basic_session = $session->userdata('basic');
        $id = $this->getArg($args, 'id', 0);
        $type = $this->getArg($args, 'type', 'none');
        $moduleName = $this->getArg($args, 'moduleName', 'none');
        $subroutineName = $this->getArg($args, 'subroutineName', 'none');
        $resultArray = Vb::callSubroutine(
            $basic_session, $id, $type,
            $moduleName, $subroutineName);
        $result = $resultArray[0];
        $basic_session = $resultArray[1];
        $session->set_userdata('basic', $basic_session);
        return $result;
    }

    public function classNames($session)
    {
        $basic_session = $session->userdata('basic');
        $resultArray = Vb::classNames($basic_session);
        $result = $resultArray[0];
        $basic_session = $resultArray[1];
        $session->set_userdata('basic', $basic_session);
        return $result;
    }
    
    public function evalScript($session, $args)
    {
        $basic_session = $session->userdata('basic');
        $script = $args['script'];
        $resultArray = Vb::evalScript($script, $basic_session);
        $result = $resultArray[0];
        $basic_session = $resultArray[1];
        $session->set_userdata('basic', $basic_session);
        return $result;
    }

    private function getArg($args, $key, $default)
    {
        return array_key_exists($key, $args) 
               ? $args[$key] 
               : $default;
    }
        
}