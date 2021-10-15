const {dateGenerator} = require('../.storybook/utils/date-generator');
import ProductsPerformanceTable from '../src/components/smart-shopping-campaign/reporting/products-performance/products-performance-table.vue'
import {googleAdsAccountChosen} from '../.storybook/mock/google-ads';

export default {
  title: 'Reporting/Products Performance',
  component: ProductsPerformanceTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProductsPerformanceTable },
  template: `
    <div>
      <ProductsPerformanceTable v-bind="$props"/>
    </div>
  `,
  beforeMount: args.beforeMount,
});

export const Table:any = Template.bind({});
Table.args = {
  beforeMount(this: any) {
    this.$store.state.googleAds = Object.assign({}, googleAdsAccountChosen);
    // fake date that will be intercepted by the storybook middleware to return results
    this.$store.state.smartShoppingCampaigns.reporting.request.dateRange.startDate = dateGenerator(6);
    this.$store.state.smartShoppingCampaigns.reporting.request.dateRange.endDate = dateGenerator(0);
  },
}

export const Empty:any = Template.bind({});
Empty.args = {
  beforeMount(this: any) {
    this.$store.state.googleAds = Object.assign({}, googleAdsAccountChosen);
  },
}

export const ErrorApi:any = Template.bind({});
ErrorApi.args = {
  beforeMount(this: any) {
    this.$store.state.googleAds = Object.assign({}, googleAdsAccountChosen);
    // fake date that will be intercepted by the storybook middleware to return api error
    this.$store.state.smartShoppingCampaigns.reporting.request.dateRange.startDate = dateGenerator(1);
    this.$store.state.smartShoppingCampaigns.reporting.request.dateRange.endDate = dateGenerator(0);  },
}
