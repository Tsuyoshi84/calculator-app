<script>
	import CalcBoard from './CalcBoard.svelte';
</script>

<svelte:head>
	<title>Calculator App</title>
	<meta name="description" content="Calculator App" />
</svelte:head>

<div class="wrapper">
	<CalcBoard />
</div>

<style>
	.wrapper {
		display: grid;
		height: 100%;
		place-items: center;
	}
</style>
