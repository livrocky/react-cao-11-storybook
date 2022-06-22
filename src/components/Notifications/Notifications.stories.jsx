import React from 'react';
import Notification from './Notification';

export default {
  title: 'Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

// funcijos kopija
export const DangerAlertArgs = Template.bind({});
DangerAlertArgs.args = {
  variant: 'danger',
  children: 'This is a danger alert',
};

export const WarningAlertArgs = Template.bind({});
DangerAlertArgs.args = {
  variant: 'warning',
  children: 'This is warning alert',
};

export const InfoAlertArgs = Template.bind({});
DangerAlertArgs.args = {
  variant: 'info',
  children: 'This is a info alert',
};

export const SuccessAlertArgs = Template.bind({});
DangerAlertArgs.args = {
  variant: 'success',
  children: 'This is a success alert',
};
