$(document).ready(function(){
  var mainSwiper = new Swiper(".main_swiper", {
    loop: true,
    pagination: {
      el: ".main_pagination",
    },
  });

  var modelSwiper = new Swiper(".model_swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".model_pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


  $('.nav > ul > li > a').click(function(e){
    e.preventDefault();
    $(this).siblings('.depth_3').toggleClass('show');
    
    if($(this).parents().siblings().children('.depth_3').hasClass('show')){
      $(this).parents().siblings().children('.depth_3').removeClass('show');
    }
  })

  $('.hide').click(function(){
    $(this).siblings('ul').slideToggle();
    $(this).parents('.footer_site_map').siblings('div').children('ul').slideUp();
  })

  $('.open_menu_list > ul > li').click(function(){
    $(this).children('ul').slideToggle();
    $(this).siblings('li').children('ul').slideUp();
    $(this).children('span').toggleClass('turn');
  })

  $('.open_menu > i').click(function(){
    $('.open_menu').toggleClass('trans');
    $('.open_menu_list').toggleClass('show');
  })

})