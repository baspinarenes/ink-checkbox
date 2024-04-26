import React from 'react';
import { Box, Text, useInput } from 'ink';
import figureSet from 'figures';
import { calculateStyle } from '../utils.js';
export const Checkbox = props => {
    const { label, focused = false, styles, wrapperStyles, onChanged, onSubmitted, } = props;
    const [selected, setSelected] = React.useState(props.selected);
    useInput((input, key) => {
        if (input === ' ') {
            setSelected(!selected);
            onChanged();
        }
        if (key.return) {
            onSubmitted();
        }
    });
    const { gap, icon, bulletColor, labelColor } = calculateStyle(styles, selected, focused);
    return (React.createElement(Box, { gap: gap, ...wrapperStyles },
        React.createElement(Text, { color: bulletColor }, figureSet[icon]),
        React.createElement(Text, { color: labelColor }, label)));
};
//# sourceMappingURL=checkbox.js.map