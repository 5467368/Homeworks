alert('Задание №1!');
var a, b;
function myPow(a, b){
  var c=1;
  for(var i=0; i<b; i++){
    c = c*a;
  }
  return c;
}
a = prompt('Введите число: ', 1);
b = prompt('Введите степень: ', 1);
console.log('Число '+a+' в степени '+b+' равно '+ myPow(a, b) );

alert ('Переходим ко второму заданию!');
var arr = [];
var name, flag = false;
for (var i=0; i<5; i++){
  arr[i] = prompt('Введите любое имя №'+ (i+1)+ ': ');
  console.log(arr[i]);
}
name = prompt('Введите теперь ваше имя: ');
for (var i = 0; i < 5; i++) {
  if (arr[i] == name){
    flag = true;
    break;
  }
}
if (flag){
alert('Добро пожаловать, '+ name);
}
else {
    alert('Вашего имени нет в списке!');
}
