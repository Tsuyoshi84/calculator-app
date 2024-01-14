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
		block-size: 100%;
		background-color: var(--color-bg-main);
	}

	main {
		height: 100%;
	}

	.app[data-theme='1'] {
		--color-bg-main: hsl(222deg 26% 31%);
		--color-bg-sub: hsl(223deg 31% 20%);
		--color-bg-screen: hsl(224deg 36% 15%);
		--color-button-bg-normal: hsl(30deg 25% 89%);
		--color-button-bg-normal-active: hsl(30deg 25% 95%);
		--color-button-shadow-normal: hsl(28deg 16% 65%);
		--color-button-bg-clear: hsl(225deg 21% 49%);
		--color-button-bg-clear-active: hsl(225deg 21% 59%);
		--color-button-shadow-clear: hsl(224deg 28% 35%);
		--color-button-bg-submit: hsl(6deg 63% 50%);
		--color-button-bg-submit-active: hsl(6deg 63% 60%);
		--color-button-shadow-submit: hsl(6deg 70% 34%);
		--color-button-text-submit: var(--color-text-sub);
		--color-text-main: hsl(221deg 14% 31%);
		--color-text-sub: hsl(0deg 0% 100%);
		--color-text-board: hsl(0deg 0% 100%);
	}

	.app[data-theme='2'] {
		--color-bg-main: hsl(0deg 0% 90%);
		--color-bg-sub: hsl(0deg 5% 81%);
		--color-bg-screen: hsl(0deg 0% 93%);
		--color-button-bg-normal: hsl(45deg 7% 89%);
		--color-button-bg-normal-active: hsl(45deg 7% 95%);
		--color-button-shadow-normal: hsl(35deg 11% 61%);
		--color-button-bg-clear: hsl(185deg 42% 37%);
		--color-button-bg-clear-active: hsl(185deg 42% 47%);
		--color-button-shadow-clear: hsl(185deg 58% 25%);
		--color-button-bg-submit: hsl(25deg 98% 40%);
		--color-button-bg-submit-active: hsl(25deg 98% 50%);
		--color-button-shadow-submit: hsl(25deg 99% 27%);
		--color-button-text-submit: var(--color-text-sub);
		--color-text-main: hsl(60deg 10% 19%);
		--color-text-sub: hsl(0deg 0% 100%);
		--color-text-board: hsl(60deg 10% 19%);
	}

	.app[data-theme='3'] {
		--color-bg-main: hsl(268deg 75% 9%);
		--color-bg-sub: hsl(268deg 71% 12%);
		--color-bg-screen: hsl(268deg 71% 12%);
		--color-button-bg-normal: hsl(268deg 47% 21%);
		--color-button-bg-normal-active: hsl(268deg 47% 31%);
		--color-button-shadow-normal: hsl(290deg 70% 36%);
		--color-button-bg-clear: hsl(281deg 89% 26%);
		--color-button-bg-clear-active: hsl(281deg 89% 36%);
		--color-button-shadow-clear: hsl(285deg 91% 52%);
		--color-button-bg-submit: hsl(176deg 100% 44%);
		--color-button-bg-submit-active: hsl(176deg 100% 54%);
		--color-button-shadow-submit: hsl(177deg 92% 70%);
		--color-button-text-submit: hsl(198deg 20% 13%);
		--color-text-main: hsl(52deg 100% 62%);
		--color-text-sub: hsl(0deg 0% 100%);
		--color-text-board: hsl(52deg 100% 62%);
	}
</style>
