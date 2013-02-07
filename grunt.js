module.exports = function(grunt) {
// Project configuration.
    grunt.initConfig({
      // Your grunt code goes in here.
        concat: {
            dist: {
                src: [
                    'client/js/header.js',
                    'client/js/util.js',
                    'client/js/button.js',
                    'client/js/uploader.basic.js',
                    'client/js/dnd.js',
                    'client/js/uploader.js',
                    'client/js/handler.base.js',
                    'client/js/handler.xhr.js',
                    'client/js/handler.form.js',
                    'client/js/jquery-plugin.js',
                ],
                dest: 'uploader.js'
            }
        }
    });
};
