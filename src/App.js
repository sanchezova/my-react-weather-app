import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Weather-app">
        <Weather city="Seattle" />
      </div>
      <footer>
        <p>
          This project is coded by Ivana Pichova and is{" "}
          <a href="https://github.com/" target="_blank">
            open-sourced on Github
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
