import React, { useState, useEffect, useCallback } from "react";
import { MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";
import { dayNames, monthNames, reservations, day } from "../mockup/calendarData";

export const CalendarModule = (props) => {
  const [currentMonthDays, setCurrentMonthDays] = useState();
  const [nextMonthDays, setNextMonthDays] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [clicks, setClicks] = useState(0);

  const NextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    }
    else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  }

  const PrevMonth = () => {
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
      item.month = CurrentMonth === 0 ? 12 : CurrentMonth;
      item.monthName = monthNames[item.month];
      item.year = CurrentMonth === 0 ? currentYear - 1 : currentYear;
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
      item.month = (CurrentMonth === 12) ? (1) : (CurrentMonth + 1);
      item.monthName = monthNames[item.month];
      item.year = (CurrentMonth === 12) ? currentYear + 1 : currentYear;
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
      item.month = (CurrentMonth === 11) ? (1) : (CurrentMonth === 12) ? (2) : (CurrentMonth + 2);
      item.monthName = monthNames[item.month];
      item.year = CurrentMonth === 11 ? currentYear + 1 : CurrentMonth === 12 ? currentYear + 1 : currentYear;
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

  }, [currentYear]);



  useEffect(() => {
    setCurrentMonthDays(range(currentMonth));
    setNextMonthDays(range(currentMonth + 1));
  }, [range, currentMonth]);

  const selectDate = (item, month, year) => {

    setClicks(clicks + 1);

    if (clicks === 2) {
      for (let i = 0; i < 42; i++) {
        setActiveStatus(i, currentMonth + 1, false);
        setActiveStatus(i, currentMonth + 2, false);
      }

      setClicks(1);
    }

    if ((!currentMonthDays[item].active && month) ||
      (!nextMonthDays[item].active && month)
    ) {

      if (clicks > 0) {
        let selected = [{ 0: "" }, { 1: "" }];

        setActiveStatus(item, month, true);

        for (let i = 0; i < 42; i++) {
          if (currentMonthDays[i].active) {
            selected[0] = { "day": i, "month": currentMonthDays[i].month, "year": currentMonthDays[i].year };
            break;
          }
          else if (nextMonthDays[i].active) {
            selected[0] = { "day": i, "month": nextMonthDays[i].month, "year": nextMonthDays[i].year };
            break;
          }
        }

        for (let i = 41; i >= 0; i--) {
          if (nextMonthDays[i].active) {
            selected[1] = { "day": i, "month": nextMonthDays[i].month, "year": nextMonthDays[i].year };
            break;
          }
          else if (currentMonthDays[i].active) {
            selected[1] = { "day": i, "month": currentMonthDays[i].month, "year": currentMonthDays[i].year };
            break;
          }
        }

        // Sort values from min to max
        selected.sort((a, b) => {
          // Sort by year
          if (a.year < b.year) return -1;
          if (a.year > b.year) return 1;
          // Sort by month
          if (a.month < b.month) return -1;
          if (a.month > b.month) return 1;
          // Sort by day
          if (a.day < b.day) return -1;
          if (a.day > b.day) return 1;
          return 0;
        });

        //console.log(JSON.stringify(selected));

        // Set active days 
        if (selected[0].month === currentMonth + 1) {

          if (selected[1].month === currentMonth + 1) {
            for (let i = selected[0].day; i < selected[1].day; i++) {
              currentMonthDays[i].active = true;
            }
          }
          else if ((selected[1].month === currentMonth + 2) || (selected[0].month === 12 && selected[1].month === 1)) {
            for (let i = selected[0].day; i < 42; i++) {
              currentMonthDays[i].active = true;
            }
            for (let i = 0; i < selected[1].day; i++) {
              nextMonthDays[i].active = true;
            }
          }
        }
        else if ((selected[0].month === currentMonth + 2) || (selected[1].month === 1)) {
          for (let i = selected[0].day; i < selected[1].day; i++) {
            nextMonthDays[i].active = true;
          }
        }
      }
      else {
        setActiveStatus(item, month, true);
      }
    }
    else {
      setActiveStatus(item, month, false);
    }
  }


  const setActiveStatus = (item, month, bool) => {
    if (month === currentMonth + 1) {
      currentMonthDays[item].active = bool;
    }
    else {
      nextMonthDays[item].active = bool;
    }
  }




  const rows = [];
  for (let i = 0; i < props.count; i++) {
    /// Needs optimization
    const calendarDays = (i === 0 ? currentMonthDays : nextMonthDays)
    const calendarMonth = (i === 0 ? currentMonth + 1 : currentMonth + 2 > 12 ? 1 : currentMonth + 2);
    rows.push(
      <>
        <MonthPanel>
          <p
            style={{ fontSize: "30px", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
            onClick={() => PrevMonth()}
          >
            &#9664;
          </p>
          <p style={{ fontSize: "30px", color: "black", margin: "auto" }}>{calendarMonth} / {currentYear}</p>
          <p
            style={{ fontSize: "30px", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
            onClick={() => NextMonth()}
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
          {calendarDays && Object.keys(calendarDays).map((item) => {
            return (
              <Days
                key={item}
                className={`
                  ${calendarDays[item].month === calendarMonth ? "this" : ""} 
                  ${calendarDays[item].reserved ? "reserved" : ""}
                  ${calendarDays[item].active && !calendarDays[item].reserved ? "active" : ""}
                `}
                onClick={() => selectDate(item, calendarDays[item].month, calendarDays[item].year)}
              >
                {calendarDays[item].day}
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