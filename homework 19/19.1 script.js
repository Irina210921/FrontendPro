document.querySelector('form').addEventListener('submit', e =>{
    e.preventDefault();
    const input = document.querySelector('input');
    getData(input.value.trim());
});
getData('Dnipro');
async function getData(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=978d1af95add2d8b8538ec0b211bd3ca`);
    const data = await res.json();

    if (res.status !== 200) {
        alert(data.message);
    } else {
        createWeather(data);
    }
}

function createWeather(data){
    console.log(data);
    document.querySelector('.weather_container').innerHTML =`
    <div class="weather_left">
            <h2 class="city">${data.name}</h2>
            <span>Вологість:
            <b>${data.main.humidity}</b>
            </span>
            <span>Вітер:
            <b>${Math.round(data.wind.speed)} m/s</b>
            </span>
        </div>
        <div class="weather_right">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <span class="temp">${Math.round(data.main.temp-273)}°C</span>
        </div>`;
}