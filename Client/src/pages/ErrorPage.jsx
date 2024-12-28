import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error_page">
      <div className="error_page_text">
        <center>
        <p>Error <span> 404</span></p>
        <p>It seems the page you're looking for does not exist on Black <span>Essentials.</span></p>
        </center>
      </div>


        <div class="bar">
          <div class="ball"></div>
        </div>


        <div className="error_page_redirect">
          <p>Go back. <span><Link to="/">Home</Link></span></p>
        </div>
    </section>
  );
};

export default ErrorPage;
