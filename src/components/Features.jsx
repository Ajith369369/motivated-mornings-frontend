import "./Features.css";

function Features() {
  return (
    <>
      <section id="features" className="my-5">
        <div className="row mb-5">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="text-center px-5 mx-5">
              <h2 className="px-5">
                Motivated Mornings is a virtual coworking community proven to help
                you do the work.
              </h2>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center mb-4">
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img className="flex-img" src="/src/assets/morning.png" alt="" />
                <h6 className="my-2">Morning Kick-Off Calls</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img className="flex-img" src="/src/assets/virtual.png" alt="" />
                <h6 className="my-2">Virtual Coworking</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img className="flex-img" src="/src/assets/private.png" alt="" />
                <h6 className="my-2">Private Slack Group</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img
                  className="flex-img"
                  src="/src/assets/productivity.png"
                  alt=""
                />
                <h6 className="my-2">Productivity Coaching Sessions*</h6>
                <p className="m-0 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam quibusdam quae blanditiis ad eius repellendus.
                </p>
              </div>
              <div className="flex-items d-flex flex-column justify-content-center align-items-center m-3">
                <img className="flex-img" src="/src/assets/tailored.png" alt="" />
                <h6 className="my-2">Tailored Action Plans*</h6>
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
          <div className="col-md-1"></div>
        </div>
      </section>
    </>
  );
}

export default Features;
