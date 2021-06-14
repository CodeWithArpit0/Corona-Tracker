import logo from  "../../../images/home/logo.png";

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
<a href="#all-cases-section" id="explore-btn">Explore More</a>

        <div id="header" className="flex">
          <div id="heading-box" className="flex">
            <h1 id="covid-status-heading">
              <span style={{ fontSize: 5.4 + "em" }}>C<img src={logo} alt="logo" style={{width: .7+ "em", height: .7+ "em"}}/>ronavirus</span>
              <br />
              Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered <br/>coronavirus.
Most people who fall sick with COVID-19 will experience mild<br/>to moderate symptoms and recover without special treatment.
            </h1>
          </div>

          <div id="global-status-container">
            <div id="content-box" className="flex">
              <div id="head">
                <h3>Total confirmed cases</h3>
              </div>

              <div id="corona-status">
                <h1>{confirmedCases}</h1>
              </div>
              {/*<div id="loaderBox">
                  <div className="loader" id="white"></div>
  </div>*/}
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
