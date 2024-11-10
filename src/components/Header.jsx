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
        <section id="navbar">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="/src/assets/actually-complete.png"
                  alt="Logo"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                <div>
                  <h2>MOTIVATED</h2>
                  <h6>mornings</h6>
                </div>
              </a>
            </div>
          </nav>
        </section>
        <section id="actually">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5"></div>
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
            <div className="col-md-5"></div>
            <div className="col-md-1"></div>
          </div>
        </section>
        <section id="better">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4"></div>
            <div className="col-md-2"></div>
            <div className="col-md-4"></div>
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
