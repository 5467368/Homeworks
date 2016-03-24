$(function(){

	//Чекбокс со слайдером
	// Так и не заработал

	var $checkboxSliderJS = $('checkboxSliderJS');
	var $checkboxesJS = $('checkboxesJS');
	var $inputSlider = $checkboxesJS.find('input').eq(0);
	var $label = $checkboxesJS.find('label').eq(0);
	// var $label = $("checkboxSliderLabelJS");

	$label.on('click', changeSlide);

	console.log($label);

	function changeSlide(){
		console.log('Yes');
		 
		if ($inputSlider.attr("checked")) {

			$label.addClass('sliderChecked');
			$inputSlider.attr('checked', 'cheked');
		} else {
			$label.removeClass('sliderChecked')
			$inputSlider.attr('checked', false);
		}
		// console.log($inputSlider.attr('checked'));
		console.log($inputSlider.attr('checked'));
	}

	//Чекбокс со спрайтом

	var $labelSprite = $checkboxesJS.find('label').eq(1);
	var $inputSprite = $checkboxesJS.find('input').eq(1);
	$labelSprite.on('click', changeSprite);

	function changeSprite(){
		console.log('Yes');
		 
		if ($inputSprite.attr("checked")) {

			$label.addClass('sliderChecked');
			$inputSprite.attr('checked', 'cheked');
		} else {
			$label.removeClass('sliderChecked')
			$inputSprite.attr('checked', false);
		}
		// console.log($inputSlider.attr('checked'));
		console.log($inputSprite.attr('checked'));
	}
})