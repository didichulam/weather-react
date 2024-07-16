import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city"
              required
              className="search-input-space"
              id="search-input-space"
            />
            <input
              type="submit"
              value="Search"
              className="search-button"
              id="search-button"
            />
          </form>
        </header>
        <main>
          <div className="weather-information">
            <div className="city-weather-information">
              <h1 id="displayed-city">Displayed City</h1>

              <p className="weather-details">
                <span id="time"></span>
                <span id="weather-condition"></span>
                <br />
                Humidity: <span classNAme="humidity-value" id="humidity"></span>
                , Wind:{" "}
                <span classNAme="wind-speed-value" id="wind-speed"></span>
              </p>
            </div>
            <div classNAme="temperature-information">
              <div id="weather-icon"></div>
              <div className="temperature-value" id="temperature"></div>
              <div className="temperature-unit">°C</div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast">
            <div className="weather-forecast-per-day">
              <div className="weather-forecast-day">Thu</div>
              <div>
                <img
                  src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
                  alt=""
                  width="42px"
                />
              </div>
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">18°</span>
                <span className="weather-forecast-temperature-min">12°</span>
              </div>
            </div>
          </div>
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/didichulam"
            target="_blank"
            rel="noreferrer"
          >
            Chimdinma
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/didichulam/week7-homework-git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dinmas-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
