export default {
	extends: ['stylelint-config-standard', 'stylelint-config-html', 'stylelint-config-pretty-order'],
	rules: {
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: 'global' }]
	}
};
