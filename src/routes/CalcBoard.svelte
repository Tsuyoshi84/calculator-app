<script lang="ts">
	import CalcButton from './CalcButton.svelte';
	import CalcDisplay from './CalcDisplay.svelte';
	import CalcThemeSwitch from './CalcThemeSwitch.svelte';
	import {
		displayValue,
		addNumber,
		addDecimal,
		addOperator,
		remove,
		reset,
		calculate
	} from '../stores/calculation';
	import { theme } from '../stores/theme';
</script>

<section class="board">
	<h1 class="title">calc</h1>
	<div class="theme-switch">
		<CalcThemeSwitch bind:theme={$theme} />
	</div>
	<div class="display">
		<CalcDisplay displayValue={$displayValue} />
	</div>
	<div class="buttons">
		<CalcButton type="normal" label="7" onclick={() => addNumber('7')} />
		<CalcButton type="normal" label="8" onclick={() => addNumber('8')} />
		<CalcButton type="normal" label="9" onclick={() => addNumber('9')} />
		<CalcButton type="clear" label="DEL" onclick={() => remove()} />
		<CalcButton type="normal" label="4" onclick={() => addNumber('4')} />
		<CalcButton type="normal" label="5" onclick={() => addNumber('5')} />
		<CalcButton type="normal" label="6" onclick={() => addNumber('6')} />
		<CalcButton type="normal" label="+" onclick={() => addOperator('add')} />
		<CalcButton type="normal" label="1" onclick={() => addNumber('1')} />
		<CalcButton type="normal" label="2" onclick={() => addNumber('2')} />
		<CalcButton type="normal" label="3" onclick={() => addNumber('3')} />
		<CalcButton type="normal" label="-" onclick={() => addOperator('subtract')} />
		<CalcButton type="normal" label="." onclick={() => addDecimal()} />
		<CalcButton type="normal" label="0" onclick={() => addNumber('0')} />
		<CalcButton type="normal" label="/" onclick={() => addOperator('divide')} />
		<CalcButton type="normal" label="x" onclick={() => addOperator('multiply')} />
		<CalcButton type="clear" label="RESET" large onclick={() => reset()} />
		<CalcButton type="submit" label="=" large onclick={() => calculate()} />
	</div>
</section>

<style>
	.board {
		display: grid;
		inline-size: 100%;
		max-inline-size: 572px;
		padding: 1rem;
		grid-template: repeat(3, min-content) / repeat(2, minmax(min-content, 1fr));
		grid-template-areas:
			'title theme-switch'
			'display display'
			'buttons buttons';
		gap: 1.5rem;
	}

	.title {
		display: flex;
		margin: 0;
		grid-area: title;
		align-items: center;
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-text-board);
	}

	.theme-switch {
		grid-area: theme-switch;
	}

	.display {
		grid-area: display;
	}

	.buttons {
		display: grid;
		inline-size: 100%;
		min-block-size: 420px;
		padding: 1.5rem;
		border-radius: 1rem;
		grid-area: buttons;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, 1fr);
		gap: 1rem;
		background-color: var(--color-bg-sub);
	}

	@media (width >= 768px) {
		.buttons {
			gap: 1.5rem;
		}
	}
</style>
