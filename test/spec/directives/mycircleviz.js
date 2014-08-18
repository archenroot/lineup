'use strict';

describe('Directive: myCircleViz', function () {

  // load the directive's module
  beforeEach(module('lineupApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-circle-viz></my-circle-viz>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myCircleViz directive');
  }));
});
