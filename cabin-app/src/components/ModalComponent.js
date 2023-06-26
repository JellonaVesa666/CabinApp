import { ModalContent, ModalHeader } from "../styles/ModalStyle";

const Modal = ({ handleClose, setActive, show, options }) => {
  const showHideClassName = show ? "show" : "hide";

  const Filter = (props) => {
    return (
      <ModalHeader
        className={options[props.index].isActive ? "isActive" : ""}
        width={"70%"}
        marginBottom={"3%"}
        marginTop={"3%"}
        alignCenter={true}
        onClick={() => setActive(props.index)}
      >
        {props.index}
      </ModalHeader >
    )
  }

  return (
    <ModalContent className={showHideClassName}>
      {Object.keys(options).map(key => <Filter key={key} index={key} />)}
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </ModalContent>
  );
};

export default Modal;