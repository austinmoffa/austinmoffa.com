angular.module('MainCtrl', []).controller('MainController', function($scope, $mdSidenav) {
    $scope.main_nav = 'app/templates/main_nav.html';
    $scope.navOpen = false;

    $scope.openNav = function() {
        $mdSidenav('main_nav').open();
    }
});
