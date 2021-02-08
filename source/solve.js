'use strict';

/**
 * Solves expressions of the form (x + 2) + (x - 2) + (x * 2) with a given x parameter.
 * Supported operations: '+', '-', '*'.
 * @param {String} expression - expression to be calculated.
 * @param {Number} x - the value to be substituted into the expression.
 * @example
 * // returns 3
 * solve('x + 2', 1);
 * @example
 * // returns 4
 * solve('x * 2', 2);
 * @example
 * // returns 1
 * solve('x - 2', 3);
 * @throws {SyntaxError} Throws an error if expression is incorrect.
 * @returns {Number} Result of an expression with a substituted value x (if expression is correct).
 */
const solve = (expression, x) => {
	if (typeof expression !== 'string' || typeof x !== 'number') {
		throw(new TypeError('Incorrect type of parameters'));
	}
	if (bracketsCheck(expression) === false) {
		throw(new SyntaxError('Incorrect brackets amount in given expression'));
	}
	const expr = new RegExp (/^[x0-9()+*-\s]*$/);
	if (expr.test(expression) === false) {
		throw(new SyntaxError('Incorrect symbols in given expression'));
	}
	
	return eval(expression.replaceAll('x', x));;
}

/**
 * Сhecks a mathematical expression for an equal number of opening and closing brackets.
 * @param {String} expression - expression to be checked.
 * @example
 * // returns true
 * bracketsCheck('x + 2');
 * @example
 * // returns true
 * bracketsCheck('(x + 2)');
 * @example
 * // returns true
 * bracketsCheck('((x + 2))');
 * @example
 * // returns true	
 * bracketsCheck('(x + 2) + (x + 3)');
 * @example
 * // returns false
 * bracketsCheck('((x + 2)');
 * @example
 * // returns false
 * bracketsCheck('(x + 2))');
 * @example
 * // returns false
 * bracketsCheck('(x + 2 + (x + 3)');
 * @example
 * // returns false
 * bracketsCheck('(x + 2) + (x + 3');
 * @returns {Boolean} true if expression is correct, false otherwise.
 */
const bracketsCheck = (expression) => {
	let openBrackets = 0;
	let closeBrackets = 0;
	for (const symbol of expression) {
		if (symbol == '(') { ++openBrackets; }
		else if (symbol == ')') { ++closeBrackets; }
	}

	return openBrackets === closeBrackets;
}
