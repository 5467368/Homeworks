$(function(){

	




	//Чекбокс со слайдером
	// Так и не заработал

	var $checkboxSliderJS = $('checkboxSliderJS');
	var $checkboxesJS = $('.checkboxesJS');
	var $inputSlider = $checkboxesJS.find("input").eq(0);
	var $label = $checkboxesJS.find('label').eq(0);
	var $spanSlider = $checkboxesJS.find('span').eq(0);
	// var $label = $("checkboxSliderLabelJS");

	$label.on('click', changeSlide);
	console.log('$inputSlider' + $inputSlider);

	function changeSlide(){
		console.log('$inputSlider before- ' + $inputSlider.prop('checked'));
		 
		if (!$inputSlider.prop('checked')) {
			
			$inputSlider.prop('checked', true);
			$label.addClass('.sliderChecked');
		} else {
			$label.removeClass('.sliderChecked');
			$inputSlider.prop('checked', false);
		}
		console.log('$inputSlider after- ' + $inputSlider.prop('checked'));
	}

	//Чекбокс со спрайтом

	var $labelSprite = $checkboxesJS.find('label').eq(1);
	var $inputSprite = $checkboxesJS.find('input').eq(1);
	$labelSprite.on('click', changeSprite);

	function changeSprite(){
		 
		if ($inputSprite.attr("checked")) {

			$labelSprite.addClass('sliderChecked');
			$inputSprite.attr('checked', 'checked');
		} else {
			$labelSprite.removeClass('sliderChecked');
			$inputSprite.attr('checked', false);
		}
		console.log($inputSprite.attr('checked'));
	}
})
