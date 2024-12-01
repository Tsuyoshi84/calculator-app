<script lang="ts">
	type ButtonType = 'normal' | 'clear' | 'submit';

	interface Props {
		type?: ButtonType;
		label?: string;
		large?: boolean;
		invert?: boolean;
		onclick?: () => void;
	}

	let {
		type = 'normal',
		label = '',
		large = false,
		invert = false,
		onclick = () => {}
	}: Props = $props();
</script>

<button type="submit" class={`${type}`} class:large class:invert {onclick}>
	{label}
</button>

<style>
	button {
		--font-size: 1.2rem;

		min-block-size: 62px;
		padding-block-start: 0.6rem;
		border: none;
		border-radius: 8px;
		font-size: var(--font-size);
		color: var(--text-color);
		background-color: var(--background-color);
		box-shadow: 0 4px 0 0 var(--shadow-color);
		transition:
			translate 0.1s ease,
			box-shadow 0.1s ease;
		cursor: pointer;
	}

	button:where(:global(:hover, :focus-visible)) {
		background-color: var(--active-background-color);
	}

	button:active {
		box-shadow: 0 0 0 0 var(--shadow-color);
		translate: 0 4px;
	}

	button.large {
		grid-column: span 2;
	}

	button.normal {
		--text-color: var(--color-text-main);
		--background-color: var(--color-button-bg-normal);
		--active-background-color: var(--color-button-bg-normal-active);
		--shadow-color: var(--color-button-shadow-normal);

		font-size: calc(var(--font-size) * (2 / 1.2));
	}

	button.clear {
		--text-color: var(--color-text-sub);
		--background-color: var(--color-button-bg-clear);
		--active-background-color: var(--color-button-bg-clear-active);
		--shadow-color: var(--color-button-shadow-clear);
	}

	button.submit {
		--text-color: var(--color-button-text-submit);
		--background-color: var(--color-button-bg-submit);
		--active-background-color: var(--color-button-bg-submit-active);
		--shadow-color: var(--color-button-shadow-submit);
	}

	@media (width >= 768px) {
		button {
			--font-size: 1.5rem;

			min-block-size: 72px;
			padding-block-start: 0.7rem;
		}
	}
</style>
