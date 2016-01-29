angular.module('BlogService', []).factory('Blog', ['$http', function($http) {

    return {
        get : function() {
            //return $http.get('/api/blog');
            return [{
                    title: 'Test',
                    real_file_name: 'test.html',
                    createdAt: '123'
            }];
        },
    }

}]);
