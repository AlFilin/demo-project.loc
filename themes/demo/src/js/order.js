document.querySelector('#addOrder').addEventListener('click', function () {

    let payment = 1;
    let shipping_type_id = 1;
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('tele').value;
    let lastName = document.getElementById('last-name').value;
    let resultPrice = document.getElementById('#resultPrice').value;

// Валидация
    var form = document.querySelector('._ajax_create_order');
    var order = document.querySelector('#orderProperty').value;

    var errorSpan = document.querySelector('.errorField');
    var errorMsg = document.querySelector('.errorMsg');
    var required = new Array("user[name]", "user[email]", "user[phone]");
    var required_show = new Array("Ваше имя", "электронный адрес", "номер телефона");


    let data = {
        'order': {
            'payment_method_id': payment,     //Get value from radio button with name="payment_method"
            'shipping_type_id': shipping_type_id,      //Get value from radio button with name="shipping_type"
            'property': {
                'orderHelper': order,
                'resultPrice': resultPrice,
            },
        },
        'user': {
            'email': email,                 //Get value from input with name="email"
            'name': name,                  //Get value from input with name="name"
            'last_name': lastName,         //Get value from input with name="name"
            'phone': phone,                 //Get value from input with name="phone"
        },

    };
    sendform(form, required, required_show);

    function sendform(form, required, required_show) {
        var i, j;
        for (j = 0; j < required.length; j++) {

            for (i = 0; i < form.length; i++) {

                if (form.elements[i].name == required[j] && form.elements[i].value == "") {
                    document.querySelector('.errorMsg').style.display = 'block'; // или 'inline', 'flex', 'grid' и т.д., в зависимости от того, какой display нужен для вашего элемента


                    errorSpan.innerHTML = 'Пожалуйста, введите ' + required_show[j];
                    form[0].animate([
                        {transform: 'rotate(0deg)'},
                        {transform: 'rotate(0deg)'},
                        {transform: 'rotate(5deg)'},
                        {transform: 'rotate(-5deg)'},
                        {transform: 'rotate(0deg)'}
                    ], {
                        // timing options
                        duration: 100,
                        iterations: 2,
                        delay: 300
                    })
                    document.getElementById('loadingmessage').style.display = 'block';
                    setTimeout(function () {
                        document.getElementById('loadingmessage').style.display = 'none';
                    }, 3000); // 3000 миллисекунд равны 3 секундам
                    form.elements[i].focus();
                    return false;
                } else {
                    oc.ajax('MakeOrder::onCreate', {
                        'data': data,
                        success: function (obResponse) {
                            if (!obResponse) {
                                return;
                            }
                            if (!!obResponse['X_OCTOBER_REDIRECT']) {

                                return this.success(obResponse);
                                location.reload('/thanks')
                            }

                            if (!obResponse.status) {
                                return;
                            }
                            return this.success(obResponse);

                        }
                    });
                }
            }
        }
    }

    return false;
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.product-card__quantity__input').forEach(function (selectElement) {
        selectElement.addEventListener('change', function () {
            var tr = this.closest('tr');
            var quantity = parseInt(this.value);
            tr.setAttribute('data-quantity', quantity); // Сохраняем количество в атрибуте строки
            var pricePerUnit = parseFloat(tr.querySelector('.priceSqu').getAttribute('data-original-price'));
            updatePriceForRow(tr, quantity, pricePerUnit);
            calculateAndDisplayTotalPrice();
        });
    });

    var originalTable = document.querySelector('#originalTable');
    var additionalTableBlock = document.querySelector('#additionalTableBlock');

    // Проверяем таблицы при загрузке страницы
    checkAndHideTableIfEmpty(originalTable);
    checkAndHideTableIfEmpty(additionalTableBlock);

    document.querySelectorAll('.addToAdditionalTable').forEach(function (button) {
        button.addEventListener('click', function () {
            var tr = this.closest('tr');
            var isAddingToAdditionalTable = this.textContent.includes('Объединить');

            tr.style.transition = 'opacity 0.5s';
            tr.style.opacity = 0;

            setTimeout(function () {
                if (isAddingToAdditionalTable) {
                    additionalTableBlock.querySelector('tbody').appendChild(tr);
                    button.textContent = 'Убрать из набора';
                } else {
                    originalTable.appendChild(tr);
                    button.textContent = 'Объединить в набор';
                }

                // Обновляем цену в строке с учетом количества и таблицы
                var quantity = parseInt(tr.getAttribute('data-quantity')) || 1;
                var pricePerUnit = parseFloat(tr.querySelector('.priceSqu').getAttribute('data-original-price'));
                updatePriceForRow(tr, quantity, pricePerUnit, isAddingToAdditionalTable);

                tr.style.opacity = 1;

                // Проверяем таблицы после каждого перемещения
                checkAndHideTableIfEmpty(originalTable);
                checkAndHideTableIfEmpty(additionalTableBlock);
                updateGiftBox(additionalTableBlock);
                calculateAndDisplayTotalPrice();
                logProductData(); // Выводим информацию о продуктах в консоль

            }, 500);
        });
    });

    function checkAndHideTableIfEmpty(table) {
        if (table.querySelectorAll('tr').length === 1) {
            table.style.display = 'none';
        } else {
            table.style.display = 'block';
        }
    }


    function updatePriceElement(priceElement, isAdditionalTable, originalPrice) {
        var currentPrice = parseFloat(originalPrice);
        var newPrice = currentPrice * (isAdditionalTable ? 0.9 : 1); // 10% меньше для additionalTable, исходная цена для originalTable

        priceElement.innerHTML = ''; // Очищаем содержимое элемента

        var priceSpan = document.createElement('span');
        priceSpan.textContent = `${newPrice.toFixed(2)}р`;
        priceElement.appendChild(priceSpan);

        var parentPriceElement = priceElement.closest('.resultItemPrice');
        if (parentPriceElement) {
            parentPriceElement.setAttribute('data-current-price', newPrice.toFixed(2));
        }
    }


    function updatePriceInTable(table, isAdditionalTable) {
        var priceElements = table.querySelectorAll('.priceSqu');
        var resultItemPriceElements = table.querySelectorAll('.resultItemPrice');

        priceElements.forEach(function (priceElement) {
            var originalPrice = priceElement.getAttribute('data-original-price');
            if (!originalPrice) {
                originalPrice = priceElement.textContent.replace('р', '');
                priceElement.setAttribute('data-original-price', originalPrice);
            }
            updatePriceElement(priceElement, isAdditionalTable, originalPrice);
        });

        resultItemPriceElements.forEach(function (resultItemPriceElement) {
            var originalPrice = resultItemPriceElement.getAttribute('data-original-price');
            if (!originalPrice) {
                originalPrice = resultItemPriceElement.textContent.replace('р', '');
                resultItemPriceElement.setAttribute('data-original-price', originalPrice);
            }
            updatePriceElement(resultItemPriceElement, isAdditionalTable, originalPrice);
        });


    }

    // Первоначальное обновление цен
    updatePriceInTable(additionalTableBlock, true);
    updatePriceInTable(originalTable, false);
    logProductData(); // Выводим информацию о продуктах при загрузке страницы

});


