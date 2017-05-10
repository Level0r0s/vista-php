<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once APPPATH . 'vb/lib/php/Boot.class.php';
require_once APPPATH . 'vb/lib/runtime/Vm.class.php';

class Vb  {

    static public function classNames($basic_session)
    {
        return runtime_Vm::classNames($basic_session);;
    }
    
    static public function evalScript($script, $basic_session)
    {
        return runtime_Vm::evalScript($script, $basic_session);;
    }
    
}
