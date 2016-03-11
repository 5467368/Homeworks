var body = document.getElementsByTagName('body');
var newElement = document.createElement('div');
newElement.className = "wrapper";
document.body.appendChild(newElement);

var parent = document.body.getElementsByClassName('wrapper');
newElement = document.createElement('h3');
newElement.innerHTML = 'Тест по программированию';
document.body.appendChild(newElement);

newElement = document.createElement('form');
newElement.setAttribute('name', 'test');
newElement.setAttribute('method', 'GET');
newElement.setAttribute('action', '');
document.body.appendChild(newElement);

parent = document.getElementsByTagName('form');
newElement = document.createElement('p');
newElement.innerHTML = '1. Вопрос №1';
document.parent.appendChild(newElement);