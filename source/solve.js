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
	let result;
	try {
		result = eval(expression.replaceAll('x', x));
	} catch (error) { ; }

	return result;
}
