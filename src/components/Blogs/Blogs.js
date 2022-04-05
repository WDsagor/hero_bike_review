import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs page</h1>
      <div className="blogs-area">
        <div className="blogs-info">
          <h3>What is context api ?</h3>
          <p>
            The Context API is a React structure that enables you to exchange
            unique details and assists in solving data passing from all levels
            of your application. Provider is a component that as it's names
            suggests provides the state to its children. It will hold the
            "store" and be the parent of all the components that might need that
            store.
          </p>
        </div>
        <div className="blogs-info">
          <h3>What is Semanti tag ?</h3>
          <p>
            A semantic element clearly describes its meaning to both the browser
            and the developer catch eassly. <br />Example:
            <small>
                
              <ul>
                <li>header</li>
                <li>nav</li>
                <li>main</li>
                <li>article</li>
                <li>aside</li>
                <li>details</li>
                <li>section</li>
                <li>summary</li>
                <li>time</li>
              </ul>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
