(function () {
angular.module('app.routes', []).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "app/templates/home.html"
    })
    .state('music', {
        url: "/music",
        templateUrl: "app/templates/music.html"
    })
    .state('prof', {
        url: "/prof",
        templateUrl: "app/templates/prof.html"
    })
    .state('blog', {
        url: "/blog/:post_id",
        templateUrl: "app/templates/blog.html",
        controller: "BlogController as vm"
    })
   
});

})();
