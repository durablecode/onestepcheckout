
var config = {
    map: {
        '*': {
            'Magento_Checkout/template/onepage.html':
                'Durablecode_OnestepCheckout/template/onepage.html',
            'Magento_Checkout/template/billing-address.html':
                'Durablecode_OnestepCheckout/template/billing-address/address.html',
            'Magento_Checkout/template/payment-methods/list.html':
                'Durablecode_OnestepCheckout/template/payment-methods/list.html',
            'Magento_Checkout/template/form/element/email.html':
                'Durablecode_OnestepCheckout/template/form/element/email.html',
            'Magento_SalesRule/template/payment/discount.html':
                'Durablecode_OnestepCheckout/template/discount.html'
        }
    },
    config: {
        mixins: {
            'Magento_Ui/js/form/element/abstract': {
                'Durablecode_OnestepCheckout/js/form/element/abstract-mixin': true
            },
            'Magento_Checkout/js/view/shipping-address/address-renderer/default': {
                'Durablecode_OnestepCheckout/js/view/shipping-address/address-renderer/default-mixin': true
            }
        }
    }
};
