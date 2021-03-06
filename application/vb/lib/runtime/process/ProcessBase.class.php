<?php

// Generated by Haxe 3.4.2
class runtime_process_ProcessBase {
	public function __construct($methodContext) {
		if(!php_Boot::$skip_constructor) {
		$this->methodContext = $methodContext;
		$this->bytecodes = $methodContext->bytecodes;
		$this->contextStack = (new _hx_array(array()));
		$this->currentContext = null;
		$this->literals = $methodContext->literals;
		$this->iterations = 0;
		$this->output = (new _hx_array(array()));
		$this->activateContext($methodContext);
		$this->returnStack = (new _hx_array(array()));
	}}
	public $bytecodes;
	public $contextStack;
	public $currentContext;
	public $iterations;
	public $literals;
	public $methodContext;
	public $output;
	public $returnStack;
	public $pc;
	public $stack;
	public function activateContext($context) {
		if($this->currentContext !== null) {
			$this->currentContext->pc = $this->pc;
			$this->currentContext->stack = $this->stack;
			$this->contextStack->push($this->currentContext);
		}
		$this->currentContext = $context;
		$this->bytecodes = $this->currentContext->bytecodes;
		$this->literals = $this->currentContext->literals;
		$this->pc = $this->currentContext->pc;
		$this->stack = $this->currentContext->stack;
	}
	public function restoreContext() {
		if($this->contextStack->length > 0) {
			$context = $this->contextStack->pop();
			$this->currentContext = $context;
			$this->bytecodes = $this->currentContext->bytecodes;
			$this->literals = $this->currentContext->literals;
			$this->pc = $this->currentContext->pc;
			$this->stack = $this->currentContext->stack;
			return true;
		} else {
			return false;
		}
	}
	public function actionOutput($object, $action, $args, $afterAppear = null) {
		if($afterAppear === null) {
			$afterAppear = false;
		}
		$payload = $object->getId();
		$payload1 = _hx_anonymous(array("service" => "action", "id" => $payload, "action" => $action, "args" => util_NormalizeUtil::normalizeArray($args), "afterAppear" => $afterAppear));
		$this->pushOutput($payload1);
	}
	public function callSubroutine($method) {
		$this->activateContext(new runtime_process_MethodContext($method));
	}
	public function hgoto($n) {
		$this->pc = $n;
	}
	public function handleOutput($object, $event, $handler) {
		$payload = _hx_anonymous(array("service" => "handle", "id" => $object->getId(), "event" => $event, "handler" => $handler));
		$this->pushOutput($payload);
	}
	public function hasMoreBytecodes() {
		return $this->pc < $this->bytecodes->length;
	}
	public function literal($index) {
		return $this->literals[$index];
	}
	public function log($msg) {
		$this->printOutput($msg);
	}
	public function msgBoxOutput($msg) {
		$this->serviceOutput("msgbox", _hx_anonymous(array("msg" => $msg)));
	}
	public function pop() {
		return $this->stack->pop();
	}
	public function popn($n) {
		$val = null;
		{
			$_g1 = 0;
			$_g = $n;
			while($_g1 < $_g) {
				$_g1 = $_g1 + 1;
				$i = $_g1 - 1;
				$val = $this->pop();
				unset($i);
			}
		}
		return $val;
	}
	public function popReturn() {
		return $this->returnStack->pop();
	}
	public function printOutput($msg) {
		$this->serviceOutput("print", _hx_anonymous(array("msg" => $msg)));
	}
	public function push($val) {
		$this->stack->push($val);
		return $val;
	}
	public function pushConst($lit) {
		return $this->push($this->literal($lit));
	}
	public function pushOutput($val) {
		$this->output->push($val);
	}
	public function pushReturn() {
		$this->returnStack->push($this->pc);
	}
	public function serviceOutput($service, $args) {
		$payload = _hx_anonymous(array("service" => $service, "args" => $args));
		$this->pushOutput($payload);
	}
	public function stackSize() {
		return $this->stack->length;
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
	function __toString() { return 'runtime.process.ProcessBase'; }
}
