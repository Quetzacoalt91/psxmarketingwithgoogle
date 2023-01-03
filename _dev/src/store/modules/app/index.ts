import {state as initialState, State} from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const {
  psxMktgWithGoogleApiUrl,
  psxMktgWithGoogleAdminUrl,
  psxMktgWithGoogleAdminAjaxUrl,
  psxMktgWithGoogleLoggedBackInUrl,
  psxMktgWithGoogleShopUrl,
  isCountryMemberOfEuropeanUnion,
  psxMktgWithGoogleShopCurrency,
  psVersion,
  phpVersion,
  psxMktgWithGoogleModuleVersion,
  psxMktgWithGoogleMaintenanceSettingsUrl,
  psxMktgWithGoogleCarriersUrl,
  psxMktgWithGoogleAttributesUrl,
  psxMktgWithGoogleProductDetailUrl,
  psxMktgWithGoogleStoreSettingsUrl,
  psxMtgWithGoogleDefaultShopCountry,
  psxMktgWithGoogleActiveCountries,
  psxMktgWithGoogleOnProductionEnvironment,
  psxMktgWithGoogleEnableLink,
  psxMktgWithGoogleModuleIsEnabled,
}: any = window;

const state: State = {
  ...initialState,
  psxMktgWithGoogleApiUrl: psxMktgWithGoogleApiUrl || '',
  psxMktgWithGoogleAdminUrl: psxMktgWithGoogleAdminUrl || '',
  psxMktgWithGoogleAdminAjaxUrl: psxMktgWithGoogleAdminAjaxUrl || '',
  psxMktgWithGoogleLoggedBackInUrl: psxMktgWithGoogleLoggedBackInUrl || true,
  psxMktgWithGoogleShopUrl: psxMktgWithGoogleShopUrl || '',
  isCountryMemberOfEuropeanUnion: isCountryMemberOfEuropeanUnion || false,
  psxMktgWithGoogleShopCurrency: psxMktgWithGoogleShopCurrency || {},
  psVersion: psVersion || '',
  phpVersion: phpVersion || '',
  psxMktgWithGoogleModuleVersion: psxMktgWithGoogleModuleVersion || '',
  psxMktgWithGoogleMaintenanceSettingsUrl: psxMktgWithGoogleMaintenanceSettingsUrl || '',
  psxMktgWithGoogleProductDetailUrl: psxMktgWithGoogleProductDetailUrl || '',
  psxMktgWithGoogleStoreSettingsUrl: psxMktgWithGoogleStoreSettingsUrl || '',
  psxMtgWithGoogleDefaultShopCountry: psxMtgWithGoogleDefaultShopCountry || {},
  psxMktgWithGoogleActiveCountries: psxMktgWithGoogleActiveCountries || [],
  psxMktgWithGoogleEnableLink: psxMktgWithGoogleEnableLink || '',
  psxMktgWithGoogleModuleIsEnabled: psxMktgWithGoogleModuleIsEnabled || true,
  psxMktgWithGoogleOnProductionEnvironment: psxMktgWithGoogleOnProductionEnvironment || false,
  psxMktgWithGoogleCarriersUrl: psxMktgWithGoogleCarriersUrl || document.querySelector('#subtab-AdminCarriers a')?.getAttribute('href'),
  psxMktgWithGoogleAttributesUrl: psxMktgWithGoogleAttributesUrl || document.querySelector('#subtab-AdminParentAttributesGroups a')?.getAttribute('href'),
};

/**
 * Return minimal state with common data for all other stores
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
