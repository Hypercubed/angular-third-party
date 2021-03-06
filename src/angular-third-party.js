'use strict';

angular.module('hc.thirdParty', [])
  .provider('thirdParty', function($provide) {
    var list = [];

    this.register = function(key) {
      list.push(key);
    };

    this.$get = function($window) {

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
        }
        $provide.factory(key, function() {
          return $window.thirdParty[key];
        });
      });

      return $window.thirdParty;
    };
  })
  .run(function(thirdParty, $log) {
    $log.debug('thirdParty', thirdParty);
  });
