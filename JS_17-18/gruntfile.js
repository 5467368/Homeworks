module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src:  'js/*.js',
                dest: 'js/grunt/total.js'
            },
            dist: {
                src:  'css/*.css',
                dest: 'css/grunt/total.css'
            }
        },
        uglify: {
            build: {
                src:  'js/grunt/total.js',
                dest: 'js/grunt/total.min.js'
            }
        },
        // concat: {
        //     dist: {
        //         src:  'css/*.css',
        //         dest: 'css/grunt/total.css'
        //     }
        // },
        cssmin: {

            build: {
                src:  'css/grunt/total.css',
                dest: 'css/grunt/total.min.css'
            }
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};