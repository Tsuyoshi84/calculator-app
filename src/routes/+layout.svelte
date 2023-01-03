<script>
	import '../app.css';
	import { theme } from '../stores/theme';
</script>

<div class="app" data-theme={$theme}>
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		background-color: var(--color-bg-main);
		block-size: 100%;
	}

	main {
		height: 100%;
	}

	.app[data-theme='1'] {
		--color-bg-main: hsl(222, 26%, 31%);
		--color-bg-sub: hsl(223, 31%, 20%);
		--color-bg-screen: hsl(224, 36%, 15%);

		--color-button-bg-normal: hsl(30, 25%, 89%);
		--color-button-bg-normal-active: hsl(30, 25%, 95%);
		--color-button-shadow-normal: hsl(28, 16%, 65%);

		--color-button-bg-clear: hsl(225, 21%, 49%);
		--color-button-bg-clear-active: hsl(225, 21%, 59%);
		--color-button-shadow-clear: hsl(224, 28%, 35%);

		--color-button-bg-submit: hsl(6, 63%, 50%);
		--color-button-bg-submit-active: hsl(6, 63%, 60%);
		--color-button-shadow-submit: hsl(6, 70%, 34%);
		--color-button-text-submit: var(--color-text-sub);

		--color-text-main: hsl(221, 14%, 31%);
		--color-text-sub: hsl(0, 0%, 100%);
		--color-text-board: hsl(0, 0%, 100%);
	}

	.app[data-theme='2'] {
		--color-bg-main: hsl(0, 0%, 90%);
		--color-bg-sub: hsl(0, 5%, 81%);
		--color-bg-screen: hsl(0, 0%, 93%);

		--color-button-bg-normal: hsl(45, 7%, 89%);
		--color-button-bg-normal-active: hsl(45, 7%, 95%);
		--color-button-shadow-normal: hsl(35, 11%, 61%);

		--color-button-bg-clear: hsl(185, 42%, 37%);
		--color-button-bg-clear-active: hsl(185, 42%, 47%);
		--color-button-shadow-clear: hsl(185, 58%, 25%);

		--color-button-bg-submit: hsl(25, 98%, 40%);
		--color-button-bg-submit-active: hsl(25, 98%, 50%);
		--color-button-shadow-submit: hsl(25, 99%, 27%);
		--color-button-text-submit: var(--color-text-sub);

		--color-text-main: hsl(60, 10%, 19%);
		--color-text-sub: hsl(0, 0%, 100%);
		--color-text-board: hsl(60, 10%, 19%);
	}

	.app[data-theme='3'] {
		--color-bg-main: hsl(268, 75%, 9%);
		--color-bg-sub: hsl(268, 71%, 12%);
		--color-bg-screen: hsl(268, 71%, 12%);

		--color-button-bg-normal: hsl(268, 47%, 21%);
		--color-button-bg-normal-active: hsl(268, 47%, 31%);
		--color-button-shadow-normal: hsl(290, 70%, 36%);

		--color-button-bg-clear: hsl(281, 89%, 26%);
		--color-button-bg-clear-active: hsl(281, 89%, 36%);
		--color-button-shadow-clear: hsl(285, 91%, 52%);

		--color-button-bg-submit: hsl(176, 100%, 44%);
		--color-button-bg-submit-active: hsl(176, 100%, 54%);
		--color-button-shadow-submit: hsl(177, 92%, 70%);
		--color-button-text-submit: hsl(198, 20%, 13%);

		--color-text-main: hsl(52, 100%, 62%);
		--color-text-sub: hsl(0, 0%, 100%);
		--color-text-board: hsl(52, 100%, 62%);
	}
</style>
