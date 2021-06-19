import logo from "../../../images/home/logo.png";

import Fade from "react-reveal/Fade";
const Header = (props) => {
  // A utility function to add the commas in the number
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let confirmedCases = numberWithCommas(
    props.covidData.data.Global.TotalConfirmed
  );
  return (
    <>
        <div className="bubble-2 bubble"></div>
      {/*Explore more button*/}
      <a href="#all-cases-section" id="explore-btn">
        Explore More
      </a>
      <div id="header" className="flex">
        <Fade left>
          <div id="heading-box">
            <h1 id="covid-status-heading">
              C
              <img
                src={logo}
                alt="logo"
                style={{ width: 0.7 + "em", height: 0.7 + "em" }}
              />
              ronavirus
            </h1>
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus. Most people who fall sick with
              COVID-19 will experience mild to moderate symptoms and recover
              without special treatment.
            </p>
          </div>
        </Fade>

        <Fade right>
          <div id="global-status-container">
            <div id="content-box" className="flex">
              <div id="head">
                <h3>Total confirmed cases</h3>
              </div>

              <div id="corona-status">
                <h1>{confirmedCases}</h1>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Header;
