$(function() {
	$('.fairy-tail__slider , .our-trip__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
		autoplay: 3000,
		responsive: [
			{
				breakpoint:601,
				settings :{
					arrows:false
				}
			}
		]
	});
});