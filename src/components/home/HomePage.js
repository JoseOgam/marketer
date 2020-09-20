import React from "react";
import "./Home.css";
import Kienyej from "../images/kienyej.jpg";
import Layers from "../images/layers.jpeg";
import Kienyeji from "../images/kienyeji.jpg";

const HomePage = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="image" src={Kienyej} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Layers} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Kienyeji} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="false"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
