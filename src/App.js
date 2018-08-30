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
        <About />
        <div className="p-3 mb-2 bg-info text-white">
          <Home value={{ name: "bhavin" }} onChildCall={this.parentEvent}>
            <div className="p-3 mb-2 bg-dark text-white">Hello From App</div>
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
