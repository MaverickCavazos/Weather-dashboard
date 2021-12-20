var searchName = document.querySelector('#searchCity');
var city = document.querySelector('#city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var button = document.querySelector('.submit');
var fivedaycontainer = document.querySelector('.fiveday');
var title = document.querySelector('.title');

console.log('https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=5d525352fa588eed3d6d28ab5746dc12')
    button.addEventListener('click', function(citySearch){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchName.value + '&units=imperial&appid=5d525352fa588eed3d6d28ab5746dc12')
        .then(response => response.json())
        .then(data => {

            get(data)

            console.log(data);
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

        function get(weather) {
            var cityname = weather.name
            var lat = weather.coord.lat
            var lon = weather.coord.lon
            var api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=5d525352fa588eed3d6d28ab5746dc12`
            fetch(api)
            .then(response => response.json())
            .then(data => {

                console.log(data);
                var cnt = 5
                var header = document.createElement("h4")
                var div = document.createElement("div")
                div.setAttribute("class", "col-3") 
                header.textContent = "5-Day Forecast:"

                div.append(header)
                fivedaycontainer.innerHTML = ''
                title.append(div)


                for(var i = 0; i < cnt; i++) {
                    var Temp = data.daily[i].temp.day;
                    var humidity = data.daily[i].humidity;
                    var wind = data.daily[i].wind_speed;
                    var icon = data.daily[i].weather[0].icon;
                    var iconurl = `http://openweathermap.org/img/wn/${icon}.png`

                    var column = document.createElement("div");
                    var card = document.createElement("div");
                    var cardbody = document.createElement('div');
                    var cardtitle = document.createElement('h4');
                    var weathericon = document.createElement('img');
                    var tempEl = document.createElement("p");
                    var windEl = document.createElement('p');
                    var humidityEl = document.createElement('p');

                    column.append(card);
                    card.append(cardbody);
                    cardbody.append(cardtitle, weathericon, tempEl, windEl, humidityEl);

                    column.setAttribute("class", "col-md");
                    column.classList.add("fivedaycard");
                    card.setAttribute("class", "card bg-primary h-100 text-white");
                    cardbody.setAttribute("class", "card-body p-2");
                    cardtitle.setAttribute("class", "card-title");
                    tempEl.setAttribute("class", "card-text");
                    windEl.setAttribute("class", "card-text");
                    humidityEl.setAttribute("class", "card-text");
                    weathericon.setAttribute("src", iconurl);
                    tempEl.textContent = `Temperature: ${Temp}F`
                    windEl.textContent = `Wind: ${wind}MPH`
                    humidityEl.textContent = `Humidity: ${humidity}%`
                    cardtitle.textContent = `Day ${i+1}`

                    fivedaycontainer.append(column);

                }
            })
            .catch(err => console.log(err));
        }

      