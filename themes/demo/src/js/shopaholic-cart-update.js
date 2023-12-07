import ShopaholicCartPosition from "./shopaholic-cart-position";
import ShopaholicCart from "./shopaholic-cart";
import ShopaholicCartShippingType from "./shopaholic-cart-shipping-type";

/**
 * @author  Uladzimir Ambrazhey, <v.ambrazhey@lovata.com>, LOVATA Group
 * @author  Andrey Kharanenka, a.khoronenko@lovata.com, LOVATA Group
 */
export default class ShopaholicCartUpdate {
    constructor() {
        this.sDefaultInputClass = '_shopaholic-cart-quantity';
        this.sIncreaseInputClass = '_shopaholic-cart-increase-quantity';
        this.sDecreaseInputClass = '_shopaholic-cart-decrease-quantity';
        this.sUpdateComponentMethod = 'Cart::onUpdate';
        this.obAjaxRequestCallback = null;
        this.iDelayBeforeRequest = 400;
        this.obTimer = null;

        ShopaholicCart.instance();
    }

    init() {
        this.initUpdateEvent();
        this.initIncreaseEvent();
        this.initDecreaseEvent();
    }

    initUpdateEvent() {
        document.querySelectorAll(`.${this.sDefaultInputClass}`).forEach(input => {
            input.addEventListener('input', event => {
                if (this.obTimer !== null) {
                    clearTimeout(this.obTimer);
                }

                this.obTimer = setTimeout(() => {
                    let iQuantity = this.getQuantity(event.target);
                    const iMaxQuantity = this.getMaxQuantity(event.target);

                    iQuantity = Math.max(1, Math.min(iQuantity, iMaxQuantity));
                    event.target.value = iQuantity;

                    this.sendAjaxRequest(event.target);
                }, this.iDelayBeforeRequest);
            });
        });
    }

    initIncreaseEvent() {
        document.querySelectorAll(`.${this.sIncreaseInputClass}`).forEach(button => {
            button.addEventListener('click', event => {
                if (this.obTimer !== null) {
                    clearTimeout(this.obTimer);
                }

                this.handleQuantityChange(event.currentTarget, 1);
            });
        });
    }

    initDecreaseEvent() {
        document.querySelectorAll(`.${this.sDecreaseInputClass}`).forEach(button => {
            button.addEventListener('click', event => {
                if (this.obTimer !== null) {
                    clearTimeout(this.obTimer);
                }

                this.handleQuantityChange(event.currentTarget, -1);
            });
        });
    }

    handleQuantityChange(button, change) {
        const obCartPosition = new ShopaholicCartPosition(button);
        const obInput = obCartPosition.getQuantityInput();

        const iMaxQuantity = this.getMaxQuantity(obInput);

        let iQuantity = this.getQuantity(obInput)  ;
        console.log('iQuantity ' + iQuantity) ;
        iQuantity = Math.max(1, Math.min(iQuantity, iMaxQuantity));
        obInput.value = iQuantity;
        // button.disabled = (iQuantity === 1 && change === -1) || (iQuantity === iMaxQuantity && change === 1);

        this.obTimer = setTimeout(() => {
            this.sendAjaxRequest(obInput);
        }, this.iDelayBeforeRequest);
    }

    sendAjaxRequest(obInput) {
        if (!obInput) {
            throw new Error('Input node is empty.');
        }

        const obCartPosition = new ShopaholicCartPosition(obInput);
        let obPositionData = obCartPosition.getData();
        const obShippingType = new ShopaholicCartShippingType();

        // obShippingType = obShippingType.getShippingTypeID();
        let obShippingTypeTemp = 1;
        let obRequestData = {
            data: {
                cart: [obPositionData],
                'shipping_type_id': obShippingTypeTemp
            },
            complete: ({data}) => {

                 this.completeCallback(data);
            },
            error: (xhr, status, error) => {
                console.error('Error in AJAX Request:', error);
            }
        };

        if (this.obAjaxRequestCallback !== null) {
            obRequestData = this.obAjaxRequestCallback(obRequestData, obInput);
        }

        oc.ajax(this.sUpdateComponentMethod, obRequestData);
    }

    getQuantity(obInput) {
        return parseInt(obInput.value, 10);
    }

    getMaxQuantity(obInput) {
        return parseInt(obInput.getAttribute('max'), 10);
    }

    completeCallback(obResponse) {


        let jsonString = JSON.stringify(obResponse);
        let parsedObject = JSON.parse(jsonString);

        let obCartData = parsedObject;
        console.log(obCartData);
        ShopaholicCart.instance().updateCartData(obCartData);
    }

    setAjaxRequestCallback(obCallback) {
        this.obAjaxRequestCallback = obCallback;

        return this;
    }
}
