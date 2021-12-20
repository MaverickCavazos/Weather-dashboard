var searchName = document.querySelector('#searchCity');
var city = document.querySelector('#city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var button = document.querySelector('.submit');

console.log('https://api.openweathermap.org/data/2.5/forecast?q=Austin&units=imperial&cnt=5&appid=5d525352fa588eed3d6d28ab5746dc12')
    button.addEventListener('click', function(name){
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchName.value + '&units=imperial&cnt=5&appid=5d525352fa588eed3d6d28ab5746dc12')
        .then(response => response.json())
        .then(data => {

            var cnt = 

            for (var i = 0; i < cnt.length; i++) {
            var tempValue = data['temp'];
            var nameValue = data['name'];
            var windValue = data['wind'];
            var humidityValue = data['humidity'];
        
            city.innerHTML = nameValue;
            temp.innerHTML = "Temp - "+ tempValue;
            wind.innerHTML = "Wind - "+ windValue;
            humidity.innerHTML = "Humidity - "+ humidityValue;
            searchName.value ="";
        
            }
        })
        
        .catch(err => console.log(err));
        })

      