
define([
    'jquery',
    'Magento_Checkout/js/checkout-data',
    'Magento_Checkout/js/model/payment/additional-validators',
    'Magento_Checkout/js/action/set-shipping-information',
    'Magento_Checkout/js/view/payment/default',
    'Durablecode_OnestepCheckout/js/model/shipping/validate',
    'Magento_Customer/js/model/customer',
    'Magento_Checkout/js/model/quote'
], function(
    $,
    checkoutData,
    additionalValidators,
    setShippingInformationAction,
    defaultPayment,
    shippingValidate,
    customer,
    quote
) {

    return defaultPayment.extend({
        defaults: {
            template: 'Durablecode_OnestepCheckout/submit'
        },
        item: {
            method: null
        },
        emailValid: checkoutData.getInputFieldEmailValue,

        /**
         * @inheritdoc
         */
        validate: function() {
            return (
                this.emailValid() || customer.isLoggedIn() &&
                quote.shippingMethod() != null &&
                this._super() &&
                additionalValidators.validate() &&
                this.isPlaceOrderActionAllowed() &&
                shippingValidate.validWithoutErrorMessages() || (customer.isLoggedIn() && quote.shippingAddress() != null) &&
                quote.paymentMethod() != null
            );
        },

        /**
         * @inheritdoc
         */
        placeOrder: function() {
            if (this.canPlaceOrder()) {
                this.item.method = quote.paymentMethod().method;
                setShippingInformationAction();
                return this._super();
            }
            return false;
        },

        /**
         * @return boolean
         */
        canPlaceOrder: function() {
            return this.validate() &&
                shippingValidate.valid() || customer.isLoggedIn();
        }
    });
});
