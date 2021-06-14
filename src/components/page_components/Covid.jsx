import logo from "../../images/home/logo.png";
import cardOneImage from "../../images/covid/ps.png"
import cardSecondImage from "../../images/covid/symptom.jpg";
import cardThirdImage from "../../images/covid/vaccine.jpg";
import svgPath from "../../images/covid/check.svg";
const covid = () => {
  return (
    <>
      <header>
        <div id="covid-header" className="flex">
          <div id="content-box">
            <div id="covid-heading-box">
              <h1 id="covid-heading">
                What is&nbsp;
                <span>
                  C<img src={logo} alt="logo" />
                  vid-19
                </span>
              </h1>
            </div>

            <div id="content">
              <p>
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a newly discovered coronavirus.
                <br />
                <br />
                Most people infected with the COVID-19 virus will experience
                mild to moderate respiratory illness and recover without
                requiring special treatment. Older people, and those with
                underlying medical problems like cardiovascular disease,
                diabetes, chronic respiratory disease, and cancer are more
                likely to develop serious illness.
                <br />
                <br />
                The best way to prevent and slow down transmission is to be well
                informed about the COVID-19 virus, the disease it causes and how
                it spreads. Protect yourself and others from infection by
                washing your hands or using an alcohol based rub frequently and
                not touching your face.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section  id="youtube-video" className="flex">
        <div>
          <iframe
            width="420"
            height="315"
            title="youtube-video"
            src="https://www.youtube.com/embed/OZcRD9fV7jo"
          ></iframe>
        </div>
      </section>
      
      <section id="content-section">
        {/* */}
        {/*Things you need to know about Covid-19 */}
        <div className="container">
          <div>
            <h1 className="heading">Things you need to know about Covid-19</h1>
          </div>
          <div id="list-content" className="content-box">
            <ul>
              <li>
                COVID-19 is the disease caused by SARS-CoV-2, the coronavirus
                that emerged in December 2019.
              </li>

              <li>
                COVID-19 can be severe, and has caused millions of deaths around
                the world as well as lasting health problems in some who have
                survived the illness.
              </li>

              <li>
                The coronavirus can be spread from person to person. It is
                diagnosed with a laboratory test.
              </li>

              <li>
                COVID-19 vaccines have been authorized for emergency use by the
                U.S. Food and Drug Administration, and vaccination programs are
                in progress across the U.S. and in many parts of the world.
              </li>

              <li>
                Prevention involves physical distancing, mask-wearing, hand
                hygiene and staying away from others if you feel sick.
              </li>
            </ul>
          </div>
        </div>
        {/*How does the coronavirus spread? */}
        <div className="container">
          <div title="How does the coronavirus spread?">
            <h1 className="heading">How does the coronavirus spread?</h1>
          </div>

          <div className="content-box">
            <p>
              As of now, researchers know that the coronavirus is spread through
              droplets and virus particles released into the air when an
              infected person breathes, talks, laughs, sings, coughs or sneezes.
              Larger droplets may fall to the ground in a few seconds, but tiny
              infectious particles can linger in the air and accumulate in
              indoor places, especially where many people are gathered and there
              is poor ventilation. This is why mask-wearing, hand hygiene and
              physical distancing are essential to preventing COVID-19.
            </p>
          </div>
        </div>
        {/*How did the coronavirus start? */}
        <div className="container">
          <div title="How did the coronavirus start?">
            <h1 className="heading">How did the coronavirus start?</h1>
          </div>

          <div className="content-box">
            <p>
              The first case of COVID-19 was reported Dec. 1, 2019, and the
              cause was a then-new coronavirus later named SARS-CoV-2.
              SARS-CoV-2 may have originated in an animal and changed (mutated)
              so it could cause illness in humans. In the past, several
              infectious disease outbreaks have been traced to viruses
              originating in birds, pigs, bats and other animals that mutated to
              become dangerous to humans. Research continues, and more study may
              reveal how and why the coronavirus evolved to cause pandemic
              disease.
            </p>
          </div>
        </div>
        {/*What are symptoms of coronavirus? */}
        <div className="container">
          <div title="What are symptoms of coronavirus?">
            <h1 className="heading">What are symptoms of coronavirus?</h1>
          </div>

          <div className="content-box">
            <ul>
              <li>Cough</li>
              <li>Fever or chills</li>
              <li>Shortness of breath or diffculty breathing</li>
              <li>Muscle or body aches</li>
              <li>Sore Throat</li>
              <li>New loss of taste or smell</li>
              <li>Diarrhea</li>
              <li>Headache</li>
              <li>New fatigue</li>
              <li>Nausea or vomiting</li>
              <li>Congestion or runny nose</li>
            </ul>
          </div>
        </div>
        {/*How is COVID-19 diagnosed? */}
        <div className="container">
          <div title="How is COVID-19 diagnosed?">
            <h1 className="heading">How is COVID-19 diagnosed?</h1>
          </div>

          <div className="content-box">
            <p>
              COVID-19 is diagnosed through a laboratory test. Diagnosis by
              examination alone is difficult since many COVID-19 signs and
              symptoms can be caused by other illnesses. Some people with the
              coronavirus do not have symptoms at all.&nbsp;
              <a
                href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-test-what-you-need-to-know"
                target="_blank"
                rel="noreferrer"
              >
                Learn more about COVID-19 testing.
              </a>
            </p>
          </div>
        </div>
        {/*How is COVID-19 treated? */}
        <div className="container">
          <div title="How is COVID-19 treated?">
            <h1 className="heading">How is COVID-19 treated?</h1>
          </div>

          <div className="content-box">
            <p>
              Treatment for COVID-19 addresses the signs and symptoms of the
              infection and supports people with more severe disease. For mild
              cases of coronavirus disease, your doctor may recommend measures
              such as fever reducers or over-the-counter medications. More
              severe cases may require hospital care, where a patient may
              receive a combination of treatments that could include steroids,
              oxygen, mechanical breathing support and other{" "}
              <a
                href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-treatment-whats-in-development"
                target="_blank"
                rel="noreferrer"
              >
                COVID-19 treatments in development.
              </a>{" "}
              Infusions of monoclonal antibodies given to certain patients early
              in the infection may reduce the symptoms, severity and duration of
              the illness.
            </p>
          </div>
        </div>
        {/*How do you protect yourself from this coronavirus? */}
        <div className="container">
          <div title="How do you protect yourself from this coronavirus?">
            <h1 className="heading">
              How do you protect yourself from this coronavirus?
            </h1>
          </div>

          <div className="content-box">
            <p>
              Vaccines are now authorized to prevent infection with SARS-CoV-2,
              the coronavirus that causes COVID-19. But until more is understood
              about how the vaccines affect a person’s ability to transmit the
              virus, precautions such as mask-wearing, physical distancing and
              hand hygiene should continue regardless of a person’s vaccination
              status to help prevent the spread of COVID-19. Learn more about
              the COVID-19 vaccine and ways to protect yourself.
            </p>
          </div>

          <div title="Avoid close contact with others.">
            <h1 className="heading sub-heading">
              Avoid close contact with others.
            </h1>
          </div>

          <div className="sub-content content-box">
            <p>
              It’s important to understand that the new coronavirus spreads
              mainly from person to person. If an infected person coughs or
              sneezes, their droplets can infect people nearby. That’s why it’s
              important to avoid close contact with others. Understand that
              people (including children) may be infected with the new
              coronavirus and have only mild symptoms.
              <br />
              <br />
              Some measures you can take to avoid close contact with others
              include:
            </p>

            <div>
              <ul>
                <li>Stay home as much as possible and reduce visitors.</li>
                <li>
                  Stay at least six feet away from others in public places.
                </li>
                <li>Ask your employer if it's possible to work from home.</li>
                <li>Avoid people who appear sick</li>
                <li>
                  Go grocery shopping and run errands during off-peak times.
                </li>
                <li>
                  Wear a face mask whenever you are in public place where you
                  wil encounter other poeple. The coronavirus that causes
                  COVId-19 can spread between people interacting in close
                  proximity -- for example, speaking, caughing, sneezing, or
                  singing -- even if those people do not symptoms Learn more
                  information about how masks help prevent the spread of
                  COVID-19
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="checker-container" className="flex">
          <div id="checker-content" className="flex">
            <div id="headings">
              <h1 id="check-heading">
                Coronavirus Self-Checker <br />
                and COVID-19 Vaccine <br />
                FAQ
              </h1>
              <p id="check-para">
                Check symptoms. Get vaccine information. Protect <br />
                yourself and others.
              </p>
            </div>
            <div id="btn-box">
              <a
                href="https://www.hopkinsmedicine.org/coronavirus/covid-19-self-checker.html"
                target="_blank"
                rel="noreferrer"
                id="check-btn"
              >
                Check Now
              </a>
            </div>
          </div>

          <div id="check-svg-box">
            <img src={svgPath} alt="checker" id="check-svg" />
          </div>
        </div>

        {/*Does COVID-19 cause death? */}
        <div className="container">
          <div title="Does COVID-19 cause death?">
            <h1 className="heading">Does COVID-19 cause death?</h1>
          </div>

          <div className="content-box">
            <p>
              Yes, severe COVID-19 can be fatal. For updates of coronavirus
              infections, deaths and vaccinations worldwide, see the Coronavirus
              COVID-19 Global Cases map developed by the Johns Hopkins Center
              for Systems Science and Engineering.
            </p>
          </div>
        </div>
        {/*Why is it called coronavirus? */}
        <div className="container">
          <div title="Why is it called coronavirus?">
            <h1 className="heading">Why is it called coronavirus?</h1>
          </div>

          <div className="content-box">
            <p>
              Coronaviruses are named for their appearance: “corona” means
              “crown.” The virus’s outer layers are covered with spike proteins
              that surround them like a crown.
            </p>
          </div>
        </div>
        {/*Is this coronavirus different from SARS? */}
        <div className="container">
          <div title="Is this coronavirus different from SARS?">
            <h1 className="heading">
              Is this coronavirus different from SARS?
            </h1>
          </div>

          <div className="content-box">
            <p>
              SARS stands for severe acute respiratory syndrome. In 2003, an
              outbreak of SARS affected people in several countries before
              ending in 2004. The coronavirus that causes COVID-19 is similar to
              the one that caused the 2003 SARS outbreak. Since the 2019
              coronavirus is related to the original coronavirus that caused
              SARS and can also cause severe acute respiratory syndrome, there
              is “SARS” in its name: SARS-CoV-2. Much is still unknown about
              these viruses, but SARS-CoV-2 spreads faster and farther than the
              2003 SARS-CoV-1 virus. This is likely because of how easily it is
              transmitted person to person, even from asymptomatic carriers of
              the virus.
            </p>
          </div>
        </div>
        {/*Are there different variants of this coronavirus? */}
        <div className="container">
          <div title="Are there different variants of this coronavirus?">
            <h1 className="heading">
              Are there different variants of this coronavirus?
            </h1>
          </div>

          <div className="content-box">
            <p>
              Yes, there are different variants of this coronavirus. Like other
              viruses, the coronavirus that causes COVID-19 can change (mutate).
              In December 2020, B.1.1.7, a new variant, was identified in the
              United Kingdom, and since then, variants have appeared in other
              locations around the world, including B.1.351, first isolated in
              South Africa, and others. Mutations may enable the coronavirus to
              spread faster from person to person, and may cause more severe
              disease. More infections can result in more people getting very
              sick and also create more opportunity for the virus to develop
              further mutations. Read more about coronavirus variants.
            </p>
          </div>
        </div>
      </section>

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

      <footer></footer>
    </>
  );
};

export default covid;
