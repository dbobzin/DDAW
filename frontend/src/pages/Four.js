const pageTwo = {
  /* Pattern styles */
  h1: {
    textAlign: "center",
  },
  leftHalf: {
    backgroundColor: "white",
    float: "left",
    width: "50%",
    padding: "5px 5px 5px 5px",
  },
  rightHalf: {
    backgroundColor: "white",
    float: "left",
    width: "50%",
    padding: "5px 5px 5px 5px",
  },
  bodyStyles: {
    fontFamily: "sans-serif",
    width: "1000px",
    border: "4px solid #f71c17",
    boxShadow: "black",
    margin: "auto",
  },

  container: {
    display: "flex",
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
};

function Four() {
  return (
    <>
      <h1 style={pageTwo.h1}>Car wash reviews</h1>
      <div style={pageTwo.container}>
        <div style={pageTwo.leftHalf}>
          <h3>Saul Goodman</h3>

          <h4>Ceo &amp; Founder of Liberty Law</h4>
          <p>
            What a great location, I think that I will come back here again and
            again to wash my cadillac.
          </p>

          <h3>Walter White</h3>
          <h4>High School Teacher</h4>
          <p>
            This is better than the A1A car wash in town that Bogdan Wolynetz
            owns.
          </p>

          <h3>Bogdan Wolynetz</h3>
          <h4>Ceo of A1A LLC</h4>
          <p>
            I came here yesterday and found that my car wash is missing a lot of
            essential items.
          </p>

          <h3>Jesse Pinkman</h3>
          <h4>Customer</h4>
          <p>
            YO Yo yo! I came here yesterday and this joint is off the chain! I
            love it when I can wash my Chevy Monte Carlo with ease.
          </p>
        </div>

        <div style={pageTwo.rightHalf}>
          <h3>Hank Schrader</h3>
          <h4>DEA officer</h4>
          <p>
            I came here after my shift at the DEA. I'm impressed with the
            touchless technology and I'm going to purchase a plan right now!
          </p>

          <h3>Walter White Jr</h3>
          <h4>Student</h4>
          <p>
            My dad just got me a new car, and there's no place in town that
            cleans my car better.
          </p>

          <h3>Louis Corbett</h3>
          <h4>Student</h4>
          <p>
            I don't have a car but I came here with my friend. I like the
            overall quality of the car washing stations I just think the price
            of the payment plans are high.
          </p>

          <h3>John Lee Walden</h3>
          <h4>Race Car Driver</h4>
          <p>
            I came here with my 443 1868 Mustang race car and it did it's job.
          </p>
        </div>
      </div>
    </>
  );
}

export default Four;
