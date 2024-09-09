import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { Label } from "../Label";
import { Output } from "../Output";
import { Track } from "../Track";
import "./style.css";

interface Props {
  editable: boolean;
  desciption: boolean;
  className: string;
  text: string;
  outputValue: number;
  trackThumbStateDefaultClassName: string;
  trackScaleText: string;
  trackPosition: string;
  trackScaleText1: string;
  onChange?: (value: number) => void;
}

export const Slider = ({
  editable,
  desciption,
  className,
  text = "Label",
  outputValue = 100,
  trackThumbStateDefaultClassName,
  trackScaleText = "100",
  trackPosition = "zero",
  trackScaleText1 = "0",
  onChange,
}: Props): JSX.Element => {
  const [sliderValue, setSliderValue] = useState<number>(outputValue);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const sliderMin = 0;
  const sliderMax = 100;

  const handleValueChange = (newValue: number) => {
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      const sliderRect = (document.querySelector('.slider') as HTMLElement).getBoundingClientRect();
      const sliderWidth = sliderRect.width;
      const sliderOffset = e.clientX - sliderRect.left;
      const newValue = Math.min(
        Math.max(sliderMin, (sliderOffset / sliderWidth) * (sliderMax - sliderMin)),
        sliderMax
      );
      handleValueChange(Math.round(newValue));
    }
  }, [isDragging]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  const thumbPosition = ((sliderValue - sliderMin) / (sliderMax - sliderMin)) * 100;

  return (
    <div className={`slider ${className}`} onMouseDown={handleMouseDown}>
      <div className="label-and-value">
        {(!desciption || !editable) && (
          <div className="div-wrapper">
            <div className="label-wrapper-2">
              <div className="label-2">{text}</div>
            </div>
          </div>
        )}

        {desciption && editable && <Label className="label-instance" labelValue="Label" showInfoHint={false} />}

        <div className="editable-value">
          {!editable && <Output className="output-instance" value={!desciption ? sliderValue : 100} />}

          {editable && (
            <div className="inputbox">
              <div className="value-and-subvalue-wrapper">
                <div className="value-and-subvalue">
                  <input
                    type="text"
                    className="value-2"
                    value={sliderValue}
                    onChange={(e) => handleValueChange(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Track
        className="track-instance"
        position={desciption ? "zero" : trackPosition}
        scale
        scaleText={desciption ? "0" : trackScaleText1}
        scaleText1={desciption ? "100" : trackScaleText}
        thumbStateDefaultClassName={`${desciption ? "class-8" : trackThumbStateDefaultClassName}`}
        thumbPosition={thumbPosition} // Pass the thumb position to Track
      />
      {desciption && (
        <div className="description-neutral">
          <div className="text-wrapper-2">Description</div>
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  editable: PropTypes.bool.isRequired,
  desciption: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string,
  outputValue: PropTypes.number,
  trackThumbStateDefaultClassName: PropTypes.string.isRequired,
  trackScaleText: PropTypes.string,
  trackPosition: PropTypes.string,
  trackScaleText1: PropTypes.string,
  onChange: PropTypes.func,
};
