import React, {useState} from 'react';
import {render, Box, Text} from 'ink';
import {Checkbox} from '../source/index.js';
import {preparePlayground} from '../source/utils.js';
import BigText from 'ink-big-text';

preparePlayground();

const StyleExample = () => {
	const [checked, setChecked] = useState(false);
	return (
		<Box flexDirection="column" margin={1}>
			<BigText text="Demo: Events" font="tiny" colors={['blue']} />
			<Checkbox
				label="Checkbox"
				focused
				onChanged={({checked}) => setChecked(checked)}
				styles={{
					icon: {
						checked: 'star',
						focused: 'star',
						normal: 'star',
					},
					color: {
						bullet: {
							checked: 'green',
							focused: 'white',
							normal: 'gray',
						},
						label: {
							checked: 'green',
							focused: 'white',
							normal: 'gray',
						},
					},
				}}
				wrapperStyles={{
					marginBottom: 2,
				}}
			/>
			<Box flexDirection="column" marginTop={1}>
				<Text color="green">Changed value: {String(checked)}</Text>
			</Box>
		</Box>
	);
};

render(<StyleExample />);
