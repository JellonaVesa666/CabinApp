import { ModalContent, ModalHeader, ModalLinkH4 } from "../styles/ModalStyle";
import { CalendarModule } from "./CalendarModule";

export const Modal = ({ closeModal, setActive, show, options }) => {

  const Filter = (props) => {
    if (options[props.index].hasOwnProperty("isActive")) {
      return (
        <ModalHeader
          className={options[props.index].isActive ? "true" : ""}
          width={"80%"}
          marginbottom={"5%"}
          margintop={"5%"}
          onClick={() => setActive(props.index)}
        >
          {props.index}
        </ModalHeader >
      )
    }
  }

  return (
    <ModalContent className={show.toString()} >
      <CalendarModule/>

      {/*       <div style={{ marginTop: "50px" }}>
        {Object.keys(options).map(key => <Filter key={key} index={key} />)}
      </div> */}
{/*       <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={closeModal}
      >
        <ModalLinkH4 className="mt-2"
        >
          Close
        </ModalLinkH4>
      </div> */}
    </ModalContent>
  );
};