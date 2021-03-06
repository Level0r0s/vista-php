<?php

// Generated by Haxe 3.4.2
class compiler_CompiledMethod {
	public function __construct($bytecodes, $literals) {
		if(!php_Boot::$skip_constructor) {
		$this->bytecodes = $bytecodes;
		$this->literals = $literals;
	}}
	public $bytecodes;
	public $literals;
	public $module;
	public $src;
	public function toString() {
		$s1 = Std::string($this->bytecodes);
		$s2 = Std::string($this->literals);
		$s = $this->src;
		$s3 = trim($s);
		return "CompiledMethod(bytcodes:(" . _hx_string_or_null($s1) . ") literals(" . _hx_string_or_null($s2) . ") src:(" . _hx_string_or_null($s3) . "))";
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
