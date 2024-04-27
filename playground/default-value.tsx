import React, {useEffect, useState} from 'react';
import {render, Box, Text, useApp} from 'ink';
import {Checkbox} from '../source/index.js';
import {preparePlayground} from '../source/utils.js';
import BigText from 'ink-big-text';

preparePlayground();

const DefaultValueExample = () => {
	const [checked, setChecked] = useState(true);
	const [checkedOnSubmitted, setCheckedOnSubmitted] = useState<Boolean>();
	const {exit} = useApp();

	useEffect(() => {
		setTimeout(() => setChecked(false), 1000);
	}, []);

	useEffect(() => {
		checkedOnSubmitted !== undefined && exit();
	}, [checkedOnSubmitted]);

	return (
		<Box flexDirection="column" margin={1}>
			<BigText text="Demo: State Binding" font="tiny" colors={['blue']} />
			<Checkbox
				label="Checkbox"
				focused
				checked={checked}
				onSubmitted={props => {
					setCheckedOnSubmitted(props.checked);
				}}
				onChanged={props => setChecked(props.checked)}
			/>
			<Box flexDirection="column" marginTop={1}>
				<Text color="green">Changed as: {String(checked)}</Text>
				<Text color="green">
					Submitted as:{' '}
					{checkedOnSubmitted !== undefined && String(checkedOnSubmitted)}
				</Text>
			</Box>
		</Box>
	);
};

render(<DefaultValueExample />);
