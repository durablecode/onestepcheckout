
define([
    'jquery',
    'Magento_Ui/js/form/element/region',
    'Magento_Checkout/js/model/quote',
    'Durablecode_OnestepCheckout/js/model/shipping'
], function (
    $,
    region,
    quote,
    shippingModel
) {
    'use strict';

    return region.extend({
        /**
         * @inheritdoc
         */
        onUpdate: function() {
            this._super();

            if(this.isBillingAndShippingTheSameForGuests()) {
                var option = this.indexedOptions[this.value()];
                if (typeof option !== "undefined") {
                    var billingAddress = quote.billingAddress();
                    billingAddress.regionCode = option.code_id;
                    billingAddress.regionId = this.value();
                    billingAddress.region = option.label;

                    shippingModel.setShippingInformation();
                }
            }
        }
    });
});
