(function($) {

	//По умолчанию крутиться по кругу (carouselCircle: true)
	//(carouselCircle: false) - если достигается конец карусели или самое начало, соответствующая стрелка пропадает
	//Если кликнуть на изображении, появится его модальное окно.
	//Клик в любом месте закрывает модальное окно

  	$.fn.myCarousel = function(options){
     	
     	var defaults = {
     		carouselCircle: true
     	};

     	var settings = $.extend(defaults, options);

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

		if (!defaults.carouselCircle) {
			$leftArrow.css('opacity', '0');
		};  		

  		function leftClick(){

  			if (currentPosition > 0) {
  				$carouselList.animate({
  					right: currentPosition * offset - offset + 'px'
  				}, 500);
  				currentPosition--;

  				if (!defaults.carouselCircle){
	  				$rightArrow.css('opacity', '1');
	  				if (currentPosition == 0) {
	  					$leftArrow.css('opacity', '0');
	  				};
	  				return this;
  				};

  			} else {
  				currentPosition = $listLength - 2;
  			};
  			return this;
  		};

  		function rightClick(){

  			if (currentPosition < $listLength - 3) {
  				$carouselList.animate({
  					right: currentPosition * offset + offset + 'px'
  				}, 500);
  				currentPosition++;

  				if (!defaults.carouselCircle) {
	  				$leftArrow.css('opacity', '1');
	  				if (currentPosition == $listLength - 3){
	  					$rightArrow.css('opacity', '0');
	  				};
	  				return this;
				};

  			} else {
  					currentPosition = -1;
  				};
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
$(function(){
	$('.wrapper').myCarousel({
     		// carouselCircle: true
     	});
});

$(function(){

	var $tmplHTML = $('#tmplscript').html();
	var data = {
		name: 'Чульский Мирослав Александрович',
		image: 'img/img.jpg',
		text1: 'Пытаюсь учиться на курсах GoForIT',
		li1: 'Мне так нравиться',
		li2: 'Я так хочу',
		li3: 'Просто так',
		phone: '+38-050-5467368',
		profile: 'https://www.facebook.com/profile.php?id=100002129083915',
		text4: 'Чаще улыбайтесь )))'
	};
	var newContent = tmpl($tmplHTML, data);
	$('.tamplate').append(newContent);
});
(function(){
var cache = {};

this.tmpl = function tmpl(str, data){
// Figure out if we’re getting a template, or if we need to
// load the template – and be sure to cache the result.
var fn = !/\W/.test(str) ?
cache[str] = cache[str] ||
tmpl(document.getElementById(str).innerHTML) :

// Generate a reusable function that will serve as a template
// generator (and which will be cached).
new Function("obj",
	"var p=[],print=function(){p.push.apply(p,arguments);};" +

	// Introduce the data as local variables using with(){}
	"with(obj){p.push('" +

	// Convert the template into pure JavaScript
	str
	.replace(/[\r\t\n]/g, " ")
	.split("<%").join("\t") 
	.replace(/((^|%>)[^\t]*)'/g, "$1\r")
	.replace(/\t=(.*?)%>/g, "',$1,'")
	.split("\t").join("');")
	.split("%>").join("p.push('")
	.split("\r").join("\\'")
	 + "');}return p.join('');"
);

// Provide some basic currying to the user
return data ? fn( data ) : fn;
};
})();
(function($) {

	//По умолчанию крутиться по кругу (carouselCircle: true)
	//(carouselCircle: false) - если достигается конец карусели или самое начало, соответствующая стрелка пропадает
	//Если кликнуть на изображении, появится его модальное окно.
	//Клик в любом месте закрывает модальное окно

  	$.fn.myCarousel = function(options){
     	
     	var defaults = {
     		carouselCircle: true
     	};

     	var settings = $.extend(defaults, options);

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

		if (!defaults.carouselCircle) {
			$leftArrow.css('opacity', '0');
		};  		

  		function leftClick(){

  			if (currentPosition > 0) {
  				$carouselList.animate({
  					right: currentPosition * offset - offset + 'px'
  				}, 500);
  				currentPosition--;

  				if (!defaults.carouselCircle){
	  				$rightArrow.css('opacity', '1');
	  				if (currentPosition == 0) {
	  					$leftArrow.css('opacity', '0');
	  				};
	  				return this;
  				};

  			} else {
  				currentPosition = $listLength - 2;
  			};
  			return this;
  		};

  		function rightClick(){

  			if (currentPosition < $listLength - 3) {
  				$carouselList.animate({
  					right: currentPosition * offset + offset + 'px'
  				}, 500);
  				currentPosition++;

  				if (!defaults.carouselCircle) {
	  				$leftArrow.css('opacity', '1');
	  				if (currentPosition == $listLength - 3){
	  					$rightArrow.css('opacity', '0');
	  				};
	  				return this;
				};

  			} else {
  					currentPosition = -1;
  				};
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
$(function(){
	$('.wrapper').myCarousel({
     		// carouselCircle: true
     	});
});

$(function(){

	var $tmplHTML = $('#tmplscript').html();
	var data = {
		name: 'Чульский Мирослав Александрович',
		image: 'img/img.jpg',
		text1: 'Пытаюсь учиться на курсах GoForIT',
		li1: 'Мне так нравиться',
		li2: 'Я так хочу',
		li3: 'Просто так',
		phone: '+38-050-5467368',
		profile: 'https://www.facebook.com/profile.php?id=100002129083915',
		text4: 'Чаще улыбайтесь )))'
	};
	var newContent = tmpl($tmplHTML, data);
	$('.tamplate').append(newContent);
});
(function(){
var cache = {};

this.tmpl = function tmpl(str, data){
// Figure out if we’re getting a template, or if we need to
// load the template – and be sure to cache the result.
var fn = !/\W/.test(str) ?
cache[str] = cache[str] ||
tmpl(document.getElementById(str).innerHTML) :

// Generate a reusable function that will serve as a template
// generator (and which will be cached).
new Function("obj",
	"var p=[],print=function(){p.push.apply(p,arguments);};" +

	// Introduce the data as local variables using with(){}
	"with(obj){p.push('" +

	// Convert the template into pure JavaScript
	str
	.replace(/[\r\t\n]/g, " ")
	.split("<%").join("\t") 
	.replace(/((^|%>)[^\t]*)'/g, "$1\r")
	.replace(/\t=(.*?)%>/g, "',$1,'")
	.split("\t").join("');")
	.split("%>").join("p.push('")
	.split("\r").join("\\'")
	 + "');}return p.join('');"
);

// Provide some basic currying to the user
return data ? fn( data ) : fn;
};
})();
!function(a){a.fn.myCarousel=function(b){function c(){if(o>0){if(m.animate({right:o*n-n+"px"},500),o--,!i.carouselCircle)return l.css("opacity","1"),0==o&&k.css("opacity","0"),this}else o=p-2;return this}function d(){if(p-3>o){if(m.animate({right:o*n+n+"px"},500),o++,!i.carouselCircle)return k.css("opacity","1"),o==p-3&&l.css("opacity","0"),this}else o=-1;return this}function e(){return h.remove(),g.remove(),this}function f(){var b=a(this).attr("src");return g=a('<div class="bigimg"><img src="'+b+'"></div>'),h=a('<div class="overlay"></div>'),j.append(h),j.append(g),h.one("click",e),g.one("click",e),this}var g,h,i={carouselCircle:!0},j=(a.extend(i,b),a("body")),k=a(".mycarousel-arrow-left"),l=a(".mycarousel-arrow-right"),m=a(".mycarousel-list"),n=275,o=0,p=m.find("li").length,q=m.find("img");return i.carouselCircle||k.css("opacity","0"),k.on("click",c),l.on("click",d),q.on("click",f),this}}(jQuery),$(function(){$(".wrapper").myCarousel({})}),$(function(){var a=$("#tmplscript").html(),b={name:"Чульский Мирослав Александрович",image:"img/img.jpg",text1:"Пытаюсь учиться на курсах GoForIT",li1:"Мне так нравиться",li2:"Я так хочу",li3:"Просто так",phone:"+38-050-5467368",profile:"https://www.facebook.com/profile.php?id=100002129083915",text4:"Чаще улыбайтесь )))"},c=tmpl(a,b);$(".tamplate").append(c)}),function(){var a={};this.tmpl=function b(c,d){var e=/\W/.test(c)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+c.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):a[c]=a[c]||b(document.getElementById(c).innerHTML);return d?e(d):e}}();