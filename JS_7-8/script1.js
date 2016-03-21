var $label = $('label');
var $input = $('input');
var $div = $('div');
var $span = $('span');

for (var i = 0; i < 3; i++) {
  $label.eq(i).css({
    display: 'inline-block',
    width: function(){ return $label.eq(0).css('width') },
  });

};

$input.eq(0).hover(
    function(){
      $span.hide();
      $span.eq(0).show();
    },
    function(){ $span.hide(); }
);

$input.eq(1).hover(
    function(){
      $span.hide();
      $span.eq(1).show();
    },
    function(){ $span.hide(); }
);

$input.eq(2).hover(
    function(){
      $span.hide();
      $span.eq(2).show();
    },
    function(){ $span.hide(); }
);

$(button).on('click', function(){
  for (var i = 0; i < 3; i++) {
    $span.eq(i).hide();
    $span.eq(i).show();
  }
});