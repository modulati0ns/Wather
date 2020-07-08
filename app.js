const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const celsius = document.querySelector('.celsius');
const icon = document.querySelector('.icon');
const api = "e52a4a93bc257d96b056ec72713ac93c";

let endpoint = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'murcia' + '&units=metric' + '&appid=' + api;




async function getData(url) {
    const response = await fetch(url);

    return response.json()
}

async function main() {
    var data = await getData(endpoint);
    console.log(data);
    // Aqui tengo los datos en data y los puedo poner en el HTML
    city.innerHTML = data.name;
    celsius.innerHTML = data.main.temp;
    console.log(data.weather[0].id);
    icon.innerHTML = '<i class="wi wi-owm-804"></i>'
}





main();

// data => obj = data