//weekly schedule
//print out schedule which has am,pm,mid arrays
//gets context for a specific day
import React, { useState, useContext } from "react";
import { TimeSlot } from "../components/schedule-window/schedule-window.component";

import { DayContext } from "../services/day.context";

//at least 2 schedules per day
export const ScheduleScreen = () => {
  const { dailySchedule, isLoading, error, date } = useContext(DayContext);
  const [count, setCount] = useState(0);

  //each schedule has am,pm,mid
  //dailySchedule.schedules.map <TimeSlot/>

  return (
    <>
      {count}
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        dailySchedule.schedules.map((schedule, index) => {
          return <TimeSlot schedule={schedule} key={`schedule-${index}`} />;
        })
      )}
    </>
  );

  // return dailySchedule.schedules.map((schedule, index) => {
  //   return <TimeSlot schedule={schedule} key={`schedule-${index}`} />;
  // });
};
