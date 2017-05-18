<?php

// Generated by Haxe 3.4.2
class runtime_modules_ModuleInstance {
	public function __construct($moduleName) {
		if(!php_Boot::$skip_constructor) {
		$this->moduleName = $moduleName;
		$this->proxies = new haxe_ds_StringMap();
	}}
	public $moduleName;
	public $proxies;
	public function asInstance() {
		return $this;
	}
	public function getMethod($methodName) {
		$module = runtime_globals_GlobalModules::getModule($this->moduleName);
		if($module === null) {
			return null;
		}
		return $module->getMethod($methodName);
	}
	public function getProxy($name) {
		return $this->proxies->get($name);
	}
	public function setProxy($name, $proxy) {
		$this->proxies->set($name, $proxy);
	}
	public function toString() {
		return "ModuleInstance()";
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
	function __toString() { return $this->toString(); }
}
