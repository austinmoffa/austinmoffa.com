(function() {
angular.module('app', ['ui.router', 'app.routes', 'ngTouch', 'ui.bootstrap', 'NavCtrl', 'BlogCtrl', 'BrandImage'])
.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        var titles = [
            'Mistakes Were Made...',
            'Robust and Aromatic',
            'The Savannah Campaign of Websites',
            'Badical!',
            'If Selected I Will Not Load, If Loaded I will Not Please',
            'Wan Trepanner - NOT Wantrepreneur',
            'Worst thing Since Waterworld',
            'Discount Robot Limbs',
            'Voted Best Site by Austin\'s Mom',
            'Soft - Especially in Milk',
            'All Content Ethically Sourced',
            'Schopenhauer\'s Dream Book',  
            'Deep Couch City',
            'Academic Rigor, Youthful Vigor',
            'Be Mindful of Spacing When Writing "Best In Breed"'
        ];

        var title = titles[Math.floor(Math.random()*titles.length)];

        document.title = title;
    });
    }]);
})();


