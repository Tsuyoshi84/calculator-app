<script>
	import CalcBoard from './CalcBoard.svelte';
</script>

<svelte:head>
	<title>Calculator App</title>
	<meta name="description" content="Calculator App" />
</svelte:head>

<section>
	<CalcBoard />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
