document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",function(e){if(e.target.name==="add-to-cart"){e.target.innerHTML="Добавлено";const a={cart:[{offer_id:e.target.getAttribute("data-offer-id"),quantity:1}]};oc.ajax("Cart::onAdd",{data:a,success(){var o=document.querySelector(".errorField");document.querySelector(".errorMsg"),document.querySelector(".errorMsg").style.display="block",o.innerHTML="Товар добавлен в корзину",document.getElementById("loadingmessage").style.display="block",setTimeout(function(){document.getElementById("loadingmessage").style.display="none"},3e3)},error(){alert("Ошибка добавления в корзину")}})}}),document.body.addEventListener("click",function(e){e.target.name==="cartClearBtn"&&oc.ajax("Cart::onClear",{success(){location.reload()}})}),document.querySelectorAll(".cart-product__remove").forEach(e=>{e.addEventListener("click",function(){var t=[this.getAttribute("data-offer-id")],r={cart:t,shipping_type_id:1,payment_method_id:1};oc.ajax("Cart::onRemove",{data:r,success:function(){location.reload()}})})})});