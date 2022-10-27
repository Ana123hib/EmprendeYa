document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel,{
		duration: 150,
		dist:-50,
		shift:5,
		padding:20,
		numVisible:3,
		indicators:true

	})
});