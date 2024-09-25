const slider = tns({
	container: '.corousel__inner',
	items: 1,
	slideBy: 'page',
	controls: false,
	nav: false
});
document.querySelector('.prev').addEventListener('click', function(){
	slider.goTo('prev')
});
document.querySelector('.next').addEventListener('click', function(){
	slider.goTo('next')
});