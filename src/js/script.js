$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/next.svg"></button>',
    /* responsive: */
  });


  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
  });


  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog--item__content').eq(i).toggleClass('catalog--item__content__active');
        $('.catalog--item__list').eq(i).toggleClass('catalog--item__list__active');
      });
    });
  }
  toggleSlide('.catalog--item__link');
  toggleSlide('.catalog--item__back');


  //model
  $('[data-modal=consultatian]').on('click', function () {
    $('.overlay, #consultatian').fadeIn('slow');
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultatian, #thanks, #order').fadeOut('slow');
  });

  $('.button__tab').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog--item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });


  //validate  

  function valideForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста введите свое Имя",
        phone: "Пожалуйста введите свой телефон",
        email: {
          required: "Пожалуйста введите свой email",
          email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
        }
      }
    });
  }
  valideForms('#consultatian-form');
  valideForms('#order form');
  valideForms('#consultatian form');



});