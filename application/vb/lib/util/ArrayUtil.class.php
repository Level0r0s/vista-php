<?php

// Generated by Haxe 3.4.2
class util_ArrayUtil {
	public function __construct(){}
	static function normalizeArray($array) {
		return php_Lib::toPhpArray($array);
	}
	static function normalizeMap($map) {
		return php_Lib::associativeArrayOfHash($map);
	}
	function __toString() { return 'util.ArrayUtil'; }
}
