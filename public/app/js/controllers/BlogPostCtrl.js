angular.module('BlogPostCtrl', []).controller('BlogPostController', function($scope, $routeParams) {
    $scope.post = 'app/posts/' + $routeParams.id + '.html';
});

