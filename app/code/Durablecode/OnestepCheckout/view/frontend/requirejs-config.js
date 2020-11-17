
var config = {
    map: {
        '*': {
            'Magento_Checkout/template/onepage.html':
                'Durablecode_OnestepCheckout/template/onepage.html',
            'Magento_Checkout/template/billing-address.html':
                'Durablecode_OnestepCheckout/template/billing-address/address.html'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/billing-address': {
                'Durablecode_OnestepCheckout/js/view/billing-address-mixin': true
            },
            'Magento_Ui/js/form/element/abstract': {
                'Durablecode_OnestepCheckout/js/form/element/abstract-mixin': true
            },
            'Magento_Checkout/js/view/shipping-address/address-renderer/default': {
                'Durablecode_OnestepCheckout/js/view/shipping-address/address-renderer/default-mixin': true
            }
        }
    }
};
