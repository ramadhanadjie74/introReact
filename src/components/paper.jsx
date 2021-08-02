import React from "react";
import PropTypes from "prop-types";

const paper = ({ childern }) => {
  return (
    <div className="container">
      <div className="frame">{childern}</div>
    </div>
  );
};

paper.PropTypes = {};
export default paper;
