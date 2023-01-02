<script lang="ts">
	type ButtonType = 'normal' | 'clear' | 'submit';

	export let type: ButtonType = 'normal';
	export let label: string = '';
	export let large: boolean = false;
</script>

<button type="submit" class={`${type}`} class:large on:click>
	<div>
		{label}
	</div>
</button>

<style>
	button {
		--font-size: 1.2rem;

		cursor: pointer;
		color: var(--text-color);
		background-color: var(--background-color);
		font-size: var(--font-size);
		border: none;
		border-radius: 8px;
		box-shadow: 0 4px 0 0 var(--shadow-color);
		transition: translate 0.1s ease, box-shadow 0.1s ease;
	}

	button:where(:hover, :focus-visible) {
		background-color: var(--active-background-color);
	}

	button:active {
		translate: 0 4px;
		box-shadow: 0 0 0 0 var(--shadow-color);
	}

	button.large {
		grid-column: span 2;
	}

	button.normal {
		--text-color: var(--color-text-main);
		--background-color: var(--color-button-bg-normal);
		--active-background-color: var(--color-button-bg-normal-active);
		--shadow-color: var(--color-button-shadow-normal);
		--font-size: 2rem;
	}

	button.clear {
		--text-color: var(--color-text-sub);
		--background-color: var(--color-button-bg-clear);
		--active-background-color: var(--color-button-bg-clear-active);
		--shadow-color: var(--color-button-shadow-clear);
	}

	button.submit {
		--text-color: var(--color-text-sub);
		--background-color: var(--color-button-bg-submit);
		--active-background-color: var(--color-button-bg-submit-active);
		--shadow-color: var(--color-button-shadow-submit);
	}

	button > div {
		translate: 0 0.3rem;
	}
</style>
