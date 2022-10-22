AOS.init();


$('.navbar-toggler').click(function () {
      $('body').toggleClass('showMenu');
});





var swiper = new Swiper(".mySwiper", {
      spaceBetween: 50,
      loop: true,
});



// new fullpage('#fullpage', {
//       // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],

//       licenseKey: 'YOUR LICENSE KEY HERE '
// });





var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });