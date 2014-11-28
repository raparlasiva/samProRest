module.exports = { // external user configuration for our grunt file
    build_dir:'build',
    ang_files:{
        //source, but no specs
        js:['ang/app/**/*.js',
            '!ang/app/**/*.spec.js',
            'ang/commom/**/*.js'],
        // our partial templates
        atpl:['ang/app/**/*.tpl.html'],
        //our index.html
        html:['ang/app/index.html']

    }
    
    
}


