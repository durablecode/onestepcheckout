define([
    'jquery',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/action/set-billing-address'
], function(
    $,
    quote,
    setBillingAddress
) {
    'use strict';

    return function (Component) {
        return Component.extend({

            /**
             * @inheritdoc
             */
            selectAddress: function() {
                this._super();
                if($('#billing-address-same-as-shipping-shared').prop('checked')) {
                    quote.billingAddress(this.address());
                    setBillingAddress();
                }
            },
        });
    }
});
