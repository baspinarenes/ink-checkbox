import React, {useEffect} from 'react';
import {render, Box, Text, useApp} from 'ink';
import {Checkbox} from '../source/index.js';
import {preparePlayground} from '../source/utils.js';
import BigText from 'ink-big-text';

preparePlayground();

const options = [
	{
		label: 'X agreement',
		value: 'x-agreement',
		checked: false,
	},
	{
		label: 'Y agreement',
		value: 'y-agreement',
		checked: false,
	},
	{
		label: 'Z agreement',
		value: 'z-agreement',
		checked: false,
	},
];

const EventsExample = () => {
	const [focusedCheckboxIndex, setFocusedCheckboxIndex] = React.useState(0);
	const [checkedOptions, setCheckedOptions] = React.useState<string[]>([]);
	const isSelectionComplete = focusedCheckboxIndex === options.length;
	const {exit} = useApp();

	useEffect(() => {
		if (isSelectionComplete) {
			setCheckedOptions(
				options.filter(option => option.checked).map(option => option.label),
			);

			setTimeout(() => {
				exit();
			}, 1000);
		}
	}, [isSelectionComplete]);

	return (
		<Box flexDirection="column">
			<BigText text="Demo: Multiple" font="tiny" colors={['blue']} />
			<Box flexDirection="column" gap={1}>
				<Text>Do you accept the agreements?</Text>
				<Box flexDirection="column" marginBottom={1}>
					{options.map((option, index) => (
						<Checkbox
							key={option.value}
							index={index}
							label={option.label}
							focused={focusedCheckboxIndex === index}
							onSubmitted={({checked}) => {
								setFocusedCheckboxIndex(index! + 1);
								options[index!]!.checked = checked;
							}}
						/>
					))}
				</Box>
			</Box>
			{isSelectionComplete && (
				<Text>Accepted agreements: {checkedOptions.join(', ')}</Text>
			)}
		</Box>
	);
};

render(<EventsExample />);
