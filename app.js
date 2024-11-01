//for weather data
const weather_url = "http://api.weatherapi.com/v1/current.json?key=da69256eeede4b40a12145258243110&q=London&aqi=yes"

const getWeatherData = async () => {
    const weather_data = await fetch(weather_url);
    const temp1 = await weather_data.json();
    // console.log(temp1);
}

getWeatherData();

//for cities names

const city_url = "https://countriesnow.space/api/v0.1/countries/population/cities"

const city_names = [];
const getCityData = async () => {
    const city_data = await fetch(city_url);
    const temp2 = await city_data.json();

    //travesing through cities (Obj->Data->City)
    for (let i = 0; i < temp2.data.length; i++) {
        city_names.push(temp2.data[i].city)

    }

    city_names.sort();
    // console.log(city_names);
}

getCityData();

const cityInput = document.querySelector(".city-input");
const dropDown = document.querySelector(".dropdown");
cityInput.addEventListener("input", () => {
    const query = cityInput.value.toLowerCase();
    const matchingCities = city_names.filter(city => city.toLowerCase().startsWith(query));

    dropDown.innerHTML=""
    if (matchingCities.length > 0) {
        dropDown.style.display = "block"; // Show dropdown
        matchingCities.forEach(city => {
            const item = document.createElement("div");
            item.classList.add("dropdown-item");
            item.textContent = city;
            item.onclick = () => selectCity(city);
            dropDown.appendChild(item); 
        });
    } else {
        dropDown.style.display = "none"; 
    }
})
function selectCity(city) {
    cityInput.value = city; 
    dropDown.style.display = "none"; 
}

let currentIndex = -1; // Track the currently selected item in the dropdown

cityInput.addEventListener("keydown", (e) => {
    const items = dropDown.querySelectorAll(".dropdown-item");
    if (e.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % items.length; // Move down
        highlightItem(items);
        e.preventDefault(); // Prevent the default action (scrolling)
    } else if (e.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Move up
        highlightItem(items);
        e.preventDefault(); // Prevent the default action (scrolling)
    } else if (e.key === "Enter") {
        if (currentIndex >= 0) {
            selectCity(items[currentIndex].textContent); // Select highlighted city
        }
    }
});

function highlightItem(items) {
    items.forEach((item, index) => {
        item.classList.remove("selected"); // Remove highlight from all items
        if (index === currentIndex) {
            item.classList.add("selected"); // Add highlight to the current item
            item.scrollIntoView({ block: "nearest" }); // Scroll to the highlighted item if necessary
        }
    });
}

