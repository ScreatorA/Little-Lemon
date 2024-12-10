import { useState } from "react";
import BookingFormThree from "./BookingFormThree";

const today = new Date().toISOString().split("T")[0];
export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: today,
    time: "16:00",
    guests: 1,
  });

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
  };

  return (
    <>
      <BookingFormThree
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
