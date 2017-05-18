<?php

// Generated by Haxe 3.4.2
class parser_nodes_BlockNode extends parser_nodes_ParseNode {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->exitFlag = false;
		$this->stmts = new _hx_array(array());
	}}
	public $exitFlag;
	public $stmts;
	public function addStmt($stmt) {
		$this->stmts->push($stmt);
	}
	public function asBlockNode() {
		return $this;
	}
	public function atEnd() {
		return $this->exitFlag;
	}
	public function generate($bytecodes, $util) {
		$_g1 = 0;
		$_g = $this->stmts->length;
		while($_g1 < $_g) {
			$_g1 = $_g1 + 1;
			$i = $_g1 - 1;
			$stmt = $this->stmts[$i];
			$stmt->generate($bytecodes, $util);
			if($i < $this->stmts->length - 1) {
				$bytecodes->push(16);
			}
			unset($stmt,$i);
		}
	}
	public function setExit() {
		$this->exitFlag = true;
	}
	public function toString() {
		$len = $this->stmts->length;
		return "BlockNode(" . _hx_string_rec($len, "") . ")";
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
