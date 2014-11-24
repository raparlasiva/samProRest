(function() {
'use strict';
    var app = angular.module('app', [
        'ui.bootstrap',
        "ui.router",
        "ngSanitize",
        "meetingModuleApp",
        "filtersModule",
        "pof"
    ]);
    
    app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

    app.constant('API_URL','http://'+location.hostname+'/sampProRest/ang/data');
    
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.when('/meet', '/meeting/list');
        $urlRouterProvider.when('/meeting', '/meetings/list');
        $urlRouterProvider.otherwise("/meetings/list");

        $stateProvider.state('intergroupAng', {
            url:"",
            abstract:true,
            data: {
                 
            }
        })
    
    }]);
        


}());


