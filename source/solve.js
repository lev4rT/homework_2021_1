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
 * @returns {Number} Result of an expression with a substituted value x (if expression is correct).
 * @returns {undefined} If expression is incorrect - function returns undefined.
 */
const solve = (expression, x) => {
	if (bracketsCheck(expression) === false) {
		throw(new SyntaxError("Incorrect brackets amount in given expression"));
	}
	let result;  // The default value of uninitialized 'let' is undefined
	try {
		result = eval(expression.replaceAll('x', x));
	} catch (error) {

	}

	return result;
}

/**
 * Сhecks a mathematical expression for an equal number of opening and closing brackets.
 * @param {String} expression - expression to be checked.
 * @example
 * // returns true
 * bracketsCheck('x + 2');
 * // returns true
 * bracketsCheck('(x + 2)');
 * // returns true
 * bracketsCheck('((x + 2))');
 * // returns true	
 * bracketsCheck('(x + 2) + (x + 3)');
 * // returns false
 * bracketsCheck('((x + 2)');
 * // returns false
 * bracketsCheck('(x + 2))');
 * // returns false
 * bracketsCheck('(x + 2 + (x + 3)');
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
