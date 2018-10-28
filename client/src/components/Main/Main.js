import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import Jumbotron from "../Jumbotron";
import Articles from "../Articles";

const App = () =>
  <div>
    <Nav />
    <Jumbotron />
    <div>
      <Articles />
    </div>
  </div>;

export default App;