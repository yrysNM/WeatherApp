import { IReactChildren } from "../../../Interfaces/ICustomReact";
import "./contentLayout.scss";

interface IContentLayout extends IReactChildren {
  title: string;
}

export const ContentLayout = ({ children, title }: IContentLayout) => {
  return (
    <div className="content">
      <p className="title-justFw500">{title}</p>

      {children}
    </div>
  );
};
