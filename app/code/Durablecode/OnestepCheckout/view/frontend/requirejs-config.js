
var config = {
    map: {
        '*': {
            'Magento_Checkout/template/onepage.html':
                'Durablecode_OnestepCheckout/template/onepage.html',
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/billing-address': {
                'Durablecode_OnestepCheckout/js/view/billing-address-mixin': true
            },
        }
    }
};
