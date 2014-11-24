(function() {
'use strict';

angular.module('filtersModule', [])
.filter('byAccountType', function () {
  return function(arr) {
    return arr.map(function(crieria){
      if(crieria.AccountType == "CostOfGoodsSold" || crieria.AccountType =="Expense") {
        return crieria;
      }
    });
  };
})

.filter('matchAllToProperties', function () {
  return function(input, query, exclude) {
    var b, bits, filtered, item, item_copy, json, _i, _len;
    if (!input || !query) {
      return input;
    }
    bits = (function() {
      var _i, _len, _ref, _results;
      _ref = query.split(' ');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        b = _ref[_i];
        if (b !== ' ') {
          _results.push(b.toLowerCase());
        }
      }
      return _results;
    })();
    var func1 = function(bit) {
      return json.indexOf(bit) > 0;
    };
    var func2 = function(prop) {
      return delete item_copy[prop];
    };
    filtered = [];
    for (_i = 0, _len = input.length; _i < _len; _i++) {
      item = input[_i];
      item_copy = angular.copy(item);
      _.each(exclude, func2);
      json = JSON.stringify(item_copy).toLowerCase();
      if (_.every(bits, func1)) {
        filtered.push(item);
      }
    }
    return filtered;
  };
})

.filter('sumByKey', function () {
  return function(data, key) {
    if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
      return 0;
    }

    var sum = 0;
    for (var i = data.length - 1; i >= 0; i--) {
      sum += parseInt(data[i][key]);
    }
    return sum;
    };
});


}());
