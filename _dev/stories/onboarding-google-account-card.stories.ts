import GoogleAccountCard from '../src/components/onboarding/google-account-card.vue'

export default {
  title: 'Onboarding/Components/Card - Google Account',
  component: GoogleAccountCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GoogleAccountCard },
  template: '<GoogleAccountCard v-bind="$props" />',
});

export const Disabled:any = Template.bind({});
Disabled.args = {
  isEnabled: false,
  isConnected: false,
};

export const NotConnected:any = Template.bind({});
NotConnected.args = {
  isEnabled: true,
  isConnected: false,
};

export const Connected:any = Template.bind({});
Connected.args = {
  isEnabled: true,
  isConnected: true,
};
