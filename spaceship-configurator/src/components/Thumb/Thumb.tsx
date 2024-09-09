import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { IconDragger } from "../IconDragger";

interface Props {
  state: "focus" | "hover" | "active" | "default";
  className: any;
  thumbPosition: number; // Add thumbPosition as a prop
}

export const Thumb = ({ state, className, thumbPosition }: Props): JSX.Element => {
  // Convert thumbPosition to a percentage string
  const thumbStyle = {
    left: `${thumbPosition}%`,
  };

  return (
    <div className={`thumb ${state} ${className}`} style={thumbStyle}>
      {["active", "default", "hover"].includes(state) && (
        <IconDragger
          divClassName={`${state === "hover" ? "icon-dragger-instance" : "class"}`}
          rectangleClassName={`${state === "hover" ? "icon-dragger-instance" : "class"}`}
          rectangleClassNameOverride={`${state === "hover" ? "icon-dragger-instance" : "class"}`}
        />
      )}

      {state === "focus" && (
        <div className="icon-dragger-wrapper">
          <IconDragger
            divClassName="icon-dragger-instance"
            rectangleClassName="icon-dragger-instance"
            rectangleClassNameOverride="icon-dragger-instance"
          />
        </div>
      )}
    </div>
  );
};

Thumb.propTypes = {
  state: PropTypes.oneOf(["focus", "hover", "active", "default"]).isRequired,
  className: PropTypes.string,
  thumbPosition: PropTypes.number.isRequired, // Add PropTypes for thumbPosition
};
