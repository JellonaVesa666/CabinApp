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

export const GetCurrentDate = (add) => {

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + add)

  let dayName = dayNames[DayToInt(currentDate.getDay())];
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let monthName = monthNames[month];
  let year = currentDate.getFullYear();

  const lastDay = new Date(new Date().getFullYear(), 11, 31).toString().split(/[ ,]+/);

  // Check addition exceeds the amount of days in the year
  if (add > 0) {
    if (month === 11 && day === lastDay[2]) {
      dayName = dayNames[DayToInt(new Date(new Date().getFullYear() + 1, 0, 1).getDay())];
      day = 1;
      month = 1;
      monthName = monthNames[month];
      year += 1;
    }
  }

  return ({ dayName, day, month, monthName, year })
}