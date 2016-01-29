angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    // home page
    .when('/', {
        templateUrl: 'app/templates/home.html',
        controller: 'MainController'
    })
    .when('/blog', {
        templateUrl: 'app/templates/blog.html',
        controller: 'BlogController'
    })
    .when('/blog/:id', {
        templateUrl: 'app/templates/blog_post.html',
        controller: 'BlogPostController'
    });
    .when('/story', {
        templateUrl: 'app/templates/story.html',
        controller: 'StoryController'
    })
    .when('/story/:id', {
        templateUrl: 'app/templates/story_post.html',
        controller: 'StoryPostController'
    });


    $locationProvider.html5Mode(true);

}]);

