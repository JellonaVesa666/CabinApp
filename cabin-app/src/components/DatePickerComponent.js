import React, { useState, useEffect } from "react";
import { Calendar, MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";

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

  useEffect(() => {
    setCurrentDays(Range());
  }, [currentMonth]);

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
      april: {
        0: {
          arrivalDate: 1,
          departureDate: 8,
          name: ""
        }
      },
      may: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      },
      june: {
        0: {
          arrivalDate: 1,
          departureDate: 3,
          name: ""
        },
        1: {
          arrivalDate: 6,
          departureDate: 8,
          name: ""
        }
      },
      july: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      },
      august: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      },
      september: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      }
    },
    2022: {
      september: {
        0: {
          arrivalDate: 8,
          departureDate: 15,
          name: ""
        }
      }
    }
  }


  const Range = () => {
    const startDay = dayNames.indexOf((new Date(currentYear, currentMonth, 1)).toString().toLowerCase().split(' ')[0]);
    const endDay = dayNames.indexOf((new Date(currentYear, currentMonth + 1, 0)).toString().toLowerCase().split(' ')[0]);

    // Previous Month
    var prevMonth = [];
    const previousMonthLenght = new Date(currentYear, currentMonth, 0).getDate();
    for (var p = previousMonthLenght - startDay + 1; p <= previousMonthLenght; p++) {
      let item = { "day": p, "month": "false", "reserved": "false" }
      prevMonth.push(item);

      // Set Date Selected
      let month = monthNames[currentMonth];
      let index = p - (previousMonthLenght - startDay + 1);
      if (reservations[currentYear] && reservations[currentYear][month]) {
        Object.keys(reservations[currentYear][month]).forEach((element) => {
          if (prevMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
            prevMonth[index].day <= reservations[currentYear][month][element].departureDate) {
            prevMonth[index].reserved = "true"
          }
        });
      }
    }
    //console.log(prevMonth);

    // Next Month
    if (endDay < 6) {
      var nextMonth = [];
      for (var n = endDay; n < 6; n++) {
        let item = { "day": n - endDay + 1, "month": "false", "reserved": "false" }
        nextMonth.push(item);

        // Set Date Selected
        let month = monthNames[currentMonth + 2];
        let index = n - endDay + 1 - 1;
        if (reservations[currentYear] && reservations[currentYear][month]) {
          Object.keys(reservations[currentYear][month]).forEach((element) => {
            if (nextMonth[index].day >= reservations[currentYear][month][element].arrivalDate &&
              nextMonth[index].day <= reservations[currentYear][month][element].departureDate) {
              nextMonth[index].reserved = "true"
            }
          });
        }
      }
    }
    //console.log(nextMonth);

    // This Month
    const thisMonthLenght = new Date(currentYear, currentMonth + 1, 0).getDate();
    var thisMonth = [];
    for (var t = 1; t <= thisMonthLenght; t++) {
      let item = { "day": t, "month": "this", "reserved": "false" }
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
        let item = { "day": (endVal - offset) - endDay + e, "month": "false", "reserved": "false" }
        extraWeeks.push(item);

        // Set Date Selected
        let month = monthNames[currentMonth + 2];
        let index = e - 1;
        if (reservations[currentYear] && reservations[currentYear][month]) {
          Object.keys(reservations[currentYear][month]).forEach((element) => {
            if (extraWeeks[index].day >= reservations[currentYear][month][element].arrivalDate &&
              extraWeeks[index].day <= reservations[currentYear][month][element].departureDate) {
              extraWeeks[index].reserved = "true"
            }
          });
        }
      }
      monthDays = monthDays.concat(extraWeeks);
    }
    //console.log(extraWeeks);

    return monthDays;
  };

  const Test = (day, month) => {
    console.log(day + "    " + month);
    currentDays.forEach((item, index) => {

      if (item.day === day && item.month === month) {
        console.log(currentDays[index]);
        /*         const newIngredients = [...currentDays];
                newIngredients[index] = {
                  ...newIngredients[index],
                  reserved: 'true'
                };
                setCurrentDays(newIngredients); */
      }
    });
  }

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
        {currentDays && currentDays.map((item, index) => {
          return (
            <Days
              key={index}
              className={`${item.month} ${item.reserved}`}
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