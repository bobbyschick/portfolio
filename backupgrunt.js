'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/test.js',
                dest: 'js/app.js'
            }
        },

        watch: {
            css: {
                files: ['css/style.scss'],
                tasks: ['sass', 'cssmin']
            },
            js: {
                files: ['js/test.js'],
                tasks: ['uglify']
            }
        },

        cssmin: {
            target: {
                files: {
                    'css/app.css': ['css/app.css']
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'css/app.css': 'css/style.scss'
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register tasks
    grunt.registerTask('default', ['watch']);
};
