const swiper = new Swiper('.swiper', {

    effect: 'fade',
    autoplay:{
      delay: 2500,
      disavleOnInteraction: false,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });