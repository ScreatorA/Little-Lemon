import BookingFormTwo from "./components/Main/Booking/BookingFormTwo";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "./utils/api";

const today = new Date().toISOString().split("T")[0]; // Date of today

const [year, month, day] = today.split("-"); // Date of today
const newYear = `${year}-01-01`;
const christmas = `${year}-12-24`;
const sylvester = `${year}-12-31`;

export function updateTimes(state, action) {
  switch (action.type) {
    case "SET_TIMES": {
      return {
        ...state,
        time: action.payload,
      };
    }
    case "Christmas": {
      return {
        ...state,
        time: ["18:00", "18:30", "19:00", "19:30", "20:00"], // Set Christmas times
      };
    }
    case "Sylvester": {
      return {
        ...state,
        time: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
      };
    }
    case "New Year": {
      return {
        ...state,
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
        ],
      };
    }
    default: {
      return state;
    }
  }
}

const initializeTimes = () => ({
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
});

export default function Reservations() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  // useEffect(() => {
  //   async function fetchData(){
  //     try {
  //     const response = await fetch(
  //       "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
  //     );
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Fetch error: ", error);
  //   }
  // }}, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: today,
    time: "17:00",
    occasion: "date",
    guests: 2,
  });

  useEffect(() => {
    async function fetchAvailableTimes() {
      try {
        const availableTimes = await fetchAPI(today);
        if (!availableTimes.ok) {
          throw new Error(`HTTP error! status: ${availableTimes.status}`);
        }
        console.log(availableTimes);
        dispatch({ type: "SET_TIMES", payload: availableTimes });
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    }
    fetchAvailableTimes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    console.log("Form submitted!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "date") {
      if (value === christmas) {
        dispatch({
          type: "Christmas",
        });
      } else if (value === sylvester) {
        dispatch({
          type: "Sylvester",
        });
      } else if (value === newYear) {
        dispatch({
          type: "New Year",
        });
      } else {
        dispatch({
          type: "SET_TIMES",
          payload: initializeTimes().time,
        });
      }
    }
  };

  return (
    <>
      <BookingFormTwo
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        reservationTimes={state}
      />
    </>
  );
}
