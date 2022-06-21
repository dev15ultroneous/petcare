import React from "react";
import "../components/SectionHeadingcomponent.css";
const Heading = (props) => {
  return (
    <div className="Introtext">
      <h2>{props.text}</h2>
    </div>
  );
};

export default Heading;
