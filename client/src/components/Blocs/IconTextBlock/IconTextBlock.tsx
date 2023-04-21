import classNames from "classnames";
import "./iconTextBlock.scss";

interface ITextIconBlock {
  icon: JSX.Element;
  text: string;
  isActive?: boolean;
  clazzBlock?: string;
}

const IconTextBlock: React.FC<ITextIconBlock> = ({
  icon,
  text,
  isActive = false,
  clazzBlock = "",
}) => {
  return (
    <div
      className={classNames("iconText", {
        iconText_active: isActive,
        [clazzBlock]: clazzBlock.length > 0,
      })}
    >
      {icon}
      <span className="title">{text}</span>
    </div>
  );
};

export { IconTextBlock };
