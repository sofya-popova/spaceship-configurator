import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  value: number;
  className?: string;
}

export const Output = ({ value = 100, className }: Props): JSX.Element => {
  return (
    <div className={`output ${className}`}>
      <div className="wrapper">
        <div className="value">+ {value}€</div>
      </div>
    </div>
  );
};

Output.propTypes = {
  value: PropTypes.number.isRequired, // Changed from PropTypes.string to PropTypes.number
  className: PropTypes.string,
};
