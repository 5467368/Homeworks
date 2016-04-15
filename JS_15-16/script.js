var searchRes;
function GoogleCallback(func, data){
    searchRes = data.results;
};
console.log(searchRes);

$(function() {


	// $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0?q=" + "ggg" + "&callback=GoogleCallback&context=?",
	// 	function(data){
 //   	 var ul = document.createElement("ul");
 //    	$.each(data.results, function(i, val){
 //            var li = document.createElement("li");
 //            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
 //            ul.appendChild(li);
 //    	});
 //        $('.searchres').html(ul);
 //    });



	var url1 = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=";
    var url2 = "&callback=GoogleCallback&context=?";
	$('#inputbox').keydown(function(e) {
        var searchText;
		if (e.which == 13) {
            searchText = $('#input-form').val();
			$.ajax({
				url: url1 + searchText + url2,
				method: 'GET',
				dataType: 'jsonp'
				// success: function(){}
				// error: function(){}
			})
            // .done(function(){
           outputSearchRes();     
            // });
		}
	});

	function outputSearchRes() {
        var ul = document.createElement("ul");
        searchRes.each(function() {
          var li = document.createElement("li");
          li.innerHTML = '<a href="'+this.url+'" title="'+this.url+'" target="_blank">'+this.title+"</a> - "+this.content;                            
          ul.appendChild(li);
        });
        $('.searchres').html(ul);
    };
// // 	function error(){};
// // 	function success(){};
    // 

});
