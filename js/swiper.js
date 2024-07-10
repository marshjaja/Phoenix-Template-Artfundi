document.addEventListener("DOMContentLoaded", function () {
	//?  ========== Initialize Hero Swiper ===========
	//?  ========== Initialize Hero Swiper ===========

	var heroCarousel = document.getElementById("heroCarousel");
	var rightNumbers = document.querySelectorAll(".right-numbers span");

	heroCarousel.addEventListener("slide.bs.carousel", function (event) {
		var activeIndex = event.to;
		updateCustomIndicators(activeIndex);
	});

	rightNumbers.forEach(function (number, index) {
		number.addEventListener("click", function () {
			var carousel = bootstrap.Carousel.getInstance(heroCarousel);
			carousel.to(index);
		});
	});

	function updateCustomIndicators(index) {
		rightNumbers.forEach(function (number, i) {
			number.classList.toggle("active", i === index);
		});
	}

	// NOTE
	//?  ========== Initialize Latest Swiper ===========
	//?  ========== Initialize Latest Swiper ===========
	var swiper = new Swiper(".latest-swiper", {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1920: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
		draggable: true,
		watchOverflow: true,
	});
	AOS.init();
});
