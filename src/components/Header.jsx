import {
  faCircleCheck,
  faPlay,
  faQuoteLeft,
  faQuoteRight,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

function Header() {
  return (
    <>
      <section id="header">
        <section
          id="find"
          className="bg-dark py-2 d-flex justify-content-center align-items-center"
        >
          <p className="text-light m-0">
            Find out more about our Productivity Retreats →
          </p>
        </section>
        <div className="wave1">
          <section id="navbar" className="mb-4">
            <div className="row">
              <div className="col-xs-0 col-md-1"></div>
              <div className="col-xs-12 col-md-10 px-5">
                <nav className="navbar px-5">
                  <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center">
                    <a
                      className="navbar-brand d-flex justify-content-center align-items-center"
                      href="#"
                    >
                      <img
                        src="../assets/actually-complete.png"
                        alt="Logo"
                        className="d-inline-block align-text-top"
                      />
                      <div className="logo-heading ms-1">
                        <h4 className="m-0">MOTIVATED</h4>
                        <h6 className="m-0">mornings</h6>
                      </div>
                    </a>
                    <div
                      className="d-flex flex-wrap justify-content-end align-items-center"
                      id="navbarSupportedContent"
                    >
                      <ul className="m-0 d-flex flex-wrap justify-content-evenly align-items-center">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Who It's For
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            FAQ
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <FontAwesomeIcon icon={faUser} />
                          </a>
                        </li>
                      </ul>
                      <button className="btn rounded-pill bg-dark text-light p-2 ms-3 buttonFntWght">
                        Start Your Free Trial
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xs-0 col-md-1"></div>
            </div>
          </section>
          <section id="actually" className="my-5">
            <div className="row">
              <div className="col-xs-0 col-md-1"></div>
              <div className="col-xs-6 col-md-5 d-flex flex-column justify-content-center align-items-left px-5">
                <div className="px-5">
                  <h1>Actually do the work.</h1>
                  <p>
                    Accountability, community, and productivity coaching to help
                    you start and finish the work.
                  </p>
                  <div className="d-flex justify-content-start align-items-center">
                    <button className="btn rounded-pill bg-dark text-light p-3 buttonFntWght">
                      <FontAwesomeIcon icon={faPlay} className="me-2" />
                      See How It Works
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-5 d-flex justify-content-center align-items-center py-3">
                <img src="/src/assets/actually.png" alt="" />
              </div>
              <div className="col-xs-0 col-md-1"></div>
            </div>
          </section>
        </div>
        <section id="tired">
          <div className="row py-5 my-4">
            <div className="col-xs-0 col-md-1"></div>
            <div className="col-xs-6 col-md-5 d-flex justify-content-center align-items-center py-3">
              <img src="/src/assets/tired.png" alt="" />
            </div>
            <div className="col-xs-6 col-md-5 d-flex flex-column justify-content-center align-items-left px-5">
              <div className="px-5">
                <h1 className="buttonFntWght">Tired of not finishing that script?</h1>
                <div className="py-5 ms-3">
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faXmark} className="bg-warning" />
                    <p className="m-0 ms-3">Hitting snooze</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faXmark} className="bg-warning" />
                    <p className="m-0 ms-3">Endless procrastinating</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faXmark} className="bg-warning" />
                    <p className="m-0 ms-3">Never finding the time</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faXmark} className="bg-warning" />
                    <p className="m-0 ms-3">Missing goals</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <button className="btn rounded-pill bg-dark text-light p-3 buttonFntWght">
                    Start Your Free Trial
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xs-0 col-md-1"></div>
          </div>
        </section>
        <section id="better" className="wave2 my-5">
          <div className="row my-5 py-5">
            <div className="col-xs-0 col-md-2"></div>
            <div className="col-xs-6 col-md-4">
              <div className="ps-5">
                <h2 className="buttonFntWght">There's a better way.</h2>
                <div className="py-4 ms-3">
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className="m-0 ms-3">
                      Experiencing your habits transform
                    </p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className="m-0 ms-3">
                      Accessing tools, people, and expertise
                    </p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className="m-0 ms-3">Seeing your work move forward</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <button className="btn rounded-pill bg-dark text-light p-3 buttonFntWght">
                    Start Your Free Trial
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xs-0 col-md-2"></div>
            <div className="col-xs-6 col-md-3 d-flex justify-content-center align-items-center py-3">
              <div className="px-3">
                <h2 className="text-center buttonFntWght">
                  <FontAwesomeIcon icon={faQuoteLeft} className="quotes me-2" />
                  Get more done before 9am than you used to get done all day.
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="quotes ms-2"
                  />
                </h2>
              </div>
            </div>
            <div className="col-xs-0 col-md-1"></div>
          </div>
        </section>

        {/* <svg viewBox="0 0 500 800">
          <path
            d="M 0 250 C 300 420 250 90 500 100 L 500 0 L 0 0"
            fill="#edc444"
          ></path>
        </svg> */}
      </section>
      {/* <svg className="curve top-curve" viewBox="0 0 500 200">
        <path
          d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
          fill="#edc444"
        ></path>
      </svg> */}
    </>
  );
}

export default Header;
