<?php

// Generated by Haxe 3.4.2
class runtime_objects_VClass extends runtime_objects_VBehavior {
	public function __construct($name, $instVars = null, $classVars = null) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct(null,$instVars);
		$this->name = $name;
		$this->vbehavior = new runtime_objects_VMetaClass($this, $classVars);
		$this->subClasses = (new _hx_array(array()));
	}}
	public $name;
	public $subClasses;
	public function addSubClass($subClass) {
		$this->subClasses->push($subClass);
	}
	public function getClass() {
		return $this;
	}
	public function setSuperClass($superClass) {
		parent::setSuperClass($superClass);
		$this->vbehavior->superClass = $superClass->vbehavior;
		$this->superClass->addSubClass($this);
	}
	public function toString() {
		return $this->name;
	}
	public function withAllSubClassNames() {
		$sortArray = $this->subClasses->copy();
		$sortArray->sort(array(new _hx_lambda(array(), "runtime_objects_VClass_0"), 'execute'));
		$values = (new _hx_array(array()));
		$values->push($this->name);
		{
			$_g = 0;
			while($_g < $sortArray->length) {
				$cls = $sortArray[$_g];
				$_g = $_g + 1;
				$values->push($cls->withAllSubClassNames());
				unset($cls);
			}
		}
		return php_Lib::toPhpArray($values);
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
	function __toString() { return $this->toString(); }
}
function runtime_objects_VClass_0($a, $b) {
	{
		if((strcmp($a->name, $b->name)< 0)) {
			return -1;
		}
		if((strcmp($a->name, $b->name)> 0)) {
			return 1;
		}
		return 0;
	}
}
