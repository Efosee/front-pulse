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

$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
	function toogleSlide(item){
		$(item).each(function(i){
			$(this).on('click', function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	};
	toogleSlide('.catalog-item__link');
	toogleSlide('.catalog-item__back');
});