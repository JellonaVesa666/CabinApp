import React, { useState, useEffect, useCallback } from "react";
import { Calendar, MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";
import { dayNames, monthNames, reservations } from "../mockup/calendarData";
import { ChangeState } from "../helpers/HelperFunctions";

export const CalendarModule = (props) => {
  const [currentMonthDays, setCurrentMonthDays] = useState();
  const [nextMonthDays, setNextMonthDays] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selected, setSelected] = useState({ 0: { "index": "", "day": "", "month": "", "year": "" }, 1: { "index": "", "day": "", "month": "", "year": "" }, bool: false });
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
  const range = useCallback((CurrentMonth) => {
    const startDay = dayNames.indexOf((new Date(currentYear, CurrentMonth, 1)).toString().toLowerCase().split(' ')[0]);
    //const endDay = dayNames.indexOf((new Date(currentYear, CurrentMonth + 1, 0)).toString().toLowerCase().split(' ')[0]);

    // Previous Month
    var prevMonth = {};
    const previousMonthLenght = new Date(currentYear, CurrentMonth, 0).getDate();
    for (var p = previousMonthLenght - startDay + 1; p <= previousMonthLenght; p++) {
      let item = { "day": p, "month": CurrentMonth, "reserved": false }
      prevMonth[p - (previousMonthLenght - startDay + 1)] = item;

      // Set Reserved
      let month = monthNames[CurrentMonth];
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
    const thisMonthLenght = new Date(currentYear, CurrentMonth + 1, 0).getDate();
    var thisMonth = {};
    for (var t = 0; t <= thisMonthLenght - 1; t++) {
      let item = { "day": t + 1, "month": CurrentMonth + 1, "reserved": false }
      thisMonth[t + Object.keys(prevMonth).length] = item;

      // Set Reserved
      let month = monthNames[CurrentMonth + 1];
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
      let item = { "day": start - (41 - n) + 1, "month": CurrentMonth + 2, "reserved": false }
      nextMonth[n + 1] = item;

      // Set Reserved
      let month = monthNames[CurrentMonth + 2];
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
    setCurrentMonthDays(range(currentMonth + 1));
  }, [range]);

  const SelectDate = (index) => {

    setClicks(clicks + 1);

    var month = (currentMonthDays[index].month === 0) ? (12) : ((currentMonthDays[index].month === 13) ? (1) : (currentMonthDays[index].month));
    var year = (currentMonthDays[index].month === 0) ? (currentYear - 1) : ((currentMonthDays[index].month === 13) ? (currentYear + 1) : (currentYear));

    if (selected.bool) {
      ChangeState(setSelected, index, "index", 0);
      ChangeState(setSelected, currentMonthDays[index].day, "day", 0);
      ChangeState(setSelected, month, "month", 0);
      ChangeState(setSelected, year, "year", 0);
      ChangeState(setSelected, !Boolean(selected.bool), "bool");
    }

    if (clicks % 2 === 0) {
      ChangeState(setSelected, !Boolean(selected.bool), "bool");
      ChangeState(setSelected, index, "index", 1);
      ChangeState(setSelected, currentMonthDays[index].day, "day", 1);
      ChangeState(setSelected, month, "month", 1);
      ChangeState(setSelected, year, "year", 1);
    }
    else {
      ChangeState(setSelected, index, "index", 0);
      ChangeState(setSelected, currentMonthDays[index].day, "day", 0);
      ChangeState(setSelected, month, "month", 0);
      ChangeState(setSelected, year, "year", 0);
    }
  }


  const rows = [];
  for (let i = 0; i < props.count; i++) {
    const test = currentMonth + 1;
    rows.push(
      <div
        className="col-5"
      >
        <MonthPanel>
          <p
            style={{ fontSize: "16px", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
            onClick={() => prevMonth()}
          >
            &#9664;
          </p>
          <p style={{ fontSize: "16px", color: "black", margin: "auto" }}>{monthNames[currentMonth + 1].toUpperCase()} / {currentYear}</p>
          <p
            style={{ fontSize: "16px", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
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
          {currentMonthDays && Object.keys(currentMonthDays).map((item, index) => {
            return (
              <>
                {!props.prevMonth && props.thisMonth && !props.nextMonth &&
                  currentMonthDays[item].month === currentMonth + 1 &&
                  <Days
                    key={index}
                    className={`
                      ${currentMonthDays[item].month === currentMonth + 1 ? "this" : ""} 
                      ${currentMonthDays[item].reserved === "true" ? "reserved" : ""} 
                      ${(index >= selected[0].index && index <= selected[1].index && selected.bool && selected[0].index < selected[1].index && !currentMonthDays[item].reserved) ||
                        (index <= selected[0].index && index >= selected[1].index && selected.bool && selected[0].index > selected[1].index && !currentMonthDays[item].reserved) ||
                        (!selected.bool && index === selected[0].index && !currentMonthDays[item].reserved) ? "active" : ""}
                    `}
                    onClick={() => SelectDate(index)}
                  >
                    {currentMonthDays[item].month === currentMonth + 1 &&
                      currentMonthDays[index].day
                    }
                  </Days>
                }
              </>
            )
          }
          )}
        </DayGrid>
      </div>)
  }
  return (rows)
}