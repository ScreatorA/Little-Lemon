import BookingFormTwo from "./components/Main/Booking/BookingForm";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "./utils/api";
import { useNavigate } from "react-router-dom";

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
    case "NewYear": {
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: today,
    time: "16:00",
    occasion: "default",
    guests: 2,
  });

  const navigate = useNavigate();

  async function fetchAvailableTimes(date) {
    console.log("Fetching available times for date:", date);

    try {
      const availableTimes = await fetchAPI(new Date(date));
      console.log("API returned times:", availableTimes);

      dispatch({ type: "SET_TIMES", payload: availableTimes });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  }

  useEffect(() => {
    // Skip fetching for special dates
    if (
      formData.date === christmas ||
      formData.date === sylvester ||
      formData.date === newYear
    ) {
      return;
    }
    fetchAvailableTimes(formData.date); // Fetch available times based on the date
  }, [formData.date]);

  const handleSubmit = async (e) => {
    //e.preventDefault(); // Prevent page reload on form submission
    console.log("Form submitted!");
    try {
      const success = await submitAPI(formData);
      if (success) {
        console.log("Reservation successful!");

        navigate("/confirmBooking");
      } else {
        console.log("Booking failed.");
      }
    } catch (error) {
      console.error("Submit error: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });

    if (name === "date") {
      const dateObj = new Date(value); // Convert to Date object

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
          type: "NewYear",
        });
      } else if (dateObj.getDate() !== new Date(formData.date).getDate()) {
        fetchAvailableTimes(dateObj); // Refetch available times for the new date
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
