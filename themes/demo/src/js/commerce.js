import ShopaholicProductList from './shopaholic-product-list';
import ShopaholicSorting from './shopaholic-sorting';
import ShopaholicPagination  from './shopaholic-pagination';



const obListHelper = new ShopaholicProductList();
obListHelper.setAjaxRequestCallback((obRequestData) => {
    console.log('isorting', obRequestData);
    obRequestData.update = {'catalog/catalog-ajax': `.catalog_wrapper`};

    return obRequestData;
});



const obPaginationHelper = new ShopaholicPagination(obListHelper);
obPaginationHelper.init();

const obSortingHelper = new ShopaholicSorting(obListHelper);
obSortingHelper.init();

document.addEventListener("DOMContentLoaded", () => {
    // Добавление в корзину
    document.body.addEventListener('click', function (event) {
        if (event.target.name === 'add-to-cart') {
            event.target.innerHTML = 'Добавлено';
            let offer_id = event.target.getAttribute('data-offer-id');
            let quantity = 1;
            const data = {
                cart: [{
                    offer_id: offer_id,
                    quantity: quantity,
                }]
            };
            oc.ajax('Cart::onAdd', {
                data,
                success() {
                    var errorSpan = document.querySelector('.errorField');
                    var errorMsg = document.querySelector('.errorMsg');
                    document.querySelector('.errorMsg').style.display = 'block'; // или 'inline', 'flex', 'grid' и т.д., в зависимости от того, какой display нужен для вашего элемента
                    errorSpan.innerHTML = 'Товар добавлен в корзину';
                    document.getElementById('loadingmessage').style.display = 'block';

                    setTimeout(function () {
                        document.getElementById('loadingmessage').style.display = 'none';
                    }, 3000); // 3000 миллисекунд равны 3 секундам
                },
                error() {
                    alert('Ошибка добавления в корзину');
                },
            });
        }
    });
    // Удаление товаров из корзины сразу всех
    document.body.addEventListener('click', function (event) {
        if (event.target.name === 'cartClearBtn') {
            oc.ajax('Cart::onClear', {
                success() {
                    location.reload();
                }
            });
        }
    });
    // Удаление товаров из корзины поштучно
    document.querySelectorAll('.cart-product__remove').forEach(element => {
        element.addEventListener('click', function () {
            var offer = [this.getAttribute('data-offer-id')];
            var data = {
                'cart': offer,
                'shipping_type_id': 1,
                'payment_method_id': 1
            };
            oc.ajax('Cart::onRemove', {
                'data': data,
                success: function success() {
                    location.reload();
                }
            });
        });
    });
});










