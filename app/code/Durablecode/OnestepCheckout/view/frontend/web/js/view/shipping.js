
define([
    'jquery',
    'Magento_Checkout/js/view/shipping',
], function (
    $,
    Component
) {
    return Component.extend({

        /**
         * @inheritdoc
         */
        initialize: function () {
            window.checkoutConfig.quoteData.is_virtual = true;
            this._super();
            window.checkoutConfig.quoteData.is_virtual = false;
        }
    });
});
