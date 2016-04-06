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