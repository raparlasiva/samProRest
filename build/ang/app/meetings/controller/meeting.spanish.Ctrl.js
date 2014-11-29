(function() {
'use strict';

    var meetingSpanishController = angular.module('meetingSpanishController', []);

    meetingSpanishController.controller('meeting.spanish.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval','getMeetingResourceSvc',
    function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval,getMeetingResourceSvc) {
        console.info("meeting list  controller");
        
        $scope.begin              = 0;
        $scope.end                = 0;
        $scope.maxSize            = 5;
        $scope.currentRowCopyData = "";
        
        $state.current.data.meetingTabs.meetingSpanishAll  = $state.is('intergroupAng.meetings.spanish');
        
        var modalInstance, filter = $filter('filter'), timeout;
        
        $scope.commonFilterConditions = function() {
            $state.current.data.meetingSpanish.meetingTblData = angular.copy($state.current.data.meetingSpanish.unfilteredMeetingTblData);
            
           
            
            //Search
            if($state.current.data.meetingSpanish.searchInput) 
            {
                console.info($state.current.data.meetingSpanish.meetingTblData);
                $state.current.data.meetingSpanish.meetingTblData = $filter("matchAllToProperties")($state.current.data.meetingSpanish.meetingTblData, $state.current.data.meetingSpanish.searchInput, ['prev_state', 'next_state']);
            }

            // Employee Customer Service Data
            $state.current.data.meetingSpanish.emplCustServiceData = filter($state.current.data.meetingSpanish.meetingTblData, {t_Department:'Customer Service'});

            //inactive
            $state.current.data.meetingSpanish.meetingTblData = filter($state.current.data.meetingSpanish.meetingTblData, {nb_Inactive:$state.current.data.meetingSpanish.inActive});


            //Ordering
            $state.current.data.meetingSpanish.meetingTblData = $filter("orderBy")($state.current.data.meetingSpanish.meetingTblData, $state.current.data.meetingSpanish.sortingOrderShow, $state.current.data.meetingSpanish.reverseSort);

            //numPerPage
            $scope.beginEndFunction();
            if($state.current.data.meetingSpanish.meetingTblData) 
            {
              if($state.current.data.meetingSpanish.meetingTblData.length < $state.current.data.meetingSpanish.numPerPage) 
              {
                  $scope.end = $state.current.data.meetingSpanish.meetingTblData.length*1;
              }
              if($scope.end > $state.current.data.meetingSpanish.meetingTblData.length) 
              {
                  $scope.end = $state.current.data.meetingSpanish.meetingTblData.length*1;
              }
              if($scope.end < $state.current.data.meetingSpanish.meetingTblData.length && $state.current.data.meetingSpanish.meetingTblData.length > $state.current.data.meetingSpanish.numPerPage) 
              {
                  $scope.end = $scope.begin + $state.current.data.meetingSpanish.numPerPage*1;
              }
              $state.current.data.meetingSpanish.filteredMeetingTblData = $state.current.data.meetingSpanish.meetingTblData.slice($scope.begin, $scope.end);
            }
        };
        $scope.beginEndFunction  = function(){
            $scope.begin = (($state.current.data.meetingSpanish.pagination - 1) * $state.current.data.meetingSpanish.numPerPage);
            $scope.end   = $scope.begin*1 + $state.current.data.meetingSpanish.numPerPage*1;
            
        };

        $scope.sortList = function(sortOrder) {
            $state.current.data.meetingSpanish.previousSortingOrder = $state.current.data.meetingSpanish.sortingOrderShow;
            $state.current.data.meetingSpanish.sortingOrderShow = sortOrder;

            if($state.current.data.meetingSpanish.previousSortingOrder === sortOrder && !$state.current.data.meetingSpanish.reverseSort) {
              $state.current.data.meetingSpanish.reverseSort = true;
            } else {
              $state.current.data.meetingSpanish.reverseSort = false;
            }

            $scope.commonFilterConditions();
        };
        $scope.$watch('$state.current.data.meetingSpanish.pagination', function() {
            $scope.begin = Math.ceil((($state.current.data.meetingSpanish.pagination - 1) * $state.current.data.meetingSpanish.numPerPage));
            $scope.end = $scope.begin*1 + $state.current.data.meetingSpanish.numPerPage*1;
            $state.current.data.meetingSpanish.filteredMeetingTblData = $state.current.data.meetingSpanish.meetingTblData.slice($scope.begin, $scope.end);

            if($scope.end > $state.current.data.meetingSpanish.meetingTblData.length) 
            {
              $scope.end = $state.current.data.meetingSpanish.meetingTblData.length;
            }
        });

        $scope.$watch('$state.current.data.meetingSpanish.numPerPage', function() {
          $scope.beginEndFunction();
          $state.current.data.meetingSpanish.filteredMeetingTblData = $state.current.data.meetingSpanish.meetingTblData.slice($scope.begin, $scope.end);
        });

        $scope.$watch('$state.current.data.meetingSpanish.searchInput', (function(newVal) {
          if(timeout) 
          {
            $timeout.cancel(timeout);
          }
          timeout = $timeout(function() {
            $scope.commonFilterConditions();
          }, 350);
        }), true);

        $scope.clearSearch = function() {
          $state.current.data.meetingSpanish.searchInput = "";
          $scope.commonFilterConditions();
        };
        
        getMeetingResourceSvc.getMeetingTableDataSpanish.query(function(response){
            $state.current.data.meetingSpanish.unfilteredMeetingTblData = response;
            $scope.commonFilterConditions();
        });
        
        console.info( $state.current.data.meetingSpanish.meetingTblData);
        
    }]);

}());

