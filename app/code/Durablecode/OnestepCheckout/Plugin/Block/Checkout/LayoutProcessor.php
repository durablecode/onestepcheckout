<?php
declare(strict_types=1);

namespace Durablecode\OnestepCheckout\Plugin\Block\Checkout;

use Magento\Checkout\Block\Checkout\LayoutProcessor as CheckoutLayoutProcessor;

/**
 * Class LayoutProcessor
 * @package Durablecode\OnestepCheckout\Plugin
 */
class LayoutProcessor
{
    /**
     * Solved problem with lack data for dc-billing-address components
     *
     * @param CheckoutLayoutProcessor $instance
     * @param array $result
     * @return array
     */
    public function afterProcess(CheckoutLayoutProcessor $instance, array $result): array
    {
        /**
         * Temporary solution
         * @todo solved problem with billing address form for different shipping methods
         */
        $billingFields = $result['components']['checkout']['children']['steps']['children']['billing-step']['children']['payment']['children']['payments-list']['children']['paypal_billing_agreement-form']['children']['form-fields']['children'];

        $result['components']['checkout']['children']['steps']['children']['dc-billing-address']['children']['additional-fieldsets']['children'] = $billingFields;
        $result['components']['checkout']['children']['steps']['children']['dc-payment-methods']['children']['renders']['children'] = $result['components']['checkout']['children']['steps']['children']['billing-step']['children']['payment']['children']['renders']['children'];
        $result['components']['checkout']['children']['steps']['children']['dc-payment-methods']['children']['beforeMethods']['children'] = $result['components']['checkout']['children']['steps']['children']['billing-step']['children']['payment']['children']['beforeMethods']['children'];
        $result['components']['checkout']['children']['steps']['children']['dc-payment-methods']['children']['afterMethods']['children'] = $result['components']['checkout']['children']['steps']['children']['billing-step']['children']['payment']['children']['afterMethods']['children'];
        
        return $result;
    }
}
