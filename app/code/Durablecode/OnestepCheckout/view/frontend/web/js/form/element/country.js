
define([
    'jquery',
    'Magento_Ui/js/form/element/select',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/shipping-rate-registry',
    'Magento_Customer/js/model/customer',
    'Durablecode_OnestepCheckout/js/model/shipping'
], function (
    $,
    select,
    quote,
    rateReg,
    customer,
    shippingModel
) {
    'use strict';

    return select.extend({
        /**
         * @inheritdoc
         */
        onUpdate: function() {
            this._super();

            if(!customer.isLoggedIn()) {
                var address = this.isBillingAndShippingTheSameValue() ? quote.billingAddress(): quote.shippingAddress();
                this.updateBillingAddressFieldValue('countryId');

                rateReg.set(address.getKey(), null);
                rateReg.set(address.getCacheKey(), null);
                quote.shippingAddress(address);

                shippingModel.setShippingInformation();
            }
        }
    });
});
