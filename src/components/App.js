import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import ContactPage from "./contact/ContactPage";
import Header from "./common/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  );
};

export default App;
