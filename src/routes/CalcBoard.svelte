<script lang="ts">
	import CalcButton from './CalcButton.svelte';
	import CalcDisplay from './CalcDisplay.svelte';
	import CalcThemeSwitch from './CalcThemeSwitch.svelte';
</script>

<section class="board">
	<h1 class="title">calc</h1>
	<div class="theme-switch">
		<CalcThemeSwitch />
	</div>
	<div class="display">
		<CalcDisplay />
	</div>
	<div class="buttons">
		<CalcButton type="normal" label="7" />
		<CalcButton type="normal" label="8" />
		<CalcButton type="normal" label="9" />
		<CalcButton type="clear" label="DEL" />
		<CalcButton type="normal" label="4" />
		<CalcButton type="normal" label="5" />
		<CalcButton type="normal" label="6" />
		<CalcButton type="normal" label="+" />
		<CalcButton type="normal" label="1" />
		<CalcButton type="normal" label="2" />
		<CalcButton type="normal" label="3" />
		<CalcButton type="normal" label="-" />
		<CalcButton type="normal" label="." />
		<CalcButton type="normal" label="0" />
		<CalcButton type="normal" label="/" />
		<CalcButton type="normal" label="x" />
		<CalcButton type="clear" label="RESET" large />
		<CalcButton type="submit" label="=" large />
	</div>
</section>

<style>
	.board {
		padding: 1rem;
		inline-size: 100%;
		max-inline-size: 572px;
		max-block-size: 668px;
		display: grid;
		gap: 2rem;
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
		color: var(--color-text-sub);
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
</style>
