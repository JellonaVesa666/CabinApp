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

    // Month start overlap
    if (startDay > 0) {
      const lastMonthDays = GetNumberOfDaysInMonth(currentYear, currentMonth - 1);
      var startOverlap = [];
      for (var i = lastMonthDays - startDay + 1; i <= lastMonthDays; i++) {
        startOverlap.push(i);
      }
      //console.log(startOverlap);
    }

    // Month end overlap
    if (endDay < 6) {
      var endOverlap = [];
      for (var i = endDay; i < 6; i++) {
        endOverlap.push(i - endDay + 1);
      }
      //console.log(endOverlap);
    }


    const lenght = Math.abs((end - start) / 1);
    var array = [...Array(lenght).keys()];

    const { result } = array.reduce(
      ({ result, current }) => ({
        result: [...result, current],
        current: current + 1,
      }),
      { result: [], current: start }
    );

    var monthDays = [];
    if (endOverlap)
      monthDays = result.concat(endOverlap)
    if (startOverlap)
      monthDays = startOverlap.concat(endOverlap ? monthDays : result);


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