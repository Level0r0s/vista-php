<?php

// Generated by Haxe 3.4.2
class runtime_objects_VObject {
	public function __construct($vbehavior) {
		if(!php_Boot::$skip_constructor) {
		$this->vbehavior = $vbehavior;
		$this->instvars = (new _hx_array(array()));
	}}
	public $instvars;
	public $vbehavior;
	public function getClass() {
		return $this->vbehavior->getClass();
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
	function __toString() { return 'runtime.objects.VObject'; }
}
