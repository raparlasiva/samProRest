module.exports = function(grunt){ // this is a wrapper for Node.js
    //grab the user config file (build.config.js)
    var userConfig = require('./build.config.js');
    
    //load plugins that we have defined in package.json
    grunt.loadNpmTasks('grunt-contrib-clean'); // enable grunt clean
    grunt.loadNpmTasks('grunt-contrib-copy');  // enable grunt copy
    grunt.loadNpmTasks('grunt-contrib-watch'); // enable grunt wacth 
    
    var taskConfig = {
        pkg:grunt.file.readJSON('package.json'),
        clean:['<%= build_dir %>'], // template notation 
        copy:{
//            angjs:{
//                files:[{
//                    src:['<%= ang_files.js %>'],
//                    dest:'<%= build_dir %>',
//                    cwd:'.',// current working directory ( or the root of the project)
//                    expand:true
//                }]
//            },
            angphp:{
                files:[// includes files within path and its sub-directories
                        {
                            expand: true,
                            cwd:'.', 
                            src: ['ang/data/**/*'], 
                            dest: 'build/'
                        }
                    ]
            }
        },
        watch:{
            jsang:{
                files:['<%= ang_files.js %>'],
                tasks:['test']
            }
        }
    };
    
    //grunt.initConfig(taskConfig);// we have created an object, taskConfig that we are feeding into initConfig
    
    grunt.initConfig(grunt.util._.extend(taskConfig,userConfig)); // to append the userConfig to the exisitng taskConfig
    
    grunt.registerTask('default',['clean','copy']);
    
    // just for testing the watch task
    grunt.registerTask('test',function(){
        grunt.log.writeln("something changed")
    });
}


