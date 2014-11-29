(function() {
'use strict';
    var meetingModuleApp = angular.module('meetingModuleApp', [
        "meetingController",
        "meetingListController",
        "meetingServices",
        "meetingHourController",
        "meetingMenController",
        "meetingWomenController",
         "meetingGlbtController",
        "meetingSpanishController"
       
    ]);
    
    meetingModuleApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('intergroupAng.meetings', {
                url: '/meetings',
                Abstract: true,
                data:{
                    meetingTabs:{
                        meetingListAll    : "",
                        meetingHourAll    : "",
                        meetingMenAll     : "",
                        meetingWomenAll   : "",
                        meetingSpanishAll : "",
                        meetingGlbtAll    : ""

                    } 
                },
                views: {
                    '@': {
                        templateUrl: 'meetings/partials/meeting.html',
                        controller:'meeting.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.list', {
                url: '/list',
                data: {
                    meetingHome : {
                        pagination                       : "1",
                        numPerPage                       : "25",
                        meetingTblData                   : [],
                        filteredMeetingTblData           : [],
                        unfilteredMeetingTblData         : [],
        
                        searchInput                      : "",
                        sortingOrderShow                 : "MeetingName",
                        reverseSort                      : "",
                        previousSortingOrder             : ""
                    }
                    
                },
                views: {
                    '@intergroupAng.meetings': {
                        templateUrl: 'meetings/partials/meeting.list.html',
                        controller: 'meeting.list.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.hours', {
                url: '/hours',
                data: {
                    meetingHour : {
                        pagination                       : "1",
                        numPerPage                       : "25",
                        meetingTblData                   : [],
                        filteredMeetingTblData           : [],
                        unfilteredMeetingTblData         : [],
        
                        searchInput                      : "",
                        sortingOrderShow                 : "MeetingName",
                        reverseSort                      : "",
                        previousSortingOrder             : ""
                    }
                    
                },
                views: {
                    '@intergroupAng.meetings': {
                        templateUrl: 'meetings/partials/meeting.hour.html',
                        controller: 'meeting.hours.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.men', {
                url: '/men',
                data: {
                    meetingMen : {
                        pagination                       : "1",
                        numPerPage                       : "25",
                        meetingTblData                   : [],
                        filteredMeetingTblData           : [],
                        unfilteredMeetingTblData         : [],
        
                        searchInput                      : "",
                        sortingOrderShow                 : "MeetingName",
                        reverseSort                      : "",
                        previousSortingOrder             : ""
                    }
                    
                },
                views: {
                    '@intergroupAng.meetings': {
                        templateUrl: 'meetings/partials/meeting.men.html',
                        controller: 'meeting.men.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.women', {
                url: '/women',
                data: {
                    meetingWomen : {
                        pagination                       : "1",
                        numPerPage                       : "25",
                        meetingTblData                   : [],
                        filteredMeetingTblData           : [],
                        unfilteredMeetingTblData         : [],
        
                        searchInput                      : "",
                        sortingOrderShow                 : "MeetingName",
                        reverseSort                      : "",
                        previousSortingOrder             : ""
                    }
                    
                },
                views: {
                    '@intergroupAng.meetings': {
                        templateUrl: 'meetings/partials/meeting.women.html',
                        controller: 'meeting.women.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.glbt', {
                url: '/glbt',
                data: {
                    meetingGlbt : {
                        pagination                       : "1",
                        numPerPage                       : "25",
                        meetingTblData                   : [],
                        filteredMeetingTblData           : [],
                        unfilteredMeetingTblData         : [],
        
                        searchInput                      : "",
                        sortingOrderShow                 : "MeetingName",
                        reverseSort                      : "",
                        previousSortingOrder             : ""
                    }
                    
                },
                views: {
                    '@intergroupAng.meetings': {
                        templateUrl: 'meetings/partials/meeting.glbt.html',
                        controller: 'meeting.glbt.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.spanish', {
                url: '/spanish',
                data: {
                    meetingSpanish : {
                        pagination                       : "1",
                        numPerPage                       : "25",
                        meetingTblData                   : [],
                        filteredMeetingTblData           : [],
                        unfilteredMeetingTblData         : [],
        
                        searchInput                      : "",
                        sortingOrderShow                 : "MeetingName",
                        reverseSort                      : "",
                        previousSortingOrder             : ""
                    }
                    
                },
                views: {
                    '@intergroupAng.meetings': {
                        templateUrl: 'meetings/partials/meeting.spanish.html',
                        controller: 'meeting.spanish.Ctrl'
                    }
                }
            })
    }])

}());

