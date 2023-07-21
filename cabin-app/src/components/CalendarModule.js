import React, { useState, useEffect, useCallback } from "react";
import { Calendar, MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";
import { dayNames, monthNames, reservations } from "../mockup/calendarData";
import { ChangeState } from "../helpers/HelperFunctions";

export const CalendarModule = () => {
  const [currentDays, setCurrentDays] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selected, setSelected] = useState({ 0: "", 1: "", bool: false });
  const [clicks, setClicks] = useState(1);

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
      let item = { "day": p, "month": monthNames[currentMonth], "reserved": "false" }
      prevMonth[p - (previousMonthLenght - startDay + 1)] = item;

      // Set Reserved
      let month = monthNames[currentMonth];
      let index = p - (previousMonthLenght - startDay + 1);
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (prevMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            prevMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            prevMonth[index].reserved = "true";
          }
        });
      }
    }
    //console.log(prevMonth);

    // This Month
    const thisMonthLenght = new Date(currentYear, currentMonth + 1, 0).getDate();
    var thisMonth = {};
    for (var t = 0; t <= thisMonthLenght - 1; t++) {
      let item = { "day": t + 1, "month": monthNames[currentMonth + 1], "reserved": "false" }
      thisMonth[t + Object.keys(prevMonth).length] = item;

      // Set Reserved
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
    for (var n = 41 - start; n < 41; n++) {
      let item = { "day": start - (41 - n) + 1, "month": monthNames[currentMonth + 2], "reserved": "false" }
      nextMonth[n + 1] = item;

      // Set Reserved
      let month = monthNames[currentMonth + 2];
      let index = n + 1;
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (nextMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            nextMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            nextMonth[index].reserved = "true";
          }
        });
      }
    }
    //console.log(nextMonth);

    let merged = { ...prevMonth, ...thisMonth, ...nextMonth };
    //console.log(merged);

    return merged;

  }, [currentMonth, currentYear]);

  useEffect(() => {
    setCurrentDays(range());
  }, [range]);

  const SelectDate = (index) => {

    setClicks(clicks + 1);

    if (selected.bool) {
      ChangeState(setSelected, index, 0);
      ChangeState(setSelected, !Boolean(selected.bool), "bool");
    }

    if (clicks % 2 === 0) {
      ChangeState(setSelected, !Boolean(selected.bool), "bool");
      ChangeState(setSelected, index, 1);
    }
    else {
      ChangeState(setSelected, index, 0);
    }
  }

  console.log(selected);

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
                  ${(index >= selected[0] && index <= selected[1] && selected.bool && selected[0] < selected[1]) ||
                  (index <= selected[0] && index >= selected[1] && selected.bool && selected[0] > selected[1])
                  || (!selected.bool && index === selected[0]) ? "active" : ""}
                `}
              onClick={() => SelectDate(index)}
            >
              {currentDays[index].day}
            </Days>
          )
        }
        )}
      </DayGrid>
    </Calendar >
  )
}