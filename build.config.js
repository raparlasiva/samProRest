module.exports = { // external user configuration for our grunt file
    build_dir:'build',
    ang_files:{
        //source, but no specs
        js:['ang/app/**/*.js',
            //'!ang/app/**/*.spec.js',
            'ang/common/**/*.js'],
        // our partial templates
        atpl:['ang/app/**/*.tpl.html'],
        //our index.html
        html:['ang/app/index.html']

    },
    vendor_files:{
		js:['vendor/angular/angular.min.js',
                    'vendor/angular-ui-router/release/angular-ui-router.min.js',
                    'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'vendor/angular-resource/angular-resource.min.js',
                    'vendor/angular-sanitize/angular-sanitize.min.js',
                    'vendor/bootstrap/dist/js/bootstrap.min.js',
                    'vendor/jquery/dist/jquery.min.js',
                    'vendor/underscore/underscore-min.js'
                ]
    }
    
    
}


