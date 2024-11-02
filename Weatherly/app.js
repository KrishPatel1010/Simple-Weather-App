// URLs and API Key
const CITY_URL = "https://countriesnow.space/api/v0.1/countries/population/cities";
const WEATHER_API_KEY = "da69256eeede4b40a12145258243110";

// Variables
const cityNames = [];
const cityInput = document.querySelector(".city-input");
const dropDown = document.querySelector(".dropdown");
const weatherDataSet = document.querySelector(".weather-data");

let currentIndex = -1; // Tracks the currently selected item in the dropdown

// Fetch city names and populate cityNames array
const getCityData = async () => {
    try {
        const cityData = await fetch(CITY_URL);
        const temp = await cityData.json();

        temp.data.forEach(item => cityNames.push(item.city.toLowerCase()));
        cityNames.sort();
    } catch (error) {
        console.error("Error fetching city data:", error);
    }
};

getCityData();

// Event listener for city input to show suggestions
cityInput.addEventListener("input", () => {
    const query = cityInput.value.toLowerCase();
    const matchingCities = cityNames.filter(city => city.startsWith(query));

    dropDown.innerHTML = ""; // Clear previous results

    if (matchingCities.length > 0) {
        dropDown.style.display = "block"; // Show dropdown
        matchingCities.forEach(city => createDropdownItem(city));
    } else {
        dropDown.style.display = "none"; // Hide dropdown if no matches
    }
});

// Create a dropdown item for each matching city
function createDropdownItem(city) {
    const item = document.createElement("div");
    item.classList.add("dropdown-item");
    item.textContent = city;
    item.onclick = () => selectCity(city);
    dropDown.appendChild(item);
}

// Select a city from the dropdown
function selectCity(city) {
    cityInput.value = city;
    dropDown.style.display = "none";
    fetchWeatherData(city); // Fetch and display weather data
}

// Fetch weather data for a selected city
async function fetchWeatherData(city) {
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=yes`;
    try {
        const weatherData = await fetch(weatherUrl);
        const weatherInfo = await weatherData.json();
        console.log(weatherInfo);
        weatherDataSet.style.display = "none";
        weatherDataSet.innerHTML = `
        <span>
        <p>Time Period:</p>
        <img src="${weatherInfo.current.condition.icon}" alt="Weather icon">
        </span>
        <p>Temperature(celcius): ${weatherInfo.current.temp_c} °C</p>
        <p>Temperature(farenheit): ${weatherInfo.current.temp_f} °f</p>
        <p>Humidity: ${weatherInfo.current.humidity}%</p>
        <p>Condition: ${weatherInfo.current.condition.text}</p>
        `;
        weatherDataSet.style.display = "block";
    } catch (error) {

        console.error("Error fetching weather data:", error);
    }
}


// Keyboard navigation for dropdown items
cityInput.addEventListener("keydown", (e) => {
    const items = dropDown.querySelectorAll(".dropdown-item");

    if (e.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % items.length; // Move down
        highlightItem(items);
        e.preventDefault();
    } else if (e.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Move up
        highlightItem(items);
        e.preventDefault();
    } else if (e.key === "Enter") {
        if (currentIndex >= 0) {
            selectCity(items[currentIndex].textContent); // Select highlighted city
        }
    }
});

// Highlight the currently selected dropdown item
function highlightItem(items) {
    items.forEach((item, index) => {
        item.classList.toggle("selected", index === currentIndex); // Highlight current item
        if (index === currentIndex) {
            item.scrollIntoView({ block: "nearest" }); // Scroll to highlighted item if necessary
        }
    });
}