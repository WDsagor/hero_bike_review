import React from "react";
import pulser from "../../Asset/img/pulser160.png";
import useReview from "../../hooks/useReview";
import Comment from "../Comment/Comment";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview();
  const threeComments = reviews.splice(0, 3)
  console.log(threeComments);
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
      <div className="customer-reviews">
          <h1>Customer Review({threeComments.length})</h1>
          <div className="commtes-area">
            {
              threeComments.map(comment => <Comment
              key= {comment.id}
              comment={comment}
              ></Comment>)
            }
          </div>
          <button className="btn"> See all reviews</button>
      </div>
    </div>
  );
};

export default Home;
