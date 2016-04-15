'use strict';

function GoogleCallback (func, data) {
    window[func](data);
}

$(function() {

	var url1 = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=";
    var url2 = "&callback=GoogleCallback&context=?";
	$('#inputbox').keydown(function(e) {
        var searchText;
		if (e.which == 13) {
            searchText = $('#input-form').val();
            var url = url1 + searchText + url2;
			// $.ajax({
			// url: url1 + searchText + url2,
			// 	method: 'GET',
			// 	dataType: 'jsonp'
			// 	// success: function(){}
			// 	// error: function(){}
			// });
            $.getJSON(url, {rsz:8},
                function(data){
                    var ul = document.createElement("ul");
                    $.each(data.results, function(i, val){
                        var li = document.createElement("li");
                        li.innerHTML = '<br><a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+'</a><p class="url">' + val.url + "</p>" + val.content + '<br>';
                        ul.appendChild(li);
                    });
                    $('.searchres').html(ul);
                }
            );
        }
    });
});
