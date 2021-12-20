var searchName = document.querySelector('#searchCity');
var city = document.querySelector('#city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var button = document.querySelector('.submit');

console.log('https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=5d525352fa588eed3d6d28ab5746dc12')
    button.addEventListener('click', function(citySearch){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchName.value + '&units=imperial&appid=5d525352fa588eed3d6d28ab5746dc12')
        .then(response => response.json())
        .then(data => {

            

            
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var windValue = data['wind']['speed'];
            var humidityValue = data['main']['humidity'];
            
        
            city.innerHTML = nameValue;
            temp.innerHTML = "Temp - "+ tempValue;
            wind.innerHTML = "Wind - "+ windValue;
            humidity.innerHTML = "Humidity - "+ humidityValue;
            searchName.value ="";
        
            
        })
        
        .catch(err => console.log(err));
        })

      