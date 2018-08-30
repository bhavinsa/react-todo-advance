import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";

class App extends Component {
  parentEvent = () => {
    alert("Parent event called!!");
  };

  render() {
    return (
      <div className="App">
        {/* add multiple Component */}
        <About />
        <div className="p-3 mb-2 bg-info text-white">
          {/* pass html and value in Component, that render in home Component */}
          <Home value={{ name: "bhavin" }} onChildCall={this.parentEvent}>
            <div className="p-3 mb-2 bg-dark text-white">Hello From App</div>
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
