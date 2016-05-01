'use strict;'

{ //ECMAScript 6
  $(() => {

    //Массив вопросов
    let mathTest = [
      {
        question: 'Сколько будет 2*2?',
        answers: ['4', '6', '9'],
        trueAnswer: 1
      },
      {
        question: 'Сколько будет 3*3?',
        answers: ['12', '6', '9'],
        trueAnswer: 3
      },
      {
        question: 'Сколько будет 4*4?',
        answers: ['18', '16', '27'],
        trueAnswer: 2
      }
    ];

//Шаблон
    let tamplate =
        '<script type="text/html" id="data">' +
        '<% for (let i = 1; i < test.length + 1; i++) { %>' +
        '<p><%= i + ". " + test[i-1].question %></p>' +
        '<ul>' +
        '<% for (let j = 1; j < test[i-1].answers.length + 1; j++) {%>' +
        '<li>' +
        '<input type="radio" name= <%= "an_" + i %> id= <%= "an_" + i + "-" + j %> value="<%= j %>">' +
        '<label for= <%= "an_" + i + "-" + j %> ><%= " " + test[i-1].answers[j-1] %></label>' +
        '</li><% }; %>' +
        '</ul><% }; %>' +
        '</script>';


//Создание DOM
    let body = document.getElementsByTagName('body');
    let newElement = document.createElement('div');
    newElement.className = "wrapper";
    document.body.appendChild(newElement);

    let wrapper = document.body.querySelector('.wrapper');
    newElement = document.createElement('h3');
    newElement.innerHTML = 'Тест по математике';
    wrapper.appendChild(newElement);

    newElement = document.createElement('form');
    newElement.setAttribute('name', 'test');
    newElement.setAttribute('method', 'GET');
    newElement.setAttribute('action', '');
    wrapper.appendChild(newElement);

    //Вставляем теги <UL>
    let form = wrapper.querySelector('form');

    let $form = $("form");
    $form.append(tamplate); //Вставка шаблона в форму

//Создание кнопки
    newElement = document.createElement('button');
    newElement.setAttribute('type', 'submit');
    newElement.innerHTML = 'Проверить мои результаты';
    form.appendChild(newElement);


    let $ul = $('ul');
    let $body = $('body');

//Работа с хранилищем
    localStorage.setItem('mathTest', JSON.stringify(mathTest));
    let testQuestions = JSON.parse(localStorage.getItem('mathTest'));

//Шаблонизация
    let $tmplHTML = $('#data').html();
    let inserts = tmpl($tmplHTML, {
      test: testQuestions
    });
    $('button').before(inserts);

//Логика проверок
    $form.submit(checkSubmit);
    let accept; //правильность всех ответов

    function checkSubmit(e) {
      e.preventDefault();
      for (let i = 0; i < testQuestions.length; i++) {
        let $answ = $("input:checked").eq(i).val();
        if ($answ == testQuestions[i].trueAnswer) {
          accept = true;
        } else {
          accept = false;
        };
      };
      showModal(accept);
    };

//Модальное окно
    function showModal(a) {
      let $overlay = $('<div class="overlay"></div>');
      let $modal = $('<div class="modal"></div>');
      let accept = a;
      $body.append($overlay);
      $body.append($modal);

      (accept) ? $span = $('<p><span style="color: green;">Поздравляем! Вы прошли тест</span></p>') : $span = $('<p><span style="color: red;">Вы не прошли тест</span></p>');

      $buttonOK = $('<button type="button" class="button">OK</button>');
      $modal.append($span)
          .append($buttonOK);
      $buttonOK.on('click', () => location.reload()); //ECMAScript 6
    }
  });
}