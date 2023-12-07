import ShopaholicSearch from './shopaholic-search';


export default new class Search {
  constructor() {
    this.searchResultWrapper = 'search-panel__result';
    this.searchInputSelector = 'search-panel__input-field';
    this.preLoaderSelector = '.search-panel__preloader';

    this.init();
    this.handler();
  }

  init() {
    this.obSearchHelper = new ShopaholicSearch();
    this.obSearchHelper.setAjaxRequestCallback((obRequest) => {
      /* eslint-disable no-param-reassign */
      obRequest.update = { 'search-result': `.${this.searchResultWrapper}` };
      obRequest.loading = this.preLoaderSelector;
      /* eslint-enable */

      return obRequest;
    });
    this.obSearchHelper.init();
  }

  handler() {
    const searchInput = document.querySelector(`.${this.searchInputSelector}`);
    searchInput.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  }

}();
