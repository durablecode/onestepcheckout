
define([
    'jquery',
    'Magento_Ui/js/form/element/post-code'
], function (
    $,
    postcode
) {
    'use strict';

    return postcode.extend({
        /**
         * @inheritdoc
         */
        onUpdate: function() {
            this._super();

            this.updateBillingAddressFieldValue();
        }
    });
});
