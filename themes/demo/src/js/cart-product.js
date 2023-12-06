import ShopaholicCartUpdate from './shopaholic-cart-update';

export default new class cartProduct {
  constructor() {
    this.obShopaholicCartUpdate = new ShopaholicCartUpdate();

    this.positionNodeSelector = '_shopaholic-product-wrapper';
    this.cardNodeSelector = 'cart-product';
    this.restoreHiddenNodeSelector = '_visually-hidden';
    this.restoreNodeSelector = 'js-item-restore';
    this.cardHiddenSelector = 'cart-product_hidden';
    this.sShippingTypeWrapper = '_cart_delivery_wrapper';
    this.sShippingTypePartial = 'product/cart/cart-delivery';
    this.sMiniCartWrapper = '_shopaholic-cart-mini-wrapper';
    this.checkoutBtnSelector = 'cart-mini-price__checkout';
    this.checkoutBtnHiddenSelector = 'cart-mini-price__checkout_hidden';
    this.payBtnSelector = 'cart__submit';
    this.payBtnDisabledSelector = 'cart__submit_disabled';

    this.isCartPage = document.body.getAttribute('data-page-id') === 'checkout';

    this.init();
  }

  init() {
    this.initUpdateButton();
  }

  initUpdateButton() {
    if (this.isCartPage) {
      this.obShopaholicCartUpdate.setAjaxRequestCallback((obRequestData) => {
        /* eslint-disable  no-param-reassign */
        obRequestData.update = {};
        obRequestData.update[this.sShippingTypePartial] = `.${this.sShippingTypeWrapper}`;
        /* eslint-enable */

        return obRequestData;
      });
    }
    this.obShopaholicCartUpdate.init();
  }



  changeCartButtonState(obResponse) {
    const { position } = obResponse.data;
    const btnStatus = Object.keys(position).length === 0;
    let cardBtn = document.querySelector(`.${this.checkoutBtnSelector}`);
    let cardBtnClass = this.checkoutBtnHiddenSelector;

    if (this.isCartPage) {
      cardBtn = document.querySelector(`.${this.payBtnSelector}`);
      cardBtn.disabled = btnStatus;
      cardBtnClass = this.payBtnDisabledSelector;
    }

    if (btnStatus) {
      cardBtn.classList.add(cardBtnClass);
    } else {
      cardBtn.classList.remove(cardBtnClass);
    }
  }
}();
