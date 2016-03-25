$(function(){

	//Чекбокс со слайдером
	// Так и не заработал

	var $checkboxesJS = $('.checkboxesJS');
	var $inputSlider = $checkboxesJS.find("input").eq(0);
	var $label = $checkboxesJS.find('label').eq(0);
	var $spanSlider = $checkboxesJS.find('span').eq(0);

	$label.on('click', changeSlide);
	console.log('$inputSlider' + $inputSlider);

	function changeSlide(){
		
		if (!$inputSlider.prop('checked')) {
			$label.addClass('sliderChecked')
		} else {
			$label.removeClass('sliderChecked');
		} 
		  
	}

	//Чекбокс со спрайтом

	var $labelSprite = $checkboxesJS.find('label').eq(1);
	var $inputSprite = $checkboxesJS.find('input').eq(1);
	$labelSprite.on('click', changeSprite);

	function changeSprite(){
		 
		if(!$inputSprite.prop('checked')){
			$labelSprite.addClass('checkboxSpriteJSchecked');
		} else {
			$labelSprite.removeClass('checkboxSpriteJSchecked');
		}
	}
})
