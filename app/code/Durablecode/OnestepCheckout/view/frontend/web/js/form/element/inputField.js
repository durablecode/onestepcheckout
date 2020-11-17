
define([
    'jquery',
    'Magento_Ui/js/form/element/abstract'
], function (
    $,
    abstract
) {
    'use strict';

    return abstract.extend({
        /**
         * @inheritdoc
         */
        onUpdate: function() {
            this._super();

            this.updateBillingAddressFieldValue();
        }
    });
});
