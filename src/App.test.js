import { fireEvent, render, screen } from "@testing-library/react";
import { updateTimes } from "./Reservations"; // Adjust the import path as needed

describe("updateTimes", () => {
  const initialState = {
    time: [
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
      "22:30",
      "23:00",
      "23:30",
    ],
  };

  test("should update times for SET_TIMES action", () => {
    const newTimes = ["12:00", "12:30", "13:00"];
    const action = { type: "SET_TIMES", payload: newTimes };
    const result = updateTimes(initialState, action);
    expect(result.time).toEqual(newTimes);
  });

  test("should update times for Christmas action", () => {
    const action = { type: "Christmas" };
    const result = updateTimes(initialState, action);
    expect(result.time).toEqual(["18:00", "18:30", "19:00", "19:30", "20:00"]);
  });

  test("should update times for Sylvester action", () => {
    const action = { type: "Sylvester" };
    const result = updateTimes(initialState, action);
    expect(result.time).toEqual([
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
    ]);
  });

  test("should update times for New Year action", () => {
    const action = { type: "New Year" };
    const result = updateTimes(initialState, action);
    expect(result.time).toEqual([
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
    ]);
  });

  test("should return the current state for unknown action types", () => {
    const action = { type: "UNKNOWN_ACTION" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
