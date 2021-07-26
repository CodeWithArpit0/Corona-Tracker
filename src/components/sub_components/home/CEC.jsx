import tableBackgroundImage from "../../../images/home/logo.png";

//Importing animations
import Fade from "react-reveal/Fade";

const CEC = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <section className="flex" id="all-country-live-cases-section">
        <Fade left>
          <div id="full-case-list-heading">
            <h1 id="bg-heading">Covid-19</h1>
            <div className="flex" id="heading-container">
              <h1>
                See different countries afftected by
                <span>Coronavirus</span>
              </h1>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div id="full-case-list-table" className="">
            <img
              src={tableBackgroundImage}
              alt="table background"
              id="table-bg"
            />
            <table>
              <thead>
                <tr id="table-header">
                  <th>Countries</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Death</th>
                </tr>
              </thead>

              <tbody>
                {props.covidData.data.Countries.map(function (
                  currentValue,
                  index
                ) {
                  return (
                    <tr key={index}>
                      <td>{currentValue.Country}</td>
                      <td>{numberWithCommas(currentValue.TotalConfirmed)}</td>
                      <td>{numberWithCommas(currentValue.TotalRecovered)}</td>
                      <td>{numberWithCommas(currentValue.TotalDeaths)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default CEC;
