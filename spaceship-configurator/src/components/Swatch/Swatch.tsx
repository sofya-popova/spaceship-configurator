import "./style.css";

interface Props {
  className: any;
  rectangleClassName: any;
}

export const Swatch = ({ className, rectangleClassName }: Props): JSX.Element => {
  return (
    <div className={`swatch ${className}`}>
      <div className={`rectangle ${rectangleClassName.toLowerCase()}`} />
    </div>
  );
};
