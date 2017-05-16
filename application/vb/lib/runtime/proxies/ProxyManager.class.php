<?php

// Generated by Haxe 3.4.2
class runtime_proxies_ProxyManager {
	public function __construct(){}
	static function ensureProxy($name, $type) {
		$obj = runtime_globals_GlobalDictionary::get($name);
		if($obj === null) {
			$obj = runtime_proxies_ProxyManager::dimensionType($name, $type);
			runtime_globals_GlobalDictionary::set($name, $obj);
		}
		return $obj;
	}
	static function dimensionType($name, $type) {
		$obj = null;
		switch($type) {
		case 1:{
			$obj = runtime_proxies_ProxyManager::dimensionAny($name);
		}break;
		case 2:{
			$obj = runtime_proxies_ProxyManager::dimensionBasicEditor($name);
		}break;
		case 3:{
			$obj = runtime_proxies_ProxyManager::dimensionButton($name);
		}break;
		case 4:{
			$obj = runtime_proxies_ProxyManager::dimensionButtonBar($name);
		}break;
		case 5:{
			$obj = runtime_proxies_ProxyManager::dimensionCanvas($name);
		}break;
		case 6:{
			$obj = runtime_proxies_ProxyManager::dimensionDatabase($name);
		}break;
		case 7:{
			$obj = runtime_proxies_ProxyManager::dimensionFormPanel($name);
		}break;
		case 8:{
			$obj = runtime_proxies_ProxyManager::dimensionHSplitPanel($name);
		}break;
		case 9:{
			$obj = runtime_proxies_ProxyManager::dimensionListPanel($name);
		}break;
		case 10:{
			$obj = runtime_proxies_ProxyManager::dimensionMenuBarButton($name);
		}break;
		case 11:{
			$obj = runtime_proxies_ProxyManager::dimensionRichEditor($name);
		}break;
		case 12:{
			$obj = runtime_proxies_ProxyManager::dimensionTabPage($name);
		}break;
		case 13:{
			$obj = runtime_proxies_ProxyManager::dimensionTabPanel($name);
		}break;
		case 14:{
			$obj = runtime_proxies_ProxyManager::dimensionTextArea($name);
		}break;
		case 15:{
			$obj = runtime_proxies_ProxyManager::dimensionTextField($name);
		}break;
		case 16:{
			$obj = runtime_proxies_ProxyManager::dimensionWindow($name);
		}break;
		case 17:{
			$obj = runtime_proxies_ProxyManager::dimensionViewport($name);
		}break;
		case 18:{
			$obj = runtime_proxies_ProxyManager::dimensionVSplitPanel($name);
		}break;
		default:{
			$obj = runtime_proxies_ProxyManager::dimensionAny($name);
		}break;
		}
		return $obj;
	}
	static function dimensionAny($name) {
		return new runtime_proxies_QkObject($name);
	}
	static function dimensionBasicEditor($name) {
		$panel = new runtime_proxies_QkBasicEditor($name);
		return $panel;
	}
	static function dimensionButton($name) {
		$button = new runtime_proxies_QkButton($name);
		return $button;
	}
	static function dimensionButtonBar($name) {
		$buttonbar = new runtime_proxies_QkButtonBar($name);
		return $buttonbar;
	}
	static function dimensionCanvas($name) {
		$canvas = new runtime_proxies_QkCanvas($name);
		return $canvas;
	}
	static function dimensionDatabase($name) {
		return new runtime_proxies_QkObject($name);
	}
	static function dimensionFormPanel($name) {
		$form = new runtime_proxies_QkFormPanel($name);
		return $form;
	}
	static function dimensionHSplitPanel($name) {
		$panel = new runtime_proxies_QkHSplitPanel($name);
		return $panel;
	}
	static function dimensionListPanel($name) {
		$panel = new runtime_proxies_QkListPanel($name);
		return $panel;
	}
	static function dimensionMenuBarButton($name) {
		$button = new runtime_proxies_QkMenuBarButton($name);
		return $button;
	}
	static function dimensionRichEditor($name) {
		$editor = new runtime_proxies_QkRichEditor($name);
		return $editor;
	}
	static function dimensionTabPage($name) {
		$page = new runtime_proxies_QkTabPage($name);
		return $page;
	}
	static function dimensionTabPanel($name) {
		$panel = new runtime_proxies_QkTabPanel($name);
		return $panel;
	}
	static function dimensionTextArea($name) {
		$area = new runtime_proxies_QkTextArea($name);
		return $area;
	}
	static function dimensionTextField($name) {
		$field = new runtime_proxies_QkTextField($name);
		return $field;
	}
	static function dimensionViewport($name) {
		$viewport = new runtime_proxies_QkViewport($name);
		return $viewport;
	}
	static function dimensionVSplitPanel($name) {
		$panel = new runtime_proxies_QkVSplitPanel($name);
		return $panel;
	}
	static function dimensionWindow($name) {
		$caption = "Window " . _hx_string_or_null($name);
		$window = new runtime_proxies_QkWindow($name, $caption);
		return $window;
	}
	function __toString() { return 'runtime.proxies.ProxyManager'; }
}