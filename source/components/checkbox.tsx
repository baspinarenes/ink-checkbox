import React, {useState} from 'react';
import {Box, Text, useInput} from 'ink';
import figureSet from 'figures';
import {CheckboxProps} from '../types.js';
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
	} = props;
	const [checked, setChecked] = useState(defaultChecked);

	useInput((input, key) => {
		if (!focused) {
			return;
		}

		if (input === ' ') {
			setChecked(!checked);
			onChanged && onChanged(!checked, label, index);
		}

		if (input.toLowerCase() === 'y') {
			setChecked(true);
			onChanged && onChanged(true, label, index);
		}

		if (input.toLowerCase() === 'n') {
			setChecked(false);
			onChanged && onChanged(false, label, index);
		}

		if (key.return) {
			onSubmitted && onSubmitted(checked, label, index);
		}
	});

	const {gap, icon, bulletColor, labelColor} = calculateStyle(
		styles,
		checked,
		focused,
	);

	return (
		<Box gap={gap} {...wrapperStyles}>
			<Text color={bulletColor}>{figureSet[icon]}</Text>
			<Text color={labelColor}>{label}</Text>
		</Box>
	);
};
