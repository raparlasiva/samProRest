module.exports = { // external user configuration for our grunt file
    build_dir:'build',
    vendir_dir:'vendor',
    ang_files:{
        //source, but no specs
        js:['ang/app/**/*.js',
            '!ang/app/**/*.spec.js',
            'ang/common/**/*.js'],
        // our partial templates
        atpl:['ang/app/**/*.tpl.html'],
        //our index.html
        html:['ang/index.html'],
        php:['ang/data/**/*']

    },
    vendor_files:{
        all:['vendor/lib/**/*'],
        js:[
            'vendor/lib/jquery/dist/jquery.min.js',
            'vendor/lib/underscore/underscore.js',
            'vendor/lib/angular/angular.min.js',
            'vendor/lib/angular-resource/angular-resource.min.js',
            'vendor/lib/angular-sanitize/angular-sanitize.min.js',
            'vendor/lib/angular-ui-router/release/angular-ui-router.min.js',
            'vendor/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'vendor/lib/bootstrap/dist/js/bootstrap.min.js',


        ]
    }
    
    
}


