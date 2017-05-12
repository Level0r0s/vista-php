<?php

// Generated by Haxe 3.4.2
class parser_nodes_InfixNode extends parser_nodes_ParseNode {
	public function __construct($arg1, $type, $arg2) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->arg1 = $arg1;
		$this->arg2 = $arg2;
		$this->opcode = $this->opcodeFromType($type);
	}}
	public $arg1;
	public $arg2;
	public $opcode;
	public function generate($bytecodes, $util) {
		$this->arg2->generate($bytecodes, $util);
		$this->arg1->generate($bytecodes, $util);
		$bytecodes->push($this->opcode);
	}
	public function toString() {
		$s1 = Std::string($this->arg1);
		$s2 = Std::string($this->opcode);
		$s3 = Std::string($this->arg2);
		return "InfixNode(" . _hx_string_or_null($s1) . ", " . _hx_string_or_null($s2) . ", " . _hx_string_or_null($s3) . ")";
	}
	public function opcodeFromType($type) {
		switch($type->index) {
		case 11:{
			return 3;
		}break;
		case 15:{
			return 4;
		}break;
		case 19:{
			return 6;
		}break;
		case 20:{
			return 7;
		}break;
		case 56:{
			return 10;
		}break;
		case 57:{
			return 11;
		}break;
		case 58:{
			return 12;
		}break;
		case 59:{
			return 13;
		}break;
		case 63:{
			return 14;
		}break;
		case 68:{
			return 26;
		}break;
		default:{
			return -1;
		}break;
		}
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
