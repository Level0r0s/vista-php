<?php

// Generated by Haxe 3.4.2
class runtime_functions_UiFunctions extends runtime_functions_Builtins {
	public function __construct($methodContext) { if(!php_Boot::$skip_constructor) {
		parent::__construct($methodContext);
	}}
	public function dimensionBasicEditor($name) {
		$panel = new runtime_proxies_QkBasicEditor($name);
		$this->queueCreation($panel);
		return $panel;
	}
	public function dimensionButton($name) {
		$button = new runtime_proxies_QkButton($name);
		$this->queueCreation($button);
		return $button;
	}
	public function dimensionCanvas($name) {
		$canvas = new runtime_proxies_QkCanvas($name);
		$this->queueCreation($canvas);
		return $canvas;
	}
	public function dimensionFormPanel($name) {
		$form = new runtime_proxies_QkFormPanel($name);
		$this->queueCreation($form);
		return $form;
	}
	public function dimensionHSplitPanel($name) {
		$panel = new runtime_proxies_QkHSplitPanel($name);
		$this->queueCreation($panel);
		return $panel;
	}
	public function dimensionListPanel($name) {
		$panel = new runtime_proxies_QkListPanel($name);
		$this->queueCreation($panel);
		return $panel;
	}
	public function dimensionRichEditor($name) {
		$editor = new runtime_proxies_QkRichEditor($name);
		$this->queueCreation($editor);
		return $editor;
	}
	public function dimensionTabPage($name) {
		$page = new runtime_proxies_QkTabPage($name);
		$this->queueCreation($page);
		return $page;
	}
	public function dimensionTabPanel($name) {
		$panel = new runtime_proxies_QkTabPanel($name);
		$this->queueCreation($panel);
		return $panel;
	}
	public function dimensionTextArea($name) {
		$area = new runtime_proxies_QkTextArea($name);
		$this->queueCreation($area);
		return $area;
	}
	public function dimensionTextField($name) {
		$field = new runtime_proxies_QkTextField($name);
		$this->queueCreation($field);
		return $field;
	}
	public function dimensionViewport($name) {
		$viewport = new runtime_proxies_QkViewport($name);
		$this->queueCreation($viewport);
		return $viewport;
	}
	public function dimensionVSplitPanel($name) {
		$panel = new runtime_proxies_QkVSplitPanel($name);
		$this->queueCreation($panel);
		return $panel;
	}
	public function dimensionWindow($name) {
		$caption = "Window " . _hx_string_or_null($name);
		$window = new runtime_proxies_QkWindow($name, $caption);
		$this->queueCreation($window);
		return $window;
	}
	public function queueCreation($qkOject) {
		$this->pushOutput($qkOject->creationService());
	}
	function __toString() { return 'runtime.functions.UiFunctions'; }
}