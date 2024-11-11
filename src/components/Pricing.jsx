import { faCheck, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <section id="trial" className="wave3">
        <div className="row">
          <div className="col-xs-0 col-md-2"></div>
          <div className="col-xs-12 col-md-8 my-5">
            <div className="text-center">
              <h2>Start with a free trial. Change your plan anytime.</h2>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <div className="pricing-item d-flex flex-column justify-content-center align-items-center p-5 bg-light">
                <h1>MoMo</h1>
                <p className="mb-4">$49/mo.</p>
                <p className="text-center">
                  Get the motivation and accountability you need to get real
                  work done.
                </p>
              </div>
              <div className="pricing-item d-flex flex-column justify-content-center align-items-center p-5 bg-light">
                <h1>MoMo Pro</h1>
                <p className="mb-4">$399/mo.</p>
                <p className="text-center">
                  Take it to the next level with your own personal productivity
                  coach.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn rounded-pill bg-dark text-light p-3 buttonFntWght">
                View Plans Details
              </button>
            </div>
          </div>
          <div className="col-xs-0 col-md-2"></div>
        </div>
      </section>
      <section id="complete" className="my-5">
        <div className="row my-5">
          <div className="col-xs-0 col-md-2"></div>
          <div className="col-xs-12 col-md-8 d-flex flex-wrap justify-content-center align-items-start">
            <img
              src="/src/assets/actually-complete.png"
              alt=""
              className="mx-5"
            />
            <div className="complete-div mx-5">
              <h1 className="buttonFntWght">Actually complete that project.</h1>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                placeat quidem vero, sit porro optio nam iure ipsa sint.
              </p>
              <p>
                <u>Learn More →</u>
              </p>
            </div>
          </div>
          <div className="col-xs-0 col-md-2"></div>
        </div>
      </section>
      <section id="secrets" className="wave4">
        <div className="row m-0 my-5 py-5">
          <div className="col-xs-0 col-md-2"></div>
          <div className="col-xs-12 col-md-3">
            <div className="px-5">
              <h6>FREE GUIDE</h6>
              <h2 className="buttonFntWght">8 Secrets To Doing Work That Matters </h2>
              <div className="py-3">
                <div className="d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faCheck} />
                  <p className="m-0 ms-3">Focus on what's important</p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faCheck} />
                  <p className="m-0 ms-3">Make massive progress</p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faCheck} />
                  <p className="m-0 ms-3">Actually get the work done</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center my-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control py-3 my-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control py-3 my-2"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="form-control py-3 my-2"
                />
              </div>
              <div className="d-flex justify-content-start align-items-center my-3">
                <button className="btn rounded-pill bg-dark text-light p-3">
                  <FontAwesomeIcon icon={faDownLong} className="me-2" />
                  DOWNLOAD THE GUIDE
                </button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-5 px-4">
            <img src="/src/assets/8-secrets.png" alt="" />
          </div>
          <div className="col-xs-0 col-md-2"></div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
