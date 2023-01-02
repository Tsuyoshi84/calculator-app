import { assertDefined } from '$lib/images/utils';
import { writable, derived } from 'svelte/store';

type CalculationOperator = 'add' | 'subtract' | 'multiply' | 'divide' | 'calculate';

interface CalculationElement {
	operator: CalculationOperator;
	value: string;
}

function operatorToSymbol(operator: CalculationOperator) {
	switch (operator) {
		case 'add':
			return '+';
		case 'subtract':
			return '-';
		case 'multiply':
			return 'x';
		case 'divide':
			return '/';
		case 'calculate':
			return '=';
	}
}

// Format number by adding commas
function formatNumber(number: number | string) {
	const _number = typeof number === 'number' ? number : parseFloat(number);
	return _number.toLocaleString('en-US');
}

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

	return `${formatNumber(result)}`;
}

function createCalculator() {
	const calculationElements = writable<CalculationElement[]>([]);
	const { update, set } = calculationElements;

	const displayValue = derived<typeof calculationElements, string>(
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

	function addNumber(number: `${number}`) {
		update((elements) => {
			if (elements.length === 0) return [{ operator: 'add', value: number }];

			const lastElement = elements.at(-1);
			assertDefined(lastElement);

			const updatedElement = { ...lastElement, value: `${lastElement.value}${number}` };
			return [...elements.slice(0, -1), updatedElement];
		});
	}

	function addDecimal() {
		update((elements) => {
			if (elements.length === 0) return [{ operator: 'add', value: '.' }];

			const lastElement = elements.at(-1);
			assertDefined(lastElement);

			if (lastElement.value.includes('.')) return elements;

			const updatedElement = { ...lastElement, value: `${lastElement.value}.` };
			return [...elements.slice(0, -1), updatedElement];
		});
	}

	function addOperator(operator: CalculationOperator) {
		update((elements) => {
			if (elements.length === 0) {
				return [
					{ operator: 'add', value: '0' },
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

	function remove() {
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

	function reset() {
		set([]);
	}

	function calculate() {
		update((elements) => {
			if (elements.length === 0) return elements;

			const lastElement = elements.at(-1);
			assertDefined(lastElement);

			if (lastElement.value === '') return elements;

			return [...elements, { operator: 'calculate', value: '' }];
		});
	}

	return {
		subscribe: displayValue.subscribe,
		addNumber,
		addDecimal,
		addOperator,
		remove,
		calculate,
		reset
	};
}

export const calculator = createCalculator();

export type Theme = 1 | 2 | 3;
export const theme = writable<Theme>(1);
