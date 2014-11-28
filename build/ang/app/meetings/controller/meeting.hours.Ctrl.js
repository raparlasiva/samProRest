(function() {
'use strict';

    var meetingHourController = angular.module('meetingHourController', []);

    meetingHourController.controller('meeting.hours.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval','getMeetingResourceSvc',
    function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval,getMeetingResourceSvc) {
        console.info("meeting men  controller");
        
        $scope.begin              = 0;
        $scope.end                = 0;
        $scope.maxSize            = 5;
        $scope.currentRowCopyData = "";
        
        $state.current.data.meetingTabs.meetingHourAll     = $state.is('intergroupAng.meetings.hours');
        
        var modalInstance, filter = $filter('filter'), timeout;
        
        $scope.commonFilterConditions = function() {
            $state.current.data.meetingHour.meetingTblData = angular.copy($state.current.data.meetingHour.unfilteredMeetingTblData);
            
           
            
            //Search
            if($state.current.data.meetingHour.searchInput) 
            {
                console.info($state.current.data.meetingHour.meetingTblData);
                $state.current.data.meetingHour.meetingTblData = $filter("matchAllToProperties")($state.current.data.meetingHour.meetingTblData, $state.current.data.meetingHour.searchInput, ['prev_state', 'next_state']);
            }

            // Employee Customer Service Data
            $state.current.data.meetingHour.emplCustServiceData = filter($state.current.data.meetingHour.meetingTblData, {t_Department:'Customer Service'});

            //inactive
            $state.current.data.meetingHour.meetingTblData = filter($state.current.data.meetingHour.meetingTblData, {nb_Inactive:$state.current.data.meetingHour.inActive});


            //Ordering
            $state.current.data.meetingHour.meetingTblData = $filter("orderBy")($state.current.data.meetingHour.meetingTblData, $state.current.data.meetingHour.sortingOrderShow, $state.current.data.meetingHour.reverseSort);

            //numPerPage
            $scope.beginEndFunction();
            if($state.current.data.meetingHour.meetingTblData) 
            {
              if($state.current.data.meetingHour.meetingTblData.length < $state.current.data.meetingHour.numPerPage) 
              {
                  $scope.end = $state.current.data.meetingHour.meetingTblData.length*1;
              }
              if($scope.end > $state.current.data.meetingHour.meetingTblData.length) 
              {
                  $scope.end = $state.current.data.meetingHour.meetingTblData.length*1;
              }
              if($scope.end < $state.current.data.meetingHour.meetingTblData.length && $state.current.data.meetingHour.meetingTblData.length > $state.current.data.meetingHour.numPerPage) 
              {
                  $scope.end = $scope.begin + $state.current.data.meetingHour.numPerPage*1;
              }
              $state.current.data.meetingHour.filteredMeetingTblData = $state.current.data.meetingHour.meetingTblData.slice($scope.begin, $scope.end);
            }
        };
        $scope.beginEndFunction  = function(){
            $scope.begin = (($state.current.data.meetingHour.pagination - 1) * $state.current.data.meetingHour.numPerPage);
            $scope.end   = $scope.begin*1 + $state.current.data.meetingHour.numPerPage*1;
            
        };

        $scope.sortList = function(sortOrder) {
            $state.current.data.meetingHour.previousSortingOrder = $state.current.data.meetingHour.sortingOrderShow;
            $state.current.data.meetingHour.sortingOrderShow = sortOrder;

            if($state.current.data.meetingHour.previousSortingOrder === sortOrder && !$state.current.data.meetingHour.reverseSort) {
              $state.current.data.meetingHour.reverseSort = true;
            } else {
              $state.current.data.meetingHour.reverseSort = false;
            }

            $scope.commonFilterConditions();
        };
        $scope.$watch('$state.current.data.meetingHour.pagination', function() {
            $scope.begin = Math.ceil((($state.current.data.meetingHour.pagination - 1) * $state.current.data.meetingHour.numPerPage));
            $scope.end = $scope.begin*1 + $state.current.data.meetingHour.numPerPage*1;
            $state.current.data.meetingHour.filteredMeetingTblData = $state.current.data.meetingHour.meetingTblData.slice($scope.begin, $scope.end);

            if($scope.end > $state.current.data.meetingHour.meetingTblData.length) 
            {
              $scope.end = $state.current.data.meetingHour.meetingTblData.length;
            }
        });

        $scope.$watch('$state.current.data.meetingHour.numPerPage', function() {
          $scope.beginEndFunction();
          $state.current.data.meetingHour.filteredMeetingTblData = $state.current.data.meetingHour.meetingTblData.slice($scope.begin, $scope.end);
        });

        $scope.$watch('$state.current.data.meetingHour.searchInput', (function(newVal) {
          if(timeout) 
          {
            $timeout.cancel(timeout);
          }
          timeout = $timeout(function() {
            $scope.commonFilterConditions();
          }, 350);
        }), true);

        $scope.clearSearch = function() {
          $state.current.data.meetingHour.searchInput = "";
          $scope.commonFilterConditions();
        };
        
        getMeetingResourceSvc.getMeetingTableDataHours.query(function(response){
            $state.current.data.meetingHour.unfilteredMeetingTblData = response;
            $scope.commonFilterConditions();
        });
    }]);

}());

