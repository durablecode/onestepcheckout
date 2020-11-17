
define([
    'ko',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/action/set-billing-address',
    'Magento_Customer/js/model/customer/address',
    'Magento_Customer/js/model/customer'
], function (
    ko,
    quote,
    setBillingAddress,
    customerAddress,
    customer
) {
    'use strict';

    return function (Component) {
        return Component.extend({
            /**
             * Get addresses from customer
             */
            adresses: window.checkoutConfig.customerData.addresses,

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

            /**
             * @inheritdoc
             */
            initObservable: function () {
                if(customer.isLoggedIn()) {
                    quote.shippingAddress(customerAddress(this.adresses[1]));
                }

                return this._super();
            }
        });
    };
});
