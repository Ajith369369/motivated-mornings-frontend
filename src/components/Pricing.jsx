import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <section id="trial">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 my-5">
            <div className="text-center">
              <h2>Start with a free trial. Change your plan anytime.</h2>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn rounded-pill bg-dark text-light">
                View Plans Details
              </button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </section>
      <section id="complete">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex flex-wrap justify-content-center align-items-center">
            <img src="/src/assets/actually-complete.png" alt="" />
            <div className="complete-div">
              <h1>Actually complete that project.</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut placeat quidem vero, sit porro optio nam iure ipsa sint.</p>
              <p>Lorem ipsum dolor, sit</p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </section>
      <section id="secrets">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5"></div>
          <div className="col-md-5">
            <img src="/src/assets/8-secrets.png" alt="" />
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
