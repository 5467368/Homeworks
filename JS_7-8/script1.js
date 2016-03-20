$('.wrapper').css({
  margin: '0 auto',
  width: '600px'
})

$('form').css({
  width: '100%',
  height: '200px',
  margin: '50px auto'
})

$('fieldset').css({
  width: '100%',
  height: 'auto',
  padding: '10px',
  margin: '0 auto'
});

$(button).css({
  borderRadius: '5px',
  height: '30px',
  width: '90px',
  border: '1px solid #d3d3d3',
  background: '#e6e6e6'
})

var toolTip = ['<span>Please provide your firstname.</span>', '<span>Please provide also your lastname.</span>', '<span>Your home or work address.</span>'];

var $label = $('label');
for (var i = 0; i < 3; i++) {


  $label.eq(i).css({
    display: 'inline-block',
    width: function(){ return $label.eq(0).css('width') },
  });
  
  
};

$('input').eq(0).hover(
    function(){
      $('span').remove();
      $('div').eq(0).append(toolTip[0]);
    },
    function(){ $('span').remove(); }
  );
$('input').eq(1).hover(
    function(){
      $('span').remove();
      $('div').eq(1).append(toolTip[1]);
    },
    function(){ $('span').remove(); }
  );
$('input').eq(2).hover(
    function(){
      $('span').remove();
      $('div').eq(2).append(toolTip[2]);
    },
    function(){ $('span').remove(); }
  );

$(button).on('click', function(){
  for (var i = 0; i < 3; i++) {
    $('span').eq(i).remove();
    $('div').eq(i).append(toolTip[i]);
  }
});