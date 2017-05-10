<?php

// Generated by Haxe 3.4.2
class runtime_loader_ObjectBuilder {
	public function __construct(){}
	static function init() {
		runtime_loader_ObjectBuilder::buildClasses();
	}
	static function buildClasses() {
		runtime_globals_GlobalObjects::$metaClassClass = new runtime_objects_VClass("MetaClass", (new _hx_array(array("thisClass"))), null);
		runtime_globals_GlobalObjects::$metaClassClass->vbehavior = runtime_globals_GlobalObjects::$metaClassClass;
		runtime_globals_GlobalObjects::$arrayClass = new runtime_objects_VClass("Array", null, null);
		runtime_globals_GlobalObjects::$basicReaderClass = new runtime_objects_VClass("BasicReader", null, null);
		runtime_globals_GlobalObjects::$behaviorClass = new runtime_objects_VClass("Behavior", (new _hx_array(array("instanceVariables", "methodDict", "superclass"))), null);
		runtime_globals_GlobalObjects::$blockContextClass = new runtime_objects_VClass("BlockContext", null, null);
		runtime_globals_GlobalObjects::$booleanClass = new runtime_objects_VClass("Boolean", null, null);
		runtime_globals_GlobalObjects::$classClass = new runtime_objects_VClass("Class", (new _hx_array(array("name", "subclasses"))), null);
		runtime_globals_GlobalObjects::$collectionClass = new runtime_objects_VClass("Collection", null, null);
		runtime_globals_GlobalObjects::$compiledMethodClass = new runtime_objects_VClass("CompiledMethod", null, null);
		runtime_globals_GlobalObjects::$compilerClass = new runtime_objects_VClass("Compiler", null, null);
		runtime_globals_GlobalObjects::$contextClass = new runtime_objects_VClass("Context", null, null);
		runtime_globals_GlobalObjects::$databaseClass = new runtime_objects_VClass("Database", null, null);
		runtime_globals_GlobalObjects::$dictionaryClass = new runtime_objects_VClass("Dictionary", null, null);
		runtime_globals_GlobalObjects::$falseClass = new runtime_objects_VClass("False", null, null);
		runtime_globals_GlobalObjects::$floatClass = new runtime_objects_VClass("Float", null, null);
		runtime_globals_GlobalObjects::$globalDictionaryClass = new runtime_objects_VClass("GlobalDictionary", null, null);
		runtime_globals_GlobalObjects::$inputOutputClass = new runtime_objects_VClass("InputOutput", null, null);
		runtime_globals_GlobalObjects::$integerClass = new runtime_objects_VClass("Integer", null, null);
		runtime_globals_GlobalObjects::$kernelClass = new runtime_objects_VClass("Kernel", null, null);
		runtime_globals_GlobalObjects::$listClass = new runtime_objects_VClass("List", null, null);
		runtime_globals_GlobalObjects::$magnitudeClass = new runtime_objects_VClass("Magnitude", null, null);
		runtime_globals_GlobalObjects::$messageClass = new runtime_objects_VClass("Message", null, null);
		runtime_globals_GlobalObjects::$methodContextClass = new runtime_objects_VClass("MethodContext", null, null);
		runtime_globals_GlobalObjects::$numberClass = new runtime_objects_VClass("Number", null, null);
		runtime_globals_GlobalObjects::$objectClass = new runtime_objects_VClass("Object", null, null);
		runtime_globals_GlobalObjects::$orderedCollectionClass = new runtime_objects_VClass("OrderedCollection", null, null);
		runtime_globals_GlobalObjects::$processorClass = new runtime_objects_VClass("Processor", null, null);
		runtime_globals_GlobalObjects::$stringClass = new runtime_objects_VClass("String", null, null);
		runtime_globals_GlobalObjects::$systemClass = new runtime_objects_VClass("System", null, null);
		runtime_globals_GlobalObjects::$trueClass = new runtime_objects_VClass("True", null, null);
		runtime_globals_GlobalObjects::$undefinedObjectClass = new runtime_objects_VClass("UndefinedObject", null, null);
		runtime_globals_GlobalObjects::$vmClass = new runtime_objects_VClass("Vm", null, null);
		runtime_globals_GlobalObjects::$behaviorClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$booleanClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$collectionClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$compilerClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$contextClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$databaseClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$inputOutputClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$kernelClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$magnitudeClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$systemClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$undefinedObjectClass->setSuperClass(runtime_globals_GlobalObjects::$objectClass);
		runtime_globals_GlobalObjects::$basicReaderClass->setSuperClass(runtime_globals_GlobalObjects::$inputOutputClass);
		runtime_globals_GlobalObjects::$classClass->setSuperClass(runtime_globals_GlobalObjects::$behaviorClass);
		runtime_globals_GlobalObjects::$dictionaryClass->setSuperClass(runtime_globals_GlobalObjects::$collectionClass);
		runtime_globals_GlobalObjects::$falseClass->setSuperClass(runtime_globals_GlobalObjects::$booleanClass);
		runtime_globals_GlobalObjects::$metaClassClass->setSuperClass(runtime_globals_GlobalObjects::$behaviorClass);
		runtime_globals_GlobalObjects::$methodContextClass->setSuperClass(runtime_globals_GlobalObjects::$contextClass);
		runtime_globals_GlobalObjects::$numberClass->setSuperClass(runtime_globals_GlobalObjects::$magnitudeClass);
		runtime_globals_GlobalObjects::$orderedCollectionClass->setSuperClass(runtime_globals_GlobalObjects::$collectionClass);
		runtime_globals_GlobalObjects::$processorClass->setSuperClass(runtime_globals_GlobalObjects::$kernelClass);
		runtime_globals_GlobalObjects::$stringClass->setSuperClass(runtime_globals_GlobalObjects::$systemClass);
		runtime_globals_GlobalObjects::$trueClass->setSuperClass(runtime_globals_GlobalObjects::$booleanClass);
		runtime_globals_GlobalObjects::$vmClass->setSuperClass(runtime_globals_GlobalObjects::$kernelClass);
		runtime_globals_GlobalObjects::$arrayClass->setSuperClass(runtime_globals_GlobalObjects::$orderedCollectionClass);
		runtime_globals_GlobalObjects::$blockContextClass->setSuperClass(runtime_globals_GlobalObjects::$contextClass);
		runtime_globals_GlobalObjects::$floatClass->setSuperClass(runtime_globals_GlobalObjects::$numberClass);
		runtime_globals_GlobalObjects::$globalDictionaryClass->setSuperClass(runtime_globals_GlobalObjects::$dictionaryClass);
		runtime_globals_GlobalObjects::$integerClass->setSuperClass(runtime_globals_GlobalObjects::$numberClass);
		runtime_globals_GlobalObjects::$listClass->setSuperClass(runtime_globals_GlobalObjects::$orderedCollectionClass);
		runtime_globals_GlobalObjects::$objectClass->vbehavior->setSuperClass(runtime_globals_GlobalObjects::$classClass);
	}
	function __toString() { return 'runtime.loader.ObjectBuilder'; }
}
