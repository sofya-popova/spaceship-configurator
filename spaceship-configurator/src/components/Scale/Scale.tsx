import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  text: string;
}

export const Scale = ({ className, text = "Scale value" }: Props): JSX.Element => {
  return (
    <div className={`scale ${className}`}>
      <div className="scale-value">{text}</div>
    </div>
  );
};

Scale.propTypes = {
  text: PropTypes.string,
};
