import "./Header.css";

function Header() {
  return (
    <>
      <section id="header">
        <section id="navbar"></section>
        <section id="actually">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5"></div>
            <div className="col-md-5"></div>
            <div className="col-md-1"></div>
          </div>
        </section>
        <section id="tired">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5"></div>
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
        <svg viewBox="0 0 500 800">
          <path
            d="M 0 250 C 300 420 250 90 500 100 L 500 0 L 0 0"
            fill="#edc444"
          ></path>
        </svg>
      </section>
    </>
  );
}

export default Header;
