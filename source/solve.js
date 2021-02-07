'use strict';

/**
 * Solves expressions of the form (x + 2) + (x - 2) + (x * 2) with a given x parameter.
 * Supported operations: '+', '-', '*'.
 * @example
 * // returns 3
 * solve('x + 2', 1);
 * @example
 * // returns 4
 * solve('x * 2', 2);
 * @example
 * // returns 1
 * solve('x - 2', 3);
 * @returns {Number} Returns the result of an expression with a substituted value x.
 */
const solve = (expression, x) => {
	let result = undefined;
	try {
		result = eval(expression.replaceAll("x", x));
	} catch (error) { ; }

	return result;
}
