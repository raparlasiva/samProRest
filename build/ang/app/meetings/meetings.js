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
                        templateUrl: 'meetings/partials/meeting.tpl.html',
                        controller:'meeting.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.list', {
                url: '/list',
                data: {
                    pageTitle:"meeting",
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
                        templateUrl: 'meetings/partials/meeting.list.tpl.html',
                        controller: 'meeting.list.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.hours', {
                url: '/hours',
                data: {
                    pageTitle:"Meeting Next 5 hours",
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
                        templateUrl: 'meetings/partials/meeting.hour.tpl.html',
                        controller: 'meeting.hours.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.men', {
                url: '/men',
                data: {
                    pageTitle:"Meeting Men",
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
                        templateUrl: 'meetings/partials/meeting.men.tpl.html',
                        controller: 'meeting.men.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.women', {
                url: '/women',
                data: {
                    pageTitle:"Meeting Women",
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
                        templateUrl: 'meetings/partials/meeting.women.tpl.html',
                        controller: 'meeting.women.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.glbt', {
                url: '/glbt',
                data: {
                    pageTitle:"Meeting glbt",
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
                        templateUrl: 'meetings/partials/meeting.glbt.tpl.html',
                        controller: 'meeting.glbt.Ctrl'
                    }
                }
            })
            .state('intergroupAng.meetings.spanish', {
                url: '/spanish',
                data: {
                    pageTitle:"Meeting spanish",
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
                        templateUrl: 'meetings/partials/meeting.spanish.tpl.html',
                        controller: 'meeting.spanish.Ctrl'
                    }
                }
            })
    }])

}());

