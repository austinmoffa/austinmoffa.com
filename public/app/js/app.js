angular.module('mainApp', ['ngRoute', 'ngMaterial', 'appRoutes', 'MainCtrl', 'BlogCtrl', 'BlogPostCtrl'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
});
