
define([
    'jquery',
    'Magento_Ui/js/form/element/abstract'
], function (
    $,
    Abstract
) {
    'use strict';

    return Abstract.extend({
        /**
         * @inheritdoc
         */
        onUpdate: function() {
            this._super();

            this.updateBillingAddressFieldValue('', 'street');
        }
    });
});
