import { IReactChildren } from "../../Interfaces/ICustomReact";

export const CardLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <div className="card">
      <div className="card-wrapper">{children}</div>
    </div>
  );
};
