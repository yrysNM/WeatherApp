import classNames from "classnames";
import { IReactChildren } from "../../../Interfaces/ICustomReact";
import "./contentLayout.scss";

interface IContentLayout extends IReactChildren {
  title: string;
  isWeather?: boolean;
}

export const ContentLayout = ({
  children,
  title,
  isWeather = false,
}: IContentLayout) => {
  return (
    <div
      className={classNames({
        content: !isWeather,
        weather_block: isWeather,
      })}
    >
      <p className="title-justFw500">{title}</p>

      {children}
    </div>
  );
};
