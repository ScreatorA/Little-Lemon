import "./BookingForm.css";
import { useState, useRef } from "react";
import { Formik } from "formik";


export default function BookingForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const formRefs = useRef({});

  const focusField = (fieldName) => {
    formRefs.current[fieldName]?.focus();
  };

  const reservationTime = [
    { time: "16:00", label: "16:00" },
    { time: "16:30", label: "16:30" },
    { time: "17:00", label: "17:00" },
    { time: "17:30", label: "17:30" },
    { time: "18:00", label: "18:00" },
    { time: "18:30", label: "18:30" },
    { time: "19:00", label: "19:00" },
    { time: "19:30", label: "19:30" },
    { time: "20:00", label: "20:00" },
    { time: "20:30", label: "20:30" },
    { time: "21:00", label: "21:00" },
    { time: "21:30", label: "21:30" },
    { time: "22:00", label: "22:00" },
    { time: "22:30", label: "22:30" },
    { time: "23:00", label: "23:00" },
  ];

  const occasion = [
    { event: "justLoveFood", label: "Foodie/s" },
    { event: "birthday", label: "Birthday" },
    { event: "date", label: "Date" },
    { event: "firstDate", label: "First Date" },
    { event: "engagement", label: "Engagement" },
    { event: "anniversary", label: "Anniversary" },
    { event: "firstJob", label: "First Job" },
    { event: "jobPromotion", label: "Job Promotion" },
    { event: "teamCeleberation", label: "Team Celebration" },
    { event: "gatheringUp", label: "Gathering Up" },
    { event: "reunion", label: "Reunion" },
  ];

  return (
    <div>
      <h1>Make a Reservation</h1>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        {/* Form First Name */}
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            ref={(el) => (formRefs.current["firstName"] = el)}
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            autoFocus
          />
          <button
            type='button'
            onClick={() => focusField("firstName")}
            className='focusButton'
          >
            Focus on First Name
          </button>
        </div>

        {/* Form Last Name */}
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            ref={(el) => (formRefs.current["lastName"] = el)}
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <button
            type='button'
            onClick={() => focusField("lastName")}
            className='focusButton'
          >
            Focus on Last Name
          </button>
        </div>

        {/* Form Email */}
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            ref={(el) => (formRefs.current["email"] = el)}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button
            type='button'
            onClick={() => focusField("email")}
            className='focusButton'
          >
            Focus on Email
          </button>
        </div>

        {/* Form Reservation Date */}
        <label htmlFor='reservationDate'>Choose date</label>
        <input
          type='date'
          id='reservationDate'
          name='date'
          ref={(el) => (formRefs.current["date"] = el)}
          value={form.date}
        />
        <button
          type='button'
          onClick={() => focusField("date")}
          className='focusButton'
        >
          Focus on Date
        </button>
        {/* Form Reservation Time */}
        <label htmlFor='reservationTime'>Choose time</label>
        <select id='reservationTime'>
          {reservationTime.map((time) => (
            <option key={time.time} value={time.time}>
              {time.label}
            </option>
          ))}
        </select>

        {/* Form Number of Guests */}
        <label htmlFor='guests'>Number of guests</label>
        <input type='number' placeholder='1' min='1' max='10' id='guests' />

        {/* Form Selecet Occasion */}
        <label htmlFor='occasion'>Occasion</label>
        <select id='occasion'>
          {occasion.map((occasion) => (
            <option key={occasion.event} value={occasion.event}>
              {occasion.label}
            </option>
          ))}
        </select>

        <input type='submit' value='Make Your reservation' />
      </form>
    </div>
  );
}
