import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { GlobalInfo7 } from "../../assets/icons/GlobalInfo7";
import "./style.css";

interface Props {
  stateProp: "active" | "hover" | "focus" | "default";
  invert: boolean;
  className: any;
}

export const InfoButton = ({ stateProp, invert, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    invert: invert,
  });

  return (
    <div
      className={`info-button state-0-${state.state} invert-${state.invert} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.state === "focus" && <GlobalInfo7 className="global-info" color={state.invert ? "#5BD06A" : "#31343C"} />}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

InfoButton.propTypes = {
  stateProp: PropTypes.oneOf(["active", "hover", "focus", "default"]),
  invert: PropTypes.bool,
};
