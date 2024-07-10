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

	// Add click event listeners to custom span elements
	const $numbers = document.querySelectorAll(".right-numbers span");

	$numbers.forEach((number, i) => {
		number.addEventListener("click", function () {
			swiper.slideToLoop(i, 1000); // Use Swiper's slideTo method
		});
	});

	// Update active class on custom span elements based on Swiper's active index
	swiper.on("slideChange", function () {
		const currentIndex = swiper.realIndex;
		$numbers.forEach((number, i) => {
			number.classList.toggle("active", i === currentIndex);
		});
	});

	// Initially set the active class on the first number
	$numbers[0].classList.add("active");
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
