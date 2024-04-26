import { CheckboxProps, Color, Icon } from './types.js';
export declare function calculateStyle(styles: CheckboxProps['styles'], selected: boolean, focused: boolean): {
    gap: number;
    icon: Icon;
    bulletColor: Color;
    labelColor: Color;
};
