(function() {
angular.module('BrandImage', []).directive('brandImage', BrandImage);

BrandImage.$inject = ['$state'];
function BrandImage() {

    function BrandImageController($state, $rootScope) {
        var vm = this;
        $rootScope.$on('$stateChangeStart', changeBrandImage);
        var variation = ['warp', 'phone', 'home']
        vm.brand_image = getRandomImage();

        function changeBrandImage(event, toState) {
            vm.brand_image = toState.name;
            if (toState.name == 'home') {
                vm.brand_image = getRandomImage();
            }
        }

        function getRandomImage() {
            return variation[Math.floor(Math.random()*variation.length)];
        }

        vm.onShowGif = function() { //forces the gif to restart from the beginning
            var el = document.getElementById(vm.brand_image);
            var src = el.getAttribute('src');
            el.setAttribute('src', '');
            el.setAttribute('src', src);
        }

    }

    return {
        scope: {},
        controller: BrandImageController,
        controllerAs: 'vm',
        templateUrl: 'app/templates/brand_image.html'
    }
}

})();
