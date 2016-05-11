/**
 * Created by Мирослав on 06.05.2016.
 */
requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});

require(
    [
        'model',
        'view',
        'controller',
        'jquery',
        'tmpl'
    ],
    function ( model, view, controller, tmpl, $) {

            var firstToDoList = ['Do something 1', 'Do something 2', 'Do something 3'];
            var model_ = new model.Model(firstToDoList);
            var view_ = new view.View(model_);
            var controller_ = new controller.Controller(model_, view_);

    }
);