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
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }

  const dayNames = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  ]

  const GetNumberOfDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const range = (start, end) => {
    const startDay = dayNames.indexOf((new Date(currentYear, currentMonth, 1)).toString().split(' ')[0]);
    const endDay = dayNames.indexOf((new Date(currentYear, currentMonth + 1, 0)).toString().split(' ')[0]);

    // Previous Month
    const lastMonthDays = GetNumberOfDaysInMonth(currentYear, currentMonth - 1);
    var prevMonth = [];
    for (var s = lastMonthDays - startDay + 1; s <= lastMonthDays; s++) {
      let item = { "day": s, "month": "false", "value": "false" }
      prevMonth.push(item);
    }
    //console.log(prevMonth);

    // Next Month
    if (endDay < 6) {
      var nextMonth = [];
      for (var e = endDay; e < 6; e++) {
        let item = { "day": e - endDay + 1, "month": "false", "value": "false" }
        nextMonth.push(item);
      }
      //console.log(nextMonth);
    }

    // This Month
    const lenght = Math.abs((end - start) / 1);
    var thisMonth = [];
    let currentDay = new Date().toLocaleString("fi-FI", { day: '2-digit' });
    currentDay = currentDay.replace(/^0+/, '');
    for (var m = 1; m <= lenght; m++) {
      let item = { "day": m, "month": "this", "value": `${m.toString() === currentDay ? "true" : "false"}` }
      thisMonth.push(item);
    }
    //console.log(thisMonth);

    var monthDays = [];
    if (nextMonth)
      monthDays = thisMonth.concat(nextMonth)
    if (prevMonth)
      monthDays = prevMonth.concat(nextMonth ? monthDays : thisMonth);

    // Extra week
    if (Object.keys(monthDays).length === 35 ||
      Object.keys(monthDays).length === 28) {

      var endVal = Object.keys(monthDays).length > 28 ? 7 : 14;
      var offset = Object.keys(monthDays).length > 28 ? 1 : 8;
      var extraOverlap = [];
      for (var i = 1; i <= endVal; i++) {
        let item = { "day": (endVal - offset) - endDay + i, "month": "false", "value": "false" }
        extraOverlap.push(item);
      }
      monthDays = monthDays.concat(extraOverlap);
    }

    console.log(monthDays);

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