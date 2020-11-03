// Modals
// Cart + add to cart

let buttonsBuy = document.querySelectorAll('.button-buy');
let cartPopup = document.querySelector('.modal-cart');
let cartClose = document.querySelector('.cart-close');
let modalButtons = document.querySelectorAll('.modal-button');
let cartCounter = document.querySelector('.cart-counter');
let cart = document.querySelector('.cart');
let i = 0;


for (let button of buttonsBuy) {
	button.addEventListener('click', function (evt) {
    evt.preventDefault();
		cartPopup.classList.add('modal-show');
		if (i < 1) {
		let goodsNumber = parseInt(cartCounter.innerText);
		goodsNumber ++;
		cartCounter.innerText = goodsNumber;
		cart.classList.add('cart-full');
		i ++; 
		}
	});
};

cartClose.addEventListener('click', function() {
	cartPopup.classList.remove('modal-show');
	i --; 
});

modalButtons[1].addEventListener('click', function() {
	if (cartPopup.classList.contains('modal-show')) {
		cartPopup.classList.remove('modal-show');
		i --; 
	}
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains('modal-show')) {
      cartPopup.classList.remove('modal-show');
      i --;
    }
  }
});

// Add to bookmarks 


let buttonsMark = document.querySelectorAll('.button-mark');
let markCounter = document.querySelector('.bookmark-counter');
let bookmark = document.querySelector('.bookmarks')

for (let buttonMark of buttonsMark) {
	buttonMark.addEventListener('click', function (evt) {
    evt.preventDefault();
		let marksNumber = parseInt(markCounter.innerText);
		marksNumber ++;
		markCounter.innerText = marksNumber;
    bookmark.classList.add('cart-full');
	});
};

