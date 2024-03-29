import { assertDefined } from '$lib/images/utils';
import { writable, derived } from 'svelte/store';

type CalculationOperator = 'add' | 'subtract' | 'multiply' | 'divide' | 'calculate';

interface CalculationElement {
	operator: CalculationOperator;
	value: string;
}

const OPERATOR_TO_SYMBOL = {
	add: '+',
	subtract: '-',
	multiply: 'x',
	divide: '/',
	calculate: '='
} as const satisfies Record<CalculationOperator, string>;

function operatorToSymbol(operator: CalculationOperator) {
	return OPERATOR_TO_SYMBOL[operator];
}

/**
 * Formats a number by adding commas for thousands separator and handling decimal places.
 * @param number - The number to be formatted.
 * @returns The formatted number as a string.
 */
function formatNumber(number: string): string {
	if (number === '.') return '0.';

	// Check if number includes decimal
	const [digitNumber, decimalNumber] = number.split('.');

	const formattedDigitNumber =
		digitNumber === '' ? '0' : parseFloat(digitNumber).toLocaleString('en-US');
	const formattedDecimalNumber = typeof decimalNumber === 'string' ? `.${decimalNumber}` : '';

	return `${formattedDigitNumber}${formattedDecimalNumber}`;
}

let lastResult = 0;
function calculateFromElements(elements: CalculationElement[]): string {
	if (elements.length === 0) return '';

	const targetElements = elements.slice(0, -1);
	let processedElements: CalculationElement[] = [];

	for (const { value, operator } of targetElements) {
		if (['add', 'subtract'].includes(operator)) {
			processedElements = [...processedElements, { operator, value }];
			continue;
		}

		const lastProcessedElement = processedElements.at(-1);
		assertDefined(lastProcessedElement);

		const lastProcessedValue = parseFloat(lastProcessedElement.value);

		if (operator === 'divide' && parseFloat(value) === 0) return 'Infinity';

		const newValue =
			operator === 'multiply'
				? lastProcessedValue * parseFloat(value)
				: lastProcessedValue / parseFloat(value);
		processedElements = [
			...processedElements.slice(0, -1),
			{ ...lastProcessedElement, value: `${newValue}` }
		];
	}

	let result = 0;

	for (const { value, operator } of processedElements) {
		const currentValue = parseFloat(value);

		if (operator === 'add') {
			result += currentValue;
			continue;
		}

		result -= currentValue;
	}

	lastResult = result;

	return `${formatNumber(result.toString())}`;
}

const calculationElements = writable<CalculationElement[]>([]);
const { update, set } = calculationElements;

function isReadyToCalculate(elements: CalculationElement[]): boolean {
	return elements.length === 0 || elements.at(-1)?.operator === 'calculate';
}

export const displayValue = derived<typeof calculationElements, string>(
	calculationElements,
	($calculationElements, set) => {
		if ($calculationElements.length === 0) {
			set('');
			return;
		}

		const lastElement: CalculationElement | undefined = $calculationElements.at(-1);
		assertDefined(lastElement);

		if (lastElement.operator === 'calculate') {
			set(calculateFromElements($calculationElements));
			return;
		}

		if (lastElement.value === '') {
			if ($calculationElements.length === 1) {
				set('');
			} else {
				const previousElement = $calculationElements.at(-2);
				assertDefined(previousElement);
				set(`${formatNumber(previousElement.value)} ${operatorToSymbol(lastElement.operator)}`);
			}
			return;
		}

		set(formatNumber(lastElement.value));
	}
);

export function addNumber(number: `${number}`): void {
	update((elements) => {
		if (isReadyToCalculate(elements)) return [{ operator: 'add', value: number }];

		const lastElement = elements.at(-1);
		assertDefined(lastElement);

		const updatedElement = { ...lastElement, value: `${lastElement.value}${number}` };
		return [...elements.slice(0, -1), updatedElement];
	});
}

export function addDecimal(): void {
	update((elements) => {
		if (isReadyToCalculate(elements)) return [{ operator: 'add', value: '.' }];

		const lastElement = elements.at(-1);
		assertDefined(lastElement);

		if (lastElement.value.includes('.')) return elements;

		const updatedElement = { ...lastElement, value: `${lastElement.value}.` };
		return [...elements.slice(0, -1), updatedElement];
	});
}

export function addOperator(operator: CalculationOperator): void {
	update((elements) => {
		if (elements.length === 0) {
			return [
				{ operator: 'add', value: '0' },
				{ operator, value: '' }
			];
		}

		if (elements.at(-1)?.operator === 'calculate') {
			return [
				{ operator: 'add', value: `${lastResult}` },
				{ operator, value: '' }
			];
		}

		const lastElement = elements.at(-1);
		assertDefined(lastElement);

		if (lastElement.value === '') {
			const updatedElement = { ...lastElement, operator };
			return [...elements.slice(0, -1), updatedElement];
		}

		return [...elements, { operator, value: '' }];
	});
}

export function remove() {
	update((elements) => {
		if (elements.length === 0) return elements;

		const lastElement = elements.at(-1);
		assertDefined(lastElement);

		if (lastElement.value === '') return elements.slice(0, -1);

		const updatedElement = {
			...lastElement,
			value: lastElement.value.slice(0, -1)
		};
		return [...elements.slice(0, -1), updatedElement];
	});
}

export function reset(): void {
	set([]);
}

export function calculate(): void {
	update((elements) => {
		if (elements.length === 0) return elements;

		const lastElement = elements.at(-1);
		assertDefined(lastElement);

		if (lastElement.value === '') return elements;

		return [...elements, { operator: 'calculate', value: '' }];
	});
}
