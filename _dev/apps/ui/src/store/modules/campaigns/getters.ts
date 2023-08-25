/**
 * 2007-2021 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2021 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {
  CampaignObject,
  Kpis,
  State as LocalState,
  ProductPerformances,
  FiltersPerformances,
  ConversionAction,
  Dimension,
  FiltersChosen,
  DailyResultTypes,
  CampaignListOrdering,
} from './state';
import GettersTypes from './getters-types';
import ReportingPeriod from '@/enums/reporting/ReportingPeriod';

// locales for dates
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/it';
import 'dayjs/locale/nl';
import 'dayjs/locale/pt';
import 'dayjs/locale/pl';
import 'dayjs/locale/ru';

dayjs.extend(localizedFormat);

export default {
  [GettersTypes.GET_REMARKETING_TRACKING_TAG_IS_SET](
    state: LocalState,
  ): boolean {
    return !!state.tracking;
  },
  [GettersTypes.GET_REMARKETING_TRACKING_TAG_ALREADY_EXIST_STATUS](
    state: LocalState,
  ): boolean {
    return state.tagAlreadyExists;
  },
  [GettersTypes.GET_REMARKETING_TRACKING_TAG_STATUS](
    state: LocalState,
    getters,
  ): boolean {
    return getters.GET_REMARKETING_TRACKING_TAG_ALREADY_EXIST_STATUS
      || getters.GET_REMARKETING_TRACKING_TAG_IS_SET;
  },
  [GettersTypes.GET_REPORTING_TAB_IS_ACTIVE](
    state: LocalState, getters, rootState, rootGetters,
  ) {
    return getters.GET_REMARKETING_TRACKING_TAG_STATUS
      && rootGetters['googleAds/GET_GOOGLE_ADS_ACCOUNT_IS_SERVING'];
  },
  [GettersTypes.GET_REMARKETING_CONVERSION_ACTIONS_ASSOCIATED](
    state: LocalState,
  ): ConversionAction[] {
    return state.conversionActions;
  },
  [GettersTypes.GET_ERROR_CAMPAIGN_NAME](state: LocalState): boolean|null {
    return state.errorCampaignNameExists;
  },
  [GettersTypes.GET_CAMPAIGN_FILTER_CHOSEN](state: LocalState): FiltersChosen|null {
    return state.filtersChosen?.find((filter) => !!filter) || null;
  },

  // request getters
  [GettersTypes.GET_CAMPAIGNS_LIST_ORDERING](
    state: LocalState,
  ): CampaignListOrdering {
    return state.campaigns.request.ordering;
  },
  [GettersTypes.GET_CAMPAIGNS_LIST_LIMIT](
    state: LocalState,
  ): number {
    return state.campaigns.request.numberOfCampaignsPerPage;
  },
  [GettersTypes.GET_CAMPAIGNS_LIST_ACTIVE_PAGE](
    state: LocalState,
  ): number {
    return state.campaigns.request.activePage;
  },
  [GettersTypes.GET_REPORTING_PERIOD_SELECTED](
    state: LocalState,
  ): ReportingPeriod {
    return state.reporting.request.dateRange.periodSelected;
  },
  [GettersTypes.GET_REPORTING_START_DATES](
    state: LocalState,
  ): string {
    return state.reporting.request.dateRange.startDate;
  },
  [GettersTypes.GET_REPORTING_END_DATES](
    state: LocalState,
  ): string {
    return state.reporting.request.dateRange.endDate;
  },
  [GettersTypes.GET_REPORTING_FORMATTED_START_DATES](
    state: LocalState,
  ): string {
    return dayjs(state.reporting.request.dateRange.startDate)
      .locale(window.i18nSettings.isoCode)
      .format('L');
  },
  [GettersTypes.GET_REPORTING_FORMATTED_END_DATES](
    state: LocalState,
  ): string {
    return dayjs(state.reporting.request.dateRange.endDate)
      .locale(window.i18nSettings.isoCode)
      .format('L');
  },
  [GettersTypes.GET_REPORTING_DAILY_RESULT_TYPES](
    state: LocalState,
  ): DailyResultTypes {
    return state.reporting.request.dailyResultTypes;
  },
  [GettersTypes.GET_REPORTING_DAILY_RESULT_TYPES_AVAILABLE](
    state: LocalState,
  ): boolean {
    return !!Object
      .values(state.reporting.request.dailyResultTypes)
      .filter((value) => !value).length;
  },
  [GettersTypes.GET_REPORTING_CAMPAIGNS_PERFORMANCES_ORDERING](
    state: LocalState,
  ): Object {
    return state.reporting.request.ordering.campaignsPerformances;
  },
  [GettersTypes.GET_REPORTING_PRODUCTS_PERFORMANCES_ORDERING](
    state: LocalState,
  ): Object {
    return state.reporting.request.ordering.productsPerformances;
  },
  [GettersTypes.GET_REPORTING_FILTERS_PERFORMANCES_ORDERING](
    state: LocalState,
  ): Object {
    return state.reporting.request.ordering.filtersPerformances;
  },
  [GettersTypes.GET_SSC_DIMENSIONS_AND_FILTERS](
    state: LocalState,
  ): Dimension[] {
    return state.sscAvailableFilters;
  },
  [GettersTypes.GET_ERROR_FETCHING_FILTERS_STATUS](
    state: LocalState,
  ): boolean {
    return !state.sscAvailableFilters.length && state.errorFetchingFilters;
  },

  // errors getters
  [GettersTypes.GET_CAMPAIGNS_LIST_ERROR](
    state: LocalState,
  ): boolean {
    return state.campaigns.results.error;
  },
  [GettersTypes.GET_REPORTING_KPIS_ERROR](
    state: LocalState,
  ): Boolean {
    return state.reporting.errorsList.kpis;
  },
  [GettersTypes.GET_REPORTING_CAMPAIGNS_PERFORMANCES_SECTION_ERROR](
    state: LocalState,
  ): Boolean {
    return state.reporting.errorsList.campaignsPerformancesSection;
  },
  [GettersTypes.GET_REPORTING_PRODUCTS_PERFORMANCES_SECTION_ERROR](
    state: LocalState,
  ): Boolean {
    return state.reporting.errorsList.productsPerformancesSection;
  },
  [GettersTypes.GET_REPORTING_FILTERS_PERFORMANCES_SECTION_ERROR](
    state: LocalState,
  ): Boolean {
    return state.reporting.errorsList.filtersPerformancesSection;
  },

  // result getters
  [GettersTypes.GET_CAMPAIGNS_LIST](state: LocalState): CampaignObject[] {
    return state.campaigns.results.campaigns;
  },
  [GettersTypes.GET_CAMPAIGNS_TOTAL](
    state: LocalState,
  ): number {
    return state.campaigns.results.totalCount;
  },
  [GettersTypes.GET_REPORTING_KPIS](
    state: LocalState,
  ): Kpis {
    return state.reporting.results.kpis;
  },
  [GettersTypes.GET_REPORTING_DAILY_RESULT](
    state: LocalState,
  ): Kpis[] {
    return state.reporting.results.dailyResultChart.dailyResultList;
  },
  [GettersTypes.GET_REPORTING_PRODUCTS_PERFORMANCES](
    state: LocalState,
  ): Array<ProductPerformances> {
    return state.reporting.results.productsPerformancesSection.productsPerformanceList;
  },
  [GettersTypes.GET_REPORTING_FILTERS_PERFORMANCES](
    state: LocalState,
  ): Array<FiltersPerformances> {
    return state.reporting.results.filtersPerformancesSection
      .productsPartitionsPerformanceList;
  },
};
