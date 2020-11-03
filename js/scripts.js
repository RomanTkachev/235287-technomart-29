// Modals
// Map

let mapImage = document.querySelector('.map');
let mapPopup = document.querySelector('.modal-map');
let mapClose = document.querySelector('.map-close');

mapImage.addEventListener('click', function (evt) {
  evt.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function() {
	mapPopup.classList.remove('modal-show');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      mapPopup.classList.remove('modal-show');
    }
  }
});

// Write-us 

let writeUsButton = document.querySelector('.write-us-button');
let writeUsPopup = document.querySelector('.modal-write-us');
let writeUsClose = document.querySelector('.write-us-close');
let writeUsForm = document.querySelector('.request-form');
let writeUsName = document.getElementById('request-name');
let writeUsEmail = document.getElementById('request-email');
let writeUsText = document.getElementById('request-text');

let isStorageSupport = true;
let storage = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

writeUsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
 	writeUsPopup.classList.add('modal-show');
	 	if (isStorageSupport) {
			writeUsName.value = storageName;
			writeUsEmail.value = storageEmail;
			writeUsText.focus();
		} else {
		writeUsName.focus();
	}
});

writeUsClose.addEventListener('click', function (evt) {
  evt.preventDefault();
	writeUsPopup.classList.remove('modal-show');
	writeUsPopup.classList.remove('modal-error');
});

writeUsForm.addEventListener('submit', function (evt) {
	if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
    	evt.preventDefault();
    	writeUsPopup.classList.remove('modal-error');
    	writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    	writeUsPopup.classList.add('modal-error');
    } else {
    	if (isStorageSupport) {
	    localStorage.setItem('name', writeUsName.value);
	    localStorage.setItem('email', writeUsEmail.value);
		}
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      writeUsPopup.classList.remove('modal-show');
      writeUsPopup.classList.remove('modal-error');
    }
  }
});

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

//Sliders
// Main-slider

let slides = document.querySelectorAll('.slider-item') 
let slidesButtonLeft = document.querySelector('.left');
let slidesButtonRight = document.querySelector('.right');
let sliderPoints = document.querySelectorAll('.slider-pagination-control')

slidesButtonLeft.onclick = function() {
    slides[0].classList.toggle('slider-hidden');
    slides[1].classList.toggle('slider-hidden');
    sliderPoints[0].classList.toggle('current');
    sliderPoints[1].classList.toggle('current');
};

slidesButtonRight.onclick = function() {
    slides[0].classList.toggle('slider-hidden');
    slides[1].classList.toggle('slider-hidden');
    sliderPoints[0].classList.toggle('current');
    sliderPoints[1].classList.toggle('current');
};


for (let sliderPoint of sliderPoints) {
  sliderPoint.onclick = function () {
    slides[0].classList.toggle('slider-hidden');
    slides[1].classList.toggle('slider-hidden');
    sliderPoints[0].classList.toggle('current');
    sliderPoints[1].classList.toggle('current');
  };
}

// features-slider 

let featureSliderbuttons = document.querySelectorAll('.features-button');
let features = document.querySelectorAll('.features-item')

featureSliderbuttons[0].addEventListener('click', function (evt) {
    evt.preventDefault();

    featureSliderbuttons[2].classList.remove('feature-button-active');
    featureSliderbuttons[1].classList.remove('feature-button-active');
    featureSliderbuttons[0].classList.add('feature-button-active');

    features[1].classList.remove('feature-active');
    features[2].classList.remove('feature-active');
    features[0].classList.add('feature-active');
});


featureSliderbuttons[1].addEventListener('click', function (evt) {
    evt.preventDefault();

    featureSliderbuttons[0].classList.remove('feature-button-active');
    featureSliderbuttons[2].classList.remove('feature-button-active');
    featureSliderbuttons[1].classList.add('feature-button-active');

    features[0].classList.remove('feature-active');
    features[2].classList.remove('feature-active');
    features[1].classList.add('feature-active');
});


featureSliderbuttons[2].addEventListener('click', function (evt) {
    evt.preventDefault();

    featureSliderbuttons[0].classList.remove('feature-button-active');
    featureSliderbuttons[1].classList.remove('feature-button-active');
    featureSliderbuttons[2].classList.add('feature-button-active');

    features[1].classList.remove('feature-active');
    features[0].classList.remove('feature-active');
    features[2].classList.add('feature-active');
});
