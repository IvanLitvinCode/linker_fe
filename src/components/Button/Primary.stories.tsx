import type { Meta, Story } from '@storybook/react';

import type { ButtonProps } from './Button';
import { Button } from './Button';

export default {
  title: 'Needl/Button/Primary',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: 'primary',
  size: 'large',
  label: 'Select and Continue',
  onClick: () => null,
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Select and Continue',
  onClick: () => null,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  variant: 'primary',
  size: 'small',
  label: 'Select and Continue',
  onClick: () => null,
};

export const PrimaryMediumDisabled = Template.bind({});
PrimaryMediumDisabled.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Select and Continue',
  disabled: true,
  onClick: () => null,
};

export const PrimaryMediumLoading = Template.bind({});
PrimaryMediumLoading.args = {
  variant: 'primary',
  size: 'medium',
  loading: true,
  label: 'Select and Continue',
  onClick: () => null,
};

export const PrimaryMediumFullWidth = Template.bind({});
PrimaryMediumFullWidth.args = {
  variant: 'primary',
  size: 'medium',
  fullWidth: true,
  label: 'Select and Continue',
  onClick: () => null,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  variant: 'primary',
  label: 'Button',
  startIcon: <i className='neu-share' />,
  onClick: () => null,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  variant: 'primary',
  label: 'Button',
  endIcon: <i className='neu-share' />,
  onClick: () => null,
};
