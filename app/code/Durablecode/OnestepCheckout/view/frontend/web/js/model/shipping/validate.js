
define([
    'uiRegistry'
], function(
    registry
) {
    'use strict';

    return {
        /**
         * Get billing address
         *
         * @returns {IDBObjectStore | IDBIndex | IDBCursor}
         */
        source: function() {
            return registry.get('checkout.steps.dc-billing-address').source;
        },

        /**
         * Check if shipping is valid
         *
         * @returns boolean
         */
        valid: function() {
            this.source().set('params.invalid', false);
            this.source().trigger('shippingAddress.data.validate');

            return this.getRawValid();
        },

        /**
         * Check validate shipping address with errors
         *
         * @returns {boolean}
         */
        getRawValid: function() {
            return !this.source().get('params.invalid');
        },

        /**
         * Check validate shipping address without errors
         *
         * @returns {boolean}
         */
        validWithoutErrorMessages: function() {
            this.source().set('no-error-message', true);
            var validResult = this.valid();
            this.source().set('no-error-message', false);

            return validResult;
        }
    };
});
