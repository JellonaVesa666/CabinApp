import React, { useState, useEffect } from "react";
import { Calendar, MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";
import { ChangeState } from "../helpers/HelperFunctions";

export const DatePicker = () => {
  const [days, setDays] = useState();
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    Range(1, GetNumberOfDaysInMonth(year, month) + 1);
    console.log(days);
  }, []);

  const nextMonth = () => {
    if (month < 11) {
      setMonth((prev) => prev + 1);
    }
    else {
      setMonth(0);
      setYear((prev) => prev + 1);
    }
    Range(1, GetNumberOfDaysInMonth(year, month) + 1);
  }

  const prevMonth = () => {
    if (month > 0) {
      setMonth((prev) => prev - 1);
    }
    else {
      setMonth(11);
      setYear((prev) => prev - 1);
    }
    Range(1, GetNumberOfDaysInMonth(year, month) + 1);
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

  const Test = (day, month) => {
    days.forEach((item, index) => {
      if (item.day === day && item.month === month) {
        console.log(days[index]);
        const newIngredients = [...days];
        newIngredients[index] = {
          ...newIngredients[index],
          value: 'true'
        };
        setDays(newIngredients);
      }
    });
  }

  console.log(days);

  const Range = (start, end) => {
    const startDay = dayNames.indexOf((new Date(year, month, 1)).toString().split(' ')[0]);
    const endDay = dayNames.indexOf((new Date(year, month + 1, 0)).toString().split(' ')[0]);

    // Previous Month
    const lastMonthDays = GetNumberOfDaysInMonth(year, month - 1);
    var prevMonth = [];
    for (var s = lastMonthDays - startDay + 1; s <= lastMonthDays; s++) {
      let item = { "day": s, "month": "previous", "value": "false" }
      prevMonth.push(item);
    }
    //console.log(prevMonth);

    // Next Month
    if (endDay < 6) {
      var nextMonth = [];
      for (var e = endDay; e < 6; e++) {
        let item = { "day": e - endDay + 1, "month": "next", "value": "false" }
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
        let item = { "day": (endVal - offset) - endDay + i, "month": "next", "value": "false" }
        extraOverlap.push(item);
      }
      monthDays = monthDays.concat(extraOverlap);
    }

    setDays(monthDays);

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
        <p style={{ fontSize: "30px", color: "white", margin: "auto" }}>{monthNames[month + 1]} / {year}</p>
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
        {days !== undefined && days.map((item, index) => {
          return (
            <Days
              key={index}
              className={`${item.month} ${item.value}`}
              onClick={() => Test(item.day, item.month)}
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