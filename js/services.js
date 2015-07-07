weatherForecast.service('cityService',function(){
    this.city = "";
});

weatherForecast.service('weatherService',['$resource',function($resource){
    
    //create a function so u can call weatherService method getWeaterService
    //the function above is part of the syntax ans so cant be used
    this.getWeatherService = function(city, days){
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
                                  {callback: "JSON_CALLBACK"}, { get: { method: "JSONP"}});//it is ok mto get my data from outside
    
        return weatherAPI.get({q: city, cnt: days }); 
    }
}]);