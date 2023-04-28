import classNames from "classnames";

import { IReactChildren } from "../../../Interfaces/ICustomReact";

import "./customInputLayout.scss";

interface ICustomInputLayout extends IReactChildren {
  labelText: string;
  htmlFor: string;
  isBlur: {
    active: boolean;
    typeInput: string;
  };
}

export const CustomInputLayout: React.FC<ICustomInputLayout> = ({
  labelText,
  htmlFor,
  isBlur,
  children,
}) => {
  return (
    <div
      className={classNames("inputLabel", {
        "inputLabel-active": isBlur.active && htmlFor === isBlur.typeInput,
      })}
    >
      <label htmlFor={htmlFor} className="title-500 label">
        {labelText}
      </label>
      {children}
    </div>
  );
};
