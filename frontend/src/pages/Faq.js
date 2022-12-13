function Faq() {
  return (
    <>
      <h1 style={faqStyles.h1}>FAQ</h1>
      <h3 style={faqStyles.h1}>Video that explains the app</h3>
      <div style={faqStyles.videoCenter}>
        <iframe
          display="block"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/llQJxq-_Qp8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h3 style={faqStyles.h1}>Video summary:</h3>
      <h4>
        Thank you for your monthly wash pass purchase. Your pass includes 5-8
        washes per month for a single vehicle depending on the wash pass chosen.
        To ADD A VEHICLE to your plan, please open your app, go to "My Washes",
        open your pass, select "Vehicles" at the top middle, and "Add Vehicle".
        Passes automatically renew each month. Cancel/suspend your pass anytime
        in the app.
      </h4>
      <div style={faqStyles.h1}>
        <div style={faqStyles.leftHalf}>
          <h1>iPhone Users</h1>
          <p>Download the iPhone app here.</p>
          <a href="https://apps.apple.com/us/app/dirty-deeds-auto-wash/id1601297030">
            <button style={faqStyles.phoneButtons}>Iphone App</button>
          </a>
        </div>

        <div style={faqStyles.leftHalf}>
          <h1>Android Users </h1>
          <p>Download the Android app here.</p>
          <a href="https://play.google.com/store/apps/details?id=com.dencar.sancsoft.dencar.dirtydeeds&pli=1">
            <button style={faqStyles.phoneButtons}>Android App</button>
          </a>
        </div>
      </div>
      <h1 style={faqStyles.h1}>Need help?</h1>
      <h4 style={faqStyles.h1}>
        Email us at{" "}
        <a href="mailto:realfast19@yahoo.com">realfast19@yahoo.com</a> or call
        us at 217-417-1919 with any questions or concerns.
      </h4>
      &nbsp; &nbsp; &nbsp;
      <h1 style={faqStyles.h1}>Frequently Asked Questions</h1>
      <div style={faqStyles.leftHalf}>
        <h2>What kind of payment plans are there? </h2>
        <h5>There are many plans available just look at the plans table.</h5>
        <h2>How often can I buy a pass? </h2>
        <h5>When your pass expires you can purchase another one.</h5>
        <h2>How many plans are there? </h2>
        <h5>4 different plans all ranging in different items included.</h5>
        <h2>How long does it take to go through the car wash? </h2>
        <h5>5 minutes.</h5>
      </div>
      <div style={faqStyles.rightHalf}>
        <h2>What are the hours for the car wash? </h2>
        <h5>car wash is open 24 hours</h5>
        <h2>Do I have to use the app? </h2>
        <h5>
          The app is for the touchless car wash system, we also have self wash
          stations.
        </h5>
        <h2>Do you have ceramic options for self wash? </h2>
        <h5>
          No we do not, we have a wax option. If you want ceramic you need to go
          through the car wash via payment plan or individual purchase of a
          wash.
        </h5>
        <h2>When is peak time? </h2>
        <h5>
          It is highly dependent on weather, but peak time summer is 2pm. Peak
          time on a nicer winter day 5pm right after work rush.
        </h5>
      </div>
    </>
  );
}

export default Faq;

const faqStyles = {
  h1: {
    textAlign: "center",
  },
  videoCenter: {
    textAlign: "center",
  },
  leftHalf: {
    backgroundColor: "white",
    float: "left",
    width: "50%",
    padding: "5px 15px 5px 5px",
  },
  rightHalf: {
    backgroundColor: "white",
    float: "right",
    width: "50%",
    padding: "5px 5px 5px 5px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  phoneButtons: {
    width: "25%",
    color: "black",
    background: "#1aac83",
    boxShadow: "inset 0 0 0 0 #202c45",
  },
};
