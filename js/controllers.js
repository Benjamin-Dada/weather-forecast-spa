weatherForecast.controller('homeCtrl',['$scope','$location','cityService', function($scope,$location,cityService){
      $scope.city = cityService.city;
    
    $scope.$watch('city',function(){
         cityService.city = $scope.city;
    });
    
     $scope.submit = function(){
        $location.path("/forecast");
        }
}]);

//controller for the forecast.html
weatherForecast.controller('forecastCtrl',['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function($scope,$resource,$routeParams,cityService,weatherService){
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.getWeatherService($scope.city, $scope.days);
    
    console.log($scope.weatherResult);
    
    $scope.convertToFarenheit = function(deg){
        return Math.round ((1.8 * (deg - 232)) + 32);
    }
    
    $scope.convertToDate = function (val){
        return new Date(val*1000);
    }
}]);

