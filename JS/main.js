var products = document.getElementsByClassName("products");
var product = document.getElementsByClassName("product-info");
let id = 0;
for (const item of product) {
  item.innerHTML;
  var add = item.querySelector("span");
  var addInfo = item.querySelector("span").innerText;
  add.onmouseover = function () {
    item.querySelector("span").innerText = "Add To Cart";
    item.querySelector("span").style.color = "red";
  };
  add.onmouseout = function () {
    item.querySelector("span").innerText = addInfo;
    item.querySelector("span").style.color = "inherit";
  };
}
let list = document.querySelector(".cart-drpdown");
for (let index = 0; index < products.length; index++) {
  var addToCart = products[index].querySelector(".product-info span");

  const item = {
    id: index + 1,
    name: product[index].firstElementChild.textContent,
    price: product[index].lastElementChild.textContent,
  };
  addToCart.onclick = function () {
    localStorage.setItem(index + 1, JSON.stringify(item));
    //document.querySelector(".cart-drpdown p").remove();
    // document.querySelector("#cart .cart-total").innerHTML += item.price;
    let obj = localStorage.getItem(index + 1);
    // console.log(JSON.parse(obj).name);
    let cart = `<div class="cart-item">
                    <a href="">${JSON.parse(obj).name}</a>
                    <span>${JSON.parse(obj).price}</span>
                </div>`;
    list.innerHTML += cart;
  };
}
