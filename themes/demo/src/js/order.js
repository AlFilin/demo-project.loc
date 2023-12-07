import './cart-product';




document.querySelector('#addOrder').addEventListener('click', function () {
    let payment = 1;
    let shipping_type_id = 1;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let lastName = document.getElementById('lastname').value;

// Валидация
    var form = document.querySelector('._ajax_create_order');


    var errorSpan = document.querySelector('.errorField');
    var errorMsg = document.querySelector('.errorMsg');
    var required = new Array("user[name]", "user[lastname]", "user[phone]");
    var required_show = new Array("Ваше имя", "Фамилия", "Номер телефона");


    let data = {
        'order': {
            'payment_method_id': payment,     //Get value from radio button with name="payment_method"
            'shipping_type_id': shipping_type_id,      //Get value from radio button with name="shipping_type"

        },
        'user': {
            'email': email,                 //Get value from input with name="email"
            'name': name,                  //Get value from input with name="name"
            'lastName': lastName,         //Get value from input with name="name"
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

                    console.log('Обнаружил пустые поля');
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

document.addEventListener('DOMContentLoaded', () => {
    function getCorrectForm(count) {
        let remainder10 = count % 10;
        let remainder100 = count % 100;

        if (remainder10 === 1 && remainder100 !== 11) {
            return 'предмет';
        } else if ([2, 3, 4].includes(remainder10) && ![12, 13, 14].includes(remainder100)) {
            return 'предмета';
        } else {
            return 'предметов';
        }
    }

    // Находим элементы на странице
    const countPositionElement = document.querySelector('.countPosition');
    const countPositionWordElement = document.querySelector('.countPositionWord');

    // Получаем значение iCountPosition из текста элемента
    const iCountPosition = parseInt(countPositionElement.textContent) || 0;

    // Устанавливаем корректное склонение в countPositionWordElement
    countPositionWordElement.textContent = getCorrectForm(iCountPosition);
});
