'use strict;'

$(function(){

  //Массив вопросов
  var mathTest = [
    {
      question:  'Сколько будет 2*2?',
      answers: ['4', '6', '9'],
      trueAnswer: 1
    },
    {
      question:  'Сколько будет 3*3?',
      answers: ['4', '6', '9'],
      trueAnswer: 3
    },
    {
      question:  'Сколько будет 4*4?',
      answers: ['18', '16', '27'],
      trueAnswer: 2
    }
  ];

//Шаблон
  var tamplate = 
  '<script type="text/html" id="data">' +
    '<% for (var i = 1; i < test.length + 1; i++) %>' +
      '<p><%= i + ". " + test[i-1].question %>' +
      '<ul>' +
      '<% for (var j = 1; j < test[i-1].answers.length + 1; j++) %>' +
        '<p><li>' +
          '<input type="radio" name="an_ + i + \" id="an_ + i + "-" + j + \" value="+j+\">' +
          '<label for="an_" + i + "-" + j + \"><%= test[i-1].answers[j-1] %></label>' +
        '</li></p>' +
      '</ul></p>';





//Создание DOM
  var body = document.getElementsByTagName('body');
  var newElement = document.createElement('div');
  newElement.className = "wrapper";
  document.body.appendChild(newElement);

  var wrapper = document.body.querySelector('.wrapper');
  newElement = document.createElement('h3');
  newElement.innerHTML = 'Тест по математике';
  wrapper.appendChild(newElement);

  newElement = document.createElement('form');
  newElement.setAttribute('name', 'test');
  newElement.setAttribute('method', 'GET');
  newElement.setAttribute('action', '');
  wrapper.appendChild(newElement);

  //Вставляем теги <UL>
  var form = wrapper.querySelector('form');

  // for(var i=1; i < testQuestions.length + 1; i++){
  //   newElement = document.createElement('p');
  //   newElement.innerHTML = i + '. ' + test[i-1].question;
  //   form.appendChild(newElement);

  //   newElement = document.createElement('ul');
  //   form.appendChild(newElement);

  // // Вставляем в <UL> теги <LI>
  //   var ul = form.querySelectorAll('ul');
  //   for(var j=1; j < testQuestions[i-1].answers.length +1; j++){
  //     newElement = document.createElement('li');
  //     newElement.style.listStyle = 'none';
  //     ul[i-1].appendChild(newElement);

  //     var li = ul[i-1].querySelectorAll('li');
  //     newElement = document.createElement('input');
  //     newElement.setAttribute('type', 'radio');
  //     newElement.setAttribute('name', 'an_'+i);
  //     newElement.setAttribute('id', 'an_'+i+'-'+j);
  //     newElement.setAttribute('value', j);
  //     li[j-1].appendChild(newElement);

  //     newElement = document.createElement('label');
  //     newElement.setAttribute('for', 'an_'+i+'-'+j);
  //     newElement.innerHTML = testQuestions[i-1].answers[j-1];
  //     newElement.style.marginLeft = '5px';
  //     li[j-1].appendChild(newElement);

  //     newElement = document.createElement('br');
  //     li[j-1].appendChild(newElement);
  //   }
  // }

  var $form = $("form");
  $form.append(tamplate); //Вставка шаблона в форму

//Создание кнопки
  newElement = document.createElement('button');
  newElement.setAttribute('type', 'submit');
  newElement.innerHTML = 'Проверить мои результаты';
  form.appendChild(newElement);

  
  var $ul = $('ul');
  var $body = $('body');

//Работа с хранилищем
  localStorage.setItem('mathTest', JSON.stringify(mathTest));
  var testQuestions = localStorage.getItem('mathTest');

//Шаблонизация
  var $tmplHTML = $('#data').html();
  var inserts = tmpl($tmplHTML, {
    test: testQuestions
  });
  $form.append(inserts);


//Логика проверок
  $form.submit(checkSubmit);
  var accept; //правильность всех ответов

  function checkSubmit (e) {
    e.preventDefault();
    for (var i = 0; i < testQuestions.length; i++) {
      var $answ = $("input:checked").eq(i).val();
        if ($answ == testQuestions[i].trueAnswer) {
          accept = true;
        } else {
          accept = false;
        };
    };
    showModal(accept);
  };

//Модальное окно
  function showModal (a) {
    var $overlay = $('<div class="overlay"></div>');
    var $modal = $('<div class="modal"></div>');
    var accept = a;
    $body.append($overlay);
    $body.append($modal);

    (accept) ? $span = $('<p><span style="color: green;">Поздравляем! Вы прошли тест</span></p>') : $span = $('<p><span style="color: red;">Вы не прошли тест</span></p>');

    $buttonOK = $('<button type="button" class="button">OK</button>');
    $modal.append($span)
          .append($buttonOK);
    $buttonOK.on('click', function() {
              location.reload();    //JavaScript функция перегрузки страницы
            });

    // $overlay.one('click', hideOverlay);
    // $modal.one('click', hideOverlay);
  }

});