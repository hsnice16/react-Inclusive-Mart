import PropTypes from "prop-types";
import { FilterULHead } from "./FilterULHead";
import { getFormattedInputId } from "utils";

const FilterUL = ({
  headingText,
  inputType,
  inputName,
  optionsList,
  forScreenSize,
  isChecked,
  handleChange,
}) => (
  <ul>
    <FilterULHead headingText={headingText} />

    <form>
      {optionsList.map((option) => {
        const inputId = `${
          forScreenSize === "md" ? "md-" : ""
        }${getFormattedInputId(option)}`;

        return (
          <li key={inputId} className="my-0p5 ml-1">
            <label className="cursor-ptr" htmlFor={inputId}>
              <input
                className="cursor-ptr mr-1"
                type={inputType}
                name={inputName}
                id={inputId}
                value={option}
                checked={isChecked(option)}
                onChange={handleChange}
              />
              {option}
            </label>
          </li>
        );
      })}
    </form>
  </ul>
);

FilterUL.propTypes = {
  headingText: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  optionsList: PropTypes.arrayOf(PropTypes.string),
  forScreenSize: PropTypes.string,
  isChecked: PropTypes.func,
  handleChange: PropTypes.func,
};

FilterUL.defaultProps = {
  headingText: "",
  inputType: "",
  inputName: "",
  optionsList: [""],
  forScreenSize: "",
  isChecked: () => {},
  handleChange: () => {},
};

export { FilterUL };
