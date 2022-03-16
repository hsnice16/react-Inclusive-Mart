import { useState } from "react";
import PropTypes from "prop-types";
import { isInputTypePassword } from "../../utils";

const FormPasswordInput = ({ name, id }) => {
  const [inputType, setInputType] = useState("password");

  const changeInputType = () => {
    setInputType((prevInputType) =>
      isInputTypePassword(prevInputType) ? "text" : "password"
    );
  };

  return (
    <div className="bg-unset border-r-0p2 flex input mx-0 p-0 w-100pct">
      <input
        className="bg-unset border-none input m-0 pr-0"
        type={inputType}
        name={name}
        id={id}
        placeholder={isInputTypePassword(inputType) ? "********" : name}
      />

      <button className="bg-white border-none px-0p5" onClick={changeInputType}>
        <i
          className={`far fa-eye${
            isInputTypePassword(inputType) ? "-slash" : ""
          }`}
        ></i>
      </button>
    </div>
  );
};

FormPasswordInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

FormPasswordInput.defaultProps = {
  name: "",
  id: "",
};

export { FormPasswordInput };
