import { Footer, FooterProps } from './Footer';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Group/Footer',
  component: Footer
} as Meta;


export const Default: Story<FooterProps> = (args) => <Footer {...args} />;
Default.args.button.label = 'Subscribe';
