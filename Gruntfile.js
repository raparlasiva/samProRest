module.exports = function(grunt){ // this is a wrapper for Node.js
    grunt.loadNpmTasks('grunt-contrib-watch'); // load plugins that we have defined in package.json
    
    var taskConfig = {
        pkg:grunt.file.readJSON('package.json'),
        
        watch:{
            jsang:{
                files:['ang/**/*.js'],
                tasks:['test']
            }
        }
    };
    
    grunt.initConfig(taskConfig);// we have created an object, taskConfig that we are feeding into initConfig
    
    grunt.registerTask('default',[]);
    grunt.registerTask('test',function(){
        grunt.log.writeln("something changed")
    });
}


