<?php

// Generated by Haxe 3.4.2
class runtime_proxies_QkButton extends runtime_proxies_QkProxyObject {
	public function __construct($name) { if(!php_Boot::$skip_constructor) {
		parent::__construct($name);
	}}
	public function creationService() {
		return _hx_anonymous(array("service" => "create", "args" => _hx_anonymous(array("id" => $this->proxyId, "xtype" => "button"))));
	}
	public function toString() {
		return "QkButton(" . _hx_string_or_null($this->name) . ", " . _hx_string_rec($this->proxyId, "") . ")";
	}
	function __toString() { return $this->toString(); }
}
