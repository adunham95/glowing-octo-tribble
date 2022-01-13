import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './';

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args}/>

export const Primary = Template.bind({});
Primary.args = {};