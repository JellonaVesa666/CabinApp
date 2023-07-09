import React, { useState, useEffect } from "react";
import { Calendar, MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";

export const DatePicker = () => {
  const [currentDays, setCurrentDays] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    Range(1, GetNumberOfDaysInMonth(currentYear, currentMonth) + 1);
  }, []);

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    }
    else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
    Range(1, GetNumberOfDaysInMonth(currentYear, currentMonth) + 1);
  }

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    }
    else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
    Range(1, GetNumberOfDaysInMonth(currentYear, currentMonth) + 1);
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
      july: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
      ]
    },
    2022: {
      july: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
      ]
    }
  }

  const GetNumberOfDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const Test = (day, month) => {
    currentDays.forEach((item, index) => {
      if (item.day === day && item.month === month) {
        const newIngredients = [...currentDays];
        newIngredients[index] = {
          ...newIngredients[index],
          value: 'true'
        };
        setCurrentDays(newIngredients);
      }
    });
  }

  const Range = (start, end) => {
    const startDay = dayNames.indexOf((new Date(currentYear, currentMonth, 1)).toString().toLowerCase().split(' ')[0]);
    const endDay = dayNames.indexOf((new Date(currentYear, currentMonth + 1, 0)).toString().toLowerCase().split(' ')[0]);

    // Previous Month
    const prevMontLastDay = GetNumberOfDaysInMonth(currentYear, currentMonth - 1);
    var prevMonth = [];
    for (var p = prevMontLastDay - startDay + 1; p <= prevMontLastDay; p++) {
      let item = { "day": p, "month": "previous", "value": "false" }
      prevMonth.push(item);
    }
    //console.log(prevMonth);

    // Next Month
    if (endDay < 6) {
      var nextMonth = [];
      for (var n = endDay; n < 6; n++) {
        let item = { "day": n - endDay + 1, "month": "next", "value": "false" }
        nextMonth.push(item);
      }
      //console.log(nextMonth);
    }

    // This Month
    const lenght = Math.abs((end - start) / 1);
    var thisMonth = [];
    let currentDay = new Date().toLocaleString("fi-FI", { day: '2-digit' });
    currentDay = currentDay.replace(/^0+/, '');
    for (var t = 1; t <= lenght; t++) {
      let item = { "day": t, "month": "this", "value": "false" }
      thisMonth.push(item);

      let month = monthNames[currentMonth + 1];
      reservations[currentYear][month].forEach(element => {
        if (element === thisMonth[t - 1].day) {
          thisMonth[t - 1].value = "true"
        }
      });
    }

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
      for (var e = 1; e <= endVal; e++) {
        let item = { "day": (endVal - offset) - endDay + e, "month": "next", "value": "false" }
        extraOverlap.push(item);
      }
      monthDays = monthDays.concat(extraOverlap);
    }

    setCurrentDays(monthDays);
    //MarkDates(monthDays);
  };


/*   const MarkDates = (monthDays) => {
    //console.log(monthDays);
    let derp = [];
    Object.keys(reservations).forEach(year => {
      if (year === currentYear.toString()) {
        let test = monthNames[currentMonth + 1];
        reservations[year][test].forEach(day => {
          let item = { "day": day, "month": "this", "value": "false" }
          derp.push(item);
        })
      }
    });
    console.log(derp);
  } */

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
        {currentDays !== undefined && currentDays.map((item, index) => {
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