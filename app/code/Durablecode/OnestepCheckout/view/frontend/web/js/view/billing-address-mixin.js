
define([
    'ko',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/action/set-billing-address'
], function (
    ko,
    quote,
    setBillingAddress
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

            /**
             * @inheritdoc
             */
            updateAddress: function () {
                this._super();
                setBillingAddress();
            },
        });
    };
});
