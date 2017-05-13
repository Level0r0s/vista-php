<?php

// Generated by Haxe 3.4.2
class runtime_functions_ModuleFunctions extends runtime_functions_StdFunctions {
	public function __construct($methodContext) { if(!php_Boot::$skip_constructor) {
		parent::__construct($methodContext);
	}}
	public function pushStdModule($lit) {
		$name = Std::string($this->literal($lit));
		$stdModule = runtime_globals_GlobalModules::getStdModule($name);
		$tmp = (property_exists("haxe_Log", "trace") ? haxe_Log::$trace: array("haxe_Log", "trace"));
		call_user_func_array($tmp, array("pushStdModule", _hx_anonymous(array("fileName" => "ModuleFunctions.hx", "lineNumber" => 11, "className" => "runtime.functions.ModuleFunctions", "methodName" => "pushStdModule", "customParams" => (new _hx_array(array(Std::string($stdModule))))))));
		if($stdModule !== null) {
			$this->push($stdModule);
		} else {
			$this->push("stand module [" . _hx_string_or_null($name) . "] not found");
		}
	}
	function __toString() { return 'runtime.functions.ModuleFunctions'; }
}