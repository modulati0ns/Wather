const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const celsius = document.querySelector('.celsius');
const icon = document.querySelector('.icon');
const api = "e52a4a93bc257d96b056ec72713ac93c";
const buton = document.querySelector('.but');
buton.addEventListener("click", cords);
let endpoint = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'murcia' + '&units=metric' + '&appid=' + api;




async function getData(url) {
    const response = await fetch(url);

    return response.json()
}

var latit, longi;

async function main() {
    var data = await getData(endpoint);
    // Aqui tengo los datos en data y los puedo poner en el HTML
    
    if (data){
        latit, longi = await getLocation();

        city.innerHTML = data.name;                             // Edito la ciudad
        celsius.innerHTML = Math.round(data.main.temp);         // Edito la temperatura
        icon.innerHTML = '<i class="wi wi-owm-804"></i>'        // Edito el icono


    }



}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(Position =>
            {
                const lat = Position.coords.latitude;
                const lon = Position.coords.longitude;
                console.log(lat, lon);
                return [lat, lon];
            });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function cords()
{
    console.log(latit);
    console.log(longi);
}




main();

// data => obj = data