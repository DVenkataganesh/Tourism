const apiKey = '9c55fe4b657167feb7784da43e49a457';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const languageSelect = document.getElementById('language-select');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');
const fetchButton = document.getElementById('fetch-button');

const translations = {
    en: {
        location: 'Location',
        temperature: 'Temperature',
        description: 'Description',
        fetchWeather: 'Fetch Weather'
    },
    fr: {
        location: 'Lieu',
        temperature: 'Température',
        description: 'Description',
        fetchWeather: 'Obtenir la météo'
    }
};

function updateTranslations(language) {
    const translation = translations[language];
    locationElement.textContent = translation.location;
    temperatureElement.textContent = translation.temperature;
    descriptionElement.textContent = translation.description;
    fetchButton.textContent = translation.fetchWeather;
}

function updateWeather(data) {
    locationElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    descriptionElement.textContent = data.weather[0].description;
    weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function fetchWeather(city, language) {
    try {
        const response = await fetch(`${weatherUrl}?q=${city}&appid=${apiKey}&lang=${language}`);
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Initial translation update
updateTranslations(languageSelect.value);

// Language change event
languageSelect.addEventListener('change', function () {
    const selectedLanguage = this.value;
    updateTranslations(selectedLanguage);
});

// Fetch weather event
fetchButton.addEventListener('click', function () {
    const city = 'Tekemah';
    const selectedLanguage = languageSelect.value;
    fetchWeather(city, selectedLanguage);
});
