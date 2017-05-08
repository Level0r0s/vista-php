<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once APPPATH . 'vb/Vb.php';

class FileService  {
    
    public function performMethod($methodName, $args=[]) {
        switch($methodName) {
            case 'readFile':
                return $this->readFile($args);
                default:
                    return $this->readFiles();
            }
        }
        
        private function readFile($args) {
            $dir = 'vb';
            $fname = $args['fname'];
            $path = "$dir/$fname";
            return file_get_contents($path);
        }
        
        private function readFiles()
        {
            $dir = 'vb';
            $fnames = [];
            if (is_dir($dir)){
                if ($dh = opendir($dir)){
                    while (($fname = readdir($dh)) !== false)
                        if (substr( $fname, 0, 1 ) !== '.')
                            array_push($fnames, $fname);
                        closedir($dh);
                    }
                    return $fnames;
                }
                
            }
            
        }