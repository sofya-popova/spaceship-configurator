import PropTypes from "prop-types";
import React from "react";
import { InfoButton } from "../InfoButton";
import "./style.css";

interface Props {
  showInfoHint: boolean;
  labelValue: string;
  className: any;
}

export const Label = ({ showInfoHint = true, labelValue = "Label", className }: Props): JSX.Element => {
  return (
    <div className={`label ${className}`}>
      <div className="label-wrapper">
        <div className="text-wrapper">{labelValue}</div>
      </div>
      {showInfoHint && <InfoButton className="info-button" invert={false} stateProp="default" />}
    </div>
  );
};

Label.propTypes = {
  showInfoHint: PropTypes.bool,
  labelValue: PropTypes.string,
};
