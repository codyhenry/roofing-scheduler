//list for each slot of the times 9-1 10-2 1-4
//can move items from one schedule to the other -functionality is not on this component
//can move items between times - functionality is not on this component
import React, { useState, useContext } from "react";
import {
  ScheduleRow,
  ScheduleHeader,
} from "../schedule-row/schedule-row.component";
import { Schedule } from "./schedule-window.styles";

const initList = [
  {
    cityName: "coral springs",
    customerName: "jack",
    time: null,
  },
  {
    cityName: "parkland",
    customerName: "conner",
    time: null,
  },
  {
    cityName: "margate",
    customerName: "steven",
    time: null,
  },
];

export const TimeSlot = ({ schedule }) => {
  //gets am,pm,mid arrays
  // return <ScheduleRow slot={item} key={item.customerName} />;
  //should return 12 empty rows then fill in with data
  return (
    <Schedule>
      <ScheduleHeader />
      {/* am */}
      {schedule.am.map((time) => {
        return <ScheduleRow slot={time} time={"9-1"} />;
      })}
      {/* mid */}
      {schedule.mid.map((time) => {
        return <ScheduleRow slot={time} time={"10-2"} />;
      })}
      {/* pm */}
      {schedule.pm.map((time) => {
        return <ScheduleRow slot={time} time={"1-4"} />;
      })}
    </Schedule>
  );
};
