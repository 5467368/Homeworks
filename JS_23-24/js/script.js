/**
 * Created by Мирослав on 03.05.2016.
 */

$(function () {
    var firstToDoList = ['Do something 1', 'Do something 2', 'Do something 3'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});