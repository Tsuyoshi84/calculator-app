import { describe, it, expect, beforeEach } from 'vitest';
import { get } from 'svelte/store';
import {
	displayValue,
	addNumber,
	addDecimal,
	addOperator,
	calculate,
	remove,
	reset
} from './calculation';

describe('calculation', () => {
	beforeEach(() => {
		reset();
	});

	it('should show nothing first', () => {
		expect(get(displayValue)).toBe('');
	});

	it('should show number after adding', () => {
		addNumber('1');
		expect(get(displayValue)).toBe('1');

		addNumber('2');
		expect(get(displayValue)).toBe('12');

		addNumber('3');
		expect(get(displayValue)).toBe('123');
	});

	it('should show number after adding decimal', () => {
		addNumber('1');
		addDecimal();
		expect(get(displayValue)).toBe('1.');

		addNumber('2');
		expect(get(displayValue)).toBe('1.2');
	});

	it('should show "0." if add decimal before entering number', () => {
		addDecimal();
		expect(get(displayValue)).toBe('0.');
	});

	it('should show "0.0001"', () => {
		addDecimal();
		expect(get(displayValue)).toBe('0.');

		addNumber('0');
		expect(get(displayValue)).toBe('0.0');

		addNumber('0');
		expect(get(displayValue)).toBe('0.00');

		addNumber('0');
		expect(get(displayValue)).toBe('0.000');

		addNumber('1');
		expect(get(displayValue)).toBe('0.0001');
	});

	it('should show add symbol', () => {
		addNumber('1');
		addOperator('add');
		expect(get(displayValue)).toBe('1 +');
	});

	it('should show subtract symbol', () => {
		addNumber('1');
		addOperator('subtract');
		expect(get(displayValue)).toBe('1 -');
	});

	it('should show divide symbol', () => {
		addNumber('1');
		addOperator('divide');
		expect(get(displayValue)).toBe('1 /');
	});

	it('should show divide symbol', () => {
		addNumber('1');
		addOperator('multiply');
		expect(get(displayValue)).toBe('1 x');
	});

	it('should add two numbers', () => {
		addNumber('1');
		addOperator('add');
		addNumber('2');
		calculate();
		expect(get(displayValue)).toBe('3');
	});

	it('should subtract two numbers', () => {
		addNumber('1');
		addOperator('subtract');
		addNumber('2');
		calculate();
		expect(get(displayValue)).toBe('-1');
	});

	it('should multiply two numbers', () => {
		addNumber('2');
		addOperator('multiply');
		addNumber('6');
		calculate();
		expect(get(displayValue)).toBe('12');
	});

	it('should divide two numbers', () => {
		addNumber('8');
		addOperator('divide');
		addNumber('2');
		calculate();
		expect(get(displayValue)).toBe('4');
	});

	it('should prioritize multiply and divide', () => {
		// 2 + 3 x 4 / 2 - 1 = 7
		addNumber('2');
		addOperator('add');
		addNumber('3');
		addOperator('multiply');
		addNumber('4');
		addOperator('divide');
		addNumber('2');
		addOperator('subtract');
		addNumber('1');
		calculate();
		expect(get(displayValue)).toBe('7');
	});

	it('should resume when pressing operator after calculation', () => {
		// 2 + 3 = 5
		// 5 + 2 = 7

		addNumber('2');
		addOperator('add');
		addNumber('3');
		calculate();
		expect(get(displayValue)).toBe('5');

		addOperator('add');
		addNumber('2');
		calculate();
		expect(get(displayValue)).toBe('7');
	});

	it('should remove last character', () => {
		addNumber('1');
		addNumber('2');
		remove();
		expect(get(displayValue)).toBe('1');

		remove();
		expect(get(displayValue)).toBe('');
	});

	it('should start new calculation when pressing number after calculation', () => {
		addNumber('1');
		addOperator('add');
		addNumber('2');
		calculate();
		expect(get(displayValue)).toBe('3');

		addNumber('9');
		addOperator('add');
		addNumber('2');
		calculate();
		expect(get(displayValue)).toBe('11');
	});
});
