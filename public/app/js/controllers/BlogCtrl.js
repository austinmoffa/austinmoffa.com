(function() {
angular.module('BlogCtrl', [])
.controller('BlogController', BlogController);

BlogController.$inject = ['$stateParams'];

function BlogController($stateParams) {
    var vm = this;
    if ($stateParams.post_id) {
        vm.post = 'app/templates/posts/' + $stateParams.post_id + '.html';
    } else {
        vm.post = false;
    }
}

})();
