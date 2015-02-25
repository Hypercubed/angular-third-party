'use strict';
angular.module('hc.thirdParty', []).provider('thirdParty', [
  '$provide',
  function ($provide) {
    var list = [];
    this.register = function (key) {
      list.push(key);
    };
    this.$get = [
      '$window',
      function ($window) {
        $window.thirdParty = $window.thirdParty || {};
        list.forEach(function set(key) {
          var factory = $window[key];
          if (factory) {
            $window.thirdParty[key] = factory;
            try {
              delete $window[key];
            } catch (err) {
              $window[key] = undefined;
            }
            $provide.factory(key, function () {
              return factory;
            });
          }
        });
        return $window.thirdParty;
      }
    ];
  }
]).run([
  'thirdParty',
  '$log',
  function (thirdParty, $log) {
    $log.debug('thirdParty', thirdParty);
  }
]);