import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <section id="trial">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div>
              <div></div>
              <div></div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn rounded-pill">View Plans Details</button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </section>
      <section id="complete">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img src="/src/assets/actually-complete.png" alt="" />
            <div></div>
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
