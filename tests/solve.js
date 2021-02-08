'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});

	QUnit.test('solve работает правильно. Первый доп. тесты ', function (assert) {
		assert.strictEqual(solve('(x + 3 - x * 4) + x * x', 2), 1);
		assert.strictEqual(solve('(x + 2) * (x - 4) + 2 * (x - 1)', 3), -1);
	});

	QUnit.test('solve работает правильно. Вторые доп. тесты ', function (assert) {
		assert.strictEqual(solve('(x - 2) * 3', 4), 6);
		assert.strictEqual(solve('(x + 2) * 3', 4), 18);
		assert.strictEqual(solve('(x * 3) - (2 * x + 2)', 2), 0);
		assert.strictEqual(solve('(x + 2) * 0', 5), 0);
	});

	QUnit.test('solve работает правильно. Обработка случаев некорректного количества скобок ', function (assert) {
		assert.throws(() => solve('x + 1 )', 2), SyntaxError);
		assert.throws(() => solve('(x + 1', 2), SyntaxError);
		assert.throws(() => solve('(x + 1) + 3 )', 2), SyntaxError);
		assert.throws(() => solve('((x + 1) + 3', 2), SyntaxError);
	});

	QUnit.test('solve работает правильно. Обработка случаев некорректного символа в выражении ', function (assert) {
		assert.throws(() => solve('(x + 1) + 3 * y', 2), SyntaxError);
		assert.throws(() => solve('x / 2', 2), SyntaxError);
		assert.throws(() => solve('x % 2', 2), SyntaxError);
	});

	QUnit.test('solve работает правильно. Обработка случаев передачи некоррентых параметров ', function (assert) {
		assert.throws(() => solve(2, 2), TypeError);
		assert.throws(() => solve('x + 2', 'qwe'), TypeError);
		assert.throws(() => solve(2, 'x + 2'), TypeError);
	});
});
