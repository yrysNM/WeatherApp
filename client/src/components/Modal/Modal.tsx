import { IReactChildren } from "../../Interfaces/ICustomReact";

import "./modal.scss";

interface IModal extends IReactChildren {
  onClose: () => void;
}

export const Modal: React.FC<IModal> = ({ children, onClose }) => {
  return (
    <div className="overlay overlay-modal">
      <div className="popup">
        {children}
        <div className="closeModal" onClick={onClose}>
          <div className="hamburger hamburger_active">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};
