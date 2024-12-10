//Using normal CSS and Formik and Yup for form Validation

import "./BookingForm.css";
// import { useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function BookingForm() {
  //   const [form, setForm] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //   });

  //   const formRefs = useRef({});

  //   const focusField = (fieldName) => {
  //     formRefs.current[fieldName]?.focus();
  //   };

  validationSchema: Yup.object({
    firstName: Yup.string()
      .required("Required")
      .min(2, "Too Short!")
      .max(30, "Too long"),
  });
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
    <div className='formReservation'>
      <h1>Make a Reservation</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        className='formik'
      >
        <Form className='form'>
          {/* FIRST NAME */}
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <Field
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Zoro'
            ></Field>
          </div>

          {/* LAST NAME */}
          <div>
            <label htmlFor='lastName'>Last Name: </label>
            <Field
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Roronoa'
            ></Field>
          </div>

          {/* EMAIL */}
          <div>
            <label htmlFor='email'>Email: </label>
            <Field
              type='text'
              id='email'
              name='email'
              placeholder='Zoro.Roronoa@mail.de'
            ></Field>
          </div>

          {/* RESERVATION DATE */}
          <div>
            <label htmlFor='reservationDate'>Choose date: </label>
            <Field type='date' id='reservationDate' name='date' />
          </div>

          {/* RESERVATION TIME */}
          <div>
            <label htmlFor='reservationTime'>Choose time: </label>
            <Field as='select' name='reservationTime'>
              {reservationTime.map((time) => (
                <option key={time.time} value={time.time}>
                  {time.label}
                </option>
              ))}
            </Field>
          </div>

          {/* SELECT NUMBER OF GUESTS*/}
          <div>
            <label htmlFor='guests'>Number of guests: </label>
            <Field
              type='number'
              name='guests'
              placeholder='1'
              min='1'
              max='10'
              id='guests'
            ></Field>
          </div>

          {/* SELECT OCCASION */}
          <div>
            <label htmlFor='occasion'>Occasion: </label>
            <Field as='select' name='occasion'>
              {occasion.map((occasion) => (
                <option key={occasion.event} value={occasion.event}>
                  {occasion.label}
                </option>
              ))}
            </Field>
          </div>

          {/* BUTTON */}
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
