import cardOneImage from "../../../images/covid/ps.png";
import cardSecondImage from "../../../images/covid/symptom.jpg";
import cardThirdImage from "../../../images/covid/vaccine.jpg";

const Footer = () => {
  return (
    <>
      <footer>
          <section id="related-section" className="flex">
            <div>
              <h1 id="related-heading">Related</h1>
            </div>

            <div id="card-container" className="flex">
              <a
                href="https://www.hopkinsmedicine.org/health/patient-safety-infographic"
                target="_blank"
                rel="noreferrer"
              >
                <div className="related-card flex">
                  <div className="image-container">
                    <img
                      src={cardOneImage}
                      alt="Patient safety"
                      className="card-image"
                      id="cardOneImage"
                    />
                  </div>
                  <div className="card-heading">
                    <h1>Patient Safety Infographic</h1>
                  </div>
                </div>
              </a>

              <a
                href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-symptoms-frequently-asked-questions"
                target="_blank"
                rel="noreferrer"
              >
                <div className="related-card flex">
                  <div className="image-container">
                    <img
                      src={cardSecondImage}
                      alt="Coronavirus Symptoms"
                      className="card-image"
                      id="cardSecondImage"
                    />
                  </div>
                  <div className="card-heading">
                    <h1>Coronavirus Symptoms: Frequently Asked Questions</h1>
                  </div>
                </div>
              </a>

              <a
                href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/covid19-vaccine-can-it-affect-your-mammogram-results"
                target="_blank"
                rel="noreferrer"
              >
                <div className="related-card flex">
                  <div className="image-container">
                    <img
                      src={cardThirdImage}
                      alt="Vaccince"
                      className="card-image"
                      id="cardThirdImage"
                    />
                  </div>
                  <div className="card-heading">
                    <h1>
                      Covid-19 Vaccine : Can It Affect Your Mammogram Results?
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          </section>
        <section id="footer">
          <div id="copyright-section">All Rights Reserved Copyright © 2021</div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
