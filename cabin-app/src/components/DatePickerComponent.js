import React, { useState, useEffect, useCallback } from "react";
import { Calendar, MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";
import { dayNames, monthNames, reservations } from "../mockup/calendarData";

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
    const endDay = dayNames.indexOf((new Date(currentYear, currentMonth + 1, 0)).toString().toLowerCase().split(' ')[0]);

    // Previous Month
    var prevMonth = [];
    const previousMonthLenght = new Date(currentYear, currentMonth, 0).getDate();
    for (var p = previousMonthLenght - startDay + 1; p <= previousMonthLenght; p++) {
      let item = { "day": p, "month": "false", "reserved": "false", "active": false }
      prevMonth.push(item);

      // Set Date Selected
      let month = monthNames[currentMonth];
      let index = p - (previousMonthLenght - startDay + 1);
      /*       if (reservations[currentYear] && reservations[currentYear][month]) {
              Object.keys(reservations[currentYear][month]).forEach((element) => {
                if (prevMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
                  prevMonth[index].day <= reservations[currentYear][month][element].departureDate) {
                  prevMonth[index].reserved = "true"
                }
              });
            } */
    }
    //console.log(prevMonth);

    // Next Month
    if (endDay < 6) {
      var nextMonth = [];
      for (var n = endDay; n < 6; n++) {
        let item = { "day": n - endDay + 1, "month": "false", "reserved": "false", "active": false }
        nextMonth.push(item);

        // Set Date Selected
        let month = monthNames[currentMonth + 2];
        let index = n - endDay + 1 - 1;
        /*         if (reservations[currentYear] && reservations[currentYear][month]) {
                  Object.keys(reservations[currentYear][month]).forEach((element) => {
                    if (nextMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
                      nextMonth[index].day <= reservations[currentYear][month][element].departureDate) {
                      nextMonth[index].reserved = "true"
                    }
                  });
                } */
      }
    }
    //console.log(nextMonth);

    // This Month
    const thisMonthLenght = new Date(currentYear, currentMonth + 1, 0).getDate();
    var thisMonth = [];
    for (var t = 1; t <= thisMonthLenght; t++) {
      let item = { "day": t, "month": "this", "reserved": "false", "active": false }
      thisMonth.push(item);

      // Set Date Selected
      let month = monthNames[currentMonth + 1];
      let index = t - 1;
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (thisMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            thisMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            thisMonth[index].reserved = "true"
          }
        });
      }
    }
    //console.log(thisMonth);

    var monthDays = [];
    if (nextMonth)
      monthDays = thisMonth.concat(nextMonth)
    if (prevMonth)
      monthDays = prevMonth.concat(nextMonth ? monthDays : thisMonth);

    // Extra weeks
    if (Object.keys(monthDays).length === 35 ||
      Object.keys(monthDays).length === 28) {
      var endVal = Object.keys(monthDays).length > 28 ? 7 : 14;
      var offset = Object.keys(monthDays).length > 28 ? 1 : 8;
      var extraWeeks = [];
      for (var e = 1; e <= endVal; e++) {
        let item = { "day": (endVal - offset) - endDay + e, "month": "false", "reserved": "false", "active": false }
        extraWeeks.push(item);

        // Set Date Selected
        /*         let month = monthNames[currentMonth + 2];
                let index = e - 1;
                if (reservations[currentYear] && reservations[currentYear][month]) {
                  Object.keys(reservations[currentYear][month]).forEach((element) => {
                    if (extraWeeks[index].day >= reservations[currentYear][month][element].arrivalDate &&
                      extraWeeks[index].day <= reservations[currentYear][month][element].departureDate) {
                      extraWeeks[index].reserved = "true"
                    }
                  });
                } */
      }
      monthDays = monthDays.concat(extraWeeks);
    }
    //console.log(extraWeeks);

    return monthDays;
  }, [currentMonth, currentYear]);

  useEffect(() => {
    setCurrentDays(range());
  }, [range]);

  const Test = (day, month) => {
    currentDays.forEach((item, index) => {
      if (item.day === day && item.month === month) {
        if (currentDays[index].reserved === "false") {
          console.log(currentDays[index]);
          const newIngredients = [...currentDays];
          newIngredients[index] = {
            ...newIngredients[index],
            active: !newIngredients[index].active
          };
          setCurrentDays(newIngredients);
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
        {currentDays && currentDays.map((item, index) => {
          return (
            <Days
              key={index}
              className={`${item.month} ${item.reserved ? "reserved" : ""} ${item.active ? "active" : ""}`}
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