/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe('JuniperController', function() {
  beforeEach(module('Juniper'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.generateQuery', function() {
    it('Generates Query', function() {
      var $scope = {};
      var controller = $controller('JuniperController', { $scope: $scope });
      $scope.generateQuery = '';
      $scope.generateQuery();
      //expect($scope.strength).toEqual('strong');
    });
  });
});