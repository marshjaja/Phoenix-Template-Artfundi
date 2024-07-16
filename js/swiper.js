document.addEventListener("DOMContentLoaded", function () {
	//?  ========== Initialize Hero Swiper ===========
	//?  ========== Initialize Hero Swiper ===========
	var swiper = new Swiper("hero-swiper", {
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
	});

	const $numbers = document.querySelectorAll(".right-numbers span");
	const carousel = document.querySelector("#heroCarousel");
	const carouselInstance = new bootstrap.Carousel(carousel);

	$numbers.forEach((number, i) => {
		number.addEventListener("click", function () {
			carouselInstance.to(i);
			updateIndicators(i);
		});
	});

	carousel.addEventListener("slid.bs.carousel", function (event) {
		const currentIndex = event.to;
		updateIndicators(currentIndex);
	});

	function updateIndicators(index) {
		$numbers.forEach((number, i) => {
			number.classList.toggle("active", i === index);
		});
	}

	updateIndicators(0);

	// NOTE
	//?  ========== Initialize Latest Swiper ===========
	//?  ========== Initialize Latest Swiper ===========
	var swiper = new Swiper(".latest-swiper", {
		slidesPerView: 4,
		spaceBetween: 30,

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
	var swiper = new Swiper(".latest-news", {
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
