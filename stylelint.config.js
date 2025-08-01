export default {
	extends: ['stylelint-config-standard', 'stylelint-config-html', 'stylelint-config-pretty-order'],
	plugins: ['stylelint-use-logical-spec'],
	rules: {
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: 'global' }],
		'liberty/use-logical-spec': ['always'],
		'no-invalid-position-declaration': null
	}
};
