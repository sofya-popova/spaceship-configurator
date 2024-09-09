import PropTypes from "prop-types";
import "./style.css";

interface Props {
  rectangleClassName: any;
  rectangleClassNameOverride: any;
  divClassName: any;
}

export const IconDragger = ({ rectangleClassName, rectangleClassNameOverride, divClassName }: Props): JSX.Element => {
  return (
    <div className="icon-dragger">
      <div className={`rectangle-2 ${rectangleClassName}`} />
      <div className={`rectangle-3 ${rectangleClassNameOverride}`} />
      <div className={`rectangle-4 ${divClassName}`} />
    </div>
  );
};

IconDragger.propTypes = {
  rectangleClassName: PropTypes.string,
  rectangleClassNameOverride: PropTypes.string,
  divClassName: PropTypes.string,
};
