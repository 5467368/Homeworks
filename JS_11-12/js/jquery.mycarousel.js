(function($) {

	//Если достигается конец карусели или самое начало, соответствующая стрелка пропадает
	//Если кликнуть на изображении, появится его модальное окно.
	//Клик в любом месте закрывает модальное окно

  	$.fn.myCarousel = function(){
     	
     	// var default = {

     	// };
     	var $body = $('body');
  		var $leftArrow = $('.mycarousel-arrow-left');
  		var $rightArrow = $('.mycarousel-arrow-right');
  		var $carouselList = $('.mycarousel-list');

  		var offset = 275;
  		var currentPosition = 0;
  		var currentOffset = offset;
  		var $listLength = $carouselList.find('li').length;
  		var $element = $carouselList.find('img');
  		var $modal, $overlay;

  		function leftClick(){

  			if (currentPosition > 0) {
  				$carouselList.animate({
  					right: currentPosition * offset - offset + 'px'
  				}, 500);
  				currentPosition--;
  				// $rightArrow.css('opacity', '1');
  				// if (currentPosition == 0) {
  				// 	$leftArrow.css('opacity', '0');
  				// };

  				// if (currentPosition <= 0) {
  				// 	currentPosition = $listLength - 2;
  				// };
  			}
  			else {currentPosition = $listLength - 2;};
  			return this;
  		};

  		function rightClick(){

  			if (currentPosition < $listLength - 3) {
  				$carouselList.animate({
  					right: currentPosition * offset + offset + 'px'
  				}, 500);
  				currentPosition++;
  				// $leftArrow.css('opacity', '1');

  				// if (currentPosition == $listLength - 3){
  				// 	$rightArrow.css('opacity', '0');
  				// };

  			} else {
  					// (currentPosition >= $listLength - 3) {
  					currentPosition = -1;
  				};
  			// };
  			return this;
  		};

  		function hideOverlay(){
  			$overlay.remove();
  			$modal.remove();
  			return this;
  		};

  		function elementClick(){

  			var $src = $(this).attr('src');
  			$modal = $('<div class="bigimg"><img src="' + $src +'"></div>');
  			$overlay = $('<div class="overlay"></div>');

  			$body.append($overlay);
  			$body.append($modal);
			$overlay.one('click', hideOverlay);
			$modal.one('click', hideOverlay);

  			return this;
  		};

  		$leftArrow.on('click', leftClick);
  		$rightArrow.on('click', rightClick);
  		$element.on('click', elementClick);

    	return this;
  	};
})(jQuery);