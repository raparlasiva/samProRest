(function() {
'use strict';

    var meetingWomenController = angular.module('meetingWomenController', []);

    meetingWomenController.controller('meeting.women.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval','getMeetingResourceSvc',
    function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval,getMeetingResourceSvc) {
        console.info("meeting list  controller");
        
        $scope.begin              = 0;
        $scope.end                = 0;
        $scope.maxSize            = 5;
        $scope.currentRowCopyData = "";
        
        $state.current.data.meetingTabs.meetingWomenAll    = $state.is('intergroupAng.meetings.women');
        
        var modalInstance, filter = $filter('filter'), timeout;
        
        $scope.commonFilterConditions = function() {
            $state.current.data.meetingWomen.meetingTblData = angular.copy($state.current.data.meetingWomen.unfilteredMeetingTblData);
            
           
            
            //Search
            if($state.current.data.meetingWomen.searchInput) 
            {
                console.info($state.current.data.meetingWomen.meetingTblData);
                $state.current.data.meetingWomen.meetingTblData = $filter("matchAllToProperties")($state.current.data.meetingWomen.meetingTblData, $state.current.data.meetingWomen.searchInput, ['prev_state', 'next_state']);
            }

            // Employee Customer Service Data
            $state.current.data.meetingWomen.emplCustServiceData = filter($state.current.data.meetingWomen.meetingTblData, {t_Department:'Customer Service'});

            //inactive
            $state.current.data.meetingWomen.meetingTblData = filter($state.current.data.meetingWomen.meetingTblData, {nb_Inactive:$state.current.data.meetingWomen.inActive});


            //Ordering
            $state.current.data.meetingWomen.meetingTblData = $filter("orderBy")($state.current.data.meetingWomen.meetingTblData, $state.current.data.meetingWomen.sortingOrderShow, $state.current.data.meetingWomen.reverseSort);

            //numPerPage
            $scope.beginEndFunction();
            if($state.current.data.meetingWomen.meetingTblData) 
            {
              if($state.current.data.meetingWomen.meetingTblData.length < $state.current.data.meetingWomen.numPerPage) 
              {
                  $scope.end = $state.current.data.meetingWomen.meetingTblData.length*1;
              }
              if($scope.end > $state.current.data.meetingWomen.meetingTblData.length) 
              {
                  $scope.end = $state.current.data.meetingWomen.meetingTblData.length*1;
              }
              if($scope.end < $state.current.data.meetingWomen.meetingTblData.length && $state.current.data.meetingWomen.meetingTblData.length > $state.current.data.meetingWomen.numPerPage) 
              {
                  $scope.end = $scope.begin + $state.current.data.meetingWomen.numPerPage*1;
              }
              $state.current.data.meetingWomen.filteredMeetingTblData = $state.current.data.meetingWomen.meetingTblData.slice($scope.begin, $scope.end);
            }
        };
        $scope.beginEndFunction  = function(){
            $scope.begin = (($state.current.data.meetingWomen.pagination - 1) * $state.current.data.meetingWomen.numPerPage);
            $scope.end   = $scope.begin*1 + $state.current.data.meetingWomen.numPerPage*1;
            
        };

        $scope.sortList = function(sortOrder) {
            $state.current.data.meetingWomen.previousSortingOrder = $state.current.data.meetingWomen.sortingOrderShow;
            $state.current.data.meetingWomen.sortingOrderShow = sortOrder;

            if($state.current.data.meetingWomen.previousSortingOrder === sortOrder && !$state.current.data.meetingWomen.reverseSort) {
              $state.current.data.meetingWomen.reverseSort = true;
            } else {
              $state.current.data.meetingWomen.reverseSort = false;
            }

            $scope.commonFilterConditions();
        };
        $scope.$watch('$state.current.data.meetingWomen.pagination', function() {
            $scope.begin = Math.ceil((($state.current.data.meetingWomen.pagination - 1) * $state.current.data.meetingWomen.numPerPage));
            $scope.end = $scope.begin*1 + $state.current.data.meetingWomen.numPerPage*1;
            $state.current.data.meetingWomen.filteredMeetingTblData = $state.current.data.meetingWomen.meetingTblData.slice($scope.begin, $scope.end);

            if($scope.end > $state.current.data.meetingWomen.meetingTblData.length) 
            {
              $scope.end = $state.current.data.meetingWomen.meetingTblData.length;
            }
        });

        $scope.$watch('$state.current.data.meetingWomen.numPerPage', function() {
          $scope.beginEndFunction();
          $state.current.data.meetingWomen.filteredMeetingTblData = $state.current.data.meetingWomen.meetingTblData.slice($scope.begin, $scope.end);
        });

        $scope.$watch('$state.current.data.meetingWomen.searchInput', (function(newVal) {
          if(timeout) 
          {
            $timeout.cancel(timeout);
          }
          timeout = $timeout(function() {
            $scope.commonFilterConditions();
          }, 350);
        }), true);

        $scope.clearSearch = function() {
          $state.current.data.meetingWomen.searchInput = "";
          $scope.commonFilterConditions();
        };
        
        getMeetingResourceSvc.getMeetingTableDataWomen.query(function(response){
            $state.current.data.meetingWomen.unfilteredMeetingTblData = response;
            $scope.commonFilterConditions();
        });
        
        console.info( $state.current.data.meetingWomen.meetingTblData);
        
    }]);

}());

