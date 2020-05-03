import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Layout";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./helpers/Routes";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Header />
        <Routes />
        {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div> */}
        {/* <Switch>
          <Route Link ={}></Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
