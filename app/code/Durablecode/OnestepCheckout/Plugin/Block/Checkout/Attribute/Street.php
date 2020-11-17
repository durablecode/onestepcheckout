<?php
declare(strict_types=1);

namespace Durablecode\OnestepCheckout\Plugin\Block\Checkout\Attribute;

use Magento\Checkout\Block\Checkout\AttributeMerger;

/**
 * Class Street
 * @package Durablecode\OnestepCheckout\Plugin\Block\Checkout\Attribute
 */
class Street
{
    /**
     * Change component for street field
     *
     * @param AttributeMerger $attributeMerger
     * @param array $fields
     * @return array
     */
    public function afterMerge(AttributeMerger $attributeMerger, array $fields): array
    {
        if(array_key_exists('street', $fields)) {
            foreach ($fields['street']['children'] as &$line) {
                $line['component'] = 'Durablecode_OnestepCheckout/js/form/element/street';
            }
        }

        return $fields;
    }
}
