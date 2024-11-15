import "./Features.css";

function Features() {
  return (
    <>
      <section id="features" className="my-5">
        <div className="row mb-5">
          <div className="col-xs-0 col-md-1"></div>
          <div className="col-xs-12 col-md-10">
            <div className="text-center px-5 mx-5">
              <h2 className="px-5 buttonFntWght">
                Motivated Mornings is a virtual coworking community proven to help
                you do the work.
              </h2>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center mb-4">
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img className="flex-img" src="/assets/morning.png" alt="" />
                <h6 className="my-4">Morning Kick-Off Calls</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img className="flex-img" src="/assets/virtual.png" alt="" />
                <h6 className="my-4">Virtual Coworking</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img className="flex-img" src="/assets/private.png" alt="" />
                <h6 className="my-4">Private Slack Group</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img
                  className="flex-img"
                  src="/assets/productivity.png"
                  alt=""
                />
                <h6 className="my-4">Productivity Coaching Sessions*</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img className="flex-img" src="/assets/tailored.png" alt="" />
                <h6 className="my-4">Tailored Action Plans*</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
            </div>
            <p className="m-0 mb-4 text-center">
              *Available exclusively with the Pro plan
            </p>
          </div>
          <div className="col-xs-0 col-md-1"></div>
        </div>
      </section>
    </>
  );
}

export default Features;
