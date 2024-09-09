import "./style.css";
import Polygon from '../../assets/img/polygon-3-8.svg';
import Polygon1 from '../../assets/img/polygon-3-11.svg';

interface Props {
  state: "selected" | "default";
  mobile: boolean;
  className?: string;
  polygon?: string;
  img?: string;
  polygon1?: string;
  options: string[];
}

export const AdvancedOptions = ({
  state,
  mobile,
  className = "",
  polygon = Polygon,
  img = Polygon,
  polygon1 = Polygon1,
  options,
}: Props): JSX.Element => {
  return (
    <div className={`advanced-options state-${state} mobile-${mobile} ${className}`}>
      <div className="options">
        {options.map((option, index) => (
          <div className={`option-${index + 1}`} key={index}>
            <div className="icon">
              <img
                className="polygon"
                alt="Polygon"
                src={state === "selected" && mobile ? "/src/assets/img/polygon-3-11.svg" : index === 0 ? polygon : index === 1 ? img : polygon1}
              />
            </div>
            <div className="text-wrapper-3">{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
};