angular.module('templates-app', ['meetings/partials/meeting.glbt.tpl.html', 'meetings/partials/meeting.hour.tpl.html', 'meetings/partials/meeting.list.tpl.html', 'meetings/partials/meeting.men.tpl.html', 'meetings/partials/meeting.spanish.tpl.html', 'meetings/partials/meeting.tpl.html', 'meetings/partials/meeting.women.tpl.html']);

angular.module("meetings/partials/meeting.glbt.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("meetings/partials/meeting.glbt.tpl.html",
    "<!DOCTYPE html>\n" +
    "<br/>\n" +
    "<div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"hidden-xs col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n" +
    "                    <label>\n" +
    "                        <select style=\"font-weight:normal;\" class=\"form-control\" data-ng-model=\"$state.current.data.meetingGlbt.numPerPage\">\n" +
    "                            <option value=\"25\">25</option>\n" +
    "                            <option value=\"50\">50</option>\n" +
    "                            <option value=\"100\">100</option>\n" +
    "                            <option value=\"250\">250</option>\n" +
    "                        </select>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "               \n" +
    "                <div class=\"col-xs-12 col-sm-offset-6 col-md-offset-6 col-lg-offset-6 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                    <label class=\"input-group pull-right\">\n" +
    "                        <input style=\"font-weight:normal;\" type=\"text\" class=\"form-control\" name=\"search.query\" id=\"search.query\" data-ng-model=\"$state.current.data.meetingGlbt.searchInput\" placeholder=\"Filter by keyword(s)\">\n" +
    "                        <span class=\"input-group-btn\">\n" +
    "                    <button data-ng-click=\"clearSearch()\" class=\"btn btn-default\" type=\"button\">\n" +
    "                    <span data-ng-hide=\"$state.current.data.meetingGlbt.searchInput\" class=\"glyphicon glyphicon-search\"></span>\n" +
    "                        <span data-ng-show=\"$state.current.data.meetingGlbt.searchInput\" class=\"glyphicon glyphicon-remove\"></span>\n" +
    "                        </button>\n" +
    "                        </span>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "                    <table class=\"table table-striped table-bordered table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th ng-click=\"sortList('MeetingName')\">Name&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingGlbt.sortingOrderShow =='MeetingName'\"   data-ng-class=\"$state.current.data.meetingGlbt.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Day')\">Day&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingGlbt.sortingOrderShow =='Day'\"   data-ng-class=\"$state.current.data.meetingGlbt.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('MeetTime')\">MeetTime&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingGlbt.sortingOrderShow =='MeetTime'\"   data-ng-class=\"$state.current.data.meetingGlbt.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('BuildingName')\">BuildingName&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingGlbt.sortingOrderShow =='BuildingName'\"   data-ng-class=\"$state.current.data.meetingGlbt.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Address')\">Address&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingGlbt.sortingOrderShow =='Address'\"   data-ng-class=\"$state.current.data.meetingGlbt.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Area')\">Area&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingGlbt.sortingOrderShow =='Area'\"   data-ng-class=\"$state.current.data.meetingGlbt.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Zip')\">Zip&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingGlbt.sortingOrderShow =='Zip'\"   data-ng-class=\"$state.current.data.meetingGlbt.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Symbol')\">Symbol&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingGlbt.sortingOrderShow =='Symbol'\"   data-ng-class=\"$state.current.data.meetingGlbt.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                \n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr data-ng-repeat=\"meetingData in $state.current.data.meetingGlbt.filteredMeetingTblData\" data-ng-click=\"editVendor(meetingData)\" ng-class=\"{'selected':$state.current.data.meetingGlbt.setSelectedRow==meetingData.MeetingId}\">\n" +
    "                                <td>{{meetingData.MeetingName}}</td>\n" +
    "                                <td>{{meetingData.Day}}</td>\n" +
    "                                <td>{{meetingData.MeetTime}}</td>\n" +
    "                                <td>{{meetingData.BuildingName}}</td>\n" +
    "                                <td>{{meetingData.Address}}</td>\n" +
    "                                <td>{{meetingData.Area}}</td>\n" +
    "                                <td>{{meetingData.Zip}}</td>\n" +
    "                                <td>{{meetingData.Symbol}}</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 col-md-3\">\n" +
    "                    (Showing {{begin + 1}} to {{end}} of {{$state.current.data.meetingGlbt.meetingTblData.length}} total entries)</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9 col-md-9\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <pagination total-items=\"$state.current.data.meetingGlbt.meetingTblData.length\" num-pages=\"numPages\" items-per-page=\"$state.current.data.meetingGlbt.numPerPage\" max-size=\"maxSize\" ng-model=\"$state.current.data.meetingGlbt.pagination\"></pagination>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("meetings/partials/meeting.hour.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("meetings/partials/meeting.hour.tpl.html",
    "<!DOCTYPE html>\n" +
    "<br/>\n" +
    "<div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"hidden-xs col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n" +
    "                    <label>\n" +
    "                        <select style=\"font-weight:normal;\" class=\"form-control\" data-ng-model=\"$state.current.data.meetingHour.numPerPage\">\n" +
    "                            <option value=\"25\">25</option>\n" +
    "                            <option value=\"50\">50</option>\n" +
    "                            <option value=\"100\">100</option>\n" +
    "                            <option value=\"250\">250</option>\n" +
    "                        </select>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "               \n" +
    "                <div class=\"col-xs-12 col-sm-offset-6 col-md-offset-6 col-lg-offset-6 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                    <label class=\"input-group pull-right\">\n" +
    "                        <input style=\"font-weight:normal;\" type=\"text\" class=\"form-control\" name=\"search.query\" id=\"search.query\" data-ng-model=\"$state.current.data.meetingHour.searchInput\" placeholder=\"Filter by keyword(s)\">\n" +
    "                        <span class=\"input-group-btn\">\n" +
    "                    <button data-ng-click=\"clearSearch()\" class=\"btn btn-default\" type=\"button\">\n" +
    "                    <span data-ng-hide=\"$state.current.data.meetingHour.searchInput\" class=\"glyphicon glyphicon-search\"></span>\n" +
    "                        <span data-ng-show=\"$state.current.data.meetingHour.searchInput\" class=\"glyphicon glyphicon-remove\"></span>\n" +
    "                        </button>\n" +
    "                        </span>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "                    <table class=\"table table-striped table-bordered table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th ng-click=\"sortList('MeetingName')\">Name&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHour.sortingOrderShow =='MeetingName'\"   data-ng-class=\"$state.current.data.meetingHour.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Day')\">Day&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHour.sortingOrderShow =='Day'\"   data-ng-class=\"$state.current.data.meetingHour.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('MeetTime')\">MeetTime&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHour.sortingOrderShow =='MeetTime'\"   data-ng-class=\"$state.current.data.meetingHour.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('BuildingName')\">BuildingName&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHour.sortingOrderShow =='BuildingName'\"   data-ng-class=\"$state.current.data.meetingHour.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Address')\">Address&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHour.sortingOrderShow =='Address'\"   data-ng-class=\"$state.current.data.meetingHour.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Area')\">Area&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHour.sortingOrderShow =='Area'\"   data-ng-class=\"$state.current.data.meetingHour.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Zip')\">Zip&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHour.sortingOrderShow =='Zip'\"   data-ng-class=\"$state.current.data.meetingHour.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Symbol')\">Symbol&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHour.sortingOrderShow =='Symbol'\"   data-ng-class=\"$state.current.data.meetingHour.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                \n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr data-ng-repeat=\"meetingData in $state.current.data.meetingHour.filteredMeetingTblData\" data-ng-click=\"editVendor(meetingData)\" ng-class=\"{'selected':$state.current.data.meetingHour.setSelectedRow==meetingData.MeetingId}\">\n" +
    "                                <td>{{meetingData.MeetingName}}</td>\n" +
    "                                <td>{{meetingData.Day}}</td>\n" +
    "                                <td>{{meetingData.MeetTime}}</td>\n" +
    "                                <td>{{meetingData.BuildingName}}</td>\n" +
    "                                <td>{{meetingData.Address}}</td>\n" +
    "                                <td>{{meetingData.Area}}</td>\n" +
    "                                <td>{{meetingData.Zip}}</td>\n" +
    "                                <td>{{meetingData.Symbol}}</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 col-md-3\">\n" +
    "                    (Showing {{begin + 1}} to {{end}} of {{$state.current.data.meetingHour.meetingTblData.length}} total entries)</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9 col-md-9\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <pagination total-items=\"$state.current.data.meetingHour.meetingTblData.length\" num-pages=\"numPages\" items-per-page=\"$state.current.data.meetingHour.numPerPage\" max-size=\"maxSize\" ng-model=\"$state.current.data.meetingHour.pagination\"></pagination>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("meetings/partials/meeting.list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("meetings/partials/meeting.list.tpl.html",
    "<!DOCTYPE html>\n" +
    "<br/>\n" +
    "<div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "                    <div class=\"well well-lg\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-lg-3\"><!-- selected_status = -->\n" +
    "                                <bs-dropdown data-menu-type=\"button\" select-val=\"selected_status =selectedVal\"\n" +
    "                                    preselected-item=\"selected_status\" data-dropdown-data=\"daysArry\">\n" +
    "                                </bs-dropdown>\n" +
    "                            </div>\n" +
    "                            <!--\n" +
    "                            <div class=\"col-lg-3\">\n" +
    "                                <bs-dropdown data-menu-type=\"button\" select-val=\"selectedVal\"\n" +
    "                                    preselected-item=\"selected_status\" data-dropdown-data=\"daysArry\">\n" +
    "                                </bs-dropdown>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-lg-3\">\n" +
    "                                <bs-dropdown data-menu-type=\"button\" select-val=\"selectedVal\"\n" +
    "                                    preselected-item=\"selected_status\" data-dropdown-data=\"daysArry\">\n" +
    "                                </bs-dropdown>\n" +
    "                            </div>\n" +
    "                            \n" +
    "                            <div class=\"col-lg-3\">\n" +
    "                                <bs-dropdown data-menu-type=\"button\" select-val=\"selectedVal\"\n" +
    "                                    preselected-item=\"selected_status\" data-dropdown-data=\"statuses\">\n" +
    "                                </bs-dropdown>\n" +
    "                            </div>\n" +
    "                            -->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"hidden-xs col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n" +
    "                    <label>\n" +
    "                        <select style=\"font-weight:normal;\" class=\"form-control\" data-ng-model=\"$state.current.data.meetingHome.numPerPage\">\n" +
    "                            <option value=\"25\">25</option>\n" +
    "                            <option value=\"50\">50</option>\n" +
    "                            <option value=\"100\">100</option>\n" +
    "                            <option value=\"250\">250</option>\n" +
    "                        </select>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "               \n" +
    "                <div class=\"col-xs-12 col-sm-offset-6 col-md-offset-6 col-lg-offset-6 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                    <label class=\"input-group pull-right\">\n" +
    "                        <input style=\"font-weight:normal;\" type=\"text\" class=\"form-control\" name=\"search.query\" id=\"search.query\" data-ng-model=\"$state.current.data.meetingHome.searchInput\" placeholder=\"Filter by keyword(s)\">\n" +
    "                        <span class=\"input-group-btn\">\n" +
    "                    <button data-ng-click=\"clearSearch()\" class=\"btn btn-default\" type=\"button\">\n" +
    "                    <span data-ng-hide=\"$state.current.data.meetingHome.searchInput\" class=\"glyphicon glyphicon-search\"></span>\n" +
    "                        <span data-ng-show=\"$state.current.data.meetingHome.searchInput\" class=\"glyphicon glyphicon-remove\"></span>\n" +
    "                        </button>\n" +
    "                        </span>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "                    <table class=\"table table-striped table-bordered table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th ng-click=\"sortList('MeetingName')\">Name&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='MeetingName'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Day')\">Day&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='Day'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('MeetTime')\">MeetTime&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='MeetTime'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('BuildingName')\">BuildingName&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='BuildingName'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Address')\">Address&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='Address'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Area')\">Area&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='Area'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Zip')\">Zip&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='Zip'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Symbol')\">Symbol&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='Symbol'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('BusLines')\">BusLines&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingHome.sortingOrderShow =='BusLines'\"   data-ng-class=\"$state.current.data.meetingHome.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr data-ng-repeat=\"meetingData in $state.current.data.meetingHome.filteredMeetingTblData\" data-ng-click=\"editVendor(meetingData)\" ng-class=\"{'selected':$state.current.data.meetingHome.setSelectedRow==meetingData.MeetingId}\">\n" +
    "                                <td>{{meetingData.MeetingName}}</td>\n" +
    "                                <td>{{meetingData.Day}}</td>\n" +
    "                                <td>{{meetingData.MeetTime}}</td>\n" +
    "                                <td>{{meetingData.BuildingName}}</td>\n" +
    "                                <td>{{meetingData.Address}}</td>\n" +
    "                                <td>{{meetingData.Area}}</td>\n" +
    "                                <td>{{meetingData.Zip}}</td>\n" +
    "                                <td>{{meetingData.Symbol}}</td>\n" +
    "                                <td>{{meetingData.BusLines}}</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 col-md-3\">\n" +
    "                    (Showing {{begin + 1}} to {{end}} of {{$state.current.data.meetingHome.meetingTblData.length}} total entries)</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9 col-md-9\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <pagination total-items=\"$state.current.data.meetingHome.meetingTblData.length\" num-pages=\"numPages\" items-per-page=\"$state.current.data.meetingHome.numPerPage\" max-size=\"maxSize\" ng-model=\"$state.current.data.meetingHome.pagination\"></pagination>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("meetings/partials/meeting.men.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("meetings/partials/meeting.men.tpl.html",
    "<!DOCTYPE html>\n" +
    "<br/>\n" +
    "<div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"hidden-xs col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n" +
    "                    <label>\n" +
    "                        <select style=\"font-weight:normal;\" class=\"form-control\" data-ng-model=\"$state.current.data.meetingMen.numPerPage\">\n" +
    "                            <option value=\"25\">25</option>\n" +
    "                            <option value=\"50\">50</option>\n" +
    "                            <option value=\"100\">100</option>\n" +
    "                            <option value=\"250\">250</option>\n" +
    "                        </select>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "               \n" +
    "                <div class=\"col-xs-12 col-sm-offset-6 col-md-offset-6 col-lg-offset-6 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                    <label class=\"input-group pull-right\">\n" +
    "                        <input style=\"font-weight:normal;\" type=\"text\" class=\"form-control\" name=\"search.query\" id=\"search.query\" data-ng-model=\"$state.current.data.meetingMen.searchInput\" placeholder=\"Filter by keyword(s)\">\n" +
    "                        <span class=\"input-group-btn\">\n" +
    "                    <button data-ng-click=\"clearSearch()\" class=\"btn btn-default\" type=\"button\">\n" +
    "                    <span data-ng-hide=\"$state.current.data.meetingMen.searchInput\" class=\"glyphicon glyphicon-search\"></span>\n" +
    "                        <span data-ng-show=\"$state.current.data.meetingMen.searchInput\" class=\"glyphicon glyphicon-remove\"></span>\n" +
    "                        </button>\n" +
    "                        </span>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "                    <table class=\"table table-striped table-bordered table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th ng-click=\"sortList('MeetingName')\">Name&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingMen.sortingOrderShow =='MeetingName'\"   data-ng-class=\"$state.current.data.meetingMen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Day')\">Day&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingMen.sortingOrderShow =='Day'\"   data-ng-class=\"$state.current.data.meetingMen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('MeetTime')\">MeetTime&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingMen.sortingOrderShow =='MeetTime'\"   data-ng-class=\"$state.current.data.meetingMen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('BuildingName')\">BuildingName&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingMen.sortingOrderShow =='BuildingName'\"   data-ng-class=\"$state.current.data.meetingMen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Address')\">Address&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingMen.sortingOrderShow =='Address'\"   data-ng-class=\"$state.current.data.meetingMen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Area')\">Area&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingMen.sortingOrderShow =='Area'\"   data-ng-class=\"$state.current.data.meetingMen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Zip')\">Zip&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingMen.sortingOrderShow =='Zip'\"   data-ng-class=\"$state.current.data.meetingMen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Symbol')\">Symbol&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingMen.sortingOrderShow =='Symbol'\"   data-ng-class=\"$state.current.data.meetingMen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                \n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr data-ng-repeat=\"meetingData in $state.current.data.meetingMen.filteredMeetingTblData\" data-ng-click=\"editVendor(meetingData)\" ng-class=\"{'selected':$state.current.data.meetingMen.setSelectedRow==meetingData.MeetingId}\">\n" +
    "                                <td>{{meetingData.MeetingName}}</td>\n" +
    "                                <td>{{meetingData.Day}}</td>\n" +
    "                                <td>{{meetingData.MeetTime}}</td>\n" +
    "                                <td>{{meetingData.BuildingName}}</td>\n" +
    "                                <td>{{meetingData.Address}}</td>\n" +
    "                                <td>{{meetingData.Area}}</td>\n" +
    "                                <td>{{meetingData.Zip}}</td>\n" +
    "                                <td>{{meetingData.Symbol}}</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 col-md-3\">\n" +
    "                    (Showing {{begin + 1}} to {{end}} of {{$state.current.data.meetingMen.meetingTblData.length}} total entries)</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9 col-md-9\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <pagination total-items=\"$state.current.data.meetingMen.meetingTblData.length\" num-pages=\"numPages\" items-per-page=\"$state.current.data.meetingMen.numPerPage\" max-size=\"maxSize\" ng-model=\"$state.current.data.meetingMen.pagination\"></pagination>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("meetings/partials/meeting.spanish.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("meetings/partials/meeting.spanish.tpl.html",
    "<!DOCTYPE html>\n" +
    "<br/>\n" +
    "<div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"hidden-xs col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n" +
    "                    <label>\n" +
    "                        <select style=\"font-weight:normal;\" class=\"form-control\" data-ng-model=\"$state.current.data.meetingSpanish.numPerPage\">\n" +
    "                            <option value=\"25\">25</option>\n" +
    "                            <option value=\"50\">50</option>\n" +
    "                            <option value=\"100\">100</option>\n" +
    "                            <option value=\"250\">250</option>\n" +
    "                        </select>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "               \n" +
    "                <div class=\"col-xs-12 col-sm-offset-6 col-md-offset-6 col-lg-offset-6 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                    <label class=\"input-group pull-right\">\n" +
    "                        <input style=\"font-weight:normal;\" type=\"text\" class=\"form-control\" name=\"search.query\" id=\"search.query\" data-ng-model=\"$state.current.data.meetingSpanish.searchInput\" placeholder=\"Filter by keyword(s)\">\n" +
    "                        <span class=\"input-group-btn\">\n" +
    "                    <button data-ng-click=\"clearSearch()\" class=\"btn btn-default\" type=\"button\">\n" +
    "                    <span data-ng-hide=\"$state.current.data.meetingSpanish.searchInput\" class=\"glyphicon glyphicon-search\"></span>\n" +
    "                        <span data-ng-show=\"$state.current.data.meetingSpanish.searchInput\" class=\"glyphicon glyphicon-remove\"></span>\n" +
    "                        </button>\n" +
    "                        </span>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "                    <table class=\"table table-striped table-bordered table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th ng-click=\"sortList('MeetingName')\">Name&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingSpanish.sortingOrderShow =='MeetingName'\"   data-ng-class=\"$state.current.data.meetingSpanish.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Day')\">Day&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingSpanish.sortingOrderShow =='Day'\"   data-ng-class=\"$state.current.data.meetingSpanish.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('MeetTime')\">MeetTime&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingSpanish.sortingOrderShow =='MeetTime'\"   data-ng-class=\"$state.current.data.meetingSpanish.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('BuildingName')\">BuildingName&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingSpanish.sortingOrderShow =='BuildingName'\"   data-ng-class=\"$state.current.data.meetingSpanish.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Address')\">Address&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingSpanish.sortingOrderShow =='Address'\"   data-ng-class=\"$state.current.data.meetingSpanish.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Area')\">Area&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingSpanish.sortingOrderShow =='Area'\"   data-ng-class=\"$state.current.data.meetingSpanish.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Zip')\">Zip&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingSpanish.sortingOrderShow =='Zip'\"   data-ng-class=\"$state.current.data.meetingSpanish.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Symbol')\">Symbol&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingSpanish.sortingOrderShow =='Symbol'\"   data-ng-class=\"$state.current.data.meetingSpanish.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                \n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr data-ng-repeat=\"meetingData in $state.current.data.meetingSpanish.filteredMeetingTblData\" data-ng-click=\"editVendor(meetingData)\" ng-class=\"{'selected':$state.current.data.meetingSpanish.setSelectedRow==meetingData.MeetingId}\">\n" +
    "                                <td>{{meetingData.MeetingName}}</td>\n" +
    "                                <td>{{meetingData.Day}}</td>\n" +
    "                                <td>{{meetingData.MeetTime}}</td>\n" +
    "                                <td>{{meetingData.BuildingName}}</td>\n" +
    "                                <td>{{meetingData.Address}}</td>\n" +
    "                                <td>{{meetingData.Area}}</td>\n" +
    "                                <td>{{meetingData.Zip}}</td>\n" +
    "                                <td>{{meetingData.Symbol}}</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 col-md-3\">\n" +
    "                    (Showing {{begin + 1}} to {{end}} of {{$state.current.data.meetingSpanish.meetingTblData.length}} total entries)</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9 col-md-9\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <pagination total-items=\"$state.current.data.meetingSpanish.meetingTblData.length\" num-pages=\"numPages\" items-per-page=\"$state.current.data.meetingSpanish.numPerPage\" max-size=\"maxSize\" ng-model=\"$state.current.data.meetingSpanish.pagination\"></pagination>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("meetings/partials/meeting.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("meetings/partials/meeting.tpl.html",
    "<div class=\"row\">\n" +
    "    <tabset>\n" +
    "            <tab ui-sref=\"intergroupAng.meetings.list\" active=\"$state.current.data.meetingTabs.meetingListAll\">\n" +
    "              <tab-heading>Search</tab-heading>\n" +
    "            </tab>\n" +
    "            <tab ui-sref=\"intergroupAng.meetings.hours\" active=\"$state.current.data.meetingTabs.smeetingHourAll\">\n" +
    "              <tab-heading>Next 5 Hours</tab-heading>\n" +
    "            </tab>\n" +
    "            <tab ui-sref=\"intergroupAng.meetings.men\" active=\"$state.current.data.meetingTabs.meetingMenAll\">\n" +
    "                  <tab-heading>Men Only</tab-heading>\n" +
    "            </tab>\n" +
    "            <tab ui-sref=\"intergroupAng.meetings.women\" active=\"$state.current.data.meetingTabs.meetingWomenAll\">\n" +
    "                  <tab-heading>Women Only</tab-heading>\n" +
    "            </tab>\n" +
    "            <tab ui-sref=\"intergroupAng.meetings.glbt\" active=\"$state.current.data.meetingTabs.meetingGlbtAll\">\n" +
    "                  <tab-heading>GLBT</tab-heading>\n" +
    "            </tab>\n" +
    "            <tab ui-sref=\"intergroupAng.meetings.spanish\" active=\"$state.current.data.meetingTabs.meetingSpanishAll\">\n" +
    "                  <tab-heading>Spanish</tab-heading>\n" +
    "            </tab>\n" +
    "        \n" +
    "    </tabset>\n" +
    "</div>\n" +
    "\n" +
    "<div ui-view>\n" +
    "    \n" +
    "</div>\n" +
    "");
}]);

angular.module("meetings/partials/meeting.women.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("meetings/partials/meeting.women.tpl.html",
    "<!DOCTYPE html>\n" +
    "<br/>\n" +
    "<div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"hidden-xs col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n" +
    "                    <label>\n" +
    "                        <select style=\"font-weight:normal;\" class=\"form-control\" data-ng-model=\"$state.current.data.meetingWomen.numPerPage\">\n" +
    "                            <option value=\"25\">25</option>\n" +
    "                            <option value=\"50\">50</option>\n" +
    "                            <option value=\"100\">100</option>\n" +
    "                            <option value=\"250\">250</option>\n" +
    "                        </select>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "               \n" +
    "                <div class=\"col-xs-12 col-sm-offset-6 col-md-offset-6 col-lg-offset-6 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                    <label class=\"input-group pull-right\">\n" +
    "                        <input style=\"font-weight:normal;\" type=\"text\" class=\"form-control\" name=\"search.query\" id=\"search.query\" data-ng-model=\"$state.current.data.meetingWomen.searchInput\" placeholder=\"Filter by keyword(s)\">\n" +
    "                        <span class=\"input-group-btn\">\n" +
    "                    <button data-ng-click=\"clearSearch()\" class=\"btn btn-default\" type=\"button\">\n" +
    "                    <span data-ng-hide=\"$state.current.data.meetingWomen.searchInput\" class=\"glyphicon glyphicon-search\"></span>\n" +
    "                        <span data-ng-show=\"$state.current.data.meetingWomen.searchInput\" class=\"glyphicon glyphicon-remove\"></span>\n" +
    "                        </button>\n" +
    "                        </span>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "                    <table class=\"table table-striped table-bordered table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th ng-click=\"sortList('MeetingName')\">Name&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingWomen.sortingOrderShow =='MeetingName'\"   data-ng-class=\"$state.current.data.meetingWomen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Day')\">Day&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingWomen.sortingOrderShow =='Day'\"   data-ng-class=\"$state.current.data.meetingWomen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('MeetTime')\">MeetTime&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingWomen.sortingOrderShow =='MeetTime'\"   data-ng-class=\"$state.current.data.meetingWomen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('BuildingName')\">BuildingName&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingWomen.sortingOrderShow =='BuildingName'\"   data-ng-class=\"$state.current.data.meetingWomen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Address')\">Address&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingWomen.sortingOrderShow =='Address'\"   data-ng-class=\"$state.current.data.meetingWomen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Area')\">Area&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingWomen.sortingOrderShow =='Area'\"   data-ng-class=\"$state.current.data.meetingWomen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Zip')\">Zip&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingWomen.sortingOrderShow =='Zip'\"   data-ng-class=\"$state.current.data.meetingWomen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                <th ng-click=\"sortList('Symbol')\">Symbol&nbsp;<a href=\"\"><span  data-ng-if=\"$state.current.data.meetingWomen.sortingOrderShow =='Symbol'\"   data-ng-class=\"$state.current.data.meetingWomen.reverseSort ? 'glyphicon glyphicon-chevron-up':'glyphicon glyphicon-chevron-down'\"></span></a>\n" +
    "                                </th>\n" +
    "                                \n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr data-ng-repeat=\"meetingData in $state.current.data.meetingWomen.filteredMeetingTblData\" data-ng-click=\"editVendor(meetingData)\" ng-class=\"{'selected':$state.current.data.meetingWomen.setSelectedRow==meetingData.MeetingId}\">\n" +
    "                                <td>{{meetingData.MeetingName}}</td>\n" +
    "                                <td>{{meetingData.Day}}</td>\n" +
    "                                <td>{{meetingData.MeetTime}}</td>\n" +
    "                                <td>{{meetingData.BuildingName}}</td>\n" +
    "                                <td>{{meetingData.Address}}</td>\n" +
    "                                <td>{{meetingData.Area}}</td>\n" +
    "                                <td>{{meetingData.Zip}}</td>\n" +
    "                                <td>{{meetingData.Symbol}}</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 col-md-3\">\n" +
    "                    (Showing {{begin + 1}} to {{end}} of {{$state.current.data.meetingWomen.meetingTblData.length}} total entries)</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9 col-md-9\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <pagination total-items=\"$state.current.data.meetingWomen.meetingTblData.length\" num-pages=\"numPages\" items-per-page=\"$state.current.data.meetingWomen.numPerPage\" max-size=\"maxSize\" ng-model=\"$state.current.data.meetingWomen.pagination\"></pagination>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
