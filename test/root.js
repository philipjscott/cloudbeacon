//put this in a service later? or look up how to do it "properly" in angular

function getExpiry(years) {
    return new Date(new Date().setFullYear(new Date().getFullYear()+years));
}

//have a collection of strings?





angular.module('root', ['ngCookies'])
    .controller('index', ['$scope', '$cookies', '$interval', function($scope, $cookies, $interval) {
        var expiry;
        $scope.name;
        $scope.isUser;
        $scope.timeperiod = 'day';
        function tick() {
            $scope.time = Date.now();
        }
        tick();
        $interval(tick, 1000);
        $scope.submit = function() {
            expiry = getExpiry(5);
            $cookies.put('user', $scope.name, {expires: expiry});
            $scope.isUser = true;
        };
        $scope.clear = function() {
            $cookies.remove('user');
            $scope.isUser = false;
        };
        if ($cookies.get('user') !== undefined) {
            $scope.isUser = true;
            $scope.name = $cookies.get('user');
        } else {
            $scope.isUser = false;
        }
    }])
