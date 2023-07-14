var weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={apiKey}';
var submitBtn = document.getElementById(".btn");
var previousSearchElement = document.getElementById("previous-searches");
var apiKey = ('f667fe72778075c4dfe11c052d8a2456');


var getWeather = function (city) {
    fetch(weatherAPI)
        .then(function (response) {
            return response.json(data);
        })
        .then(function (data) {
            console.log(data);
        })
};