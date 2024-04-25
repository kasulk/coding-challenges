export function door(events: string): string {
  type Status = "open" | "closed" | "opening" | "closing" | "paused";

  let status: Status = "closed";
  let prevStatus: Status = "closed";
  let count = 0;

  return [...events]
    .map((event) => {
      if (count === 0) status = "closed";
      if (count === 5) status = "open";

      if (status === "paused") {
        if (event === ".") return count;

        if (event === "P") status = prevStatus;
        if (status === "opening") return ++count;
        if (status === "closing") return --count;
      }

      if (status === "closed") {
        if (event === ".") return 0;
        if (event === "P") {
          status = "opening";
          return ++count;
        }
      }
      if (status === "open") {
        if (event === ".") return 5;
        if (event === "P") {
          status = "closing";
          return --count;
        }
      }

      if (status === "opening") {
        if (event === ".") return ++count;
        if (event === "P") {
          prevStatus = status;
          status = "paused";
          return count;
        }
        if (event === "O") {
          status = "closing";
          return --count;
        }
      }
      if (status === "closing") {
        if (event === ".") return --count;
        if (event === "P") {
          prevStatus = status;
          status = "paused";
          return count;
        }
        if (event === "O") {
          status = "opening";
          return ++count;
        }
      }
    })
    .join("");
}
