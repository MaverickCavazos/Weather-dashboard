var searchName = document.querySelector('#searchCity');
var city = document.querySelector('#city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var button = document.querySelector('.submit');

    button.addEventListener('click', function(name){
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=5d525352fa588eed3d6d28ab5746dc12')
        .then(response => response.json())
        .then(data => {

            var tempValue = data['city']['temp'];
            var nameValue = data['name'];
            var windValue = data['wind'];
            var humidityValue = data['humidity'];
        
            city.innerHTML = nameValue;
            temp.innerHTML = "Temp - "+ tempValue;
            wind.innerHTML = "Wind - "+ windValue;
            humidity.innerHTML = "Humidity - "+ humidityValue;
            input.value ="";
        
        })
        
        .catch(err => alert("Couldn't Find City"));
        })
