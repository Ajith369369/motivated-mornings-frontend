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
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <div className="pricing-item d-flex flex-column justify-content-center align-items-center p-5">
                <h1>MoMo</h1>
                <h2 className="mb-4">$49/mo.</h2>
                <p className="text-center">
                  Get the motivation and accountability you need to get real
                  work done.
                </p>
              </div>
              <div className="pricing-item d-flex flex-column justify-content-center align-items-center p-5">
                <h1>MoMo Pro</h1>
                <h2 className="mb-4">$399/mo.</h2>
                <p className="text-center">
                  Take it to the next level with your own personal productivity
                  coach.
                </p>
              </div>
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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                placeat quidem vero, sit porro optio nam iure ipsa sint.
              </p>
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
