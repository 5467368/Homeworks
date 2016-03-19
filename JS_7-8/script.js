$(function() {
  var isActive;
  function start(){
    $(li1).css({
      cursor: 'default',
      backgroundColor: 'white',
      borderBottom: 'white',
      paddingBottom: '5px'
    });
    $('.div1').css('display', 'block');
    $('.div2').css('display', 'none');
    $('.div3').css('display', 'none');

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


  $(li1).on('click', function(){
    $(this).css({
      cursor: 'default',
      backgroundColor: 'white',
      borderBottom: 'white',
      paddingBottom: '5px'
    });
    $(li2).css({
        paddingBottom: 'px',
        cursor: 'pointer',
        backgroundColor: '#e6e6e6',
        border: '1px solid #D3D3D3',
        borderBottom: 'none',
    });
    $(li3).css({
        paddingBottom: 'px',
        cursor: 'pointer',
        backgroundColor: '#e6e6e6',
        border: '1px solid #D3D3D3',
        borderBottom: 'none',
    });
    $('.div1').css('display', 'block');
    $('.div2').css('display', 'none');
    $('.div3').css('display', 'none');
  });
  
  $(li2).on('click', function(){
    $(this).css({
      cursor: 'default',
      backgroundColor: 'white',
      borderBottom: 'white',
      paddingBottom: '5px'
    });
    $(li1).css({
        paddingBottom: 'px',
        cursor: 'pointer',
        backgroundColor: '#e6e6e6',
        border: '1px solid #D3D3D3',
        borderBottom: 'none',
    });
    $(li3).css({
        paddingBottom: 'px',
        cursor: 'pointer',
        backgroundColor: '#e6e6e6',
        border: '1px solid #D3D3D3',
        borderBottom: 'none',
    });
    $('.div2').css('display', 'block');
    $('.div1').css('display', 'none');
    $('.div3').css('display', 'none');
  });

  $(li3).on('click', function(){
    $(this).css({
      cursor: 'default',
      backgroundColor: 'white',
      borderBottom: 'white',
      paddingBottom: '5px'
    });
    $(li2).css({
        paddingBottom: 'px',
        cursor: 'pointer',
        backgroundColor: '#e6e6e6',
        border: '1px solid #D3D3D3',
        borderBottom: 'none',
    });
    $(li1).css({
        paddingBottom: 'px',
        cursor: 'pointer',
        backgroundColor: '#e6e6e6',
        border: '1px solid #D3D3D3',
        borderBottom: 'none',
    });
    $('.div3').css('display', 'block');
    $('.div2').css('display', 'none');
    $('.div1').css('display', 'none');
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








