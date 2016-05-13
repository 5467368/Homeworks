/**
 * Created by Мирослав on 06.05.2016.
 */
// requirejs.config({
//     paths: {
//         'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
//     },
//     shim: {
//         'jquery': {
//             exports: 'jQuery'
//         }
//     }
// });
//
// require(
//     [
//         'tmpl',
//         'jquery',
//         'model',
//         'view',
//         'controller'
//     ],
//     function ( controller, view, model, tmpl, $) {

            var firstToDoList = ['Do something 1', 'Do something 2', 'Do something 3'];
            var model_ = new Model(firstToDoList);
            var view_ = new View(model_);
            var controller_ = new Controller(model_, view_);

//     }
// );