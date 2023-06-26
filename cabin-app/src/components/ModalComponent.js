import {ModalBody, ModalContent } from "../styles/ModalStyle";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "show" : "hide";

  return (
    <ModalBody className={showHideClassName}>
      <ModalContent>
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </ModalContent>
    </ModalBody>
  );
};

export default Modal;