<?php

// Generated by Haxe 3.4.2
class compiler_Compiler {
	public function __construct() {}
	public function compileFromScript($script) {
		$method = parser_Parser::parse($script);
		return $this->compileFromMethod($method);
	}
	public function compileFromMethod($method) {
		$bytecodes = new _hx_array(array());
		$util = new compiler_CompilerUtil();
		$method->generate($bytecodes, $util);
		return new compiler_CompiledMethod($bytecodes, $util->literals);
	}
	static function compileScript($src) {
		$compilerMethod = _hx_deref(new compiler_Compiler())->compileFromScript($src);
		$compilerMethod->src = $src;
		return $compilerMethod;
	}
	static function compileMethod($method) {
		return _hx_deref(new compiler_Compiler())->compileFromMethod($method);
	}
	function __toString() { return 'compiler.Compiler'; }
}
