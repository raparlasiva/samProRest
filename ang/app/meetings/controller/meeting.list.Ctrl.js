(function() {
'use strict';

    var meetingListController = angular.module('meetingListController', []);

    meetingListController.controller('meeting.list.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval','getMeetingResourceSvc',
    function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval,getMeetingResourceSvc) {
        console.info("meeting list  controller");
        
        $scope.begin              = 0;
        $scope.end                = 0;
        $scope.maxSize            = 5;
        $scope.currentRowCopyData = "";
       
//        $scope.statuses = [{
//            id: 1,
//            name: "Low"        
//        }, {
//            id: 2,
//            name: "Normal"        
//        }, {
//            id: 3,
//            name: "High"        
//        }, {
//            id: 4,
//            name: "Urgent"        
//        }, {
//            id: 5,
//            name: "Immediate"        
//        }];
        $scope.selected_status = "Sunday";
        
        $scope.daysArry = [{
                id:"All Days",
                name:"All Days"
            },
            {
                id:"Sunday",
                name:"Sunday"
            },
            {
                id:"Monday",
                name:"Monday"
                
            },
            {
                id:"Tuesday",
                name:"Tuesday"
                
            },
            {
                id:"Wednesday",
                name:"Wednesday"
                
            },
            {
                id:"Thursday",
                name:"Thursday"
                
            },
            {
                id:"Friday",
                name:"Friday"
                
            },
            {
                id:"Saturday",
                name:"Saturday"
                
            }
        ];
        
                              
                              
        $state.current.data.meetingTabs.meetingListAll     = $state.is('intergroupAng.meetings.list');
       
        var modalInstance, filter = $filter('filter'), timeout;
        $scope.commonFilterConditions = function() {
            $state.current.data.meetingHome.meetingTblData = angular.copy($state.current.data.meetingHome.unfilteredMeetingTblData);
            
           
            
            //Search
            if($state.current.data.meetingHome.searchInput) 
            {
                console.info($state.current.data.meetingHome.meetingTblData);
                $state.current.data.meetingHome.meetingTblData = $filter("matchAllToProperties")($state.current.data.meetingHome.meetingTblData, $state.current.data.meetingHome.searchInput, ['prev_state', 'next_state']);
            }

            // Employee Customer Service Data
            $state.current.data.meetingHome.emplCustServiceData = filter($state.current.data.meetingHome.meetingTblData, {t_Department:'Customer Service'});

            //inactive
            $state.current.data.meetingHome.meetingTblData = filter($state.current.data.meetingHome.meetingTblData, {nb_Inactive:$state.current.data.meetingHome.inActive});


            //Ordering
            $state.current.data.meetingHome.meetingTblData = $filter("orderBy")($state.current.data.meetingHome.meetingTblData, $state.current.data.meetingHome.sortingOrderShow, $state.current.data.meetingHome.reverseSort);

            //numPerPage
            $scope.beginEndFunction();
            if($state.current.data.meetingHome.meetingTblData) 
            {
              if($state.current.data.meetingHome.meetingTblData.length < $state.current.data.meetingHome.numPerPage) 
              {
                  $scope.end = $state.current.data.meetingHome.meetingTblData.length*1;
              }
              if($scope.end > $state.current.data.meetingHome.meetingTblData.length) 
              {
                  $scope.end = $state.current.data.meetingHome.meetingTblData.length*1;
              }
              if($scope.end < $state.current.data.meetingHome.meetingTblData.length && $state.current.data.meetingHome.meetingTblData.length > $state.current.data.meetingHome.numPerPage) 
              {
                  $scope.end = $scope.begin + $state.current.data.meetingHome.numPerPage*1;
              }
              $state.current.data.meetingHome.filteredMeetingTblData = $state.current.data.meetingHome.meetingTblData.slice($scope.begin, $scope.end);
            }
        };
        $scope.beginEndFunction  = function(){
            $scope.begin = (($state.current.data.meetingHome.pagination - 1) * $state.current.data.meetingHome.numPerPage);
            $scope.end   = $scope.begin*1 + $state.current.data.meetingHome.numPerPage*1;
            
        };

        $scope.sortList = function(sortOrder) {
            $state.current.data.meetingHome.previousSortingOrder = $state.current.data.meetingHome.sortingOrderShow;
            $state.current.data.meetingHome.sortingOrderShow = sortOrder;

            if($state.current.data.meetingHome.previousSortingOrder === sortOrder && !$state.current.data.meetingHome.reverseSort) {
              $state.current.data.meetingHome.reverseSort = true;
            } else {
              $state.current.data.meetingHome.reverseSort = false;
            }

            $scope.commonFilterConditions();
        };
        $scope.$watch('$state.current.data.meetingHome.pagination', function() {
            $scope.begin = Math.ceil((($state.current.data.meetingHome.pagination - 1) * $state.current.data.meetingHome.numPerPage));
            $scope.end = $scope.begin*1 + $state.current.data.meetingHome.numPerPage*1;
            $state.current.data.meetingHome.filteredMeetingTblData = $state.current.data.meetingHome.meetingTblData.slice($scope.begin, $scope.end);

            if($scope.end > $state.current.data.meetingHome.meetingTblData.length) 
            {
              $scope.end = $state.current.data.meetingHome.meetingTblData.length;
            }
        });

        $scope.$watch('$state.current.data.meetingHome.numPerPage', function() {
          $scope.beginEndFunction();
          $state.current.data.meetingHome.filteredMeetingTblData = $state.current.data.meetingHome.meetingTblData.slice($scope.begin, $scope.end);
        });

        $scope.$watch('$state.current.data.meetingHome.searchInput', (function(newVal) {
          if(timeout) 
          {
            $timeout.cancel(timeout);
          }
          timeout = $timeout(function() {
            $scope.commonFilterConditions();
          }, 350);
        }), true);

        $scope.clearSearch = function() {
          $state.current.data.meetingHome.searchInput = "";
          $scope.commonFilterConditions();
        };
        
        getMeetingResourceSvc.getMeetingTableDataAll.query(function(response){
            $state.current.data.meetingHome.unfilteredMeetingTblData = response;
            $scope.commonFilterConditions();
        });
        
        console.info( $state.current.data.meetingHome.meetingTblData);
        
    }]);

}());

