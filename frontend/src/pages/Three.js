function Three() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="./img/13.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header text-left">
                <p>About Us</p>
                <h2>Dirty Deeds Auto Wash </h2>
              </div>
              <div className="about-content">
                <p>
                  Built in 1954 and owned and operated previously by William
                  Johnson III. William had a son John, who took over the
                  business until 2019 when Mike had purchased the building from
                  him. Recently the car wash has added a touchless technology
                  that utilizes a payment plan if you wanted it (to save money).
                  This payment plan is explained in the Price tab of the
                  website. Below is the amenities available at this location:
                </p>
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i>Touchless technology
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Vacuum cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Coin Machine
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Self wash Stations
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Dryer passes
                  </li>
                </ul>
                <a className="btn btn-custom" href="/Two">
                  Learn More about plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Three;
