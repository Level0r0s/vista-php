<?php

// Generated by Haxe 3.4.2
class parser_Parser extends parser_ParserUtil {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	public function parseSrc($src) {
		$this->tokenizer = new parser_Tokenizer($src);
		$this->tokenIndex = -1;
		$this->tokens = new _hx_array(array());
		return $this->procedureBody();
	}
	public function procedureBody() {
		$this->pushBlockContext();
		$this->resetTokens();
		$this->blockStatements();
		return new parser_nodes_MethodNode($this->popContext()->asBlockNode());
	}
	public function blockStatements() {
		while(!$this->exitContext()) {
			$this->skipNewlines();
			if($this->exitContext()) {
				break;
			}
			if($this->isComment(null)) {
				$this->advance(null);
				continue;
			}
			$this->blockStatement();
		}
	}
	public function blockStatement() {
		$tmp = null;
		$tmp1 = null;
		if(!$this->statementLabelDefinition()) {
			$tmp1 = $this->statement();
		} else {
			$tmp1 = true;
		}
		if(!$tmp1) {
			$tmp = $this->remStatement();
		} else {
			$tmp = true;
		}
		if(!$tmp) {
			$this->errorStatement();
		}
	}
	public function callStatement() {
		$statement = $this->simpleNameExpression(true);
		if($statement !== null) {
			$statement = $statement;
		} else {
			$statement = $this->memberFunctionExpression();
		}
		if($statement !== null) {
			$statement = $statement;
		} else {
			$statement = $this->memberPropertyExpression();
		}
		if($statement !== null) {
			$statement = $statement;
		} else {
			$statement = $this->indexExpression();
		}
		if($statement !== null) {
			$statement = $statement;
		} else {
			$statement = $this->withExpression();
		}
		if($statement !== null) {
			$this->addStatement($statement);
		}
		return $statement !== null;
	}
	public function classStatement() {
		$this->mark();
		$this->consumeIfPublic();
		$tmp = null;
		if($this->isKwClass(null)) {
			$tmp = $this->isName(1);
		} else {
			$tmp = false;
		}
		if(!$tmp) {
			$this->rewind();
			return false;
		}
		$this->unmark();
		$this->advance(null);
		$name = $this->nameNode();
		$this->pushClassContext($name);
		return true;
	}
	public function controlStatement() {
		if(!$this->ifStatement()) {
			return $this->controlStatementExceptMultilineIf();
		} else {
			return true;
		}
	}
	public function controlStatementExceptMultilineIf() {
		$tmp = null;
		$tmp1 = null;
		$tmp2 = null;
		$tmp3 = null;
		$tmp4 = null;
		$tmp5 = null;
		$tmp6 = null;
		$tmp7 = null;
		$tmp8 = null;
		$tmp9 = null;
		$tmp10 = null;
		$tmp11 = null;
		$tmp12 = null;
		$tmp13 = null;
		$tmp14 = null;
		$tmp15 = null;
		$tmp16 = null;
		$tmp17 = null;
		$tmp18 = null;
		$tmp19 = null;
		$tmp20 = null;
		$tmp21 = null;
		$tmp22 = null;
		$tmp23 = null;
		if(!$this->callStatement()) {
			$tmp23 = $this->dimensionStatement();
		} else {
			$tmp23 = true;
		}
		if(!$tmp23) {
			$tmp22 = $this->doStatement();
		} else {
			$tmp22 = true;
		}
		if(!$tmp22) {
			$tmp21 = $this->elseStatement();
		} else {
			$tmp21 = true;
		}
		if(!$tmp21) {
			$tmp20 = $this->elseIfStatement();
		} else {
			$tmp20 = true;
		}
		if(!$tmp20) {
			$tmp19 = $this->endIfStatement();
		} else {
			$tmp19 = true;
		}
		if(!$tmp19) {
			$tmp18 = $this->exitDoStatement();
		} else {
			$tmp18 = true;
		}
		if(!$tmp18) {
			$tmp17 = $this->exitForStatement();
		} else {
			$tmp17 = true;
		}
		if(!$tmp17) {
			$tmp16 = $this->exitFunctionStatement();
		} else {
			$tmp16 = true;
		}
		if(!$tmp16) {
			$tmp15 = $this->exitPropertyStatement();
		} else {
			$tmp15 = true;
		}
		if(!$tmp15) {
			$tmp14 = $this->exitSubStatement();
		} else {
			$tmp14 = true;
		}
		if(!$tmp14) {
			$tmp13 = $this->forEachStatement();
		} else {
			$tmp13 = true;
		}
		if(!$tmp13) {
			$tmp12 = $this->forStatement();
		} else {
			$tmp12 = true;
		}
		if(!$tmp12) {
			$tmp11 = $this->goSubStatement();
		} else {
			$tmp11 = true;
		}
		if(!$tmp11) {
			$tmp10 = $this->goToStatement();
		} else {
			$tmp10 = true;
		}
		if(!$tmp10) {
			$tmp9 = $this->onGoSubStatement();
		} else {
			$tmp9 = true;
		}
		if(!$tmp9) {
			$tmp8 = $this->onGoToStatement();
		} else {
			$tmp8 = true;
		}
		if(!$tmp8) {
			$tmp7 = $this->raiseEventStatement();
		} else {
			$tmp7 = true;
		}
		if(!$tmp7) {
			$tmp6 = $this->returnStatement();
		} else {
			$tmp6 = true;
		}
		if(!$tmp6) {
			$tmp5 = $this->selectCaseStatement();
		} else {
			$tmp5 = true;
		}
		if(!$tmp5) {
			$tmp4 = $this->singleLineIfStatement();
		} else {
			$tmp4 = true;
		}
		if(!$tmp4) {
			$tmp3 = $this->stopStatement();
		} else {
			$tmp3 = true;
		}
		if(!$tmp3) {
			$tmp2 = $this->untilStatement();
		} else {
			$tmp2 = true;
		}
		if(!$tmp2) {
			$tmp1 = $this->wendStatement();
		} else {
			$tmp1 = true;
		}
		if(!$tmp1) {
			$tmp = $this->whileStatement();
		} else {
			$tmp = true;
		}
		if(!$tmp) {
			return $this->withStatement();
		} else {
			return true;
		}
	}
	public function dataManipulationStatement() {
		return $this->letStatement();
	}
	public function dimensionStatement() {
		if(!$this->isKwDim(null)) {
			return false;
		}
		$this->advance(null);
		$name = $this->nameNode();
		$type = $this->dimensionStatementType();
		$this->addStatement($this->dimNode($name, $type));
		return true;
	}
	public function dimensionStatementType() {
		$type = 1;
		if($this->isKwAs(null)) {
			$this->skip();
			$tt = $this->consumeTokenType();
			if($tt === constants_TokenType::$KwBasicEditor) {
				$type = 2;
			} else {
				if($tt === constants_TokenType::$KwButton) {
					$type = 3;
				} else {
					if($tt === constants_TokenType::$KwButtonBar) {
						$type = 4;
					} else {
						if($tt === constants_TokenType::$KwCanvas) {
							$type = 5;
						} else {
							if($tt === constants_TokenType::$KwDatabase) {
								$type = 6;
							} else {
								if($tt === constants_TokenType::$KwFormPanel) {
									$type = 7;
								} else {
									if($tt === constants_TokenType::$KwHSplitPanel) {
										$type = 8;
									} else {
										if($tt === constants_TokenType::$KwListPanel) {
											$type = 9;
										} else {
											if($tt === constants_TokenType::$KwMenuBarButton) {
												$type = 10;
											} else {
												if($tt === constants_TokenType::$KwRichEditor) {
													$type = 11;
												} else {
													if($tt === constants_TokenType::$KwTabPage) {
														$type = 12;
													} else {
														if($tt === constants_TokenType::$KwTabPanel) {
															$type = 13;
														} else {
															if($tt === constants_TokenType::$KwTextArea) {
																$type = 14;
															} else {
																if($tt === constants_TokenType::$KwTextField) {
																	$type = 15;
																} else {
																	if($tt === constants_TokenType::$KwViewport) {
																		$type = 17;
																	} else {
																		if($tt === constants_TokenType::$KwVSplitPanel) {
																			$type = 18;
																		} else {
																			if($tt === constants_TokenType::$KwWindow) {
																				$type = 16;
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		return $type;
	}
	public function doStatement() {
		return false;
	}
	public function elseStatement() {
		return false;
	}
	public function elseIfStatement() {
		return false;
	}
	public function endClassStatement() {
		$tmp = null;
		if($this->isKwEnd(null)) {
			$tmp = $this->isKwClass(1);
		} else {
			$tmp = false;
		}
		if(!$tmp) {
			return false;
		}
		$this->log("end class");
		$this->advance(2);
		return true;
	}
	public function endIfStatement() {
		$tmp = null;
		if($this->isKwEnd(null)) {
			$tmp = $this->isKwIf(1);
		} else {
			$tmp = false;
		}
		if(!$tmp) {
			return false;
		}
		$this->advance(2);
		$this->addStatement($this->popContext());
		return true;
	}
	public function endModuleStatement() {
		$tmp = null;
		if($this->isKwEnd(null)) {
			$tmp = $this->isKwModule(1);
		} else {
			$tmp = false;
		}
		if(!$tmp) {
			return false;
		}
		$this->advance(2);
		$node = $this->popContext();
		$name = $node->getName();
		$this->addStatement($node);
		return true;
	}
	public function endSubroutineStatement() {
		$tmp = null;
		if($this->isKwEnd(null)) {
			$tmp = $this->isKwSub(1);
		} else {
			$tmp = false;
		}
		if(!$tmp) {
			return false;
		}
		$this->advance(2);
		$this->addStatement($this->popContext());
		return true;
	}
	public function errorHandlingStatement() {
		return false;
	}
	public function errorStatement() {
		$this->addStatement($this->errorNode());
		return true;
	}
	public function exitDoStatement() {
		return false;
	}
	public function exitForStatement() {
		return false;
	}
	public function exitFunctionStatement() {
		return false;
	}
	public function exitPropertyStatement() {
		return false;
	}
	public function exitSubStatement() {
		return false;
	}
	public function expressionStatement() {
		$statement = $this->expression();
		if($statement !== null) {
			$this->addStatement($statement);
		}
		return $statement !== null;
	}
	public function fileStatement() {
		return false;
	}
	public function forEachStatement() {
		return false;
	}
	public function forStatement() {
		return false;
	}
	public function goSubStatement() {
		return false;
	}
	public function goToStatement() {
		return false;
	}
	public function ifStatement() {
		if(!$this->isKwIf(null)) {
			return false;
		}
		$this->advance(null);
		$condition = $this->expression();
		$this->pushIfContext($condition);
		return true;
	}
	public function letStatement() {
		$expression = $this->assignmentExpression();
		if($expression === null) {
			return false;
		}
		$this->addStatement($expression);
		return true;
	}
	public function moduleStatement() {
		$this->mark();
		$this->consumeIfPublic();
		$tmp = null;
		if($this->isKwModule(null)) {
			$tmp = $this->isName(1);
		} else {
			$tmp = false;
		}
		if(!$tmp) {
			$this->rewind();
			return false;
		}
		$this->unmark();
		$this->advance(null);
		$name = $this->nameNode();
		$this->pushStdModuleContext($name);
		return true;
	}
	public function onGoSubStatement() {
		return false;
	}
	public function onGoToStatement() {
		return false;
	}
	public function printStatement() {
		if(!$this->isBuiltinFn("print")) {
			return false;
		}
		$tmp = $this->nameNode();
		$this->addStatement($this->callNode($tmp, (new _hx_array(array($this->expression())))));
		return true;
	}
	public function raiseEventStatement() {
		return false;
	}
	public function remStatement() {
		return false;
	}
	public function returnStatement() {
		return false;
	}
	public function selectCaseStatement() {
		return false;
	}
	public function singleLineIfStatement() {
		return false;
	}
	public function specialStatement() {
		$tmp = null;
		$tmp1 = null;
		$tmp2 = null;
		$tmp3 = null;
		$tmp4 = null;
		if(!$this->classStatement()) {
			$tmp4 = $this->endClassStatement();
		} else {
			$tmp4 = true;
		}
		if(!$tmp4) {
			$tmp3 = $this->endModuleStatement();
		} else {
			$tmp3 = true;
		}
		if(!$tmp3) {
			$tmp2 = $this->endSubroutineStatement();
		} else {
			$tmp2 = true;
		}
		if(!$tmp2) {
			$tmp1 = $this->moduleStatement();
		} else {
			$tmp1 = true;
		}
		if(!$tmp1) {
			$tmp = $this->printStatement();
		} else {
			$tmp = true;
		}
		if(!$tmp) {
			return $this->subroutineStatement();
		} else {
			return true;
		}
	}
	public function statement() {
		$tmp = null;
		$tmp1 = null;
		$tmp2 = null;
		$tmp3 = null;
		if(!$this->specialStatement()) {
			$tmp3 = $this->controlStatement();
		} else {
			$tmp3 = true;
		}
		if(!$tmp3) {
			$tmp2 = $this->dataManipulationStatement();
		} else {
			$tmp2 = true;
		}
		if(!$tmp2) {
			$tmp1 = $this->errorHandlingStatement();
		} else {
			$tmp1 = true;
		}
		if(!$tmp1) {
			$tmp = $this->fileStatement();
		} else {
			$tmp = true;
		}
		if(!$tmp) {
			return $this->expressionStatement();
		} else {
			return true;
		}
	}
	public function statementLabelDefinition() {
		return false;
	}
	public function stopStatement() {
		return false;
	}
	public function subroutineStatement() {
		$this->mark();
		$this->consumeIfPublic();
		$tmp = null;
		$tmp1 = null;
		$tmp2 = null;
		if($this->isKwSub(null)) {
			$tmp2 = $this->isName(1);
		} else {
			$tmp2 = false;
		}
		if($tmp2) {
			$tmp1 = $this->isLp(2);
		} else {
			$tmp1 = false;
		}
		if($tmp1) {
			$tmp = $this->isRp(3);
		} else {
			$tmp = false;
		}
		if(!$tmp) {
			$this->rewind();
			return false;
		}
		$this->unmark();
		$this->advance(null);
		$this->pushSubroutineContext($this->nameNode());
		$this->advance(2);
		return true;
	}
	public function untilStatement() {
		return false;
	}
	public function wendStatement() {
		if(!$this->isKwWend(null)) {
			return false;
		}
		$this->advance(null);
		$this->addStatement($this->popContext());
		return true;
	}
	public function whileStatement() {
		if(!$this->isKwWhile(null)) {
			return false;
		}
		$this->advance(null);
		$condition = $this->expression();
		$this->pushWhileContext($condition);
		return true;
	}
	public function withStatement() {
		return false;
	}
	public function argumentExpression() {
		return $this->expression();
	}
	public function assignmentExpression() {
		if(!$this->isLhsAssignment()) {
			return null;
		}
		$nameNode = $this->simpleNameExpression(null);
		$this->skip();
		$expr = $this->expression();
		return $this->assignmentNode($nameNode, $expr);
	}
	public function conditionExpression() {
		$termNode = $this->termExpression();
		while($this->isAdditive(null)) {
			$termNode1 = $this->consumeTokenType();
			$termNode = $this->infixNode($termNode, $termNode1, $this->termExpression());
			unset($termNode1);
		}
		return $termNode;
	}
	public function expression() {
		$conditionNode = $this->conditionExpression();
		while($this->isComparison(null)) {
			$conditionNode1 = $this->consumeTokenType();
			$conditionNode = $this->infixNode($conditionNode, $conditionNode1, $this->conditionExpression());
			unset($conditionNode1);
		}
		return $conditionNode;
	}
	public function factorExpression() {
		$expression = $this->identExpression();
		if($expression !== null) {
			$expression = $expression;
		} else {
			$expression = $this->number();
		}
		if($expression !== null) {
			$expression = $expression;
		} else {
			$expression = $this->parenthesizedExpression();
		}
		return $expression;
	}
	public function identExpression() {
		return $this->simpleNameExpression(null);
	}
	public function indexExpression() {
		$this->mark();
		$expression = $this->identExpression();
		if($expression === null) {
			return null;
		}
		$expression = $this->callNode($expression, null);
		if(!$this->isLp(null)) {
			$this->rewind();
			return null;
		}
		$this->unmark();
		$this->consumeType(constants_TokenType::$Lp);
		$expression->addArgs($this->argumentList());
		if(!$this->consumeType(constants_TokenType::$Rp)) {
			return $this->errorNode();
		}
		return $expression;
	}
	public function integerLiteralExpression() {
		if($this->isInt(null)) {
			return $this->literalNode();
		} else {
			return null;
		}
	}
	public function memberFunctionExpression() {
		if(!$this->isPropertyFunction()) {
			return null;
		}
		$objectName = $this->consumeValue();
		$this->skip();
		$functionName = $this->consumeValue();
		$argList = $this->argumentList();
		return new parser_nodes_MemberFunctionNode($objectName, $functionName, $argList);
	}
	public function memberPropertyExpression() {
		if(!$this->isPropertyValue()) {
			return null;
		}
		$objectName = $this->consumeValue();
		$this->skip();
		$propertyName = $this->consumeValue();
		$value = null;
		if($this->isEq(null)) {
			$this->skip();
			$value = $this->expression();
		}
		return new parser_nodes_MemberPropertyNode($objectName, $propertyName, $value);
	}
	public function number() {
		$expression = $this->integerLiteralExpression();
		if($expression !== null) {
			$expression = $expression;
		} else {
			$expression = $this->stringLiteralExpression();
		}
		return $expression;
	}
	public function parenthesizedExpression() {
		if(!$this->consumeType(constants_TokenType::$Lp)) {
			return null;
		}
		$expression = $this->expression();
		if(!$this->consumeType(constants_TokenType::$Rp)) {
			return $this->errorNode();
		}
		return $expression;
	}
	public function simpleNameExpression($simple = null) {
		if($simple === null) {
			$simple = false;
		}
		$tmp = null;
		if($this->isName(null)) {
			if(!(!$simple)) {
				$tmp = $this->isNewline(1);
			} else {
				$tmp = true;
			}
		} else {
			$tmp = false;
		}
		if($tmp) {
			return $this->nameNode();
		} else {
			return null;
		}
	}
	public function stringLiteralExpression() {
		if($this->isString(null)) {
			return $this->literalNode();
		} else {
			return null;
		}
	}
	public function termExpression() {
		$factorNode = $this->factorExpression();
		while($this->isMultiplicative(null)) {
			$factorNode1 = $this->consumeTokenType();
			$factorNode = $this->infixNode($factorNode, $factorNode1, $this->factorExpression());
			unset($factorNode1);
		}
		return $factorNode;
	}
	public function withExpression() {
		return null;
	}
	public function argumentList() {
		$arg = null;
		$args = new _hx_array(array());
		$this->consumeType(constants_TokenType::$Lp);
		while(true) {
			$arg = $this->argumentExpression();
			if(!($arg !== null)) {
				break;
			}
			$args->push($arg);
			if(!$this->consumeType(constants_TokenType::$Comma)) {
				break;
			}
		}
		$this->consumeType(constants_TokenType::$Rp);
		return $args;
	}
	public function consumeIfPublic() {
		if($this->isKwPublic(null)) {
			$this->consumeToken();
			return true;
		} else {
			return false;
		}
	}
	public function log($msg) {
		$tmp = new parser_nodes_NameNode("print");
		$tmp1 = $this->callNode($tmp, (new _hx_array(array(new parser_nodes_LiteralNode($msg)))));
		$this->addStatement($tmp1);
	}
	static function parse($src) {
		$parser1 = new parser_Parser();
		return $parser1->parseSrc($src);
	}
	function __toString() { return 'parser.Parser'; }
}
