
define([
    'Magento_Checkout/js/view/form/element/email'
], function (
    Component
) {
    'use strict';

    return Component.extend({
        initObservable: function () {
            this._super();

            if(this.email()) {
                this.checkEmailAvailability();
            }
            return this;
        }
    });
});
