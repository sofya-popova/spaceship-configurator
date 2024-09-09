import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const GlobalChevronRightAlt = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`global-chevron-right-alt ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8.79289 4.29289C8.40237 4.68342 8.40237 5.31658 8.79289 5.70711L15.0858 12L8.79289 18.2929C8.40237 18.6834 8.40237 19.3166 8.79289 19.7071C9.18342 20.0976 9.81658 20.0976 10.2071 19.7071L17.2071 12.7071C17.5976 12.3166 17.5976 11.6834 17.2071 11.2929L10.2071 4.29289C9.81658 3.90237 9.18342 3.90237 8.79289 4.29289Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

GlobalChevronRightAlt.propTypes = {
  color: PropTypes.string,
};
