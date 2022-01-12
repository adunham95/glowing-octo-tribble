import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner, { EBannerStyleType } from './Banner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Banner',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
      id: 'test',
  },
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args}/>

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    bannerType: EBannerStyleType.INFO,
    id: 'test',
};

export const Info = Template.bind({});
Info.args = {
    bannerType: EBannerStyleType.INFO,
    id: 'test',
};

export const Warn = Template.bind({});
Warn.args = {
    bannerType: EBannerStyleType.WARN,
    id: 'test',
};

export const Error = Template.bind({});
Error.args = {
    bannerType: EBannerStyleType.ERROR,
    id: 'test',
};

export const Success = Template.bind({});
Success.args = {
  bannerType: EBannerStyleType.SUCCESS,
  id: 'test',
};