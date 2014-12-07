angular.module('pof', []).directive('bsDropdown', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            items: '=dropdownData',// two way binding
            doSelect: '&selectVal',//The "&" sign allows you to invoke an expression, 
            //or call an expression, evaluate an expression,//whatever, on the parent scope of whatever the directive is on the inside of.
            selectedItem: '=preselectedItem'// two way binding
        },
        //require:'ng-model',
        link: function (scope, element, attrs) {
           
            var html = '';
            console.info(scope);
            console.info(attrs);
            switch (attrs.menuType) {
                case "button":
                    html += '<div class="input-group"><div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>';
                    break;
                default:
                    //html += '<div class="dropdown"><a class="dropdown-toggle" role="button" data-toggle="dropdown"  href="javascript:;">Dropdown<b class="caret"></b></a>';
                    break;
            }
//            switch (attrs.menuType) {
//                case "button":
//                    html += '<div class="btn-group"><button class="btn button-label btn-info">Action</button><button class="btn btn-info dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>';
//                    break;
//                default:
//                    html += '<div class="dropdown"><a class="dropdown-toggle" role="button" data-toggle="dropdown"  href="javascript:;">Dropdown<b class="caret"></b></a>';
//                    break;
//            }
            html += '<ul class="dropdown-menu" role="menu"><li ng-repeat="item in items"><a tabindex="-1" data-ng-click="dynamicSelVal(item)">{{item.name}}</a></li></ul></div><input type="text" class="form-control" ng-model="selectedItem"></div>';
          
            element.append($compile(html)(scope));
            alert(scope.selectedItem);
            for (var i = 0; i < scope.items.length; i++) 
            {
                if (scope.items[i].id === scope.selectedItem) {
                    scope.bSelectedItem = scope.items[i];
                    //alert("first "+scope.bSelectedItem.id);
                    break;
                }
                
            }
            scope.dynamicSelVal = function (item) {
                console.info(item);
                //alert("inside dynamic value "+item.id);
                switch (attrs.menuType) {
                    case "button":
                        //$('button.button-label', element).html(item.name);
                        break;
                    default:
                        $('a.dropdown-toggle', element).html('<b class="caret"></b> ' + item.name);
                        break;
                }
                scope.doSelect({
                    //selectedVal: item.id
                    // we are getting this value from selectedItem two way binding
                    heloo1:"hello world"
                    //heloo1:item.id
                });
                
            };
            scope.dynamicSelVal(scope.bSelectedItem);
        }
    };
});