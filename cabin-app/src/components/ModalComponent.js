import { ModalBody, ModalContent } from "../styles/ModalStyle";
import { SearchCardBody, CardHeader, AddButton, CardList, Container, CardBody, ListItem, MinusSign, DropDown } from "../styles/SearchCardStyle";

const Modal = ({ handleClose, setActive, show, options }) => {
  const showHideClassName = show ? "show" : "hide";

  const Filter = (props) => {
    return (
      <CardBody marginTop={"10%"}>
        <CardHeader width={"70%"} alignCenter={true} onClick={() => setActive(props.index)}>
          {props.index}
        </CardHeader>
      </CardBody >
    )
  }

  return (
    <ModalBody className={showHideClassName}>
      <ModalContent>
        <div>
          <div style={{ width: "80%", margin: "auto", height: "50%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            {Object.keys(options).map(key => <Filter key={key} index={key} />)}
          </div>
        </div>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </ModalContent>
    </ModalBody>
  );
};

export default Modal;