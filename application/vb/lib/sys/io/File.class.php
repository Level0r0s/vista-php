<?php

// Generated by Haxe 3.4.2
class sys_io_File {
	public function __construct(){}
	static function getContent($path) {
		return file_get_contents($path);
	}
	function __toString() { return 'sys.io.File'; }
}
