(function() {
'use strict';

var meetingServices = angular.module('meetingServices', ['ngResource']);

meetingServices.factory('getMeetingResourceSvc', ['$resource','API_URL',
function($resource,API_URL) {
  return {
    getMeetingTableDataAll: $resource(API_URL+'/meetings/meeting_api/meetingTableDataAll/',null,{update:{method:'put'},insert:{method:'post'}}),
    getMeetingTableDataHours: $resource(API_URL+'/meetings/meeting_api/hours/',null,{update:{method:'put'},insert:{method:'post'}}),
    getMeetingTableDataMen: $resource(API_URL+'/meetings/meeting_api/men/',null,{update:{method:'put'},insert:{method:'post'}}),
    getMeetingTableDataWomen: $resource(API_URL+'/meetings/meeting_api/women/',null,{update:{method:'put'},insert:{method:'post'}}),
    getMeetingTableDataGlbt: $resource(API_URL+'/meetings/meeting_api/glbt/',null,{update:{method:'put'},insert:{method:'post'}}),
    getMeetingTableDataSpanish: $resource(API_URL+'/meetings/meeting_api/spanish/',null,{update:{method:'put'},insert:{method:'post'}})
    
   
  };
}]);

}());



