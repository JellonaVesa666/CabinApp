import { ModalContent, ModalHeader, ModalLinkH4 } from "../styles/ModalStyle";
import { CalendarModule } from "./CalendarModule";

export const Modal = (props) => {

  /*   const Filter = (props) => {
      if (options[props.index].hasOwnProperty("isActive")) {
        return (
          <ModalHeader
            className={options[props.index].isActive ? "true" : ""}
            width={"80%"}
            marginbottom={"5%"}
            margintop={"5%"}
            onClick={() => props.setActive(props.index)}
          >
            {props.index}
          </ModalHeader >
        )
      }
    }
   */
  if (props.filter) {
    const result = Object.keys(props.options[props.filter]).filter((i) => typeof i === "string" && !isNaN(i));
    return (
      <ModalContent>
        <CalendarModule
          prevMonth={props.options[props.filter].prevMonth}
          thisMonth={props.options[props.filter].thisMonth}
          nextMonth={props.options[props.filter].nextMonth}
          count={props.options[props.filter].count}
        />
      </ModalContent>
    );
  }
};



{/*           <CalendarModule  prevMonth={props.options?.[props.filter][0].prevMonth} thisMonth={props.options?.[props.filter][0].thisMonth} nextMonth={props.options?.[props.filter][0].nextMonth}/>
          <CalendarModule /> */}

{/*       <div style={{ marginTop: "50px" }}>
        {Object.keys(options).map(key => <Filter key={key} index={key} />)}
      </div> */}
{/*       <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={props.closeModal}
      >
        <ModalLinkH4 className="mt-2"
        >
          Close
        </ModalLinkH4>
      </div> */}

      //<div className="d-flex justify-content-evenly align-items-center ">