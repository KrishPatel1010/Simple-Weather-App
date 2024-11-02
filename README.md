# 🌦️ Weatherly

Weatherly is a sleek, easy-to-use weather application that lets you search for cities worldwide and provides real-time weather information, including temperature, humidity, and general weather conditions.

![Weatherly Preview](Assets/weatherly.png) <!-- Optional: Add a screenshot of your app -->

## 🌟 Features
- **Autocomplete City Search**: Type to see city suggestions and select with a click or keyboard.
- **Real-Time Weather Data**: Get current weather details for cities worldwide.
- **Clean UI**: Responsive, modern, and user-friendly design.

---

## 🚀 Getting Started

### 🔧 Prerequisites
- **API Key** from [WeatherAPI](https://www.weatherapi.com/)

### 📂 Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Weatherly.git
    cd Weatherly
    ```

2. **Open `index.html`** in your browser, or serve the project using Live Server in VS Code for a better experience.

---

### 🔑 API Key Setup

To fetch real-time weather data, you'll need an API key from [WeatherAPI](https://www.weatherapi.com/).

1. **Sign up** on WeatherAPI and obtain a free API key.
2. In `app.js`, replace `"your_api_key_here"` with your actual API key:
    ```javascript
    const WEATHER_API_KEY = "your_api_key_here";
    ```

---

### 🧩 Usage

1. **Search for a City**: Begin typing in the search box to see an autocomplete dropdown of matching cities.
2. **Select a City**: You can either click on a city name from the dropdown or use the arrow keys and press Enter to select.
3. **View Weather Data**: The app will display real-time weather details, including temperature (in °C and °F), humidity, and the current weather condition for the selected city.

---

### 🌍 Deployment

To deploy Weatherly on GitHub Pages:

1. Go to **Settings** > **Pages** in your GitHub repository.
2. Under "Branch," select the `main` branch and set the directory to `/root`.
3. Click **Save** to deploy the app.

---

### 📝 License

This project is licensed under the **MIT License**.

---

### 👥 Acknowledgments

- **[WeatherAPI](https://www.weatherapi.com/)** for providing weather data.
- **Font Awesome** for the fantastic icons used in the UI.

---

Happy coding! 🌦️
