import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Travel
          destination="Montpellier"
          pays="France"
          distance="800 km"
          image="https://media.routard.com/image/45/6/montpellier-place-comedie.1491456.jpg"
        />
        <Travel
          destination="Sète"
          pays="France"
          distance="840 km"
          image="http://www.cm-immobilier-balaruc.fr/wp-content/uploads/2011/02/2521979711.jpg"
        />
      </div>
    );
  }
}

export default App;