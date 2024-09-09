import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  value: "filled" | "empty";
  className: any;
  trackClassName: any;
}

export const TrackBar = ({ value, className, trackClassName }: Props): JSX.Element => {
  return (
    <div className={`track-bar ${className}`}>
      <div className={`div ${value} ${trackClassName}`} />
    </div>
  );
};

TrackBar.propTypes = {
  value: PropTypes.oneOf(["filled", "empty"]).isRequired,
  className: PropTypes.string,
  trackClassName: PropTypes.string,
};
