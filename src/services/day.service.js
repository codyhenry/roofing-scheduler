//get the schedule for a specific day
import day from "./day.mock.json";
export const scheduleRequest = () => {
  return new Promise((resolve, reject) => {
    if (!day) {
      reject("Not Found");
    }
    resolve(day);
  });
};

export const scheduleTransform = (result) => {
  return new Promise((resolve, reject) => {
    for (var item of result.schedules) {
      if (item["am"].length < 4) {
        item["am"] = item["am"].concat(Array(4 - item["am"].length).fill(""));
      }
      if (item["mid"].length < 4) {
        item["mid"] = item["mid"].concat(
          Array(4 - item["mid"].length).fill("")
        );
      }
      if (item["pm"].length < 4) {
        item["pm"] = item["pm"].concat(Array(4 - item["pm"].length).fill(""));
      }
    }
    resolve(result);
  });
};
