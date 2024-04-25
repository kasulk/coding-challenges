export function door(events: string): string {
  type Status = "open" | "closed" | "opening" | "closing" | "paused";

  let currStatus: Status = "closed";
  let prevStatus: Status = "closed";
  let count = 0;

  return [...events]
    .map((event) => {
      if (count === 0) currStatus = "closed";
      if (count === 5) currStatus = "open";

      if (currStatus === "closed") {
        if (event === ".") return 0;
        if (event === "P") {
          currStatus = "opening";
          return ++count;
        }
      }
      if (currStatus === "open") {
        if (event === ".") return 5;
        if (event === "P") {
          currStatus = "closing";
          return --count;
        }
      }

      if (currStatus === "opening") {
        if (event === ".") return ++count;
        if (event === "P") {
          prevStatus = currStatus;
          currStatus = "paused";
          return count;
        }
        if (event === "O") {
          currStatus = "closing";
          return --count;
        }
      }
      if (currStatus === "closing") {
        if (event === ".") return --count;
        if (event === "P") {
          prevStatus = currStatus;
          currStatus = "paused";
          return count;
        }
        if (event === "O") {
          currStatus = "opening";
          return ++count;
        }
      }

      if (currStatus === "paused") {
        if (event === ".") return count;

        if (event === "P") currStatus = prevStatus;
        if (currStatus === "opening") return ++count;
        if (currStatus === "closing") return --count;
      }
    })
    .join("");
}
