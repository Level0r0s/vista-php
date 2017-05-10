<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once APPPATH . 'services/BasicService.php';
require_once APPPATH . 'services/FileService.php';

class Rpc extends CI_Controller {
    
    public function index()
    {
        $service = $this->get_input('service', 'basic');
        $method = $this->get_input('method', '');
        $args = $this->input->get();
        switch($service) {
            case 'basic':
                $service = new BasicService();
                $reply = $service->performMethod($this->session, $method, $args);
                break;
            case 'file':
                $service = new FileService();
                $reply = $service->performMethod($method, $args);
                break;
            default:
                $reply = "service [$service] not found";
                break;
    }
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