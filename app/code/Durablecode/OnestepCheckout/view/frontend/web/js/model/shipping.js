
define([
    'uiRegistry',
    'Durablecode_OnestepCheckout/js/model/shipping/validate',
    'Magento_Checkout/js/checkout-data',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/action/set-shipping-information'
], function(
    registry,
    shippingValidate,
    checkoutData,
    quote,
    setShippingInformationAction
) {
    'use strict';

    return {

        /**
         * Check if can send shipping infomation request
         *
         * @return boolean
         */
        conditionOfShippingInformation: function() {
            return shippingValidate.validWithoutErrorMessages() &&
                checkoutData.getInputFieldEmailValue() != '' &&
                quote.shippingMethod() != null;
        },

        /**
         * Send information shipping request
         */
        setShippingInformation: function() {
            if (this.conditionOfShippingInformation()) {
                setShippingInformationAction();
            }
        }
    };
});
