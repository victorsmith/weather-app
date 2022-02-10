const weatherInfoDiv = document.getElementById('weatherInfo');

async function getWeather() {

    const targetCity = fetchSearchBarValue();
    // this is public and free
    const APIkey = '2fa1ab623a2b69f36c4a1b9e0b1e21db';
    // url = `http://api.openweathermap.org/data/2.5/forecast?q=${targetCity}&units=metric&appid=${APIkey}`;
    url = `http://api.openweathermap.org/data/2.5/weather?q=${targetCity}&units=metric&appid=${APIkey}`;
    try {
        const request = await fetch(url, { mode: 'cors' });
        const data = await request.json();
        // console.log(data.main.temp);
        weatherInfoDiv.textContent = `Weather in ${targetCity}:\n ${data.main.temp} C`;

    } catch (error) {
        console.log(error);
    }
        
}

function fetchSearchBarValue () {
    const cityInput = document.getElementById('searchBar');
	const cityVal = cityInput.value;
	console.log('City!!!: ' + cityVal);
	cityInput.value = '';
	return cityVal; 
}


