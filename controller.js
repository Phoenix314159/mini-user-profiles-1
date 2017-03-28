angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.users = mainService.getUsers();

    $scope.firstLetterCaps = function (str) {
      return mainService.firstLetterCaps(str);
    };

    $scope.toggleFavorite = mainService.toggleFavorite;
})