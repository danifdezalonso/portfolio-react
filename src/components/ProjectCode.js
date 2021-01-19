import React from "react";
import "./Project.css";

const ProjectCode = (props) => {
  return (
    <div className="project__box" style={{ backgroundColor: props.color }}>
      <p className="project__title">{props.title}</p>
      <span className="project__tag">{props.tag}</span>
      <p></p>
      <p className="project__link" style={{ marginTop: "1rem" }}>
        <a href={props.link} target="_blank" rel="noreferrer">
          Check website 👉🏽
        </a>
      </p>
    </div>
  );
};

export default ProjectCode;
