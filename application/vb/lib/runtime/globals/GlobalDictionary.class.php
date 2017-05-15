<?php

// Generated by Haxe 3.4.2
class runtime_globals_GlobalDictionary {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->map = new haxe_ds_StringMap();
	}}
	public $map;
	public function getName($name) {
		return $this->map->get($name);
	}
	public function setName($name, $val) {
		$this->map->set($name, $val);
		return $val;
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
	static function get($name) {
		return runtime_globals_GlobalDictionary::$instance->getName($name);
	}
	static function set($name, $val) {
		return runtime_globals_GlobalDictionary::$instance->setName($name, $val);
	}
	function __toString() { return 'runtime.globals.GlobalDictionary'; }
}
runtime_globals_GlobalDictionary::$instance = new runtime_globals_GlobalDictionary();
