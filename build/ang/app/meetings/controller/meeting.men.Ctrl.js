(function() {
'use strict';

    var meetingMenController = angular.module('meetingMenController', []);

    meetingMenController.controller('meeting.men.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval','getMeetingResourceSvc',
    function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval,getMeetingResourceSvc) {
        console.info("meeting list  controller");
        
        $scope.begin              = 0;
        $scope.end                = 0;
        $scope.maxSize            = 5;
        $scope.currentRowCopyData = "";
        
        var modalInstance, filter = $filter('filter'), timeout;
        
        console.info($state);
        
        $state.current.data.meetingTabs.meetingMenAll     = $state.is('intergroupAng.meetings.men');
        
        
        
        $scope.commonFilterConditions = function() {
            $state.current.data.meetingMen.meetingTblData = angular.copy($state.current.data.meetingMen.unfilteredMeetingTblData);
            
           
            
            //Search
            if($state.current.data.meetingMen.searchInput) 
            {
                console.info($state.current.data.meetingMen.meetingTblData);
                $state.current.data.meetingMen.meetingTblData = $filter("matchAllToProperties")($state.current.data.meetingMen.meetingTblData, $state.current.data.meetingMen.searchInput, ['prev_state', 'next_state']);
            }

            // Employee Customer Service Data
            $state.current.data.meetingMen.emplCustServiceData = filter($state.current.data.meetingMen.meetingTblData, {t_Department:'Customer Service'});

            //inactive
            $state.current.data.meetingMen.meetingTblData = filter($state.current.data.meetingMen.meetingTblData, {nb_Inactive:$state.current.data.meetingMen.inActive});


            //Ordering
            $state.current.data.meetingMen.meetingTblData = $filter("orderBy")($state.current.data.meetingMen.meetingTblData, $state.current.data.meetingMen.sortingOrderShow, $state.current.data.meetingMen.reverseSort);

            //numPerPage
            $scope.beginEndFunction();
            if($state.current.data.meetingMen.meetingTblData) 
            {
              if($state.current.data.meetingMen.meetingTblData.length < $state.current.data.meetingMen.numPerPage) 
              {
                  $scope.end = $state.current.data.meetingMen.meetingTblData.length*1;
              }
              if($scope.end > $state.current.data.meetingMen.meetingTblData.length) 
              {
                  $scope.end = $state.current.data.meetingMen.meetingTblData.length*1;
              }
              if($scope.end < $state.current.data.meetingMen.meetingTblData.length && $state.current.data.meetingMen.meetingTblData.length > $state.current.data.meetingMen.numPerPage) 
              {
                  $scope.end = $scope.begin + $state.current.data.meetingMen.numPerPage*1;
              }
              $state.current.data.meetingMen.filteredMeetingTblData = $state.current.data.meetingMen.meetingTblData.slice($scope.begin, $scope.end);
            }
        };
        $scope.beginEndFunction  = function(){
            $scope.begin = (($state.current.data.meetingMen.pagination - 1) * $state.current.data.meetingMen.numPerPage);
            $scope.end   = $scope.begin*1 + $state.current.data.meetingMen.numPerPage*1;
            
        };

        $scope.sortList = function(sortOrder) {
            $state.current.data.meetingMen.previousSortingOrder = $state.current.data.meetingMen.sortingOrderShow;
            $state.current.data.meetingMen.sortingOrderShow = sortOrder;

            if($state.current.data.meetingMen.previousSortingOrder === sortOrder && !$state.current.data.meetingMen.reverseSort) {
              $state.current.data.meetingMen.reverseSort = true;
            } else {
              $state.current.data.meetingMen.reverseSort = false;
            }

            $scope.commonFilterConditions();
        };
        $scope.$watch('$state.current.data.meetingMen.pagination', function() {
            $scope.begin = Math.ceil((($state.current.data.meetingMen.pagination - 1) * $state.current.data.meetingMen.numPerPage));
            $scope.end = $scope.begin*1 + $state.current.data.meetingMen.numPerPage*1;
            $state.current.data.meetingMen.filteredMeetingTblData = $state.current.data.meetingMen.meetingTblData.slice($scope.begin, $scope.end);

            if($scope.end > $state.current.data.meetingMen.meetingTblData.length) 
            {
              $scope.end = $state.current.data.meetingMen.meetingTblData.length;
            }
        });

        $scope.$watch('$state.current.data.meetingMen.numPerPage', function() {
          $scope.beginEndFunction();
          $state.current.data.meetingMen.filteredMeetingTblData = $state.current.data.meetingMen.meetingTblData.slice($scope.begin, $scope.end);
        });

        $scope.$watch('$state.current.data.meetingMen.searchInput', (function(newVal) {
          if(timeout) 
          {
            $timeout.cancel(timeout);
          }
          timeout = $timeout(function() {
            $scope.commonFilterConditions();
          }, 350);
        }), true);

        $scope.clearSearch = function() {
          $state.current.data.meetingMen.searchInput = "";
          $scope.commonFilterConditions();
        };
        
        getMeetingResourceSvc.getMeetingTableDataMen.query(function(response){
            $state.current.data.meetingMen.unfilteredMeetingTblData = response;
            $scope.commonFilterConditions();
        });
        
        console.info( $state.current.data.meetingMen.meetingTblData);
        
    }]);

}());

