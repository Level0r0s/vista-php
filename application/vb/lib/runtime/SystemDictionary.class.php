<?php

// Generated by Haxe 3.4.2
class runtime_SystemDictionary {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->map = new haxe_ds_StringMap();
	}}
	public $map;
	public function get($name) {
		return $this->map->get($name);
	}
	public function set($name, $val) {
		$this->map->set($name, $val);
		return $val;
	}
	public function fromSession($s) {
		$unserializer = new haxe_Unserializer($s);
		$this->map = $unserializer->unserialize();
	}
	public function toSession() {
		$serializer = new haxe_Serializer();
		$serializer->serialize($this->map);
		return $serializer->toString();
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
	function __toString() { return 'runtime.GlobalDictionary'; }
}
runtime_SystemDictionary::$instance = new runtime_SystemDictionary();
