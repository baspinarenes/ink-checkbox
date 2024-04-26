export function calculateStyle(styles, checked, focused) {
	const status = checked ? 'checked' : focused ? 'focused' : 'normal';
	const stylesheet = {
		gap: styles?.gap || 1,
		icon: {
			checked: styles?.icon?.checked || 'circle',
			focused: styles?.icon?.focused || 'circle',
			normal: styles?.icon?.normal || 'circle',
		},
		bulletColor: {
			checked: styles?.color?.bullet?.checked || 'blue',
			focused: styles?.color?.bullet?.focused || 'blue',
			normal: styles?.color?.bullet?.normal || 'gray',
		},
		labelColor: {
			checked: styles?.color?.label?.checked || 'gray',
			focused: styles?.color?.label?.checked || 'whiteBright',
			normal: styles?.color?.label?.checked || 'gray',
		},
	};
	return {
		gap: stylesheet.gap,
		icon: stylesheet.icon[status],
		bulletColor: stylesheet.bulletColor[status],
		labelColor: stylesheet.labelColor[status],
	};
}
//# sourceMappingURL=utils.js.map
