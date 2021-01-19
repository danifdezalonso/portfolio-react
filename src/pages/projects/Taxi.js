import React from "react";
import TaxiEvolution from "../../assets/taxi/taxiEvolution.png";
import Footer from "../../components/Footer";
import Sketch from "../../components/icons/Sketch";
import Invision from "../../components/icons/Invision";
import Abstract from "../../components/icons/Abstract";
import Principle from "../../components/icons/Principle";

function Taxi() {
  return (
    <>
      <div className="container">
        <div className="casestudy">
          <h2 className="casestudy__title">Taxi Sharing</h2>
          <h4 className="casestudy__subtitle">App Design</h4>
          <p>
            The idea for this project came up on a trip to Mallorca, where I
            took a taxi from the airport to the center of Palma and, right in
            the hotel reception, I met the same person who was on the plane in
            the seat across from me.
          </p>
        </div>
      </div>
      <div className="casestudy__highlightedsection taxi--section">
        <div className="casestudy">
          <p className="casestudy__section--title">The problem</p>
          <p>
            My research highlighted three problems that could all be solved in
            the same way:
          </p>
          <ul>
            <li>
              The young and less wealthy do not use taxis because they consider
              it a luxury.{" "}
            </li>
            <li>
              There are isolated areas, such as villages, where the only way of
              travelling there is by taxi or personal vehicle, but not everyone
              can afford their own car and taxi trips can be very expensive.{" "}
            </li>
            <li>
              Fixed fares, in journeys from travel hubs such as airports, make
              the price of a trip more expensive. However, the majority of trips
              made from the airport are to the same area, so by sharing a taxi,
              the price decreases considerably.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="casestudy">
          <p className="casestudy__section--subtitle">Design evolution</p>
          <img
            style={{ width: "100%" }}
            className="casestudy__designevolution"
            src={TaxiEvolution}
            alt="tabla reflejando los datos de la encuesta"
          ></img>
          <p className="casestudy__section--subtitle">Interactive prototype</p>
          <p>Prototipo interactivo de todo el proceso.</p>
          <div className="aboutme__links">
            <a
              href="https://invis.io/9PRZOL8UVHZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div className="btn" style={{ textAlign: "center" }}>
                Interact with the final prototype
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1DgEb1LmBklDs_9V5bqMnSjKGHKmumYSp?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div className="btn" style={{ textAlign: "center" }}>
                View animated interactions
              </div>
            </a>
          </div>
          <p className="casestudy__section--subtitle">
            Tools used in the whole process
          </p>

          <div className="casestudy__icons">
            <Sketch />
            <Invision />
            <Abstract />
            <Principle />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Taxi;
