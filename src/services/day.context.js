import React, { createContext, useEffect, useState } from "react";
import { scheduleRequest, scheduleTransform } from "./day.service";

export const DayContext = createContext();

export const DayContextProvider = ({ children }) => {
  const [date, setDate] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dailySchedule, setDailySchedule] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    scheduleRequest()
      .then(scheduleTransform)
      .then((results) => {
        console.log(results);
        setIsLoading(false);
        setDailySchedule(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <DayContext.Provider value={{ dailySchedule, isLoading, error, date }}>
      {children}
    </DayContext.Provider>
  );
};
