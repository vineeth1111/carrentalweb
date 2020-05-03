import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./helpers/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home/> */}
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
