import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <section id="footer" className="bg-dark pt-5 pb-2">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-light my-3">Questions? Let's Talk</h3>
            <p className="text-light w-50 text-center my-4">
              We'll help you determine if Motivated Mornings is the right fit
              for you and answer any of your questions.
            </p>
            <button className="btn rounded-pill bg-warning p-4">
              Let's Talk
            </button>
            <div className="d-flex flex-wrap justify-content-center align-items-center my-4 social-icons">
              <FontAwesomeIcon icon={faInstagram} className="mx-2" />
              <FontAwesomeIcon icon={faFacebookF} className="mx-2" />
              <FontAwesomeIcon icon={faLinkedinIn} className="mx-2" />
            </div>
            <div className="mt-5">
              <p className="text-light text-center mb-1">
                Email: hello@motivatedmornings.work
              </p>
              <p className="text-light text-center mb-1">
                © 2020 Motivated Mornings, Inc. All rights reserved. Site by
                Knapsack.
              </p>
              <p className="text-light text-center mb-1">
                <u>guidelines</u> <u>privacy</u> <u>terms</u> <u>members</u>
              </p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <button className="btn rounded-pill bg-warning me-4"><FontAwesomeIcon icon={faCircleQuestion} className="me-2"/>Help</button>
        </div>
      </section>
    </>
  );
}

export default Footer;
