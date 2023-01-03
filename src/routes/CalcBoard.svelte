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
		<CalcButton type="normal" label="7" on:click={() => addNumber('7')} />
		<CalcButton type="normal" label="8" on:click={() => addNumber('8')} />
		<CalcButton type="normal" label="9" on:click={() => addNumber('9')} />
		<CalcButton type="clear" label="DEL" on:click={() => remove()} />
		<CalcButton type="normal" label="4" on:click={() => addNumber('4')} />
		<CalcButton type="normal" label="5" on:click={() => addNumber('5')} />
		<CalcButton type="normal" label="6" on:click={() => addNumber('6')} />
		<CalcButton type="normal" label="+" on:click={() => addOperator('add')} />
		<CalcButton type="normal" label="1" on:click={() => addNumber('1')} />
		<CalcButton type="normal" label="2" on:click={() => addNumber('2')} />
		<CalcButton type="normal" label="3" on:click={() => addNumber('3')} />
		<CalcButton type="normal" label="-" on:click={() => addOperator('subtract')} />
		<CalcButton type="normal" label="." on:click={() => addDecimal()} />
		<CalcButton type="normal" label="0" on:click={() => addNumber('0')} />
		<CalcButton type="normal" label="/" on:click={() => addOperator('divide')} />
		<CalcButton type="normal" label="x" on:click={() => addOperator('multiply')} />
		<CalcButton type="clear" label="RESET" large on:click={() => reset()} />
		<CalcButton type="submit" label="=" large on:click={() => calculate()} />
	</div>
</section>

<style>
	.board {
		padding: 1rem;
		inline-size: 100%;
		max-inline-size: 572px;
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(2, minmax(min-content, 1fr));
		grid-template-rows: repeat(2, minmax(min-content, 1fr));
		grid-template-areas:
			'title theme-switch'
			'display display'
			'buttons buttons';
	}

	.title {
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-text-board);
		margin: 0;
		grid-area: title;
		display: flex;
		align-items: center;
	}

	.theme-switch {
		grid-area: theme-switch;
	}

	.display {
		grid-area: display;
	}

	.buttons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-gap: 1rem;
		background-color: var(--color-bg-sub);
		padding: 1.5rem;
		inline-size: 100%;
		min-block-size: 420px;
		border-radius: 1rem;
		grid-area: buttons;
	}

	@media (min-width: 768px) {
		.buttons {
			gap: 1.5rem;
		}
	}
</style>
