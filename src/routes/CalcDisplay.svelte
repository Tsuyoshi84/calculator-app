<script lang="ts">
	interface Props {
		displayValue?: string;
	}

	let { displayValue = '' }: Props = $props();
</script>

<div class="display" data-testid="display">
	{displayValue}
</div>

<style>
	.display {
		inline-size: 100%;
		min-block-size: 92px;
		padding-inline: 1.5rem;
		padding-block: 1rem;
		border-radius: 1rem;
		font-size: 2.5rem;
		text-align: end;
		color: var(--color-text-board);
		background-color: var(--color-bg-screen);
	}

	@media (width >= 768px) {
		.display {
			min-block-size: 116px;
			font-size: 3.5rem;
		}
	}
</style>
