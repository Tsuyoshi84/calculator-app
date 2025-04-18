import js from '@eslint/js';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tsEslint from 'typescript-eslint';
import globals from 'globals';

export default tsEslint.config(
	js.configs.recommended,
	...tsEslint.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended'],
	...eslintPluginSvelte.configs['flat/prettier'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.node, ...globals.browser },
			parser: svelteParser,
			parserOptions: {
				parser: tsEslint.parser,
				extraFileExtensions: ['.svelte'],
				project: './tsconfig.json'
			}
		}
	},
	{
		ignores: [
			'**/.svelte-kit',
			'**/.vercel',
			'**/.yarn',
			'**/build',
			'**/node_modules',
			'**/package'
		]
	}
);
