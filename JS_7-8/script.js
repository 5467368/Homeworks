$(function() {
  var isActive;
  function start(){
    $li.eq(0).css({
      cursor: 'default',
      backgroundColor: 'white',
      borderBottom: 'white',
      paddingBottom: '5px'
    });
      $('article').eq(0).show();
      $('article').eq(1).hide();
      $('article').eq(2).hide();

  };

  $wrapper = $('.wrapper');
  $section = $('.section');
  $menu = $('.menu');
  $ul = $('ul');
  $li = $('li');

  start();

  $div = $('article');
  $div.css({
    padding: '15px'
  });

  $li.eq(0).on('click', function(){
    $(this).css({
      cursor: 'default',
      backgroundColor: 'white',
      borderBottom: 'white',
      paddingBottom: '5px'
    });
    $li.eq(1).css({
      paddingBottom: 'px',
      cursor: 'pointer',
      backgroundColor: '#e6e6e6',
      border: '1px solid #D3D3D3',
      borderBottom: 'none',
    });
    $li.eq(2).css({
      paddingBottom: 'px',
      cursor: 'pointer',
      backgroundColor: '#e6e6e6',
      border: '1px solid #D3D3D3',
      borderBottom: 'none',
    });
    $('article').eq(0).show();
    $('article').eq(1).hide();
    $('article').eq(2).hide();
  });


    $li.eq(1).on('click', function(){
      $(this).css({
        cursor: 'default',
        backgroundColor: 'white',
        borderBottom: 'white',
        paddingBottom: '5px'
      });
      $li.eq(2).css({
          paddingBottom: 'px',
          cursor: 'pointer',
          backgroundColor: '#e6e6e6',
          border: '1px solid #D3D3D3',
          borderBottom: 'none',
      });
      $li.eq(0).css({
          paddingBottom: 'px',
          cursor: 'pointer',
          backgroundColor: '#e6e6e6',
          border: '1px solid #D3D3D3',
          borderBottom: 'none',
      });
      $('article').eq(1).show();
      $('article').eq(2).hide();
      $('article').eq(0).hide();
    });

    $li.eq(2).on('click', function(){
        $(this).css({
          cursor: 'default',
          backgroundColor: 'white',
          borderBottom: 'white',
          paddingBottom: '5px'
        });
        $li.eq(1).css({
            paddingBottom: 'px',
            cursor: 'pointer',
            backgroundColor: '#e6e6e6',
            border: '1px solid #D3D3D3',
            borderBottom: 'none',
        });
        $li.eq(0).css({
            paddingBottom: 'px',
            cursor: 'pointer',
            backgroundColor: '#e6e6e6',
            border: '1px solid #D3D3D3',
            borderBottom: 'none',
        });
        $('article').eq(2).show();
        $('article').eq(1).hide();
        $('article').eq(0).hide();
      });

  $li.hover(
    function(){
      if ($(this).css('cursor') == 'pointer') {
        $(this).css({
          backgroundColor: '#dadada',
          border: '1px solid #999999',
          borderBottom: 'none'
        })
      }
    },
    function(){
      if ($(this).css('cursor') == 'pointer') {
        $(this).css({
          backgroundColor: '#e6e6e6',
          border: '1px solid #D3D3D3',
          borderBottom: 'none'
        })
      }
    }
  );
});








