import {ForegroundColorName} from 'chalk';
import figureSet from 'figures';
import {Box} from 'ink';

type Status = 'checked' | 'focused' | 'normal';
export type Icon = keyof typeof figureSet;
export type Color = ForegroundColorName;
type Props = React.ComponentProps<typeof Box>;

export type CheckboxEventParams = {
	checked: boolean;
	label: string;
	index: number;
};

export type CheckboxProps = {
	index?: number;
	label: string;
	focused: boolean;
	defaultChecked?: boolean;
	wrapperStyles?: Props;
	styles?: {
		gap?: number;
		icon?: Record<Status, Icon>;
		color?: {
			bullet?: Record<Status, Color>;
			label?: Record<Status, Color>;
		};
	};
	disableInputHandler?: boolean;
	onChanged?: (props: CheckboxEventParams) => void;
	onSubmitted?: (props: CheckboxEventParams) => void;
};
