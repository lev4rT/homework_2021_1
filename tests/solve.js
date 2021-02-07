'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);

		// Additional tests:
		assert.strictEqual(solve('(x + 3 - x * 4) + x * x', 2), 1);
		assert.strictEqual(solve('(x + 2) * (x - 4) + 2 * (x - 1)', 3), -1);

		// And another tests:
		assert.strictEqual(solve('(x - 2) * 3', 4), 6);
		assert.strictEqual(solve('(x + 2) * 3', 4), 18);
		assert.strictEqual(solve('(x * 3) - (2 * x + 2)', 2), 0);
		assert.strictEqual(solve('(x + 2) * 0', 5), 0);

		// Incorrect expression strings tests:
		// Incorrect close bracket
		assert.strictEqual(solve('x + 1 )', 2), undefined);
		// Incorrect open bracket
		assert.strictEqual(solve('(x + 1', 2), undefined);
		// Open brackets amount != close brackets amount
		assert.strictEqual(solve('(x + 1) + 3 )', 2), undefined);
		// Close brackets amount != open brackets amount
		assert.strictEqual(solve('((x + 1) + 3', 2), undefined);
		// Undefined 'y' parameter was given
		assert.strictEqual(solve('(x + 1) + 3 * y', 2), undefined);
	});
});
