
define([
    'mage/utils/wrapper',
    'Magento_Checkout/js/action/set-shipping-information',
    'Durablecode_OnestepCheckout/js/model/shipping/validate',
    'Magento_Checkout/js/model/quote'
], function(
    wrapper,
    setShippingInformationAction,
    shippingValidate,
    quote
) {
    'use strict';

    return function(target) {
        return wrapper.wrap(target, function(originalObject) {
            return originalObject().done(function(isEmailAvailable) {
                if(
                    shippingValidate.valid() &&
                    quote.shippingMethod()
                ) {
                    setShippingInformationAction();
                }
            });
        });
    }
});
