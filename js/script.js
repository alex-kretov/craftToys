var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

var openMenu = function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  };
};

navToggle.addEventListener('click', function() {
  openMenu();
});



var modalOverlay = document.querySelector('.modal-overlay');
var popupCart = document.querySelector('.popup');
var popupClose = document.querySelector('.popup__close')
var popupBtn = document.querySelector('.contacts__btn');

var closeModal = function(){ 
  modalOverlay.classList.remove('modal-overlay--show');
  popupCart.classList.remove('popup--show');
};

var openModal = function(evt) {
  evt.preventDefault();
  popupCart.classList.add('popup--show');            
  modalOverlay.classList.add('modal-overlay--show');
};

 
  modalOverlay.addEventListener('click', function(evt)  {
    evt.preventDefault();
    closeModal();
  });
 
popupBtn.addEventListener('click', openModal);


popupClose.addEventListener("click", function(evt) {
          evt.preventDefault();
          closeModal();
         });


window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popupCart.classList.contains('popup--show')) {
      closeModal();
    }
  }
});

// Крата

var map = document.querySelector('.contacts__google-maps');

if(map != null) {
  function initMap() {
    var map = new google.maps.Map(document.querySelector('.contacts__google-maps'), {
      center: {lat: 48.7176484, lng: 44.5157884},
      zoom: 17,
      styles: [
        {
          'featureType': 'all',
          'elementType': 'all',
          'stylers': [
            {
                'hue': '#a600ff'
            }
        ]
      },
      {
        'featureType': 'all',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'hue': '#a4dae4'
            }
        ]
      },
      {
        'featureType': 'all',
        'elementType': 'labels',
        'stylers': [
            {
                'weight': '0.01'
            },
            {
                'hue': '#0087ff'
            }
        ]
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'hue': '#ff7800'
            }
          ]
        }
      ]
    });
    var marker = new google.maps.Marker({
      position: {lat: 48.7176484, lng: 44.5157884},
      map: map,
      animation: google.maps.Animation.DROP,    
      title: 'Knitty-Store',
      icon: 'img/icon-map-pin.svg'
    });
    
  };
}

//слайдер


var slides = document.querySelectorAll(' .slider__item');
var currentSlide = 2;
var slideInterval = setInterval(nextSlide, 3000);



function goToSlide(n){
	slides[currentSlide].className = 'slider__item';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slider__item slider__item--show';
}

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

var playing = true; 

function pauseSlideshow(){	 
	playing = false;
	clearInterval(slideInterval);
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.addEventListener('click', function(){
	pauseSlideshow();
	nextSlide();
});

previous.addEventListener('click', function(){
	pauseSlideshow();
	previousSlide();
});




















