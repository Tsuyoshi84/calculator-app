<script lang="ts">
	import type { Theme } from '../stores/theme';

	export let theme: Theme | undefined = undefined;
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
		color: var(--color-text-board);
		display: flex;
		gap: 1.5rem;
		justify-content: flex-end;
		align-items: flex-end;
	}

	.title {
		font-size: 0.8rem;
		margin-block-end: 0.7rem;
	}

	.switch-wrapper {
		max-inline-size: 70px;
	}

	.theme-numbers {
		display: flex;
		justify-content: space-between;
		font-size: 0.8rem;
		padding-inline: 0.5rem;
	}

	input[type='range'] {
		--thumb-size: 0.95rem;
		--range-track-height: 1.5rem;

		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
		inline-size: 100%;
	}

	/***** Track Styles *****/
	/***** Chrome, Safari, Opera, and Edge Chromium *****/
	input[type='range']::-webkit-slider-runnable-track {
		background: var(--color-bg-sub);
		block-size: var(--range-track-height);
		border-radius: 1rem;
		padding-inline: 0.3rem;
	}

	/******** Firefox ********/
	input[type='range']::-moz-range-track {
		background: var(--color-bg-sub);
		block-size: var(--range-track-height);
		border-radius: 1rem;
	}

	/***** Thumb Styles *****/
	/***** Chrome, Safari, Opera, and Edge Chromium *****/
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		background-color: var(--color-button-bg-submit);
		block-size: var(--thumb-size);
		inline-size: var(--thumb-size);
		margin-block-start: calc((var(--range-track-height) - var(--thumb-size)) / 2);
		border-radius: 50%;
	}
</style>
