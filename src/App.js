import "./App.css";

import { ScheduleScreen } from "./screens/schedule.screen";
import { DayContextProvider } from "./services/day.context";
function App() {
  return (
    <DayContextProvider>
      <ScheduleScreen />
    </DayContextProvider>
  );
}

export default App;
