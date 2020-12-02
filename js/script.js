$('.navbar-nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 60
	}, 0);
});

$('.btn-group a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 60
	}, 500);
});

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

(function () {
    var menu = document.getElementById('img-nav'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('mostrar'); // > 0 ou outro valor desejado
        else menu.classList.remove('mostrar');
    });
})();

(function () {
    var menu = document.getElementById('bg-nav'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('bg-change-nav'); // > 0 ou outro valor desejado
        else menu.classList.remove('bg-change-nav');
    });
})();

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1400: {
        slidesPerView: 3,
          spaceBetween: 40
        },
      },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });