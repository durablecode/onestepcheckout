
var config = {
    map: {
        '*': {
            'Magento_Checkout/template/onepage.html':
                'Durablecode_OnestepCheckout/template/onepage.html',
        }
    },
    config: {
        mixins: {
            'Magento_Ui/js/form/element/abstract': {
                'Durablecode_OnestepCheckout/js/form/element/abstract-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Durablecode_OnestepCheckout/js/view/shipping-mixin': true
            },
        }
    }
};
