var searchRes;
function GoogleCallback(func, data){
    console.log (data);
};
// function GoogleCallback (func, data) {
//     window[func](data);
// }

$(function() {

	// $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=" + + "&callback=GoogleCallback&context=?",
	// 	function(data){
 //   	 var ul = document.createElement("ul");
 //    	$.each(data.results, function(i, val){
 //            var li = document.createElement("li");
 //            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
 //            ul.appendChild(li);
 //    	});
 //        $('.searchres').html(ul);
 //    });

	var url1 = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=';
    var url2 = '&callback=GoogleCallback&context=?';
	$('#inputbox').keydown(function(e) {
        var searchText;
		if (e.which == 13) {
            searchText = $('#input-form').val();
			$.ajax({
				url: url1 + searchText + url2,
				// method: 'GET',
				dataType: 'jsonp'
				// success: function(){}
				// error: function(){}
			})
            // .done(function(){
                
            // });
		}
	});

	
// 	function error(){};
// 	function success(){};

	// function outputSearchRes(data){
	// 	console.log (data);
	// 	var ul = document.createElement("ul");
	// 	$.each(data.results, function(i, val){
 //      var li = document.createElement("li");
 //      li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
 //      ul.appendChild(li);
 //    });
 //    $('.searchres').html(ul);
	// };
});