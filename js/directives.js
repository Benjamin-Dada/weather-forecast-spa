weatherForecast.directive('weatherReport',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directive/weatherReport.html',
        replace: true,
        scope: {//this wud allow users to manipulate or stuff
            weatherDay: "=",//because it is an object not just text; 2-way binding
            convertToStandard: "&",
            convertToDate: "&",
            //bcuz it is a function
            dateFormat: "@"//bcuz it is string; one-way binding 
        }
        
    }

});
