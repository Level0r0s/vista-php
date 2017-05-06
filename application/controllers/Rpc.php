<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once APPPATH . 'services/BasicService.php';

class Rpc extends CI_Controller {
    
    public function index()
    {
        $script = $this->get_input('script', 'print "no input"');
 		$service = new BasicService();
        $reply = $service->evalScript($script, $this->session);
        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($reply));
    }

    private function get_input($name, $default = '-- default --')
    {
        $value = $this->input->get_post($name);
        if (is_null($value))
            return $default;
        else
            return $value;
    }
    
}
