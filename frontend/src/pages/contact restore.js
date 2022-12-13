const cardStyles = {
  container: {
    display: "flex",
    height: 100,
    width: 400,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    height: 20,
    width: 20,
    borderRadius: "50%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
  },
};

function Five() {
  return (
    <>
      <div style={cardStyles.container}>
        <span style={cardStyles.profilePicture}>D</span>
        <div style={cardStyles.bio}>
          <p style={cardStyles.userName}>Desmond Nyamador</p>
          <p>I just learned an easy way to style React Components</p>
        </div>
      </div>

      <form
        onSubmit="this.handleSubmit"
        method="POST"
        action="https://docs.google.com/forms/d/158u79nKqhFhUR3v8qJDFJ-6CSvZZdpbmwQou4NBz_fM/formResponse"
      >
        <input
          className="input"
          type="text"
          name="entry.540213316"
          placeholder="Name"
        />
        <button class="button" type="submit">
          Submit
        </button>
      </form>

      <div className="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-header text-left">
                <p>Washing Points</p>
                <h2>Car Washing & Care Points</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt"></i>
                    <div className="location-text">
                      <h3>Car Washing Point</h3>
                      <p>123 Street, New York, USA</p>
                      <p>
                        <strong>Call:</strong>+012 345 6789
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt"></i>
                    <div className="location-text">
                      <h3>Car Washing Point</h3>
                      <p>123 Street, New York, USA</p>
                      <p>
                        <strong>Call:</strong>+012 345 6789
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt"></i>
                    <div className="location-text">
                      <h3>Car Washing Point</h3>
                      <p>123 Street, New York, USA</p>
                      <p>
                        <strong>Call:</strong>+012 345 6789
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt"></i>
                    <div className="location-text">
                      <h3>Car Washing Point</h3>
                      <p>123 Street, New York, USA</p>
                      <p>
                        <strong>Call:</strong>+012 345 6789
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="location-form">
                <h3>Request for a car wash</h3>
                <form>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn btn-custom" type="submit">
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Five;
