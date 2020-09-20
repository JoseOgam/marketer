import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import HomePage from "./home/HomePage";
import ContactPage from "./contact/ContactPage";
import About from "./about/AboutPage";
import Services from "./services/servicesPage";
import PageNotFound from "./PageNotFound";
import Header from "./common/Header";
import Footer from "./common/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
