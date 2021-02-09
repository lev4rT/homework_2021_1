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
 * @throws {SyntaxError} Throws an syntax error if expression is incorrect.
 * @throws {TypeError} Throws an type error if incorrect type arguments were passed.
 * @returns {Number} Result of an expression with a substituted value x (if expression is correct).
 */
const solve = (expression, x) => {
	if (typeof expression !== 'string' || typeof x !== 'number' || x % 1 !== 0) {
		throw new TypeError('Incorrect type of parameters');
	}
	if (!bracketsCheck(expression)) {
		throw new SyntaxError('Incorrect brackets amount in given expression');
	}
	const expr = new RegExp(/^[x0-9()+*-\s]*$/);
	if (expr.test(expression) === false) {
		throw new SyntaxError('Incorrect symbols in given expression');
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
 * bracketsCheck('(x + 2) + (x + 3)');
 * @example
 * // returns false
 * bracketsCheck('((x + 2)');
 * @example
 * // returns false
 * bracketsCheck('(x + 2))');
 * @throws {TypeError} Throws an type error if incorrect type argument was passed.
 * @returns {Boolean} true if expression is bracket-correct, false otherwise.
 */
const bracketsCheck = (expression) => {
	if (typeof expression !== 'string') {
		throw new TypeError('Incorrect type of parameter');
	}

	return expression.split('(').length === expression.split(')').length;
}
