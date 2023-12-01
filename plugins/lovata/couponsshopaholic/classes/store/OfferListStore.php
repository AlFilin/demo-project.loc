<?php namespace Lovata\CouponsShopaholic\Classes\Store;

use Lovata\Toolbox\Classes\Store\AbstractListStore;

use Lovata\CouponsShopaholic\Classes\Store\Offer\ListByCouponGroupStore;

/**
 * Class OfferListStore
 * @package Lovata\CouponsShopaholic\Classes\Store
 * @author  Andrey Kharanenka, a.khoronenko@lovata.com, LOVATA Group
 *
 * @property ListByCouponGroupStore $coupon_group
 */
class OfferListStore extends AbstractListStore
{
    protected static $instance;

    /**
     * Init store method
     */
    protected function init()
    {
        $this->addToStoreList('coupon_group', ListByCouponGroupStore::class);
    }
}
