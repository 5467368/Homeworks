function Human() {
	this.age;
	this.name;
	this.sex;
	this.height;
	this.weight;
};

// function Worker() {
// 	this.job;
// 	this.salary;
// };
function Worker(){};
function Student(){};

Worker.prototype = new Human();
Student.prototype = new Human();

function toWork() {
	Worker.job;
	Worker.salary;
};

function serials() {
	Student.class;
	Student.stipend;
};

var newWorker = new Worker;
newWorker.age = 30;
newWorker.name = 'Vasya';
newWorker.sex = 'Male';
newWorker.height = 180;
newWorker.weight = 80;
newWorker.job = 'Worker';
newWorker.salary = 3000;
console.log(newWorker);

newStudent = new Student;
newStudent.age = 18;
newStudent.name = 'Dima';
newStudent.sex = 'Male';
newStudent.height = 170;
newStudent.weight = 85;
newStudent.class = 'Class';
newStudent.stipend = 1000;
console.log(newStudent);