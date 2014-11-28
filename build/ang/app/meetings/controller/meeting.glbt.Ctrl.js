(function() {
'use strict';

    var meetingGlbtController = angular.module('meetingGlbtController', []);

    meetingGlbtController.controller('meeting.glbt.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval','getMeetingResourceSvc',
    function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval,getMeetingResourceSvc) {
        console.info("meeting list  controller");
        
        $scope.begin              = 0;
        $scope.end                = 0;
        $scope.maxSize            = 5;
        $scope.currentRowCopyData = "";
        
        $state.current.data.meetingTabs.meetingGlbtAll     = $state.is('intergroupAng.meetings.glbt');
        
        var modalInstance, filter = $filter('filter'), timeout;
        
        $scope.commonFilterConditions = function() {
            $state.current.data.meetingGlbt.meetingTblData = angular.copy($state.current.data.meetingGlbt.unfilteredMeetingTblData);
            
           
            
            //Search
            if($state.current.data.meetingGlbt.searchInput) 
            {
                console.info($state.current.data.meetingGlbt.meetingTblData);
                $state.current.data.meetingGlbt.meetingTblData = $filter("matchAllToProperties")($state.current.data.meetingGlbt.meetingTblData, $state.current.data.meetingGlbt.searchInput, ['prev_state', 'next_state']);
            }

            // Employee Customer Service Data
            $state.current.data.meetingGlbt.emplCustServiceData = filter($state.current.data.meetingGlbt.meetingTblData, {t_Department:'Customer Service'});

            //inactive
            $state.current.data.meetingGlbt.meetingTblData = filter($state.current.data.meetingGlbt.meetingTblData, {nb_Inactive:$state.current.data.meetingGlbt.inActive});


            //Ordering
            $state.current.data.meetingGlbt.meetingTblData = $filter("orderBy")($state.current.data.meetingGlbt.meetingTblData, $state.current.data.meetingGlbt.sortingOrderShow, $state.current.data.meetingGlbt.reverseSort);

            //numPerPage
            $scope.beginEndFunction();
            if($state.current.data.meetingGlbt.meetingTblData) 
            {
              if($state.current.data.meetingGlbt.meetingTblData.length < $state.current.data.meetingGlbt.numPerPage) 
              {
                  $scope.end = $state.current.data.meetingGlbt.meetingTblData.length*1;
              }
              if($scope.end > $state.current.data.meetingGlbt.meetingTblData.length) 
              {
                  $scope.end = $state.current.data.meetingGlbt.meetingTblData.length*1;
              }
              if($scope.end < $state.current.data.meetingGlbt.meetingTblData.length && $state.current.data.meetingGlbt.meetingTblData.length > $state.current.data.meetingGlbt.numPerPage) 
              {
                  $scope.end = $scope.begin + $state.current.data.meetingGlbt.numPerPage*1;
              }
              $state.current.data.meetingGlbt.filteredMeetingTblData = $state.current.data.meetingGlbt.meetingTblData.slice($scope.begin, $scope.end);
            }
        };
        $scope.beginEndFunction  = function(){
            $scope.begin = (($state.current.data.meetingGlbt.pagination - 1) * $state.current.data.meetingGlbt.numPerPage);
            $scope.end   = $scope.begin*1 + $state.current.data.meetingGlbt.numPerPage*1;
            
        };

        $scope.sortList = function(sortOrder) {
            $state.current.data.meetingGlbt.previousSortingOrder = $state.current.data.meetingGlbt.sortingOrderShow;
            $state.current.data.meetingGlbt.sortingOrderShow = sortOrder;

            if($state.current.data.meetingGlbt.previousSortingOrder === sortOrder && !$state.current.data.meetingGlbt.reverseSort) {
              $state.current.data.meetingGlbt.reverseSort = true;
            } else {
              $state.current.data.meetingGlbt.reverseSort = false;
            }

            $scope.commonFilterConditions();
        };
        $scope.$watch('$state.current.data.meetingGlbt.pagination', function() {
            $scope.begin = Math.ceil((($state.current.data.meetingGlbt.pagination - 1) * $state.current.data.meetingGlbt.numPerPage));
            $scope.end = $scope.begin*1 + $state.current.data.meetingGlbt.numPerPage*1;
            $state.current.data.meetingGlbt.filteredMeetingTblData = $state.current.data.meetingGlbt.meetingTblData.slice($scope.begin, $scope.end);

            if($scope.end > $state.current.data.meetingGlbt.meetingTblData.length) 
            {
              $scope.end = $state.current.data.meetingGlbt.meetingTblData.length;
            }
        });

        $scope.$watch('$state.current.data.meetingGlbt.numPerPage', function() {
          $scope.beginEndFunction();
          $state.current.data.meetingGlbt.filteredMeetingTblData = $state.current.data.meetingGlbt.meetingTblData.slice($scope.begin, $scope.end);
        });

        $scope.$watch('$state.current.data.meetingGlbt.searchInput', (function(newVal) {
          if(timeout) 
          {
            $timeout.cancel(timeout);
          }
          timeout = $timeout(function() {
            $scope.commonFilterConditions();
          }, 350);
        }), true);

        $scope.clearSearch = function() {
          $state.current.data.meetingGlbt.searchInput = "";
          $scope.commonFilterConditions();
        };
        
        getMeetingResourceSvc.getMeetingTableDataGlbt.query(function(response){
            $state.current.data.meetingGlbt.unfilteredMeetingTblData = response;
            $scope.commonFilterConditions();
        });
        
        console.info( $state.current.data.meetingGlbt.meetingTblData);
        
    }]);

}());

