import { ModalContent, ModalHeader, ModalCloseBtn, ModalLinkH4 } from "../styles/ModalStyle";

const Modal = ({ handleClose, setActive, show, options }) => {
  const showHideClassName = show ? "show" : "hide";

  const Filter = (props) => {
    return (
      <ModalHeader
        className={options[props.index].isActive ? "isActive" : ""}
        width={"80%"}
        marginBottom={"5%"}
        marginTop={"5%"}
        alignCenter={true}
        onClick={() => setActive(props.index)}
      >
        {props.index}
      </ModalHeader >
    )
  }

  return (
    <ModalContent className={showHideClassName} >
      <div style={{marginTop: "50px"}}>
      {Object.keys(options).map(key => <Filter key={key} index={key} />)}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleClose}
      >
        <ModalLinkH4 className="mt-2"
        >
          Close
        </ModalLinkH4>
      </div>
    </ModalContent>
  );
};

export default Modal;