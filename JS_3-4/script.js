var body = document.getElementsByTagName('body');
var newElement = document.createElement('div');
newElement.className = "wrapper";
document.body.appendChild(newElement);

var wrapper = document.body.querySelector('.wrapper');
newElement = document.createElement('h3');
newElement.innerHTML = 'Тест по программированию';
wrapper.appendChild(newElement);

newElement = document.createElement('form');
newElement.setAttribute('name', 'test');
newElement.setAttribute('method', 'GET');
newElement.setAttribute('action', '');
wrapper.appendChild(newElement);

//Вставляем теги <UL>
var form = wrapper.querySelector('form');
for(var i=1; i<4; i++){
  newElement = document.createElement('p');
  newElement.innerHTML = i+'. Вопрос №'+i;
  form.appendChild(newElement);

  newElement = document.createElement('ul');
  form.appendChild(newElement);

//Вставляем в <UL> теги <LI>
  var ul = form.querySelectorAll('ul');
  for(var j=1; j<4; j++){
    newElement = document.createElement('li');
    newElement.style.listStyle = 'none';
    ul[i-1].appendChild(newElement);

    var li = ul[i-1].querySelectorAll('li');
    newElement = document.createElement('input');
    newElement.setAttribute('type', 'checkbox');
    newElement.setAttribute('name', 'an_'+i+'-'+j);
    newElement.setAttribute('id', 'an_'+i+'-'+j);
    li[j-1].appendChild(newElement);

    newElement = document.createElement('label');
    newElement.setAttribute('for', 'an_'+i+'-'+j);
    newElement.innerHTML = 'Вариант ответа №'+j;
    newElement.style.marginLeft = '5px';
    li[j-1].appendChild(newElement);

    newElement = document.createElement('br');
    li[j-1].appendChild(newElement);
  }
}

newElement = document.createElement('button');
newElement.setAttribute('type', 'submit');
newElement.innerHTML = 'Проверить мои результаты';
form.appendChild(newElement);
