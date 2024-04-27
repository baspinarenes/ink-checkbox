import React, {useState} from 'react';
import {render, Box, Text} from 'ink';
import {Checkbox} from '../source/index.js';
import {preparePlayground} from '../source/utils.js';
import BigText from 'ink-big-text';

preparePlayground();

const EventsExample = () => {
	const [checked, setChecked] = useState(false);
	const [checkedOnSubmitted, setCheckedOnSubmitted] = useState(false);

	return (
		<Box flexDirection="column" margin={1}>
			<BigText text="Demo: Events" font="tiny" colors={['blue']} />
			<Checkbox
				label="Checkbox"
				focused
				onSubmitted={({checked}) => setCheckedOnSubmitted(checked)}
				onChanged={({checked}) => setChecked(checked)}
			/>
			<Box flexDirection="column" marginTop={1}>
				<Text color="green">Changed value: {String(checked)}</Text>
				<Text color="green">Submitted: {String(checkedOnSubmitted)}</Text>
			</Box>
		</Box>
	);
};

render(<EventsExample />);
