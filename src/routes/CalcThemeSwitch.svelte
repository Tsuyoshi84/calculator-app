<script lang="ts">
	import type { Theme } from '../stores/theme';

	interface Props {
		theme?: Theme | undefined;
	}

	let { theme = $bindable(undefined) }: Props = $props();
</script>

<div class="theme-switch">
	<div class="title">THEME</div>
	<div class="switch-wrapper">
		<div class="theme-numbers">
			<span>1</span>
			<span>2</span>
			<span>3</span>
		</div>
		<input
			bind:value={theme}
			aria-label="Theme switch"
			type="range"
			name="theme"
			data-testid="theme-switch"
			min="1"
			max="3"
			step="1"
		/>
	</div>
</div>

<style>
	.theme-switch {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		gap: 1.5rem;
		color: var(--color-text-board);
	}

	.title {
		margin-block-end: 0.7rem;
		font-size: 0.8rem;
	}

	.switch-wrapper {
		max-inline-size: 70px;
	}

	.theme-numbers {
		display: flex;
		padding-inline: 0.5rem;
		justify-content: space-between;
		font-size: 0.8rem;
	}

	input[type='range'] {
		--thumb-size: 0.95rem;
		--range-track-height: 1.5rem;

		inline-size: 100%;
		background: transparent;
		cursor: pointer;
		appearance: none;
	}

	/***** Track Styles *****/

	/***** Chrome, Safari, Opera, and Edge Chromium *****/
	input[type='range']::-webkit-slider-runnable-track {
		block-size: var(--range-track-height);
		padding-inline: 0.3rem;
		border-radius: 1rem;
		background: var(--color-bg-sub);
	}

	/******** Firefox ********/
	input[type='range']::-moz-range-track {
		block-size: var(--range-track-height);
		border-radius: 1rem;
		background: var(--color-bg-sub);
	}

	/***** Thumb Styles *****/

	/***** Chrome, Safari, Opera, and Edge Chromium *****/
	input[type='range']::-webkit-slider-thumb {
		inline-size: var(--thumb-size);
		block-size: var(--thumb-size);
		margin-block-start: calc((var(--range-track-height) - var(--thumb-size)) / 2);
		border-radius: 50%;
		background-color: var(--color-button-bg-submit);
		appearance: none; /* Override default look */
	}
</style>
