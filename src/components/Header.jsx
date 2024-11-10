import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
            Find out more about our Productivity Retreats
          </p>
        </section>
        <section id="navbar" className="mb-5">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                  <a
                    className="navbar-brand d-flex justify-content-center align-items-center"
                    href="#"
                  >
                    <img
                      src="/src/assets/actually-complete.png"
                      alt="Logo"
                      className="d-inline-block align-text-top"
                    />
                    <div className="ms-1">
                      <h4>MOTIVATED</h4>
                      <h6>mornings</h6>
                    </div>
                  </a>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2">
                      <li className="nav-item">
                        <a
                          className="nav-link text-dark"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-md-1"></div>
          </div>
        </section>
        <section id="actually my-5">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5 d-flex flex-column justify-content-center align-items-left px-5">
              <div className="px-5">
                <h1>Actually do the work.</h1>
                <p>
                  Accountability, community, and productivity coaching to help
                  you start and finish the work.
                </p>
                <div className="d-flex justify-content-start align-items-center">
                  <button className="btn rounded-pill bg-dark text-light">
                    See How It Works
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src="/src/assets/actually.png" alt="" />
            </div>
            <div className="col-md-1"></div>
          </div>
        </section>
        <section id="tired">
          <div className="row py-5 my-4">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <img src="/src/assets/tired.png" alt="" />
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center align-items-left px-5">
              <div className="px-5">
                <h1>Tired of not finishing that script?</h1>
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
                  <button className="btn rounded-pill bg-dark text-light">
                    Start Your Free Trial
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </section>
        <section id="better">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">
              <div className="px-5">
                <h1>There's a better way.</h1>
                <div className="py-5 ms-3">
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faXmark} className="bg-warning" />
                    <p className="m-0 ms-3">
                      Experiencing your habits transform
                    </p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faXmark} className="bg-warning" />
                    <p className="m-0 ms-3">
                      Accessing tools, people, and expertise
                    </p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <FontAwesomeIcon icon={faXmark} className="bg-warning" />
                    <p className="m-0 ms-3">Seeing your work move forward</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <button className="btn rounded-pill bg-dark text-light">
                    Start Your Free Trial
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div>
                <h1 className="text-center">
                  Get more done before 9am than you used to get done all day.
                </h1>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </section>
        {/* <svg viewBox="0 0 500 200">
          <path
            d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
            fill="#edc444"
          ></path>
        </svg> */}
        {/* <svg viewBox="0 0 500 800">
          <path
            d="M 0 250 C 300 420 250 90 500 100 L 500 0 L 0 0"
            fill="#edc444"
          ></path>
        </svg> */}
      </section>
    </>
  );
}

export default Header;
