angular.module('mainApp', ['ngRoute', 'ngMaterial', 'appRoutes', 'MainCtrl', 'BlogCtrl', 'BlogPostCtrl'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
})
.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        var titles = [
            'I am not the Walrus',
            'Worst thing Since Waterworld',
            'Surplus Robot Limbs',
            'My Mom Likes My Site',
            'Crunchy',
            'All Content Ethically Sourced',
            'Flatland 2: Earth',
            'Schopenhauer\'s Dream Book',  
            'Deep Couch City',
        ];

        var title = titles[Math.floor(Math.random()*titles.length)];

        document.title = title;
    });
}]);

