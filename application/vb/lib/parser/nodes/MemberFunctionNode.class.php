<?php

// Generated by Haxe 3.4.2
class parser_nodes_MemberFunctionNode extends parser_nodes_ParseNode {
	public function __construct($objectName, $functionName, $argList) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->objectName = $objectName;
		$this->functionName = $functionName;
		$this->argList = $argList;
	}}
	public $objectName;
	public $functionName;
	public $argList;
	public function generate($bytecodes, $util) {
		{
			$_g = 0;
			$_g1 = $this->argList;
			while($_g < $_g1->length) {
				$arg = $_g1[$_g];
				$_g = $_g + 1;
				$arg->generate($bytecodes, $util);
				unset($arg);
			}
		}
		$bytecodes->push(1);
		$bytecodes->push($util->encodeLiteral($this->objectName));
		$bytecodes->push($util->encodeLiteral($this->functionName));
		$bytecodes->push($this->argList->length);
	}
	public function toString() {
		return "MemberFunctionNode(" . _hx_string_or_null($this->objectName) . "." . _hx_string_or_null($this->functionName) . ")";
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
