
define([
    'ko',
    'Magento_Checkout/js/model/quote'
], function (
    ko,
    quote
) {
    'use strict';

    return function (Component) {
        return Component.extend({
            /**
             * @inheritdoc
             */
            canUseShippingAddress: ko.computed(function () {
                return quote.shippingAddress() && quote.shippingAddress().canUseForBilling();
            }),
        });
    };
});
