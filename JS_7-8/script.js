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
  $wrapper.css({
    margin: '0 auto',
    width: '1000px'
  });

  $section = $('.section');
  $section.css({
    width: '500px',
    height: 'auto',
    border: '1px solid black',
    borderRadius: '4px',
    backgroundColor: 'white',
    margin: '50px auto',
    fontSize: '15px'
  });

  $menu = $('.menu');
  $menu.css({
    width: '99%',
    height: '30px',
    backgroundColor: '#cccccc',
    border: '1px solid #aaaaaa',
    borderRadius: '4px',
    margin: '3px auto 0 auto'
  });

  $ul = $('ul');

  $li = $('li');
  $li.css({
    listStyle: 'none',
    // display: 'inline-block',
    float: 'left',
    padding: '4px 5px',
    backgroundColor: '#e6e6e6',
    border: '1px solid #D3D3D3',
    borderBottom: 'none',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    margin: '4px 0 0 3px',
    cursor: 'pointer'
  });
  
  start();

  $div = $('article');
  $div.css({
    padding: '15px'
  });

  // var $liArr = $('li');
  // $liArr = $.makeArray($liArr);
  // for (var i = 0; i < $liArr.length; i++) {
  //   console.log($liArr[i]);
  // }

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
  // $li.each(function(i){
  //   $(this).on('click', function(){
  //     $(this).css({
  //       cursor: 'default',
  //       backgroundColor: 'white',
  //       borderBottom: 'white',
  //       paddingBottom: '5px'

  //     });
  //   }); 
  // });

});








