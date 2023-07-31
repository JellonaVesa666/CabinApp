import React, { useState, useEffect, useCallback } from "react";
import { MonthPanel, WeekGrid, Days, DayGrid } from "../styles/InputStyle";
import { dayNames, monthNames, reservations, day } from "../mockup/calendarData";
import { useSelector } from "react-redux";
import { DayToInt } from "../helpers/HelperFunctions";

export const CalendarModule = (props) => {
  const [currentMonthDays, setCurrentMonthDays] = useState();
  const [nextMonthDays, setNextMonthDays] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [clicks, setClicks] = useState(1);

  const language = useSelector(state => state.session.language);

  const NextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    }
    else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
    ResetSelected(0, false);
  }

  const PrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    }
    else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
    ResetSelected(0, false);
  }

  const Range = useCallback((CurrentMonth) => {
    let startDay = DayToInt(new Date(currentYear, CurrentMonth, 1).getDay());

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

    // Set day names 
    let x = 0;
    for (let i = 0; i < 42; i++) {
      merged[i].dayName = dayNames[x];
      if (x !== 6)
        x++
      else
        x = 0;
    }

    // Set initial date to active
    merged = InitialActiveDates(merged);

    //console.log(merged);
    return merged;

  }, [currentYear]);


  const InitialActiveDates = (merged) => {
    // If searchFilter values are empty
    if (props.value[0] === "" && props.value[1] === "") {
      for (let i = 0; i < 42; i++) {
        if (merged[i].month == props.defaultValue[0].month &&
          merged[i].day == props.defaultValue[0].day) {
          merged[i].active = true;
        }
      }
    }
    else {
      for (let i = 0; i < 42; i++) {
        // If date values are on same month
        if (merged[i].month == props.value[1].month && merged[i].month == props.value[0].month &&
          merged[i].day <= props.value[1].day && merged[i].day >= props.value[0].day) {
          merged[i].active = true;
        }
        // If date value is on current month
        else if (merged[i].month === props.value[0].month && merged[i].month !== props.value[1].month &&
          merged[i].day >= props.value[0].day) {
          merged[i].active = true;
        }
        // If date value is on next month
        else if (merged[i].month === props.value[1].month && merged[i].month !== props.value[0].month &&
          merged[i].day <= props.value[1].day) {
          merged[i].active = true;
        }
      }
      if (props.value[0].day === props.value[1].day && props.value[0].month === props.value[1].month) {
        setClicks(1);
      }
      else {
        setClicks(2);
      }
    }
    return merged;
  }

  useEffect(() => {
    setCurrentMonthDays(Range(currentMonth));
    setNextMonthDays(Range(currentMonth + 1));
  }, [Range, currentMonth]);


  const SelectDate = (item, month) => {

    setClicks(clicks + 1);

    if (clicks === 2) {
      ResetSelected(1);
    }

    if ((!currentMonthDays[item].active && currentMonthDays[item].month === month) ||
      (!nextMonthDays[item].active && nextMonthDays[item].month === month)) {

      if (clicks > 0) {

        SetActive(item, month, true);

        let selected = [{ 0: "" }, { 1: "" }];

        // Loop currentMonthDays and nextMonthDays to find min and max range for selected dates.
        selected = FindActiveRange(selected);

        // Sort values from min to max
        SortMinMax(selected);

        console.log(selected);

        // Set active days 
        SetActiveDaysByRange(selected);

        // Remove index before passing to changeState
        delete selected[0].index;
        delete selected[1].index;
        props.changeState(selected[0], 0)
        props.changeState(selected[1], 1)
      }
      else {
        SetActive(item, month, true);
      }
    }
    else {
      SetActive(item, month, false);
    }
  }

  const SetActive = (item, month, bool) => {
    if (month === currentMonth + 1) {
      currentMonthDays[item].active = bool;
    }
    else {
      nextMonthDays[item].active = bool;
    }
  }

  const ResetSelected = (clickCount, bool) => {
    for (let i = 0; i < 42; i++) {
      if (bool) {
        if (currentMonthDays[i].day === props.defaultValue[0].day)
          currentMonthDays[i].active = true;
        else
          currentMonthDays[i].active = false;

        nextMonthDays[i].active = false;
        setCurrentMonth(props.defaultValue[0].month - 1)
        setCurrentYear(props.defaultValue[0].year)
      }
      else {
        currentMonthDays[i].active = false;
        nextMonthDays[i].active = false;
      }
    }
    setClicks(clickCount);
  }

  const FindActiveRange = (selected) => {
    for (let i = 0; i < 42; i++) {
      if (currentMonthDays[i].active && currentMonthDays[i].month === currentMonth + 1) {
        console.log("A");
        selected[0] = {
          "index": i,
          "day": currentMonthDays[i].day,
          "dayName": currentMonthDays[i].dayName,
          "month": currentMonthDays[i].month,
          "monthName": currentMonthDays[i].monthName,
          "year": currentMonthDays[i].year
        };
        break;
      }
      else if (nextMonthDays[i].active && nextMonthDays[i].month === (currentMonth === 11 ? 1 : currentMonth + 2)) {
        console.log(nextMonthDays[i].month);
        selected[0] = {
          "index": i,
          "day": nextMonthDays[i].day,
          "dayName": nextMonthDays[i].dayName,
          "month": nextMonthDays[i].month,
          "monthName": nextMonthDays[i].monthName,
          "year": nextMonthDays[i].year
        };
        break;
      }
    }
    for (let i = 41; i >= 0; i--) {
      if (nextMonthDays[i].active && nextMonthDays[i].month === (currentMonth === 11 ? 1 : currentMonth + 2)) {
        console.log("C");
        selected[1] = {
          "index": i,
          "day": nextMonthDays[i].day,
          "dayName": nextMonthDays[i].dayName,
          "month": nextMonthDays[i].month,
          "monthName": nextMonthDays[i].monthName,
          "year": nextMonthDays[i].year
        };
        break;
      }
      else if (currentMonthDays[i].active && currentMonthDays[i].month === currentMonth + 1) {
        console.log("D");
        selected[1] = {
          "index": i,
          "day": currentMonthDays[i].day,
          "dayName": currentMonthDays[i].dayName,
          "month": currentMonthDays[i].month,
          "monthName": currentMonthDays[i].monthName,
          "year": currentMonthDays[i].year
        };
        break;
      }
    }
    return selected;
  }

  const SortMinMax = (selected) => {
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
  }

  const SetActiveDaysByRange = (selected) => {
    if (selected[0].month === currentMonth + 1) {

      if (selected[1].month === currentMonth + 1) {
        for (let i = selected[0].index; i < selected[1].index; i++) {
          currentMonthDays[i].active = true;
        }
      }
      else if ((selected[1].month === currentMonth + 2) || (selected[0].month === 12 && selected[1].month === 1)) {
        for (let i = selected[0].index; i < 42; i++) {
          currentMonthDays[i].active = true;
        }
        for (let i = 0; i < selected[1].index; i++) {
          nextMonthDays[i].active = true;
        }
      }
    }
    else if ((selected[0].month === currentMonth + 2) || (selected[1].month === 1)) {
      for (let i = selected[0].index; i < selected[1].index; i++) {
        nextMonthDays[i].active = true;
      }
    }
  }


  const rows = [];
  for (let i = 0; i < props.count; i++) {
    /// Needs optimization
    const calendarDays = (i === 0 ? currentMonthDays : nextMonthDays)
    const calendarInfo = calendarDays?.[Math.round(Object.keys?.(calendarDays).length) / 2];
    const calendarMonth = calendarInfo?.month;
    const calendarYear = calendarInfo?.year;
    rows.push(
      <div
        className="row"
        style={{ width: "45%" }}
      >
        <MonthPanel>
          {props.count > 1 &&
            <>
              {i === 0 &&
                <>
                  <p
                    style={{ fontSize: "20px", fontWeight: "500", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
                    onClick={() => PrevMonth()}
                  >
                    {"<"}
                  </p>
                  <p style={{ fontSize: "16px", fontWeight: "500", color: "black", margin: "auto" }}>{monthNames[calendarMonth]?.[language].toUpperCase()} / {calendarYear}</p>
                </>
              }
              {i === 1 &&
                <>

                  <p style={{ fontSize: "16px", fontWeight: "500", color: "black", margin: "auto" }}>{monthNames[calendarMonth]?.[language].toUpperCase()} / {calendarYear}</p>
                  <p
                    style={{ fontSize: "20px", fontWeight: "500", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
                    onClick={() => NextMonth()}
                  >
                    {">"}
                  </p>
                </>
              }
            </>
          }
        </MonthPanel>
        <WeekGrid>
          {dayNames.map((item, index) =>
            <p style={{ fontSize: "12px", color: "black" }} key={index}>{item[language].toUpperCase()}</p>
          )}
        </WeekGrid>
        <DayGrid>
          {calendarDays && Object.keys(calendarDays).map((item) => {
            return (
              <Days
                key={item}
                className={`
                    ${calendarDays[item].month === calendarMonth ? "this" : ""} 
                    ${props.reservations && calendarDays[item].reserved ? "reserved" : ""}
                    ${props.reservations && calendarDays[item].active && !calendarDays[item].reserved ? "active" : ""}
                    ${!props.reservations && calendarDays[item].active && calendarDays[item].year >= props.defaultValue[0].year ? "active" : ""}
                  `}
                onClick={() => {
                  if
                    ((calendarDays[item].year == props.defaultValue[0].year &&
                      calendarDays[item].month == props.defaultValue[0].month &&
                      calendarDays[item].day >= props.defaultValue[0].day)
                    ||
                    (
                      calendarDays[item].year == props.defaultValue[0].year &&
                      calendarDays[item].month > props.defaultValue[0].month
                    )
                    ||
                    (
                      calendarDays[item].year > props.defaultValue[0].year
                    )
                  )
                    SelectDate(item, calendarDays[item].month)
                }}
              >
                {calendarDays[item].day}
              </Days>
            )
          }
          )}
        </DayGrid>
      </div >
    )
  }

  return (
    <>
      {rows}
      <input type="button" name="" value="Reset"
        style={{ width: "20%" }}
        onClick={() => { ResetSelected(1, true) }}
      />
    </>
  )
}