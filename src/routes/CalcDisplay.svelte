<script lang="ts">
	export let displayValue = '';
</script>

<div class="display" data-testid="display">
	{displayValue}
</div>

<style>
	.display {
		background-color: var(--color-bg-screen);
		padding-block: 1rem;
		padding-inline: 1.5rem;
		inline-size: 100%;
		border-radius: 1rem;
		font-size: 2.5rem;
		text-align: end;
		color: var(--color-text-board);
		min-block-size: 92px;
	}

	@media (min-width: 768px) {
		.display {
			font-size: 3.5rem;
			min-block-size: 116px;
		}
	}
</style>
