<?php

// Generated by Haxe 3.4.2
class runtime_functions_UiFunctions extends runtime_functions_Builtins {
	public function __construct($methodContext) { if(!php_Boot::$skip_constructor) {
		parent::__construct($methodContext);
	}}
	public function queueCreation($qkObject) {
		$this->pushOutput($qkObject->creationService());
		return $qkObject;
	}
	function __toString() { return 'runtime.functions.UiFunctions'; }
}
