import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typeography from './Typeography';

const string = "hello";

export default {
  title: 'Layout/Typeography',
  component: Typeography,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Typeography>;

const Template: ComponentStory<typeof Typeography> = (args) => <Typeography {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    h1: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    block: string,
    p: string,
};