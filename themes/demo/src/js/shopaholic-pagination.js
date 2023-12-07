import UrlGeneration from "@lovata/url-generation";

/**
 * @author  Andrey Kharanenka, a.khoronenko@lovata.com, LOVATA Group
 */
export default class ShopaholicPagination {
  /**
   * @param {ShopaholicProductList} obProductListHelper
   */
  constructor(obProductListHelper = null) {
    this.obProductListHelper = obProductListHelper;
    this.sEventType = 'click';
    this.sFiledName = 'page';
    this.sAttributeName = 'data-page';

    this.sDefaultButtonClass = '_shopaholic-pagination';
    this.sButtonSelector = `.${this.sDefaultButtonClass}`;
  }

  /**
   * Init event handlers
   */
  init() {
      document.addEventListener(this.sEventType, (obEvent) => {
          const obTarget = obEvent.target;
          if (!obTarget.matches(this.sButtonSelector)) return;

          obEvent.preventDefault();
          obEvent.stopPropagation();

          const iPage = obTarget.getAttribute(this.sAttributeName);

          UrlGeneration.init();
          if (iPage == '1') {
              UrlGeneration.remove(this.sFiledName);
          } else {
              UrlGeneration.set(this.sFiledName, [iPage]);
          }

          UrlGeneration.update();
          if (!this.obProductListHelper) {
              return;
          }

          this.obProductListHelper.send();
      });
  }


  /**
   * Redeclare default selector of pagination button
   * Default value is "_shopaholic-pagination"
   *
   * @param {string} sButtonSelector
   * @returns {ShopaholicPagination}
   */
  setButtonSelector(sButtonSelector) {
    this.sButtonSelector = sButtonSelector;

    return this;
  }
}
