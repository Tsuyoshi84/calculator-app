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
		place-items: center;
		height: 100%;
	}
</style>
