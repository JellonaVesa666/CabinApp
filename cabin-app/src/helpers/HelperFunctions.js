import { dayNames, monthNames } from "../mockup/calendarData";

export const ChangeState = (State, newValue, property, index1, index2) => {
  if (index1 === undefined && index2 === undefined) {
    State((prevState) => ({ ...prevState, [property]: newValue }))
  }
  else if (index2 === null || index2 === undefined) {
    State((prevState) => ({
      ...prevState, [index1]: { ...prevState[index1], [property]: newValue },
    }));
  }
  else {
    State((prevState) => ({
      ...prevState,
      [index1]: {
        ...prevState[index1],
        [index2]: {
          ...prevState[index1][index2],
          [property]: newValue
        },
      },
    }));
  }
}


export const DayToInt = (day) => {
  day = day - 1 < 0 ? 6 : day - 1;
  return day;
}


export const GetCurrentDate = () => {
  const currentDate = new Date();

  const day = dayNames[DayToInt(currentDate.getDay())];
  const date = currentDate.getDate();
  const month = monthNames[currentDate.getMonth() + 1];
  const year = currentDate.getFullYear();

  return ({ day, date, month, year })
}