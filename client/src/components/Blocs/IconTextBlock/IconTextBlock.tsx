import classNames from "classnames";
import { NavLink } from "react-router-dom";

import "./iconTextBlock.scss";

interface ITextIconBlock {
  icon?: JSX.Element;
  text: string;
  isActive?: boolean;
  clazzBlock?: string;
  pageUrl?: string;
}

const IconTextBlock: React.FC<ITextIconBlock> = ({
  icon,
  text,
  isActive = false,
  clazzBlock = "",
  pageUrl = "/",
}) => {
  return (
    <div
      className={classNames("iconText", {
        iconText_active: isActive,
        [clazzBlock]: clazzBlock.length > 0,
      })}
    >
      <NavLink
        to={pageUrl}
        className={({ isActive }) => (isActive ? "iconText_active" : "")}
      >
        <span className="icon">{icon}</span>
      </NavLink>
      <NavLink
        to={pageUrl}
        className={({ isActive }) => (isActive ? "iconText_active" : "")}
      >
        <span className="title-sidebar">{text}</span>
      </NavLink>
    </div>
  );
};

export { IconTextBlock };
