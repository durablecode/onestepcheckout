
define([
    'jquery'
], function(
    $
) {
    return function (Component) {
        return Component.extend({

            /**
             * @inheritdoc
             */
            selectShippingMethod: function (shippingMethod, object) {
                var input = object.currentTarget;
                $('.table-checkout-shipping-method > tbody > tr').removeClass('_active');
                $(input).addClass('_active');

                return this._super(shippingMethod);
            }
        });
    }
});
