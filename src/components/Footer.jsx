import "./Footer.css";

function Footer() {
  return (
    <>
      <section id="footer" className="bg-dark mt-5 py-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-light">Questions? Let's Talk</h3>
          <p className="text-light w-50 text-center">
            We'll help you determine if Motivated Mornings is the right fit for
            you and answer any of your questions.
          </p>
          <button className="btn rounded-pill bg-warning">Let's Talk</button>
          <div></div>
          <div>
            <p className="text-light text-center mb-1">
              Email: hello@motivatedmornings.work
            </p>
            <p className="text-light text-center mb-1">
              © 2020 Motivated Mornings, Inc. All rights reserved. Site by
              Knapsack.
            </p>
            <p className="text-light text-center mb-1">
              guidelines privacy terms members
            </p>
          </div>
          
        </div>
        <div className="d-flex justify-content-end align-items-center">
            <button className="btn rounded-pill bg-warning me-4">Help</button>
          </div>
      </section>
    </>
  );
}

export default Footer;
