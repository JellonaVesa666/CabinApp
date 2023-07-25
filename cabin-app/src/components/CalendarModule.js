import React, { useState, useEffect, useCallback } from "react";
import { MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";
import { dayNames, monthNames, reservations, day } from "../mockup/calendarData";
import { ChangeState } from "../helpers/HelperFunctions";

export const CalendarModule = (props) => {
  const [currentMonthDays, setCurrentMonthDays] = useState();
  const [nextMonthDays, setNextMonthDays] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [clicks, setClicks] = useState(0);

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

    // Previous Month
    var prevMonth = {};
    const previousMonthLenght = new Date(currentYear, CurrentMonth, 0).getDate();
    for (var p = previousMonthLenght - startDay + 1; p <= previousMonthLenght; p++) {

      const item = Object.create(day);
      item.day = p;
      item.dayName = "";
      item.month = CurrentMonth;
      item.monthName = monthNames[CurrentMonth];
      item.reserved = false;
      item.active = false;

      prevMonth[p - (previousMonthLenght - startDay + 1)] = item;

      // Set Reserved
      let month = monthNames[CurrentMonth];
      let index = p - (previousMonthLenght - startDay + 1);
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (prevMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            prevMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            prevMonth[index].reserved = true;
          }
        });
      }
    }
    //console.log(prevMonth);

    // This Month
    const thisMonthLenght = new Date(currentYear, CurrentMonth + 1, 0).getDate();
    var thisMonth = {};
    for (var t = 0; t <= thisMonthLenght - 1; t++) {

      const item = Object.create(day);
      item.day = t + 1;
      item.dayName = "";
      item.month = CurrentMonth + 1;
      item.monthName = monthNames[CurrentMonth + 1];
      item.reserved = false;
      item.active = false;

      thisMonth[t + Object.keys(prevMonth).length] = item;

      // Set Reserved
      let month = monthNames[CurrentMonth + 1];
      let index = t + Object.keys(prevMonth).length;
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (thisMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            thisMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            thisMonth[index].reserved = true;
          }
        });
      }
    }
    //console.log(thisMonth);

    // Next Month
    var start = 42 - Object.keys(prevMonth).length - Object.keys(thisMonth).length;
    var nextMonth = {};
    for (var n = 41 - start; n < 41; n++) {

      const item = Object.create(day);
      item.day = start - (41 - n) + 1;
      item.dayName = "";
      item.month = CurrentMonth + 2;
      item.monthName = monthNames[CurrentMonth + 2];
      item.reserved = false;
      item.active = false;

      nextMonth[n + 1] = item;

      // Set Reserved
      let month = monthNames[CurrentMonth + 2];
      let index = n + 1;
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (nextMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            nextMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            nextMonth[index].reserved = true;
          }
        });
      }
    }
    //console.log(nextMonth);


    // Combine dates from each month
    let merged = { ...prevMonth, ...thisMonth, ...nextMonth };

    // Find day names 
    let x = 0;
    for (let index = 0; index < 42; index++) {
      merged[index].dayName = dayNames[x];
      if (x !== 6)
        x++
      else
        x = 0;
    }

    //console.log(merged);
    return merged;

  }, [currentMonth, currentYear]);


  useEffect(() => {
    setCurrentMonthDays(range(currentMonth));
    setNextMonthDays(range(currentMonth + 1));
  }, [range]);


  const SelectDate = (index) => {

    setClicks(clicks + 1);

    if (clicks === 2) {
      for (let i = 0; i < 42; i++) {
        currentMonthDays[i].active = false
      }

      setClicks(1);
    }

    if (clicks > 0) {
      let min = 0;
      let max = 0;

      if (!currentMonthDays[index].active) {
        currentMonthDays[index].active = true;

        for (let i = 0; i < 42; i++) {
          if (currentMonthDays[i].active) {
            min = i;
            break;
          }
        }
        for (let i = 41; i >= 0; i--) {
          if (currentMonthDays[i].active) {
            max = i;
            break;
          }

        }
        for (let i = min; i < max; i++) {
          currentMonthDays[i].active = true;
        }
      }
      else {
        currentMonthDays[index].active = false;
      }
    }
    else {
      currentMonthDays[index].active = true;
    }
  }

  const rows = [];
  for (let i = 0; i < 1; i++) {
    const calendarDays = (i === 0 ? currentMonthDays : nextMonthDays);
    const calendarMonth = (i === 0 ? currentMonth + 1 : currentMonth + 2);
    rows.push(
      <>
        <MonthPanel>
          <p
            style={{ fontSize: "30px", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
            onClick={() => prevMonth()}
          >
            &#9664;
          </p>
          <p style={{ fontSize: "30px", color: "black", margin: "auto" }}>{monthNames[calendarMonth].toUpperCase()} / {currentYear}</p>
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
          {calendarDays && Object.keys(calendarDays).map((item, index) => {

            return (
              <Days
                key={index}
                className={`
                  ${calendarDays[item].month === calendarMonth ? "this" : ""} 
                  ${calendarDays[item].reserved === true ? "reserved" : ""}
                  ${calendarDays[item].active === true ? "active" : ""}
                `}
                onClick={() => SelectDate(index)}
              >
                {calendarDays[index].day}
              </Days>
            )
          }
          )}
        </DayGrid>
      </>
    )
  }
  return (rows)
}