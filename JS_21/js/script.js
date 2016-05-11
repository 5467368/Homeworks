'use strict;'


$(function(){

  //Массив вопросов
  var mathTest = [
    {
      question:  'Сколько будет 2*2?',
      answers: ['4', '6','9'],
      trueAnswer: 1
    },
    {
      question:  'Сколько будет 3*3?',
      answers: ['12', '6', '9'],
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
    '<% for (var i = 1; i < test.length + 1; i++) { %>' +
      '<p><%= i + ". " + test[i-1].question %></p>' +
      '<ul>' +
      '<% for (var j = 1; j < test[i-1].answers.length + 1; j++) {%>' +
        '<li>' +
          '<input type="radio" name= <%= "an_" + i %> id= <%= "an_" + i + "-" + j %> value="<%= j %>">' +
          '<label for= <%= "an_" + i + "-" + j %> ><%= " " + test[i-1].answers[j-1] %></label>' +
        '</li><% }; %>' +
    '</ul><% }; %>'+
  '</script>';


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
  var testQuestions = JSON.parse(localStorage.getItem('mathTest'));

//Шаблонизация
  var $tmplHTML = $('#data').html();
  var inserts = tmpl($tmplHTML, {
    test: testQuestions
  });
  $('button').before(inserts);

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
  }

  TQlength = testQuestions.length;

try {
  module.exports = TQlength;
} catch (e){}
});