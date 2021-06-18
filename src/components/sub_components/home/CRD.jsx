import LiveIcon from "@material-ui/icons/LiveTvOutlined";
import Globe from "@material-ui/icons/LanguageOutlined";
import DownArrow from "@material-ui/icons/ExpandMoreOutlined";

// Importing Card
import Card from "./Card";

const CRD = (props) => {
  // Mentioning the cases
  const confirmCases = props.covidData.data.Global.TotalConfirmed;
  const recoveredCases = props.covidData.data.Global.TotalRecovered;
  const deathCases = props.covidData.data.Global.TotalDeaths;

  const showCountries = () => {
    const countryBox = document.getElementById("country-list");
    if (countryBox.className === "collapse") {
      countryBox.style.display = "block";
      countryBox.removeAttribute("class");
      countryBox.setAttribute("class", "toggle");
    } else if (countryBox.className === "toggle") {
      countryBox.style.display = "none";
      countryBox.removeAttribute("class");
      countryBox.setAttribute("class", "collapse");
    }
  };

  // A utility function to add the commas in the number
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getCases = (countryIndex) => {
    // Grab all cards
    const confirmedCase = document.getElementById("Confirmed-Cases");
    const recoveredCase = document.getElementById("Recovered-Cases");
    const deathCase = document.getElementById("Death-Cases");

    if (countryIndex === "00") {
      confirmedCase.innerText = numberWithCommas(confirmCases);
      recoveredCase.innerText = numberWithCommas(recoveredCases);
      deathCase.innerText = numberWithCommas(deathCases);
    } else {
      confirmedCase.innerText = numberWithCommas(
        props.covidData.data.Countries[countryIndex].TotalConfirmed
      );
      recoveredCase.innerText = numberWithCommas(
        props.covidData.data.Countries[countryIndex].TotalRecovered
      );
      deathCase.innerText = numberWithCommas(
        props.covidData.data.Countries[countryIndex].TotalDeaths
      );
    }

    // Grab the main country toggle button
    const countryBtnLabel = document.getElementById("country-label");

    if (countryIndex === "00") {
      countryBtnLabel.innerText = "Global";
    } else {
      countryBtnLabel.innerText =
        props.covidData.data.Countries[countryIndex].Country;
    }

    const countryList = document.getElementById("country-list");
    countryList.style.display = "none";
  };

  return (
    <>
      <section className="flex" id="all-cases-section">
        <div id="heading-container">
          {/*Section's main heading*/}
          <h1>
            <span style={{ fontSize: 2.6 + "em" }}>See Covid-19</span>
            <br />
            <span id="main-heading">
              <q>Confirmed, Recoverd and Death</q>
            </span>
            cases all over the world
          </h1>
        </div>
        <div className="flex" id="cards-container">
          <div className="flex" id="control-card">
            {/*Live Card*/}
            <div id="live">
              <LiveIcon />
              <span
                style={{
                  color: "red",
                  marginLeft: 6 + "px",
                  fontWeight: "bold",
                }}
              >
                Live
              </span>
            </div>
            <div id="stats-heading">
              <h2>Stats Overview</h2>
            </div>
            <div id="country-btn">
              {/*Show country button*/}
              <button
                className="flex"
                id="country-btn"
                title="country-button"
                onClick={showCountries}
              >
                <Globe className="icon" />
                <label id="country-label">Global</label>
                <DownArrow className="icon" />
              </button>

              <div id="country-list" className="collapse">
                {/*Country list*/}
                <ul>
                  <li>
                    <button
                      onClick={(e) => getCases(e.target.name)}
                      className="countryBtn"
                      value="Global"
                      title="Global"
                      name="00"
                    >
                      Global
                    </button>
                  </li>

                  {/* Inserting the country name and their other details */}
                  {props.covidData.data.Countries.map(function (
                    currentValue,
                    index
                  ) {
                    return (
                      <li key={index}>
                        <button
                          onClick={(e) => getCases(e.target.name)}
                          className="countryBtn"
                          value={currentValue.Country}
                          title={currentValue.Country}
                          name={index}
                        >
                          {currentValue.Country}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/*Cards*/}
          <div className="flex" id="case-container">
            <Card
              caseId="confirm-case"
              cases={numberWithCommas(confirmCases)}
              caseType="Confirmed"
            />
            <Card
              caseId="recovered-case"
              cases={numberWithCommas(recoveredCases)}
              caseType="Recovered"
            />
            <Card
              caseId="death-case"
              cases={numberWithCommas(deathCases)}
              caseType="Death"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CRD;
