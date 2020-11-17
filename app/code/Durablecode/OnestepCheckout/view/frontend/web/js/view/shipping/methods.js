/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Checkout/js/view/shipping',
    'Magento_Ui/js/form/form',
], function (
    Component,
    Form
) {
    'use strict';

    return Form.extend({
        defaults: {
            template: 'Durablecode_OnestepCheckout/shipping/methods',
            shippingMethodListTemplate: 'Magento_Checkout/shipping-address/shipping-method-list',
            shippingMethodItemTemplate: 'Durablecode_OnestepCheckout/shipping-address/shipping-method-item'
        },

        /**
         * @inheritdoc
         */
        visible: Component.prototype.visible,

        /**
         * @inheritdoc
         */
        errorValidationMessage: Component.prototype.errorValidationMessage,

        /**
         * @inheritdoc
         */
        rates: Component.prototype.rates,

        /**
         * @inheritdoc
         */
        isLoading: Component.prototype.isLoading,

        /**
         * @inheritdoc
         */
        isSelected: Component.prototype.isSelected,

        /**
         * @inheritdoc
         */
        selectShippingMethod: Component.prototype.selectShippingMethod,

        /**
         * @inheritdoc
         */
        setShippingInformation: Component.prototype.setShippingInformation,

        /**
         * @inheritdoc
         */
        validateShippingInformation: Component.prototype.validateShippingInformation,
    });
});
