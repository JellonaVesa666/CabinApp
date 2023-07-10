import React, { useState, useEffect, useCallback } from "react";
import { Calendar, MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";
import { dayNames, monthNames, reservations } from "../mockup/calendarData";
import { ChangeState } from "../helpers/HelperFunctions";

export const DatePicker = () => {
  const [currentDays, setCurrentDays] = useState();
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

  const range = useCallback(() => {
    const startDay = dayNames.indexOf((new Date(currentYear, currentMonth, 1)).toString().toLowerCase().split(' ')[0]);
    //const endDay = dayNames.indexOf((new Date(currentYear, currentMonth + 1, 0)).toString().toLowerCase().split(' ')[0]);

    // Previous Month
    var prevMonth = {};
    const previousMonthLenght = new Date(currentYear, currentMonth, 0).getDate();
    for (var p = previousMonthLenght - startDay + 1; p <= previousMonthLenght; p++) {
      let item = { "day": p, "month": monthNames[currentMonth], "reserved": "false", "active": false }
      prevMonth[p - (previousMonthLenght - startDay + 1)] = item;

      // Set Date Selected
      /*       let month = monthNames[currentMonth];
            let index = p - (previousMonthLenght - startDay + 1);
            if (reservations[currentYear] && reservations[currentYear][month]) {
              Object.keys(reservations[currentYear][month]).forEach((element) => {
                if (prevMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
                  prevMonth[index].day <= reservations[currentYear][month][element].departureDate) {
                  prevMonth[index].reserved = "true"
                }
              });
            } */
    }
    //console.log(prevMonth);

    // This Month
    const thisMonthLenght = new Date(currentYear, currentMonth + 1, 0).getDate();
    var thisMonth = {};
    for (var t = 1; t <= thisMonthLenght; t++) {
      let item = { "day": t, "month": monthNames[currentMonth + 1], "reserved": "false", "active": false }
      thisMonth[t + Object.keys(prevMonth).length] = item;

      // Set Date Selected
      let month = monthNames[currentMonth + 1];
      let index = t + Object.keys(prevMonth).length;
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (thisMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            thisMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            thisMonth[index].reserved = "true";
          }
        });
      }
    }
    //console.log(thisMonth);

    // Next Month
    var start = 42 - Object.keys(prevMonth).length - Object.keys(thisMonth).length;
    var nextMonth = {};
    for (var n = 42 - start; n < 42; n++) {
      let item = { "day": start - (42 - n) + 1, "month": monthNames[currentMonth + 2], "reserved": "false", "active": false }
      nextMonth[n + 1] = item;

      // Set Date Selected
      /*         let month = monthNames[currentMonth + 2];
              let index = n - endDay + 1 - 1;
              if (reservations[currentYear] && reservations[currentYear][month]) {
                Object.keys(reservations[currentYear][month]).forEach((element) => {
                  if (nextMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
                    nextMonth[index].day <= reservations[currentYear][month][element].departureDate) {
                    nextMonth[index].reserved = "true"
                  }
                });
              } */
    }
    //console.log(nextMonth);

    let merged = { ...prevMonth, ...thisMonth, ...nextMonth };
    //console.log(merged);

    return merged;

  }, [currentMonth, currentYear]);

  useEffect(() => {
    setCurrentDays(range());
  }, [range]);

  const Test = (day, month) => {
    Object.keys(currentDays).forEach((index) => {
      if (currentDays[index].month === month) {
        if (currentDays[index].reserved === "false") {
          if (currentDays[index].day === day) {
            ChangeState(setCurrentDays, currentDays, !currentDays[index].active, "active", index);
          }
        }
      }
    });
  }

  return (
    <Calendar>
      <MonthPanel>
        <p
          style={{ fontSize: "30px", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
          onClick={() => prevMonth()}
        >
          &#9664;
        </p>
        <p style={{ fontSize: "30px", color: "black", margin: "auto" }}>{monthNames[currentMonth + 1].toUpperCase()} / {currentYear}</p>
        <p
          style={{ fontSize: "30px", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
          onClick={() => nextMonth()}
        >
          &#9654;
        </p>
      </MonthPanel>
      <WeekGrid>
        {dayNames.map((item, index) =>
          <p style={{ color: "black" }} key={index}>{item.toUpperCase()}</p>
        )}
      </WeekGrid>
      <DayGrid>
        {currentDays && Object.keys(currentDays).map((item, index) => {
          return (
            <Days
              key={index}
              className={`
                  ${currentDays[item].month === monthNames[currentMonth + 1] ? "this" : ""} 
                  ${currentDays[item].reserved === "true" ? "reserved" : ""} 
                  ${currentDays[item].active ? "active" : ""}
                `}
              onClick={() => Test(currentDays[item].day, currentDays[item].month)}
            >
              {currentDays[item].day}
            </Days>
          )
        }
        )}
      </DayGrid>
    </Calendar >
  )
}