let openshopping = document.querySelector(".shopping");
let closeshopping = document.querySelector(".closeshopping");

let list = document.querySelector(".list");
let listcard = document.querySelector(".listcard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");


openshopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeshopping.addEventListener('click', () => {
    body.classList.remove('active');
})


