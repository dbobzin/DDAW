import axios from "axios";
import queryString from "query-string";

function Five() {
  //Inside Class
  const myRequest = (url) => {
    let response;
    try {
      response = axios.post(url, null, null);
    } catch (e) {
      response = e;
    }
    console.log(response);
  };
  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    const data = {
      ...this.state,
    };
    const id = "1FAIpQLSe0yQWY1JWwvKr0bo9LIf-jgzLbq7geUPDp2bX-LspvlvRP0A"; //YOUR FORM ID
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/" + id + "/formResponse";
    const queryString = require("query-string");
    const q = queryString.stringifyUrl({
      url: formUrl,
      query: data,
    });
    this.myRequest(q);
  };
  //Render and return the following element from class
  return (
    <>
      {/* <form onSubmit="this.handleSubmit">
        <input
          className="input"
          type="text"
          name="entry.540213316"
          placeholder="Name"
          onChange="this.handleChange"
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form> */}

      <div className="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-header text-left">
                <h2 style={pageFive.h2}>Car Washing & Care Points</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt"></i>
                    <div className="location-text">
                      <h3>Dirty Deeds Auto Wash</h3>
                      <p>104 Wexford Ct, Normal IL 61761</p>
                      <p>
                        <strong>Call:</strong>(309) 451-9246
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="location-item">
                    <i className="fa fa-map-marker-alt"></i>
                    <div className="location-text">
                      <h3>Zal's Crossroads</h3>
                      <p>104 W Wabash Ave, Forrest, IL 61741</p>
                      <p>
                        <strong>Call:</strong>(309) 451-9246
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="location-form">
                {/* Start of form  */}
                <h3>Contact</h3>
                <form
                  onSubmit="this.handleSubmit"
                  method="POST"
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdwFHF8Au88AV0P5kXHtqErPJvp0DNNs_NrPlWgQhmaYVNG6w/formResponse"
                >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      name="entry.66147240"
                      placeholder="Name"
                      required="required"
                      onChange="this.handleChange"
                    />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      name="entry.2075745005"
                      placeholder="Email"
                      required="required"
                      onChange="this.handleChange"
                    />
                  </div>

                  <div className="control-group">
                    <input
                      className="form-control"
                      type="Phone"
                      name="entry.1414753300"
                      placeholder="Phone Number"
                      required="required"
                      onChange="this.handleChange"
                    />
                  </div>

                  <div className="control-group">
                    <input
                      className="form-control"
                      type="Query"
                      name="entry.442589715"
                      placeholder="Query"
                      required="required"
                      onChange="this.handleChange"
                    />
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

      <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <h2 style={pageFive.h2}>Our Owners and Operators</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/9.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Mike and Wendi Zalaker</h2>
                  <p>Owners</p>
                  <div className="team-social">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/me.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Dustin Bobzin</h2>
                  <p>Web Developer</p>
                  <div className="team-social">
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const pageFive = {
  h2: {
    color: "#202c45",
    fontSize: "45px",
    fontWeight: "bold",
    fontFamily: "barlow, sans-serif",
    alignItems: "center",
  },
};
export default Five;
