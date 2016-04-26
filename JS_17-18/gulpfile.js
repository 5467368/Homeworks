var gulp = require('gulp');
// var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

// Линтинг файлов
// gulp.task('lint', function() {
//     gulp.src('./src/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Конкатенация и минификация файлов
gulp.task('minify', function(){
    gulp.src('./js/*.js')
        .pipe(concat('total.js'))
        .pipe(gulp.dest('js/gulp'))
        .pipe(rename('total.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/gulp'));
});

gulp.task('mincss', function(){
    gulp.src('./css/*.css')
        .pipe(concat('total.css'))
        .pipe(gulp.dest('css/gulp'))
        .pipe(rename('total.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./css/gulp'));
});
// Действия по умолчанию
gulp.task('default', function(){
    gulp.run('minify', 'mincss');

    // Отслеживаем изменения в файлах
    gulp.watch("./js/*.js", function(event){
        gulp.run('minify');
    });
});