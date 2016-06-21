// jscs:disable
/**
 * Created by Мирослав on 19.05.2016.
 */
$(function () {

    function initMasonry(word){
        "use strict";
        var searchURL;
        if (word == '') {
            searchURL = 'http://api.pixplorer.co.uk/image?word=&amount=7&size=tb'
        } else {
            searchURL = 'http://api.pixplorer.co.uk/image?word=' + word + '&amount=7&size=tb'
        }
        $.ajax({
            url: searchURL,
            // dataType: 'jsonp',
            method: 'GET',
            success: function (data) {
                var $grid = $('.grid');
                var html = '<div class="grid-sizer"></div>';
                $.each(data.images, function(i, val) {
                    var img = '<div class="grid-item"><img src="' + val.imageurl + '"></div>';
                    html += img;
                });
                $grid.html(html);
                $grid.masonry({
                    // set itemSelector so .grid-sizer is not used in layout
                    itemSelector: '.grid-item',
                    // use element for option
                    columnWidth: '.grid-sizer',
                    percentPosition: true
                });
            }
        });
    }
    initMasonry();

    $('.search-button').on('click', function () {
        var text = $('.search-field input').val();
        initMasonry(text);
        console.log(text);
    });
    $('.search-field').on('keydown', 'input', function (e) {
        var inputText;
        if (e.which == 13) {
            inputText = $(this).val();
            initMasonry(inputText);
        }
    })
});
