import events from 'events';
import {CheckboxProps, Color, Icon} from './types.js';

export function calculateStyle(
	styles: CheckboxProps['styles'],
	checked: boolean,
	focused: boolean,
): {
	gap: number;
	icon: Icon;
	bulletColor: Color;
	labelColor: Color;
} {
	const status = checked ? 'checked' : focused ? 'focused' : 'normal';

	const stylesheet = {
		gap: styles?.gap || 1,
		icon: {
			checked: styles?.icon?.checked || 'lozenge',
			focused: styles?.icon?.focused || 'lozengeOutline',
			normal: styles?.icon?.normal || 'lozengeOutline',
		},
		bulletColor: {
			checked: styles?.color?.bullet?.checked || 'blue',
			focused: styles?.color?.bullet?.focused || 'white',
			normal: styles?.color?.bullet?.normal || 'gray',
		},
		labelColor: {
			checked: styles?.color?.label?.checked || 'whiteBright',
			focused: styles?.color?.label?.focused || 'white',
			normal: styles?.color?.label?.normal || 'gray',
		},
	};

	return {
		gap: stylesheet.gap,
		icon: stylesheet.icon[status]!,
		bulletColor: stylesheet.bulletColor[status]!,
		labelColor: stylesheet.labelColor[status]!,
	};
}

export function preparePlayground() {
	events.EventEmitter.prototype.setMaxListeners(100);
}
