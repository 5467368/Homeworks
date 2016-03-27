$(function(){

	// Карусель
	$(function(){
		$('.jcarousel').jcarousel({
			// vertical: true,
			animation: 600,
			transitions: Modernizr.csstransitions ? {
		        transforms:   Modernizr.csstransforms,
		        transforms3d: Modernizr.csstransforms3d,
		        easing:       'ease'
    		} : false,
    		wrap: 'circular'
		});

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
	});

	//Меню
	$(function(){

		$('.dropDown').hover(
			function(){
				$(this).children('.subMenu').slideDown(200)
			},
			function(){
				$(this).children('.subMenu').slideUp(200)
			})

		$('.subMenuLi').hover(
			function(){
				$(this).animate({
					backgroundColor: '#2ACCCC'
				}, 200)
				.children('a').animate({
					backgroundColor: '#2ACCCC'
				}, 200)
				.animate({
					color: 'yellow'
				}, 0)
			},
			function(){
				$(this).animate({
					backgroundColor: '#FF6464'
				}, 200)
				.children('a').animate({
					backgroundColor: '#FF6464'
				}, 200)
				.animate({
					color: '#000'
				}, 0)
			}
		)		
	})

	//Чекбокс со слайдером
	// Так и не заработал
	$(function(){
		var $checkboxesJS = $('.checkboxesJS');
		var $inputSlider = $checkboxesJS.find("input").eq(0);
		var $label = $checkboxesJS.find('label').eq(0);
		var $spanSlider = $checkboxesJS.find('span').eq(0);

		$label.on('click', changeSlide);

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


	//Селекты
	//CuSel
	$(function(){

		//Костыль для поддержки версии
		(function() {
		 
			var matched, browser;
			 
			// Use of jQuery.browser is frowned upon.
			// More details: http://api.jquery.com/jQuery.browser
			// jQuery.uaMatch maintained for back-compat
			jQuery.uaMatch = function( ua ) {
			    ua = ua.toLowerCase();
			 
			    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
			        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
			        /(msie) ([\w.]+)/.exec( ua ) ||
			        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
			        [];
			 
			    return {
			        browser: match[ 1 ] || "",
			        version: match[ 2 ] || "0"
			    };
			};
			 
			matched = jQuery.uaMatch( navigator.userAgent );
			browser = {};
			 
			if ( matched.browser ) {
			    browser[ matched.browser ] = true;
			    browser.version = matched.version;
			}
			 
			// Chrome is Webkit, but Webkit is also Safari.
			if ( browser.chrome ) {
			    browser.webkit = true;
			} else if ( browser.webkit ) {
			    browser.safari = true;
			}
			 
			jQuery.browser = browser;
		})();
		//Конец костыля

		var params = {
    	    changedEl: ".lineForm select",
    	    visRows: 7,
    	    scrollArrows: true
    	}
    	cuSel(params);

	})


})