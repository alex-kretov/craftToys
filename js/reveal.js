/*** scroll animation ***/

var sr = ScrollReveal();
var RevealData = {
  DURATION: 1000,
  INTERVAL: 60,
  DISTANCE: '10px'
};

// Общее

// Промо, подвал, навигация
sr.reveal('.info__title, .page-footer, ' +
  '.site-list__item, .promo', {
  viewFactor: 0.5,
  easing: 'ease-in-out',
  duration: RevealData.DURATION - 200,
  opacity: 0
});

// Главная страница

// Товар недели, о нас,  контакты, карта
sr.reveal('.promo__title, .info__item, .info__title,  .catalog__title-wrapper, ' +
  '.catalog__item, .catalog__outro, .slider,' +
  '.contacts__inner, .contacts__btn, .contacts__map' , {
  viewFactor: 0.5,
  easing: 'ease-in-out',
  distance: RevealData.DISTANCE + '5px',
  origin: 'bottom',
  duration: RevealData.DURATION ,
  opacity: 0,
  interval: RevealData.INTERVAL + 200
});



// Страница с формой

// Форма
sr.reveal('.form__title-wrapper, .form__descr, ' +
  '.form__field, .form__btn-wrapper', {
  viewFactor: 0,
  easing: 'ease-in-out',
  distance: RevealData.DISTANCE,
  origin: 'bottom',
  duration: RevealData.DURATION - 500,
  opacity: 0,
  interval: RevealData.INTERVAL
});

// Каталог товаров

// Карточки товаров, видео
sr.reveal('.featured__title-inner, .featured__inner, .featured__pic-wrapper, .featured__price-wrapper', {
  viewFactor: 0,
  easing: 'ease-in-out',
  distance: RevealData.DISTANCE,
  origin: 'bottom',
  duration: RevealData.DURATION - 500,
  opacity: 0,
  interval: RevealData.INTERVAL
});