<script lang="ts">
	export let displayValue: string = '';
</script>

<div class="display">
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
		color: var(--color-text-sub);
		min-block-size: 92px;
	}
</style>
