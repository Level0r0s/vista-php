<?php

// Generated by Haxe 3.4.2
class parser_nodes_ClassNode extends parser_nodes_AbstractModuleNode {
	public function __construct($name) { if(!php_Boot::$skip_constructor) {
		parent::__construct($name);
	}}
	public function generate($bytecodes, $util) {
		$classModule = runtime_modules_Module::findOrCreate($this->name);
		{
			$_g = 0;
			$_g1 = $this->subroutines;
			while($_g < $_g1->length) {
				$sub = $_g1[$_g];
				$_g = $_g + 1;
				$compiledMethod = $sub->compile();
				$methodName = $sub->name;
				$classModule->addMethod($methodName, $compiledMethod);
				unset($sub,$methodName,$compiledMethod);
			}
		}
	}
	public function isClass() {
		return true;
	}
	public function moduleName() {
		return $this->name;
	}
	public function toString() {
		return "ClassNode(" . _hx_string_or_null($this->name) . ")";
	}
	function __toString() { return $this->toString(); }
}
