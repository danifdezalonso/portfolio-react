import React from "react";
import "./Presentation.css";
import profile from "../assets/profile.jpeg";

const Presentation = () => {
  return (
    <div className="description">
      <div className="description__card">
        <p className="description__personal--header">
          I'm Dani, a Product Designer and Front End Developer.
        </p>
        <p className="description__personal--subheader">
          I enjoy creating user-centric, empathetic and human experiences with a
          focus on detail, quality and results.
        </p>
      </div>
      <div className="description__photo">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Presentation;
