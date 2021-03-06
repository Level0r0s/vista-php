<?php

// Generated by Haxe 3.4.2
class parser_nodes_CallNode extends parser_nodes_ParseNode {
	public function __construct($name, $args = null) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->name = $name->unsetEmitValue();
		$tmp = null;
		if($args !== null) {
			$tmp = $args;
		} else {
			$tmp = (new _hx_array(array()));
		}
		$this->args = $tmp;
	}}
	public $name;
	public $args;
	public function addArg($arg) {
		$this->args->push($arg);
	}
	public function generate($bytecodes, $util) {
		{
			$_g = 0;
			$_g1 = $this->args;
			while($_g < $_g1->length) {
				$arg = $_g1[$_g];
				$_g = $_g + 1;
				$arg->generate($bytecodes, $util);
				unset($arg);
			}
		}
		$bytecodes->push(5);
		$this->name->generate($bytecodes, $util);
		$bytecodes->push($this->args->length);
	}
	public function toString() {
		$s = $this->name->getName();
		$n = $this->args->length;
		return "CallNode(" . _hx_string_or_null($s) . ", " . _hx_string_rec($n, "") . ")";
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
