import React from "react";
import pulser from "../../Asset/img/pulser160.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="product-item">
        <div className="products-details">
          <h1>Pulsar NS160 Specs, Features and Price</h1>
          <p>
            The Bajaj Pulsar NS160 is powered by a 160.3 cc air-cooled engine
            which produces of power. It has a fuel tank of 12 L and a . The
            Bajaj Pulsar NS160 starts at Rs 1.19 Lakh Rs (ex-showroom, Delhi).
            It is available in one variants.
          </p>
          <button className="btn">See details</button>
        </div>
        <div>
          <img src={pulser} alt="" />
        </div>
      </div>
      <div>
          <h1>Customer Review</h1>
      </div>
    </div>
  );
};

export default Home;
