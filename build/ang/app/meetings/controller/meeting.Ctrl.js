(function() {
'use strict';

    var meetingController = angular.module('meetingController', []);

    meetingController.controller('meeting.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval',
    function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval) {
       
        console.info("meeting  controller");
        
    }]);

}());
