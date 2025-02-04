export const initialStateApp = {
  psxMktgWithGoogleApiUrl: '',
  psxMktgWithGoogleShopUrl: 'https://my-shop.com',
  psxMktgWithGoogleAdminUrl: 'https://my-shop.com/admin-dev',
  psxMktgWithGoogleAdminAjaxUrl: '/',
  shopIdPsAccounts: '',
  tokenPsAccounts: '',
  psxMtgWithGoogleDefaultShopCountry: 'FR',
  isCountryMemberOfEuropeanUnion: false,
  psxMktgWithGoogleShopCurrency: {
    isoCode: 'EUR',
  },
  psxMktgWithGoogleDocumentAndFaq: {
    faq: {},
    doc: '',
    contactUs: '',
  },
  psVersion: '',
  psxMktgWithGoogleModuleVersion: '',
  psxMktgWithGoogleModuleVersionNeeded: '1.10.4',
  eventbusVersionNeeded: '1.6.5',
  psxMktgWithGoogleMaintenanceSettingsUrl: '',
  psxMktgWithGoogleStoreSettingsUrl: '',
  shopIsOnMaintenanceMode: false,
  psxMktgWithGoogleProductDetailUrl: 'https://my-shop.com/admin-dev/index.php/sell/catalog/products/1?token=blabla',
  psxMktgWithGoogleCarriersUrl: '/',
  psxMktgWithGoogleAttributesUrl: '/',
};

export const stateWithMaintenanceModeOn = {
  ...initialStateApp,
  shopIsOnMaintenanceMode: true,
}

export default initialStateApp;
