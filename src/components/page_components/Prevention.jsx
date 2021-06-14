import logo from "../../images/logo.png";
import faceTouch from "../../images/prevention/touch-face.png";
import handWash from "../../images/prevention/handwash.png";
import handShake from "../../images/prevention/hand-shake.png";
import personal from "../../images/prevention/personal.png";
import cover from "../../images/prevention/cover.png";
import clean from "../../images/prevention/clean.png";
import distance from "../../images/prevention/distance.jpg";
import group from "../../images/prevention/group.png";
import mask from "../../images/prevention/mask.png";

const prevention = () => {
  return (
    <>
      <header>
        <div id="prevent-header">
          <div id="heading-box">
            <h1 id="prevent-heading">
              How to prevent C<img src={logo} alt="corona-pic" />
              ronavirus
              <br />
              (COVID-19)
            </h1>

            <h2 id="sub-heading">9 Tips and Strategies</h2>

            <div id="content-navigation">
              <p id="navigation-line">
                <a href="#tips">Tips</a> | <a href="#importance">Importance</a>{" "}
                |
                <a href="#when_to_call_your_doctor">When to call your doctor</a>
                | <a href="#takeaway">Takeaway</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="headline-section">
        <div id="content-container" className="headline">
          <p>
            The new coronavirus is officially called SARS-CoV-2, which stands
            for severe acute respiratory syndrome coronavirus 2. An infection
            with this virus can lead to coronavirus disease 19, or COVID-19.
          </p>
          <br />
          <p>Read more...</p>
        </div>

        <h1 className="prevent-heading" id="steps-heading">
          Follow these simple Tips(Precautions) to reduce your chances of
          contracting COVID-19
        </h1>

        <div id="tips">
          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">
                Wash your hands frequently and carefully
              </h1>
              <p>
                Use warm water and soap and rub your hands for at least 20
                seconds. Work the lather to your wrists, between your fingers,
                and under your fingernails. You can also use an antibacterial
                and antiviral soap.
                <br />
                <br />
                Use hand sanitizer when you cannot wash your hands properly.
                Rewash your hands several times a day, especially after touching
                anything, including your phone or laptop.
              </p>
            </div>
            <img src={faceTouch} alt="face touch" />
          </div>

          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">Avoid touching your face</h1>
              <p>
                SARS-CoV-2 can live on some surfaces for up to 72 hours. You can
                get the virus on your hands if you touch a surface like: "gas
                pump handle", "your cell phone", "a doorknob"
              </p>

              <p>
                Avoid touching any part of your face or head, including your
                mouth, nose, and eyes. Also avoid biting your fingernails. This
                can give SARS-CoV-2 a chance to go from your hands into your
                body.
              </p>
            </div>
            <img src={handWash} alt="face touch" />
          </div>

          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">
                Stop shaking hands and hugging people — for now
              </h1>
              <p>
                Similarly, avoid touching other people. Skin-to-skin contact can
                transmit SARS-CoV-2 from one person to another.
              </p>
            </div>
            <img src={handShake} alt="face touch" />
          </div>

          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">
                Don’t share personal items
              </h1>
              <p>
                Do not share personal items like Phone, Makeup, Combs
                <br />
                <br />
                It’s also important not to share eating utensils and straws.
                Teach children to recognize their reusable cup, straw, and other
                dishes for their own use only.
              </p>
            </div>
            <img src={personal} alt="face touch" />
          </div>

          <div id="content-container" className="headline">
            <p>
              <span style={{ fontSize: 2 + "em", fontWeight: "bold" }}>
                Our Coverage
              </span>
              <br />
              <br />
              Stay informed with our live updates about the current COVID-19
              outbreak.
            </p>
          </div>

          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">Cover your mouth and nose</h1>
              <p>
                SARS-CoV-2 is found in high amounts in the nose and mouth. This
                means it can be carried by air droplets to other people when you
                cough, sneeze, or talk. It can also land on hard surfaces and
                stay there for up to 3 days.
                <br /> <br />
                Use a tissue or sneeze into your elbow to keep your hands as
                clean as possible. Wash your hands carefully after you sneeze or
                cough, regardless.
              </p>
            </div>
            <img src={cover} alt="face touch" />
          </div>

          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">
                Clean and disinfect surfaces
              </h1>
              <p>
                Use alcohol-based disinfectants to clean hard surfaces in your
                home like countertops, door handles , furniture , toys, phone,
                laptop
                <br /> <br />
                Disinfect areas after you bring groceries or packages into your
                home. <br />
                Use white vinegar or hydrogen peroxide solutions for general
                cleaning in between disinfecting surfaces.
              </p>
            </div>
            <img src={clean} alt="face touch" />
          </div>

          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">
                Take physical (social) distancing seriously
              </h1>
              <p>
                If you’re carrying the SARS-CoV-2 virus, it’ll be found in high
                amounts in your spit (sputum). This can happen even if you don’t
                have symptoms.
                <br />
                <br />
                Physical (social) distancing, also means staying home and
                working remotely when possible. <br />
                <br />
                If you must go out for necessities, keep a distance of 6 feet (2
                m) from other people. You can transmit the virus by speaking to
                someone in close contact to you.
              </p>
            </div>
            <img src={distance} alt="face touch" />
          </div>

          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">Do not gather in groups</h1>
              <p>
                Being in a group or gathering makes it more likely that you’ll
                be in close contact with someone.
                <br />
                <br />
                This includes avoiding all religious places of worship, as you
                may have to sit or stand too close to another congregant. It
                also includes not congregating at parks or beaches.
              </p>
            </div>
            <img src={group} alt="face touch" />
          </div>

          <div className="tip flex">
            <div className="tip-content">
              <h1 className="heading tip-heading">Wear a Mask</h1>
              <p>
                The Centers for Disease Control and Prevention (CDC)
                recommendsTrusted Source that almost everyone wears a cloth face
                mask in public settings where physical distancing may be
                difficult, such as grocery stores.
                <br />
                <br />
                The CDC’s website provides instructionsTrusted Source for making
                your own mask at home, using basic materials such as a T-shirt
                and scissors.
              </p>
            </div>
            <img src={mask} alt="face touch" />
          </div>
        </div>
      </section>

      <section id="importance">
        <div id="importance-container">
          <h1 id="importance-heading" className="prevent-heading">
            Why are these measures so important?
          </h1>

          <p>
            Following the guidelines diligently is important because SARS-CoV-2
            is different than other coronaviruses, including the one it’s most
            similar to, SARS-CoV.
            <br />
            <br />
            Ongoing medical studies show exactly why we must protect ourselves
            and others from getting a SARS-CoV-2 infection.
            <br />
            <br />
            Here’s how SARS-CoV-2 may cause more problems than other viruses:
          </p>
        </div>

        <div id="importance-content">
          <div className="measure-reason">
            <h1 className="reason-heading heading">
              You may not have symptoms
            </h1>
            <p>
              You can carry or have a SARS-CoV-2 infection without any symptoms
              at all. This means you may unknowingly transmit it to more
              vulnerable people who may become very ill.
            </p>
          </div>

          <div className="measure-reason">
            <h1 className="reason-heading heading">
              You can still spread the virus
            </h1>
            <p>
              You can transmit, or pass on, the SARS-CoV-2 virus before you have
              any symptoms.
              <br />
              <br />
              In comparison, SARS-CoV was mainly only infectious days after
              symptoms began. This means that people who had the infection knew
              they were ill and were able to stop the transmission.
            </p>
          </div>

          <div className="measure-reason">
            <h1 className="reason-heading heading">
              It has a longer incubation time
            </h1>
            <p>
              SARS-CoV-2 may have a longer incubation time. This means that the
              time between getting the infection and developing any symptoms is
              longer than other coronaviruses.
              <br />
              <br />
              According to the CDCTrusted Source, SARS-CoV-2 has an incubation
              period of 2 to 14 days. This means that someone who’s carrying the
              virus may come into contact with many people before symptoms
              begin.
            </p>
          </div>

          <div className="measure-reason">
            <h1 className="reason-heading heading">
              You may get sicker, faster
            </h1>
            <p>
              SARS-CoV-2 may make you more unwell much earlier. Viral loads —
              how many viruses you’re carrying — were highest 10 days after
              symptoms began for SARS CoV-1.
              <br />
              <br />
              This means that the SARS-CoV-2 virus may multiply and spread in
              someone who has COVID-19 disease almost twice as fast as other
              coronavirus infections.
            </p>
          </div>

          <div className="measure-reason">
            <h1 className="reason-heading heading">
              You may be very contagious
            </h1>
            <p>
              Even if you do not have symptoms, you can have the same viral load
              (number of viruses) in your body as a person who has severe
              symptoms.
              <br />
              <br />
              This means you may be just as likely to be contagious as someone
              who has COVID-19. In comparison, other previous coronaviruses
              caused lower viral loads and only after symptoms were present.
            </p>
          </div>

          <div className="measure-reason">
            <h1 className="reason-heading heading">
              Your nose and mouth are more susceptible
            </h1>
            <p>
              A 2020 report noted that the new coronavirus likes to move into
              your nose more than in the throat and other parts of the body.
              <br />
              <br />
              This means that you may be more likely to sneeze, cough, or
              breathe SARS-CoV-2 out into the air around you.
            </p>
          </div>

          <div className="measure-reason">
            <h1 className="reason-heading heading">
              It may travel through the body faster
            </h1>
            <p>
              The new coronavirus may travel through the body faster than other
              viruses. Data from China found that people with COVID-19 have the
              virus in their nose and throat only 1 day after symptoms begin.
            </p>
          </div>
        </div>
      </section>

      <section id="when_to_call_your_doctor">
        <div id="content">
          <div>
            <h1 id="doctor-heading" className="prevent-heading">
              When to call your doctor
            </h1>
          </div>

          <div>
            <p>
              Call your doctor if you think you or a family member may have a
              SARS-CoV-2 infection or if you have any symptoms of COVID-19.
            </p>
            <p>
              Do not go to a medical clinic or hospital unless it’s an
              emergency. This helps to avoid transmitting the virus.
            </p>
            <p>
              Be extra watchful for worsening symptoms if you or your loved one
              has an underlying condition that may give you a higher chance of
              getting severe COVID-19, such as: Asthma or other lung disease,
              diabetes, heart disease, low immune system
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default prevention;
