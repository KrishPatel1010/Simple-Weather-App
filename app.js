const url = "http://api.weatherapi.com/v1/current.json?key=da69256eeede4b40a12145258243110&q=London&aqi=yes"

const getWeatherData = async () => {
    const data = await fetch(url);
    const temp = await data.json();
    console.log(temp.location.name);
}

getWeatherData();