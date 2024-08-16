import { useState } from "react";
import './App.css';

const api= {
  key: "your-api-key",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [search, setSearch] = useState("");
  const [weather,setweather]=useState({});

  const searchPressed=()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(results=>{
      setweather(results);

    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {/*header*/}
        <h1>Weather App</h1>

        {/*Seatch box */}
        <div className="searchbox">
        <input type="text" placeholder="Search City" onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={searchPressed}>search</button>
        </div>
        
        
        
        {weather.name && weather.sys && (
          <>
            <p>{weather.name}, {weather.sys.country}</p>
            {weather.main && <p>{Math.round(weather.main.temp)}°C</p>}
            {weather.weather && weather.weather[0] && (
              <>
                <p>Condition: {weather.weather[0].main}</p>
                <p>Description: {weather.weather[0].description}</p>
              </>
            )}
            {weather.main && <p>Humidity: {weather.main.humidity}%</p>}
            {weather.wind && <p>Wind Speed: {weather.wind.speed} m/s</p>}
          </>
        )}


      </header>
    </div>
  );
}

export default App;
