import React from "react";
import Project from "./Project";
import ProjectURL from "./ProjectURL";
import "./Projects.css";
import wellnessapp from "../assets/wellness-app.png";
import movingapp from "../assets/moving-app.png";
import daliweb from "../assets/dali-web.png";
import bacweb from "../assets/bac-web.png";
import Html from "../components/icons/Html";
import Css from "../components/icons/Css";
import ProjectCode from "./ProjectCode";
import ReactLogo from "./icons/ReactLogo";

const Projects = () => {
  const box1Color = {
    backgroundColor: "#CABBE9",
    title: "Wellness project",
    tag: "Mobile design",
    description:
      "Safely is a shared geolocation app. It allows user to share their location with loved ones and feel secure in the knowledge that someone is looking out for them. In addition, it provides extra useful functionalities for emergencies such as emergency call, false call, etc.",
    link: "/projects/wellness-case-study",
    mockup: { width: "40%", height: "40%" },
    alt: "App mockup",
  };
  const box2Color = {
    backgroundColor: "#F8EEB4",
    title: "Mobility project",
    tag: "Mobile design",
    description:
      "TaxiSharing is an application that allows you to find companions for taxi journeys and thus be able to split expenses and minimize environmental impact",
    link: "/projects/taxi-case-study",
    mockup: { width: "40%", height: "40%" },
    alt: "App mockup",
  };
  const box3Color = {
    backgroundColor: "#e8abab",
    title: "Fundació Salvador Dalí",
    tag: "Web design",
    description:
      "The Gala-Salvador Dalí Foundation is a private cultural organization which, as stated in its bylaws, has the mission to promote, foster, explain, give prestige, protect and defend the artistic, cultural and intellectual oeuvre of the painter, both inside and outside Spain",
    link: "https://www.salvador-dali.org/ca/obra/cataleg-raonat/",
    mockup: { width: "80%", height: "80%" },
    alt: "Web mockup",
  };
  const box4Color = {
    backgroundColor: "rgb(167 223 255)",
    title: "Barcelona Activa",
    tag: "Web design",
    description:
      "Design of the Barcelona Activa website, a local development agency of Barcelona City Council. From this website, traffic is distributed to the four main sections to promote the local economy and carry out specialized training for citizens",
    link: "https://www.barcelonactiva.cat/",
    mockup: { width: "80%", height: "80%" },
    alt: "Web mockup",
  };
  const box5Color = {
    backgroundColor: "#fde8cd",
    title: "Hourglass",
    tag: "Web development",
    tag2: "React",
    description: "Website made with React",
    icons: (
      <div>
        <Html /> <Css /> <ReactLogo />
      </div>
    ),
    link: "https://hourglass-dani-ester.netlify.app/",
  };
  const box6Color = {
    backgroundColor: "#eff7e1",
    title: "Marketing agency",
    tag: "Web development",
    icons: (
      <div>
        <Html /> <Css />
      </div>
    ),
    description: "Responsive web design practice",
    link: "https://danifdez-marketplace-responsivebootcamp.netlify.app/",
  };

  return (
    <div className="projects">
      <Project
        color={box1Color.backgroundColor}
        title={box1Color.title}
        tag={box1Color.tag}
        description={box1Color.description}
        image={wellnessapp}
        link={box1Color.link}
        mockup={box1Color.mockup}
        alt={box1Color.alt}
      />
      <Project
        color={box2Color.backgroundColor}
        title={box2Color.title}
        tag={box2Color.tag}
        description={box2Color.description}
        image={movingapp}
        link={box2Color.link}
        mockup={box2Color.mockup}
      />
      <ProjectURL
        color={box3Color.backgroundColor}
        title={box3Color.title}
        tag={box3Color.tag}
        description={box3Color.description}
        image={daliweb}
        link={box3Color.link}
        mockup={box3Color.mockup}
      />
      <ProjectURL
        color={box4Color.backgroundColor}
        title={box4Color.title}
        tag={box4Color.tag}
        description={box4Color.description}
        image={bacweb}
        link={box4Color.link}
        mockup={box4Color.mockup}
      />
      <ProjectCode
        color={box5Color.backgroundColor}
        title={box5Color.title}
        tag={box5Color.tag}
        description={box5Color.description}
        icons={box5Color.icons}
        link={box5Color.link}
        mockup={box5Color.mockup}
      />
      <ProjectCode
        color={box6Color.backgroundColor}
        title={box6Color.title}
        tag={box6Color.tag}
        description={box6Color.description}
        icons={box6Color.icons}
        link={box6Color.link}
        mockup={box6Color.mockup}
      />
    </div>
  );
};

export default Projects;
