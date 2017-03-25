module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: 'client/scripts/app.js',
                    dest: 'server/public/assets/scripts/app.min.js'
                },
                admin: {
                    src: 'client/scripts/admin.js',
                    dest: 'server/public/assets/scripts/admin.min.js'
                }
            },
        copy: {
            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "server/public/vendors"
            },
            css: {
                expand: true,
                cwd: "client/",
                src: [
                    "css/style.css"
                ],
                "dest": 'server/public/assets/'
            },
            jquery: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "jquery/dist/jquery.min.js"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};