import React from "react";
import "./AboutMe.css";
import Sketch from "../components/icons/Sketch";
import Figma from "../components/icons/Figma";
import Invision from "../components/icons/Invision";
import Abstract from "../components/icons/Abstract";
import Zeplin from "../components/icons/Zeplin";
import Html from "../components/icons/Html";
import Css from "../components/icons/Css";
import Sass from "../components/icons/Sass";
import Javascript from "../components/icons/Javascript";
import Reacticon from "../components/icons/Reacticon";

const AboutMe = () => {
  return (
    <div>
      <div className="aboutme">
        <p className="aboutme__header">Hey, buddy 👋 </p>
        <div className="aboutme__description">
          <p>
            Professional in UX/UI design qualified in Information and
            Documentation with extensive experience across multiple industries.
          </p>
          <p>
            I have an extensive academic grounding and additionally my
            experience has allowed me to gain analytical, organizational,
            collaborative and empathetic skills. Through my jobs, I have learned
            to develop myself, to listen and apply a utilitarian mindset to my
            work.
          </p>
          <p>
            In Design, I not only found my passion but also the perfect
            playground to combine my skills and abilities to achieve exceptional
            results!
          </p>
          <p>
            I have enjoyed graphic design since I was a child. I initially
            taught myself using online courses and resources and later leveraged
            my knowledge to get my first job.
          </p>
          <p>
            I discovered the world of UX/UI Design almost at the end of my
            degree, and since then, it has been my professional and academic
            passion. For my degree final project, I redesigned the website of my
            university. This project opened the door to my first job as UX/UI
            Designer.
          </p>
          <p>
            Without knowing it, my working life was divided in two branches of
            knowledge (research/documentation and design) in UX/UI I was able to
            merge both.
          </p>
          <p>
            Following my degree, I enrolled in a postgraduate course on
            Interaction and Usability Design at the Open University of
            Catalonia.
          </p>
          <p>
            The following year, I combined an official master's degree at the
            UNIR with a UX/UI Design bootcamp in IronHack while continuing to
            work. This was a year of personal advancement and deep learning.
          </p>
          <p>
            I am interested in positions that would allow me to continue growing
            and learning as UX/UI Designer. I am also interested in connecting
            with other who share my passion.
          </p>
        </div>
        <div className="aboutme__links">
          <a
            className="personallink"
            href="https://www.linkedin.com/in/dani-fdez/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="btn">LinkedIn</div>
          </a>
          <a
            className="personallink"
            href="https://drive.google.com/file/d/1ilAe5m83OGSOFbNC3YmLD8Husk0Uoi2T/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className="btn">CV</div>
          </a>
        </div>
        <p className="aboutme__header">Stuff I know:</p>
        <div className="aboutme__iconsgrid">
          <div className="aboutme__icons">
            <Sketch />
          </div>
          <div className="aboutme__icons">
            <Figma />
          </div>
          <div className="aboutme__icons">
            <Invision />
          </div>
          <div className="aboutme__icons">
            <Abstract />
          </div>
          <div className="aboutme__icons">
            <Zeplin />
          </div>
          <div className="aboutme__icons">
            <Html />
          </div>
          <div className="aboutme__icons">
            <Css />
          </div>
          <div className="aboutme__icons">
            <Javascript />
          </div>
          <div className="aboutme__icons">
            <Sass />
          </div>
          <div className="aboutme__icons">
            <Reacticon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
