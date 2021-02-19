const apiKey = '4384136ca82f5059368a170068aff92d';

const getWeather = (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showWeather(data))
}

const showWeather = (data) =>{
    document.getElementById('place').innerText = data.name || "Unknown Location!";
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    document.getElementById('search-input').value = "";

}



document.getElementById('search-input')
    .addEventListener("keypress", function(event){
        if(event.key == 'Enter'){
            document.getElementById('search-btn').click();
            
        }

    });

getWeather("Dhaka");
