/// <reference types="react" />
import {ForegroundColorName} from 'chalk';
import figureSet from 'figures';
import {Box} from 'ink';
type Status = 'selected' | 'focused' | 'normal';
export type Icon = keyof typeof figureSet;
export type Color = ForegroundColorName;
type Props = React.ComponentProps<typeof Box>;
export type CheckboxProps = {
	label: string;
	checked: boolean;
	wrapperStyles?: Props;
	styles?: {
		gap?: number;
		icon?: Record<Status, Icon>;
		color?: {
			bullet?: Record<Status, Color>;
			label?: Record<Status, Color>;
		};
	};
	focused?: boolean;
	onChanged: () => void;
	onSubmitted: () => void;
};
export {};
