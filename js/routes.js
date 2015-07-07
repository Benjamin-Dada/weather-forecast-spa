weatherForecast.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
    .when('/home',{
         templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
           })
    .when('/forecast',{
         templateUrl: 'templates/forecast.html',
        controller: 'forecastCtrl'
        })
    
    .when('/forecast/:days',{
         templateUrl: 'templates/forecast.html',
        controller: 'forecastCtrl'
        })

}]);