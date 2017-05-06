<?php

// Generated by Haxe 3.4.2
class parser_ParserUtil {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->contextStack = new _hx_array(array());
	}}
	public $contextStack;
	public $marks;
	public $tokenizer;
	public $tokens;
	public $tokenIndex;
	public function assignmentNode($nameNode, $expr) {
		return new parser_nodes_AssignmentNode($nameNode, $expr);
	}
	public function callNode($nameNode, $args = null) {
		return new parser_nodes_CallNode($nameNode, $args);
	}
	public function dimNode($nameNode, $type) {
		return new parser_nodes_DimensionNode($nameNode, $type);
	}
	public function errorNode() {
		$this->tokenizer->setEof();
		return new parser_nodes_ErrorNode($this->currentToken());
	}
	public function infixNode($arg1, $type, $arg2) {
		return new parser_nodes_InfixNode($arg1, $type, $arg2);
	}
	public function literalNode() {
		return new parser_nodes_LiteralNode($this->consumeToken());
	}
	public function nameNode() {
		return new parser_nodes_NameNode($this->consumeValue());
	}
	public function addStatement($statement) {
		$this->currentContext()->addStmt($statement);
	}
	public function advance($n = null) {
		if($n === null) {
			$n = 1;
		}
		$tmp = $this;
		$tmp->tokenIndex = $tmp->tokenIndex + $n;
	}
	public function atEnd() {
		if($this->tokenIndex >= $this->tokens->length) {
			return $this->tokenizer->atEnd();
		} else {
			return false;
		}
	}
	public function consumeToken() {
		$token = $this->currentToken();
		$this->advance(null);
		return $token;
	}
	public function consumeTokenType() {
		return $this->consumeToken()->type;
	}
	public function consumeType($type) {
		$matched = $this->isType($type, null);
		if($matched) {
			$this->advance(null);
		}
		return $matched;
	}
	public function consumeValue() {
		$token = $this->consumeToken();
		if($token === null) {
			return "";
		} else {
			return $token->val;
		}
	}
	public function currentContext() {
		return $this->contextStack[$this->contextStack->length - 1];
	}
	public function currentToken() {
		return $this->peekToken(0);
	}
	public function currentType() {
		return $this->currentToken()->type;
	}
	public function currentValue() {
		return $this->currentToken()->val;
	}
	public function exitContext() {
		if(!$this->atEnd()) {
			return $this->currentContext()->atEnd();
		} else {
			return true;
		}
	}
	public function fillTokens($n) {
		while(true) {
			$tmp = null;
			if($this->tokens->length < $n) {
				$tmp = !$this->tokenizer->atEnd();
			} else {
				$tmp = false;
			}
			if(!$tmp) {
				break;
			}
			$tmp1 = $this->tokens;
			$tmp1->push($this->tokenizer->nextToken());
			unset($tmp1,$tmp);
		}
		return $this->tokens->length >= $n;
	}
	public function isAdditive($n = null) {
		if($n === null) {
			$n = 0;
		}
		if(!$this->isPlus($n)) {
			return $this->isMinus($n);
		} else {
			return true;
		}
	}
	public function isAssignment($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Eq, $n);
	}
	public function isBuiltinFn($name) {
		if($this->isName(null)) {
			return $this->currentValue() === $name;
		} else {
			return false;
		}
	}
	public function isComment($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Comment, $n);
	}
	public function isComparison($n = null) {
		if($n === null) {
			$n = 0;
		}
		$tmp = null;
		$tmp1 = null;
		$tmp2 = null;
		$tmp3 = null;
		if(!$this->isEq($n)) {
			$tmp3 = $this->isNeq($n);
		} else {
			$tmp3 = true;
		}
		if(!$tmp3) {
			$tmp2 = $this->isGt($n);
		} else {
			$tmp2 = true;
		}
		if(!$tmp2) {
			$tmp1 = $this->isGte($n);
		} else {
			$tmp1 = true;
		}
		if(!$tmp1) {
			$tmp = $this->isLt($n);
		} else {
			$tmp = true;
		}
		if(!$tmp) {
			return $this->isLte($n);
		} else {
			return true;
		}
	}
	public function isDivide($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Divide, $n);
	}
	public function isDot($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Dot, $n);
	}
	public function isEq($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Eq, $n);
	}
	public function isGt($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Gt, $n);
	}
	public function isGte($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Gte, $n);
	}
	public function isInt($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Int, $n);
	}
	public function isKwAs($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwAs, $n);
	}
	public function isKwDim($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwDim, $n);
	}
	public function isKwDo($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwDo, $n);
	}
	public function isKwElse($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwElse, $n);
	}
	public function isKwElseIf($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwElseIf, $n);
	}
	public function isKwEnd($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwEnd, $n);
	}
	public function isKwIf($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwIf, $n);
	}
	public function isKwSub($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwSub, $n);
	}
	public function isKwThen($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwThen, $n);
	}
	public function isKwUntil($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwUntil, $n);
	}
	public function isKwWend($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwWend, $n);
	}
	public function isKwWhile($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwWhile, $n);
	}
	public function isKwWindow($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$KwWindow, $n);
	}
	public function isLhsAssignment() {
		if($this->isName(null)) {
			return $this->isAssignment(1);
		} else {
			return false;
		}
	}
	public function isLp($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Lp, $n);
	}
	public function isLt($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Lt, $n);
	}
	public function isLte($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Lte, $n);
	}
	public function isMinus($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Minus, $n);
	}
	public function isMultiplicative($n = null) {
		if($n === null) {
			$n = 0;
		}
		if(!$this->isTimes($n)) {
			return $this->isDivide($n);
		} else {
			return true;
		}
	}
	public function isName($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Id, $n);
	}
	public function isNewline($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Nl, $n);
	}
	public function isNeq($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Neq, $n);
	}
	public function isPlus($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Plus, $n);
	}
	public function isPropertyFunction() {
		$tmp = null;
		$tmp1 = null;
		if($this->isName(null)) {
			$tmp1 = $this->isDot(1);
		} else {
			$tmp1 = false;
		}
		if($tmp1) {
			$tmp = $this->isName(2);
		} else {
			$tmp = false;
		}
		if($tmp) {
			return $this->isLp(3);
		} else {
			return false;
		}
	}
	public function isPropertyValue() {
		$tmp = null;
		$tmp1 = null;
		if($this->isName(null)) {
			$tmp1 = $this->isDot(1);
		} else {
			$tmp1 = false;
		}
		if($tmp1) {
			$tmp = $this->isName(2);
		} else {
			$tmp = false;
		}
		if($tmp) {
			return !$this->isLp(3);
		} else {
			return false;
		}
	}
	public function isRp($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Rp, $n);
	}
	public function isString($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$String, $n);
	}
	public function isTimes($n = null) {
		if($n === null) {
			$n = 0;
		}
		return $this->isType(constants_TokenType::$Times, $n);
	}
	public function isType($type, $n = null) {
		if($n === null) {
			$n = 0;
		}
		$ttype = $this->peekType($n);
		if($ttype === null) {
			return false;
		} else {
			return $ttype === $type;
		}
	}
	public function mark() {
		$this->marks->push($this->tokenIndex);
	}
	public function peekToken($n = null) {
		if($n === null) {
			$n = 0;
		}
		$index = $this->tokenIndex + $n;
		$this->fillTokens($index + 1);
		$tmp = null;
		if($index >= 0) {
			$tmp = $index < $this->tokens->length;
		} else {
			$tmp = false;
		}
		if($tmp) {
			return $this->tokens[$index];
		} else {
			return null;
		}
	}
	public function peekType($n = null) {
		if($n === null) {
			$n = 0;
		}
		$token = $this->peekToken($n);
		if($token === null) {
			return null;
		} else {
			return $token->type;
		}
	}
	public function popContext() {
		return $this->contextStack->pop();
	}
	public function pushBlockContext() {
		$tmp = $this->contextStack;
		$tmp->push(new parser_nodes_BlockNode());
	}
	public function pushIfContext($condition) {
		$tmp = $this->contextStack;
		$tmp->push(new parser_nodes_IfNode($condition));
	}
	public function pushSubContext($name) {
		$tmp = $this->contextStack;
		$tmp->push(new parser_nodes_SubNode($name));
	}
	public function pushWhileContext($condition) {
		$tmp = $this->contextStack;
		$tmp->push(new parser_nodes_WhileNode($condition));
	}
	public function resetTokens() {
		$this->marks = new _hx_array(array());
		$this->tokens = new _hx_array(array());
		$token = $this->currentToken();
		if($token !== null) {
			$this->tokens->push($token);
		}
		$this->tokenIndex = $this->tokens->length - 1;
	}
	public function rewind() {
		if($this->marks->length > 0) {
			$this->tokenIndex = $this->marks->pop();
		}
	}
	public function skip() {
		$this->advance(null);
	}
	public function skipNewlines() {
		$this->advance(null);
		while($this->isNewline(null)) {
			$this->advance(null);
		}
	}
	public function unmark() {
		if($this->marks->length > 0) {
			$this->marks->pop();
		}
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
	function __toString() { return 'parser.ParserUtil'; }
}
