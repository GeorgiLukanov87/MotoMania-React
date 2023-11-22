import React, { useState } from 'react';
import style from '../LocationSearch/LocationSearch.module.css';
import { useParams } from 'react-router-dom';

const WeatherComponent = () => {
    const { cityName } = useParams();

    const api_key = 'e9a97357148479e6439c5ba4333e96ee';
    const weather_url = 'https://api.openweathermap.org/data/2.5/weather?q=';

    const [city, setCity] = useState(cityName);
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherAndForecast = async () => {

        try {
            const response = await fetch(`${weather_url}${cityName}&appid=${api_key}`);
            const data = await response.json();
            console.log(data)

            if (Object.keys(data).length <= 2) {
                alert("City not found!");
                setCity('')
                return;
            }

            const weatherInfo = {
                city: city,
                temperature: (data.main.temp - 273.15).toFixed(2),
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                wind: data.wind.speed,
                clouds: data.clouds.all,
                coordinates: {
                    lat: data.coord.lat,
                    lon: data.coord.lon,
                },
            };

            setWeatherData(weatherInfo);

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === '') {
            alert('Enter city name!')
            return;
        }
        fetchWeatherAndForecast();
    };

    return (
        <div className={style.weatherContainer}>
            <form onSubmit={handleSubmit} className={style.formContainer}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Check Location</button>
            </form>

            {weatherData && (
                <div className={style.weatherInfo}>
                    <div className={style.mapContainer}>

                        <iframe className={style.iframeWrapper}
                            title="map"
                            width="100%"
                            height="400px"
                            frameBorder=""
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src={`https://www.openstreetmap.org/export/embed.html?bbox=${weatherData.coordinates.lon - 1},${weatherData.coordinates.lat - 1},${weatherData.coordinates.lon + 1},${weatherData.coordinates.lat + 1}&layer=mapnik`}
                        ></iframe>
                        <div
                            className={style.marker}
                            style={{
                                position: 'absolute',
                                top: '45%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        ></div>
                    </div>

                    <h2>Weather Information for {weatherData.city} <img
                        src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
                        alt={weatherData.description}
                    /></h2>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Description: {weatherData.description}</p>
                    <p>Wind Speed: {weatherData.wind} m/s</p>
                    <p>Cloudiness: {weatherData.clouds}%</p>
                </div>
            )}
        </div>

    );
};

export default WeatherComponent;