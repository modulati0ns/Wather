const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const celsius = document.querySelector('.celsius');
const icon = document.querySelector('.icon');
const api = "e52a4a93bc257d96b056ec72713ac93c";


// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}


async function getData(lat, lon) {
    let endpoint = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + api;
    const response = await fetch(endpoint)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].id;
            weather.city = data.name;
            weather.country = data.sys.country;
        }).then(() => {
            displayWeather();
        })
        .catch((e)=>{
            console.log('Se ha encontsdfsdfsdfsdfrado un error: '+e);
        })

}


async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(Position => {
            const lat = Position.coords.latitude;
            const lon = Position.coords.longitude;

            getData(lat, lon)


        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function displayWeather() {
    city.innerHTML = weather.city; // Edito la ciudad
    celsius.innerHTML = weather.temperature.value; // Edito la temperatura
    icon.innerHTML = '<i class="wi wi-owm-'+weather.iconId+'"></i>' // Edito el icono
}


// latit, longi = await getLocation().then(()=>{
//     var dataWeather = getData(endpoint);
//     // Aqui tengo los datos en data y los puedo poner en el HTML

//     if (dataWeather) {



//     }
// })




getLocation();