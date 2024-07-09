var swiper = new Swiper(".swiper-container", {
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
