let cart = 0;

function addCart(){

cart++;

document.getElementById("cart-count").innerText = cart;

alert("Product added to cart!");

}


/* PRODUCT PAGE LOADER */

const params = new URLSearchParams(window.location.search);

if(document.getElementById("product-name")){

document.getElementById("product-name").innerText =
params.get("name");

document.getElementById("product-price").innerText =
"₹" + params.get("price");

document.getElementById("product-img").src =
params.get("img");

}
