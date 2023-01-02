<script>
	import '../app.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		background-color: var(--color-bg-main);
		block-size: 100%;
	}
</style>
