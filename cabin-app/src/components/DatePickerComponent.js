import React, { useState } from "react";

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

    // Month start
    if (startDay > 0) {
      const lastMonthDays = GetNumberOfDaysInMonth(currentYear, currentMonth - 1);
      var monthStart = [];
      for (var i = lastMonthDays - startDay + 1; i <= lastMonthDays; i++) {
        monthStart.push(i);
      }
      //console.log(monthStart);
    }

    // Month end
    if (endDay < 6) {
      var monthEnd = [];
      for (var i = endDay; i < 6; i++) {
        monthEnd.push(i - endDay + 1);
      }
      //console.log(monthEnd);
    }

    // Month middle
    const lenght = Math.abs((end - start) / 1);
    var monthMiddle = [];
    for (var i = 1; i <= lenght; i++) {
      monthMiddle.push(i);
    }
    //console.log(monthMiddle);

    var monthDays = [];
    if (monthEnd)
      monthDays = monthMiddle.concat(monthEnd)
    if (monthStart)
      monthDays = monthStart.concat(monthEnd ? monthDays : monthMiddle);

    // Extra week
    if (Object.keys(monthDays).length == 35) {
      var extraOverlap = [];
      for (var i = 1; i <= 7; i++) {
        extraOverlap.push(6 - endDay + i);
      }
      monthDays = monthDays.concat(extraOverlap);
    }

    return monthDays;
  };

  return (
    <div style={{ width: "20%", height: "25%", border: "2px solid red", backgroundColor: "black", margin: 0, padding: 0 }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p
          style={{ fontSize: "30px", color: "white", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
          onClick={() => prevMonth()}
        >
          &#9664;
        </p>
        <p style={{ fontSize: "30px", color: "white", margin: "auto" }}>{monthNames[currentMonth + 1]}</p>
        <p
          style={{ fontSize: "30px", color: "white", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
          onClick={() => nextMonth()}
        >
          &#9654;
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
        {dayNames.map(day =>
          <p style={{ color: "white" }}>{day}</p>
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", color: "white" }}>
        {range(1, GetNumberOfDaysInMonth(currentYear, currentMonth) + 1).map((day) =>
          <p style={{ color: "white" }}>{day}</p>
        )}
      </div>
    </div>
  )
}