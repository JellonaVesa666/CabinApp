import React, { useState } from "react";
import { Calendar, MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";

export const DatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    }
    else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  }

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    }
    else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  }

  const monthNames = {
    1: "january",
    2: "february",
    3: "march",
    4: "april",
    5: "may",
    6: "june",
    7: "july",
    8: "august",
    9: "september",
    10: "october",
    11: "november",
    12: "december"
  }

  const dayNames = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
  ]

  const reservations = {
    2023: {
      april: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      },
      may: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      },
      june: {
        0: {
          arrivalDate: 1,
          departureDate: 3,
          name: ""
        },
        1: {
          arrivalDate: 6,
          departureDate: 8,
          name: ""
        }
      },
      july: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      },
      august: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      },
      september: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      }
    },
    2022: {
      0: {
        arrivalDate: 8,
        departureDate: 15,
        name: ""
      }
    }
  }

  const GetNumberOfDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const range = (start, end) => {
    const startDay = dayNames.indexOf((new Date(currentYear, currentMonth, 1)).toString().toLowerCase().split(' ')[0]);
    const endDay = dayNames.indexOf((new Date(currentYear, currentMonth + 1, 0)).toString().toLowerCase().split(' ')[0]);

    // Previous Month
    const lastMonthDays = GetNumberOfDaysInMonth(currentYear, currentMonth - 1);
    var prevMonth = [];
    for (var p = lastMonthDays - startDay + 1; p <= lastMonthDays; p++) {
      let item = { "day": p, "month": "false", "value": "false" }
      prevMonth.push(item);

      // Set Date Selected
      let month = monthNames[currentMonth];
      let index = p - (lastMonthDays - startDay + 1);
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (prevMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            prevMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            prevMonth[index].value = "true"
          }
        });
      }
    }
    //console.log(prevMonth);

    // Next Month
    if (endDay < 6) {
      var nextMonth = [];
      for (var n = endDay; n < 6; n++) {
        let item = { "day": n - endDay + 1, "month": "false", "value": "false" }
        nextMonth.push(item);

        // Set Date Selected
        let month = monthNames[currentMonth + 2];
        let index = n - endDay + 1 - 1;
        if (reservations[currentYear] && reservations[currentYear][month]) {
          Object.keys(reservations[currentYear][month]).forEach((element) => {
            if (nextMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
              nextMonth[index].day <= reservations[currentYear][month][element].departureDate) {
              nextMonth[index].value = "true"
            }
          });
        }
      }
    }
    //console.log(nextMonth);

    // This Month
    const lenght = Math.abs((end - start) / 1);
    var thisMonth = [];
    //let currentDay = new Date().toLocaleString("fi-FI", { day: '2-digit' });
    //currentDay = currentDay.replace(/^0+/, '');
    for (var t = 1; t <= lenght; t++) {
      let item = { "day": t, "month": "this", "value": "false" }
      thisMonth.push(item);

      // Set Date Selected
      let month = monthNames[currentMonth + 1];
      let index = t - 1;
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          console.log(thisMonth[index].day);
          if (thisMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            thisMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            thisMonth[index].value = "true"
          }
        });
      }
    }
    //console.log(thisMonth);

    var monthDays = [];
    if (nextMonth)
      monthDays = thisMonth.concat(nextMonth)
    if (prevMonth)
      monthDays = prevMonth.concat(nextMonth ? monthDays : thisMonth);

    // Extra weeks
    if (Object.keys(monthDays).length === 35 ||
      Object.keys(monthDays).length === 28) {
      var endVal = Object.keys(monthDays).length > 28 ? 7 : 14;
      var offset = Object.keys(monthDays).length > 28 ? 1 : 8;
      var extraWeeks = [];
      for (var e = 1; e <= endVal; e++) {
        let item = { "day": (endVal - offset) - endDay + e, "month": "false", "value": "false" }
        extraWeeks.push(item);

        // Set Date Selected
        let month = monthNames[currentMonth + 2];
        let index = e - 1;
        if (reservations[currentYear] && reservations[currentYear][month]) {
          Object.keys(reservations[currentYear][month]).forEach((element) => {
            if (extraWeeks[index].day >= reservations[currentYear][month][element].arrivalDate &&
              extraWeeks[index].day <= reservations[currentYear][month][element].departureDate) {
              extraWeeks[index].value = "true"
            }
          });
        }
      }
      monthDays = monthDays.concat(extraWeeks);
    }
    //console.log(extraWeeks);

    //console.log(monthDays);
    return monthDays;
  };

  return (
    <Calendar>
      <MonthPanel>
        <p
          style={{ fontSize: "30px", color: "white", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
          onClick={() => prevMonth()}
        >
          &#9664;
        </p>
        <p style={{ fontSize: "30px", color: "white", margin: "auto" }}>{monthNames[currentMonth + 1]} / {currentYear}</p>
        <p
          style={{ fontSize: "30px", color: "white", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
          onClick={() => nextMonth()}
        >
          &#9654;
        </p>
      </MonthPanel>
      <WeekGrid>
        {dayNames.map((item, index) =>
          <p style={{ color: "white" }} key={index}>{item}</p>
        )}
      </WeekGrid>
      <DayGrid>
        {range(1, GetNumberOfDaysInMonth(currentYear, currentMonth) + 1).map((item, index) => {
          return (
            <Days
              key={index}
              className={`${item.month} ${item.value}`}
              onClick={() => console.log(item.day)}
            >
              {item.day}
            </Days>
          )
        }
        )}
      </DayGrid>
    </Calendar >
  )
}