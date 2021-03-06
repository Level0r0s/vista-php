<?php

// Generated by Haxe 3.4.2
class runtime_process_Process extends runtime_functions_StdFunctions {
	public function __construct($methodContext) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct($methodContext);
	}}
	public $compiledMethod;
	public function run() {
		while($this->hasMore()) {
			$this->dispatch($this->next());
		}
		{
			$_g = 0;
			$_g1 = runtime_globals_GlobalModules::$messages;
			while($_g < $_g1->length) {
				$msg = $_g1[$_g];
				$_g = $_g + 1;
				$this->printOutput($msg);
				unset($msg);
			}
		}
		runtime_globals_GlobalModules::clearMessages();
		{
			$_g2 = 0;
			$_g11 = runtime_process_ProcessManager::getDelayedServices();
			while($_g2 < $_g11->length) {
				$service = $_g11[$_g2];
				$_g2 = $_g2 + 1;
				$this->pushOutput($service);
				unset($service);
			}
		}
		if($this->output->length === 0) {
			$val = $this->pop();
			if($val !== null) {
				$this->pushOutput($val);
			}
		}
		return $this->output;
	}
	public function dispatch($opCode) {
		switch($opCode) {
		case 0:{
			$this->nop();
		}break;
		case 1:{
			$tmp = $this->next();
			$tmp1 = $this->next();
			$this->callMemberFunction($tmp, $tmp1, $this->next());
		}break;
		case 2:{
			$tmp2 = $this->next();
			$this->dimension($tmp2, $this->next());
		}break;
		case 3:{
			$this->divide();
		}break;
		case 4:{
			$this->eq();
		}break;
		case 5:{
			$tmp3 = $this->next();
			$this->fnCall($tmp3, $this->next());
		}break;
		case 6:{
			$this->gt();
		}break;
		case 7:{
			$this->gte();
		}break;
		case 8:{
			$this->jmp($this->next());
		}break;
		case 9:{
			$this->jmpIfFalse($this->next());
		}break;
		case 10:{
			$this->lt();
		}break;
		case 11:{
			$this->lte();
		}break;
		case 12:{
			$this->minus();
		}break;
		case 13:{
			$this->neq();
		}break;
		case 14:{
			$this->createNew($this->next());
		}break;
		case 15:{
			$this->plus();
		}break;
		case 16:{
			$this->pop();
		}break;
		case 17:{
			$this->popIntoInstanceVar($this->next());
		}break;
		case 18:{
			$this->popIntoGlobalVar($this->next());
		}break;
		case 19:{
			$tmp4 = $this->next();
			$this->popIntoProperty($tmp4, $this->next());
		}break;
		case 20:{
			$this->pushConst($this->next());
		}break;
		case 21:{
			$this->pushInstanceVar($this->next());
		}break;
		case 22:{
			$this->pushGlobalVar($this->next());
		}break;
		case 23:{
			$this->pushModule($this->next());
		}break;
		case 24:{
			$tmp5 = $this->next();
			$this->pushProperty($tmp5, $this->next());
		}break;
		case 26:{
			$tmp6 = $this->next();
			$this->subDefine($tmp6, $this->next());
		}break;
		case 27:{
			$this->subReturn();
		}break;
		case 28:{
			$this->times();
		}break;
		default:{
			$this->unknownOpcode($opCode);
		}break;
		}
	}
	public function hasMore() {
		$this->iterations++;
		if(!$this->hasMoreBytecodes()) {
			return $this->restoreContext();
		} else {
			return true;
		}
	}
	public function next() {
		return $this->bytecodes[$this->pc++];
	}
	public function unknownOpcode($opCode) {
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
	static function fromCompiledMethod($compiledMethod) {
		$methodContext = new runtime_process_MethodContext($compiledMethod);
		return new runtime_process_Process($methodContext);
	}
	function __toString() { return 'runtime.process.Process'; }
}
