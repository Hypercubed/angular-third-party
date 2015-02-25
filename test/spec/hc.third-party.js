'use strict';

describe('Module: hc.thirdParty', function () {
  var thirdParty, $window, jQuery;

  beforeEach(module('hc.thirdParty', function(thirdPartyProvider) {
    thirdPartyProvider.register('jQuery');
  }));

  beforeEach(inject(function(_$window_, _thirdParty_,_jQuery_){
    $window = _$window_;
    thirdParty = _thirdParty_;
    jQuery = _jQuery_;
  }));

  it('should correctly display hello world', function () {
    expect(thirdParty).toBeDefined();
    expect($window).toBeDefined();

    expect(thirdParty.jQuery).toBeDefined();
    expect($window.jQuery).toBeUndefined();

    expect(jQuery).toBeDefined();
    expect(jQuery.fn.jquery).toBeDefined();

  });

});
