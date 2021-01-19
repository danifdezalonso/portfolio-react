import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <div className="project__box" style={{ backgroundColor: props.color }}>
      <p className="project__title">{props.title}</p>
      <span className="project__tag">{props.tag}</span>
      <p className="project__description">{props.description}</p>
      <p className="project__link">
        <Link to={props.link}>View more 👉🏽</Link>
      </p>
      <p className="project__image">
        <img style={props.mockup} src={props.image} alt={props.alt}></img>
      </p>
    </div>
  );
};

export default Project;
