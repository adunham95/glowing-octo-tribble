import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Code from './Code';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Post Component/Code',
  component: Code,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Code>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Code> = (args) => <Code {...args}>
    <code className="language-js">const text = 'world';
        console.log(`Hello`)
    </code>
</Code>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};