function calculateAndDisplayTotalPrice() {
    var priceElements = document.querySelectorAll('.resultItemPrice');
    var total = 0;

    priceElements.forEach(function (priceElement) {
        var price = parseFloat(priceElement.getAttribute('data-current-price'));
        if (!isNaN(price)) {
            total += price;
        }
    });

    // Добавляем стоимость подарочной коробки, если она есть
    if (document.querySelector('.giftBox')) {
        total += 2000;
    }

    var resultPriceValElement = document.querySelector('#resultPriseVal');
    resultPriceValElement.textContent = total.toFixed(2);
    resultPriceValElement.value = total.toFixed(2);
}


function updateGiftBox(additionalTableBlock) {
    var giftBox = additionalTableBlock.querySelector('.giftBox');
    var hasRecords = additionalTableBlock.querySelectorAll(' tr:not(.giftBox)').length > 1;
    if (hasRecords && !giftBox) {
        // Добавляем подарочную коробку, если она еще не добавлена
        var tr = document.createElement('tr');
        tr.classList.add('giftBox');
        tr.innerHTML = `<td>Подарочная коробка</td><td></td><td>2000 рублей</td>`;
        additionalTableBlock.querySelector('tbody').prepend(tr); // Добавляем в начало списка
    } else if (!hasRecords && giftBox) {

        // Удаляем подарочную коробку, если записей нет
        giftBox.remove();
    }
    var table = document.querySelector('#additionalTableBlock');
    if (table.querySelectorAll('tr').length === 1) {
        table.style.display = 'none';
    } else {
        table.style.display = 'block';
    }

}


function updatePriceForRow(tr, quantity, pricePerUnit, isAdditionalTable) {
    var totalPriceForItem = pricePerUnit * quantity;

    if (isAdditionalTable) {
        totalPriceForItem *= 0.9; // Применяем скидку 10%
    }

    var priceElement = tr.querySelector('.resultItemPrice');
    priceElement.textContent = totalPriceForItem.toFixed(2) + 'р';
    priceElement.setAttribute('data-current-price', totalPriceForItem.toFixed(2));
}





function logProductData() {
    var products = [];
    var tables = {originalTable: "Не в наборе", additionalTableBlock: "Сложить в набор"};

    Object.keys(tables).forEach(function(tableId) {
        var tableRows = document.querySelector('#' + tableId).querySelectorAll('tbody tr:not(.giftBox)');

        tableRows.forEach(function(row) {
            var productName = row.querySelector('td:first-child').textContent.trim();
            var articul = row.querySelector('.articul').textContent.trim();
            var productPrice = row.querySelector('.pricePerUnit').textContent.replace('р', '').trim();
            var productQuantity = row.querySelector('.product-card__quantity__input') ? row.querySelector('.product-card__quantity__input').value : '1';

            products.push({
                'Артикул': articul,
                'Название': productName,
                'Стоимость': productPrice,
                'Количество': productQuantity,
                'Складывать ли в набор': tables[tableId]
            });
        });
    });


    updateOrderProperty(products);
}


function updateOrderProperty(products) {
    var orderPropertyElement = document.querySelector('#orderProperty');
    if (orderPropertyElement) {
        var productString = JSON.stringify(products, null, 2);

        // Преобразуем JSON-строку в более читаемый формат
        var readableList = productString
            .split('},') // Разделяем на отдельные продукты
            .map(item => item
                .replace(/[\{\}\[\]"',]/g, '') // Удаляем скобки, кавычки и запятые
                .replace(/\n\s+/g, '\n') // Удаляем лишние пробелы и переводы строк
                .trim() // Удаляем пробелы в начале и конце каждого продукта
            )
            .join('\n\n'); // Добавляем двойной перевод строки между продуктами

        orderPropertyElement.value = readableList;
    }
}

