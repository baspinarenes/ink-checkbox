import React, {useState} from 'react';
import {Box, Text, useInput} from 'ink';
import figureSet from 'figures';
import {CheckboxEventParams, CheckboxProps} from '../types.js';
import {calculateStyle} from '../utils.js';

export const Checkbox: React.FC<CheckboxProps> = props => {
	const {
		label,
		focused = false,
		defaultChecked = false,
		styles = {},
		wrapperStyles = {},
		index,
		onChanged,
		onSubmitted,
		disableInputHandler = false,
	} = props;
	const [checked, setChecked] = useState(defaultChecked);

	useInput(
		(input, key) => {
			if (!focused) {
				return;
			}

			if (input === ' ') {
				setChecked(!checked);
				onChanged && onChanged(getEventProps(!checked));
			}

			if (input.toLowerCase() === 'y') {
				setChecked(true);
				onChanged && onChanged(getEventProps(true));
			}

			if (input.toLowerCase() === 'n') {
				setChecked(false);
				onChanged && onChanged(getEventProps(false));
			}

			if (key.return) {
				onSubmitted && onSubmitted(getEventProps(checked));
			}
		},
		{isActive: !disableInputHandler},
	);

	const getEventProps = (checked: boolean): CheckboxEventParams => {
		return {
			checked,
			label,
			index: index ?? -1,
		};
	};

	const {gap, icon, bulletColor, labelColor} = calculateStyle(
		styles,
		checked,
		focused,
	);

	return (
		<Box gap={gap} {...wrapperStyles} alignItems="center">
			<Text color={bulletColor}>{figureSet[icon]}</Text>
			<Text color={labelColor}>{label}</Text>
		</Box>
	);
};
