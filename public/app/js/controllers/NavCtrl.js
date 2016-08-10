(function() {
angular.module('NavCtrl', [])
.controller('NavController', NavController);

NavController.$inject = ['$state'];

function NavController($state) {
    var vm = this;
    vm.isCollapsed = true;
    vm.toggleCollapse = toggleCollapse;
    vm.active = $state.$current.name;
    vm.isActive = isActive();

    function isActive(state) {
        if (state == $state.$current.name) {
            return true;
        } 
        return false;

    }

    function toggleCollapse() {
        vm.isCollapsed = !vm.isCollapsed;
    }
}

})();
