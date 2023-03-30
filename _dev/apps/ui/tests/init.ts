import {BootstrapVue} from 'bootstrap-vue';
import { VueShowdownPlugin } from 'vue-showdown';
import '../showdown.js';
import router from '../src/router/index.js';
import i18n from '../src/lib/i18n.js';

let windowSpy;
let localVue; // eslint-disable-line
const defaultLocale = 'en';
let filters; // eslint-disable-line
let VBTooltip;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
  windowSpy.mockImplementation(() => ({
    // add data needed in window
    scrollTo: jest.fn(),
    addEventListener: jest.fn(),
    i18nSettings: {isoCode: 'fr', languageLocale: 'fr'},
  }));
  VBTooltip = jest.fn();
  /*filters = {
    timeConverterToDate: jest.fn(),
    timeConverterToHour: jest.fn(),
    changeCountriesCodesToNames: jest.fn().mockImplementation(changeCountriesCodesToNames),
    timeConverterToStringifiedDate: jest.fn().mockImplementation(() => ''),
    slugify: jest.fn().mockImplementation(() => 'foo'),
  };

  localVue.filter('timeConverterToDate', filters.timeConverterToDate);
  localVue.filter('timeConverterToHour', filters.timeConverterToHour);
  localVue.filter('changeCountriesCodesToNames', filters.changeCountriesCodesToNames);
  localVue.filter('timeConverterToStringifiedDate', filters.timeConverterToStringifiedDate);
  localVue.filter('slugify', filters.slugify);
  localVue.directive('b-tooltip', VBTooltip);*/
});

afterEach(() => {
  jest.resetAllMocks();
  windowSpy.mockRestore();
});

const config = {
  global: {
    provide: {
      router,
      i18n,
      BootstrapVue: BootstrapVue,
      VueShowdownPlugin: VueShowdownPlugin,
    },
  },
}
export default {config};

export {cloneStore} from './store';

export {localVue, filters};
