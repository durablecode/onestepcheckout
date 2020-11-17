<?php
declare(strict_types=1);

namespace Durablecode\OnestepCheckout\Plugin\Model\ResourceModel\Region;

use Magento\Directory\Model\ResourceModel\Region\Collection as RegionCollection;

/**
 * Class Collection
 * @package Durablecode\OnestepCheckout\Plugin\Model\ResourceModel\Region
 */
class Collection
{
    /**
     * Add region code to collection
     *
     * @param RegionCollection $collection
     * @param array $options
     * @return array
     */
    public function afterToOptionArray(RegionCollection $collection, array $options): array
    {
        $items = $collection->getData();
        $arr = array_combine(array_column($items,'region_id'), array_column($items, 'code'));

        foreach($options as $index2 => &$option) {
            if(!empty($option['value'])) {
                $option['code_id'] = $arr[$option['value']];
            }
        }

        return $options;
    }
}
