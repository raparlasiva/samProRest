module.exports = function(grunt){ // this is a wrapper for Node.js
    //grab the user config file (build.config.js)
    var userConfig = require('./build.config.js');
    
    //load plugins that we have defined in package.json
    grunt.loadNpmTasks('grunt-contrib-clean'); // enable grunt clean
    grunt.loadNpmTasks('grunt-contrib-copy');  // enable grunt copy
    grunt.loadNpmTasks('grunt-contrib-watch'); // enable grunt wacth 
    grunt.loadNpmTasks('grunt-html2js'); // enable grunt html to javascript object 
    grunt.loadNpmTasks('grunt-contrib-less'); // enable less CSS preprocessor tool
    
    var taskConfig = {
        pkg:grunt.file.readJSON('package.json'),
        clean:['<%= build_dir %>'], // template notation 
        copy:{
            angjs:{
                files:[
                    {
                    src:['<%= ang_files.js %>'],
                    dest:'<%= build_dir %>',
                    cwd:'.',// current working directory ( or the root of the project)
                    expand:true
                    }
                ]
            },
            angphp:{
                files:[// includes files within path and its sub-directories
                    {

                        src: ['<%= ang_files.php %>'], 
                        dest:'<%= build_dir %>',
                        cwd:'.',
                        expand: true
                    }
                ]
            },
            vendorjs:{
                files:[{
                        src:['<%= vendor_files.all %>'],
                        dest:'<%= build_dir %>/',
                         // current working directory ( or the root of the project)
                        cwd:'.',
                        expand:true	
                }]
            }
        },
        watch:{
            jsang:{
                files:['<%= ang_files.js %>'],
                tasks:['build']
            },
            gruntfile:{
                files:'Gruntfile.js',
                tasks:[],
                options:{
                    livereload:false
                }
            }
        },
        index:{
            build:{
                dir: '<%= build_dir %>',
                src:['<%= vendor_files.js %>',
                     '<%= build_dir %>/ang/app/**/*.js',
                     '<%= build_dir %>/ang/common/**/*.js',
                     '<%= html2js.app.dest %>',
                     '<%= build_dir%>/ang/assets/**/*.css'
                
                ]
            }
        },
        html2js: {
            /**
             * These are the templates from `ang/app`.
             */
            app: {
              options: {
                base: 'ang/app'
              },
              src: [ '<%= ang_files.atpl %>' ],
              dest: '<%= build_dir %>/ang/templates/templates-ang.js'
            }
        },
        less: {
            dev: {
                options: {
                    sourceMap: true,
                    dumpLineNumbers: 'comments',
                    relativeUrls: true
                },
                files: {
                    // target.css file: source.less file
                   '<%= build_dir %>/ang/assets/<%= pkg.name %>-<%= pkg.version %>.css': 'ang/less/main.less'
                }
            },
            pro: {
                options: {
                    cleancss: true,
                    compress: true,
                    relativeUrls: true
                },
                files: {
                    // key:value pair goes here. Where key is the destination and vlaue is the source
                    // In this case, the destination will be in the assests folder of the build directory
                    // It will look at the project name and version from package.json file for the css file name
                    '<%= build_dir %>/ang/assets/<%= pkg.name %>-<%= pkg.version %>.css': 'ang/less/main.less'
                }
            }
        },
//        less: {
//            development: {
//                options: {
//                    paths: ["assets/css"]
//                },
//                files: {
//                  '<%= build_dir %>/ang/assets/<%= pkg.name %>-<%= pkg.version %>.css': 'ang/less/main.less'
//                }
//            },
//            build: {
//              files: {
//                // key:value pair goes here. Where key is the destination and vlaue is the source
//                // In this case, the destination will be in the assests folder of the build directory
//                // It will look at the project name and version from package.json file for the css file name
//                '<%= build_dir %>/ang/assets/<%= pkg.name %>-<%= pkg.version %>.css': 'ang/less/main.less'
//              }
//            }
        //}
    };
    
    //grunt.initConfig(taskConfig);// we have created an object, taskConfig that we are feeding into initConfig
    
    grunt.initConfig(grunt.util._.extend(taskConfig,userConfig)); // to append the userConfig to the exisitng taskConfig
    
    grunt.registerTask('default',['build','index']);
    
     grunt.registerTask('build',['clean','copy','html2js','less']);
    
    // just for testing the watch task
    grunt.registerTask('test',function(){
        grunt.log.writeln("something changed")
    });
    
    function filterForExtension(extension,files){
        var regex = new RegExp('\\.'+extension+'$');
        
        //Within the task, we are using a regular expression to filter out the path to the build_dir,”
        //“and leave us with just the relative path to the JS files in our build folder”
        
        //var dirRE       = new RegExp('^(' + grunt.config('build_dir')+'/ang/app' + ')\/', 'g');
        //var commonRE    = new RegExp('^(' + grunt.config('build_dir')+'/ang/common' + ')\/', 'g');
        //var vendorRE    = new RegExp('^(' + grunt.config('vendir_dir') + ')\/', 'g');
        //var templateRE  = new RegExp('^(' + grunt.config('build_dir')+'/ang/templates' + ')\/', 'g');
        
        var dirRE       = new RegExp('^(' + grunt.config('build_dir') + ')\/', 'g');
        
        //var bootstrapRE = new RegExp('^(' + grunt.config('build_dir')+'/ang/assets' + ')\/', 'g');
        
        return files.filter(function(file){
                return file.match(regex);
            }).map(function (file) {
                //grunt.log.writeln(templateRE);
                //var dirRE =  dirRE+'/ang/app';
                //var file = file.replace(vendorRE, '../vendor/');
                file = file.replace(dirRE, '');
                //file = file.replace(templateRE, '../templates/');
                //file = file.replace(bootstrapRE, '../assets/');
                //return file.replace(commonRE, '../common/');
                return file;
                 
        });
    };
    
    grunt.registerMultiTask('index', 'Process index.html template', function () {
        //grunt.log.writeln(this.filesSrc);
       
        
        var jsFiles = filterForExtension('js',this.filesSrc);
        grunt.log.writeln(jsFiles);
        var cssFiles = filterForExtension('css', this.filesSrc);
        
        // grunt.file.copy takes three arguments, the source,destination and an options object
        grunt.file.copy('ang/app/index.html'/*the source */,
        this.data.dir+'/index.html'/*the destination */,
        {/*the options object */
            // the process property is a function  that takes the contents of the file 
            // to be process, and gives us access to it
            process:function(contents,path){
                //grunt.log.writeln("contents "+contents);
                //grunt.log.writeln("paths: "+path);
                // grunt.template.process is another grunt function to do the processing
                //grunt.template.process returns the results with the template data applied
                return grunt.template.process(contents,{
                    data:{
                        scripts:jsFiles,
                        styles:cssFiles,
                        version:grunt.config('pkg.version')
                    }
                })
            }
        });
    });
}


