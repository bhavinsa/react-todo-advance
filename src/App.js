import React, { Component } from "react";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import About from "./About";
import Header from "./Header";

class App extends Component {
  parentEvent = () => {
    alert("Parent event called!!");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            // component={Home}
            render={props => (
              <Home {...props} name={"bhavin"} onChildCall={this.parentEvent}>
                <div className="p-3 mb-2 bg-dark text-white">
                  Hello From App
                </div>
              </Home>
            )}
          />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
