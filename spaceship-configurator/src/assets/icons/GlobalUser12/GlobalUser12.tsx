import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const GlobalUser12 = ({ color = "#00973A", className }: Props): JSX.Element => {
  return (
    <svg
      className={`global-user-12 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8 10C8 7.79088 9.7908 6 12 6C14.2092 6 16 7.79088 16 10C16 12.2092 14.2092 14 12 14C9.79082 14 8 12.2092 8 10ZM12 8C10.8954 8 10 8.89542 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89542 13.1046 8 12 8Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M2 12C2 6.47716 6.47716 2 12 2C17.5229 2 22 6.47716 22 12C22 17.5229 17.5229 22 12 22C6.47716 22 2 17.5229 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 13.9218 4.6776 15.6852 5.80692 17.0646C6.06811 16.7524 6.377 16.465 6.70938 16.2124C7.60048 15.5353 8.80771 15 10 15H14C15.1923 15 16.3995 15.5353 17.2906 16.2124C17.623 16.465 17.9319 16.7524 18.1931 17.0646C19.3224 15.6852 20 13.9218 20 12C20 7.58172 16.4183 4 12 4ZM16.7379 18.4468C16.5795 18.2372 16.3567 18.0147 16.0806 17.8048C15.4288 17.3095 14.636 17 14 17H10C9.36401 17 8.57124 17.3095 7.91941 17.8048C7.64329 18.0147 7.42051 18.2372 7.26214 18.4468C8.58839 19.4231 10.2268 20 12 20C13.7732 20 15.4116 19.4231 16.7379 18.4468Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

GlobalUser12.propTypes = {
  color: PropTypes.string,
};
