import PropTypes from "prop-types";
import { Scale } from "../Scale";
import { Thumb } from "../Thumb";
import { TrackBar } from "../TrackBar";
import "./style.css";

interface Props {
  position: string;
  scale: boolean;
  className: any;
  scaleText: string;
  scaleText1: string;
  thumbStateDefaultClassName: any;
  thumbPosition: number; // Add thumbPosition as a prop
}

export const Track = ({
  position,
  scale,
  className,
  scaleText = "0",
  scaleText1 = "100",
  thumbStateDefaultClassName,
  thumbPosition, // Use thumbPosition
}: Props): JSX.Element => {
  return (
    <div className={`track scale-${scale} ${position} ${className}`}>
      <div className="div-2">
        <TrackBar
          className={`${position === "zero" ? "class-2" : "class-3"}`}
          trackClassName={`${position === "zero" && "class-4"}`}
          value="filled"
        />
        <TrackBar className={`${position === "one-hundred" ? "class-2" : "class-3"}`} value="empty" trackClassName={undefined} />
      </div>
      {scale && (
        <div className="scale-2">
          <Scale className="scale-instance" text={scaleText} />
          <Scale className="scale-instance" text={scaleText1} />
        </div>
      )}

      <Thumb
        className={`${!scale && position === "fifty"
          ? "class-5"
          : !scale && position === "one-hundred"
            ? "class-6"
            : scale
              ? thumbStateDefaultClassName
              : "class-7"
          }`}
        state="default"
        thumbPosition={thumbPosition} // Pass the thumbPosition to Thumb
      />
    </div>
  );
};

Track.propTypes = {
  position: PropTypes.string,
  scale: PropTypes.bool,
  scaleText: PropTypes.string,
  scaleText1: PropTypes.string,
  thumbStateDefaultClassName: PropTypes.string.isRequired,
  thumbPosition: PropTypes.number.isRequired,
};
