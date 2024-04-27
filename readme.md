# ink-checkbox

> Checkbox component for [Ink](https://github.com/vadimdemedes/ink).

## Install

```
$ npm install ink-checkbox --save
```

## Usage

```jsx
import React, {useState} from 'react';
import {render, Box} from 'ink';
import {Checkbox} from 'ink-checkbox';

const Playground = () => {
  const [isFocused, setIsFocused] = useState(false);

  // Do something

  return (
    <Box>
      <Checkbox
        key={option.value}
        label={option.label}
        focused={isFocused}
        onChanged={(checked, label, index) => {
        	// Action
        }}
        onSubmitted={(checked, label, index) => {
        	// Action
        }}
      />
    </Box>
  );
};

render(<Playground />);
```

## Props

### Attributes

##### label

Type: `string`

Value to display next to the checkbox.

##### focused

Type: `string`

Checks if the cursor is above the checkbox. Highlights the highlighted checkbox using Ink's focus management.

##### index

Type: `number` \
Default: `undefined`

Checkbox identifier. If you are rendering more than one checkbox, it can be used instead of label to identify.

##### defaultChecked

Type: `boolean`\
Default: `false`

Controls whether the checkbox is selected by default.

##### wrapperStyles

Type: `Object`
Default: `{}`

Override props of wrapper Ink's Box component.

##### styles

Type: `Object`
Default: `{}`

Override default styles.

### Event Handlers

##### onChanged

Type: `Function`

Function to call for value updates. So it triggers when `Space`, `y` and `n` keys.

##### onSubmitted

Type: `Function`

Function to call for value submits. So it triggers when `Enter` keys.
