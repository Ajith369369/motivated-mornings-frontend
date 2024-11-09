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
      </section>
    </>
  );
}

export default Header;
