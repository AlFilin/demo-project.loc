import UrlGeneration from "./url-generation";

/**
 * @author  Andrey Kharanenka, a.khoronenko@lovata.com, LOVATA Group
 */
export default class ShopaholicSorting {
  /**
   * @param {ShopaholicProductList} obProductListHelper
   */
  constructor(obProductListHelper = null) {
    this.obProductListHelper = obProductListHelper;
    this.sEventType = 'change';
    this.sFiledName = 'sort';

    this.sDefaultSelectClass = '_shopaholic-sorting';
    this.sSelectSelector = `.${this.sDefaultSelectClass}`;
  }

  /**
   * Init event handlers
   */
  init() {
      document.addEventListener(this.sEventType, (obEvent) => {
          const obTarget = obEvent.target;
          if (obTarget && obTarget.matches(this.sSelectSelector)) {
              obEvent.preventDefault();
              const sSorting = obTarget.value;

              UrlGeneration.init();
              UrlGeneration.set(this.sFiledName, [sSorting]);
              UrlGeneration.update();
              if (!this.obProductListHelper) {
                  return;
              }

              this.obProductListHelper.send();
          }
      });
  }

}
