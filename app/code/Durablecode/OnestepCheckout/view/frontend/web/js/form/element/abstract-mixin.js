
define([
    'jquery',
    'Magento_Checkout/js/model/payment/method-list',
    'mage/utils/wrapper',
    'Magento_Ui/js/lib/validation/validator',
    'Durablecode_OnestepCheckout/js/model/shipping/validate',
    'Magento_Checkout/js/action/set-shipping-information',
    'Magento_Checkout/js/checkout-data',
    'Magento_Customer/js/model/customer',
    'Magento_Checkout/js/model/quote'
], function (
    $,
    paymentMethods,
    wrapper,
    validator,
    shippingValidate,
    setShippingInformationAction,
    checkoutData,
    customer,
    quote
) {
    'use strict';

    return function(target) {
        return target.extend({

            /**
             * Flag if customer sent shipping information
             */
            sentShippingInformation: false,

            /**
             * @inheritdoc
             */
            validate: function() {
                var result = this._super();
                if(this.source.get('no-error-message')) {
                    this.error('');
                    this.bubble('error', '');
                }

                return result;
            },

            /**
             * @inheritdoc
             */
            onUpdate: function() {
                this._super();
                var self = this;

                if(this.valueChangedByUser) {
                    if(this.validateOnUpdate()) {
                        self.sentShippingInformation = true;
                        setShippingInformationAction().fail(function() {
                            self.sentShippingInformation = false;
                        });
                    }
                }
            },

            /**
             * @return boolean
             */
            validateOnUpdate: function() {
                return shippingValidate.validWithoutErrorMessages() &&
                    checkoutData.getInputFieldEmailValue() != '' &&
                    paymentMethods() == 0 &&
                    this.sentShippingInformation === false;
            },

            /**
             * get status of 'My billing and shipping address are the same' checkbox
             *
             * @return boolean
             */
            isBillingAndShippingTheSameValue: function() {
                return $('#billing-address-same-as-shipping-shared').prop('checked');
            },

            /**
             * Check if 'My billing and shipping address are the same' is checked and if is a guest
             *
             * @return boolean
             */
            isBillingAndShippingTheSameForGuests: function() {
                return !customer.isLoggedIn() &&
                    this.isBillingAndShippingTheSameValue();
            },

            /**
             * Update billing address
             *
             * @param string preField
             */
            updateBillingAddressFieldValue: function(fieldname, preField) {
                if(this.isBillingAndShippingTheSameForGuests()) {
                    var billingAddress = quote.billingAddress();
                    var fieldname = (typeof fieldname != 'undefined' && fieldname != '') ? fieldname : this.index;

                    if(typeof preField != "undefined") {
                        billingAddress[preField][fieldname] = this.value();
                    } else {
                        billingAddress[fieldname] = this.value();
                    }

                    quote.billingAddress(billingAddress);
                }
            }
        });
    }
});
