import "./Footer.css";

function Footer() {
  return (
    <>
      <section id="footer" className="bg-dark mt-5 py-5">
        <div>
          <h3 className="text-light">Questions? Let's Talk</h3>
          <p className="text-light">We'll help you determine if Motivated Mornings is the right fit for you and answer any of your questions.</p>
          <button className="btn rounded-pill bg-warning">Let's Talk</button>
          <div></div>
          <div>
            <p className="text-light">Email: hello@motivatedmornings.work</p>
            <p className="text-light">© 2020 Motivated Mornings, Inc. All rights reserved. Site by Knapsack.</p>
            <p className="text-light">guidelines privacy terms members</p>
        </div>
          <div>
          <button className="btn rounded-pill bg-warning">Help</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer