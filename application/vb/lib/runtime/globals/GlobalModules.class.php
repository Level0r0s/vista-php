<?php

// Generated by Haxe 3.4.2
class runtime_globals_GlobalModules {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->classModules = new haxe_ds_StringMap();
		$this->stdModules = new haxe_ds_StringMap();
	}}
	public $classModules;
	public $stdModules;
	public function fromSession($s) {
	}
	public function toSession() {
		return null;
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->__dynamics[$m]) && is_callable($this->__dynamics[$m]))
			return call_user_func_array($this->__dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call <'.$m.'>');
	}
	static $instance;
	static function getClassModule($name) {
		return runtime_globals_GlobalModules::$instance->classModules->get($name);
	}
	static function getStdModule($name) {
		return runtime_globals_GlobalModules::$instance->stdModules->get($name);
	}
	static function setClassModule($name, $module) {
		runtime_globals_GlobalModules::$instance->classModules->set($name, $module);
		return $module;
	}
	static function setStdModule($name, $module) {
		runtime_globals_GlobalModules::$instance->stdModules->set($name, $module);
		return $module;
	}
	function __toString() { return 'runtime.globals.GlobalModules'; }
}
runtime_globals_GlobalModules::$instance = new runtime_globals_GlobalModules();