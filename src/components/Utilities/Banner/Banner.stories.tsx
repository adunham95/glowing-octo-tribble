import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner, { EBannerStyleType } from './Banner';

export default {
  title: 'Layout/Banner',
  component: Banner,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args}/>

export const Primary = Template.bind({});
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

export const Custom = Template.bind({});
Custom.args = {
  bannerType: EBannerStyleType.CUSTOM,
  id: 'test',
  customStyles: {
    background: 'bg-fuchsia-600',
    iconColor: 'bg-fuchsia-800',
    text: 'text-white',
    button: 'text-fuchsia-600 bg-white hover:bg-fuchsia-50',
    close: 'hover:bg-fuchsia-500 focus:ring-white',
  },
};