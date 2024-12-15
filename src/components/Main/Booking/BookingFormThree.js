//Using normal ChakraUI and Formik and Yup for form Validation
import "./BookingForm.css";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function BookingForm({ handleSubmit }) {
  const formValidationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Too, short!")
      .max(50, "Too Long")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(2, "Too, short!")
      .max(50, "Too Long")
      .required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
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
    <Formik
      className='formik'
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchema}
    >
      <div className='form'>
        <h1 className='formHeading'>Reservation</h1>
        <Form className='formContent'>
          {/* FIRST NAME */}
          <div className='firstName divField'>
            <label htmlFor='firstName' className='formLabel'>
              <span>*</span>First Name:{" "}
            </label>
            <Field
              type='text'
              id='firstName'
              name='firstName'
              placeholder='  Zoro'
              className='field'
            ></Field>
          </div>

          {/* LAST NAME */}
          <div className='lastName divField'>
            <label htmlFor='lastName' className='formLabel'>
              <span>*</span>Last Name:{" "}
            </label>
            <Field
              type='text'
              id='lastName'
              name='lastName'
              placeholder='  Roronoa'
              className='field'
            ></Field>
          </div>

          {/* EMAIL */}
          <div className='email divField'>
            <label htmlFor='email' className='formLabel'>
              <span>*</span>Email:{" "}
            </label>
            <Field
              type='text'
              id='email'
              name='email'
              placeholder='  Zoro.Roronoa@mail.de'
              className='field'
            ></Field>
          </div>

          {/* RESERVATION DATE */}
          <div className='reservationDate divField'>
            <label htmlFor='reservationDate' className='formLabel'>
              <span>*</span>Choose date:{" "}
            </label>
            <Field
              type='date'
              id='reservationDate'
              name='date'
              className='field'
            />
          </div>

          {/* RESERVATION TIME */}
          <div className='reservationTime divField'>
            <label htmlFor='reservationTime' className='formLabel'>
              <span>*</span>Choose time:{" "}
            </label>
            <Field
              as='select'
              id='reservationTime'
              name='reservationTime'
              className='field'
            >
              {reservationTime.map((time) => (
                <option key={time.time} value={time.time}>
                  {time.label}
                </option>
              ))}
            </Field>
          </div>

          {/* SELECT NUMBER OF GUESTS*/}
          <div className='guests divField'>
            <label htmlFor='guests' className='formLabel'>
              <span>*</span>Number of guests:{" "}
            </label>
            <Field
              type='number'
              name='guests'
              placeholder='  1'
              min='1'
              max='10'
              id='guests'
              className='field'
            ></Field>
          </div>

          {/* SELECT OCCASION */}
          <div className='occasion divField'>
            <label htmlFor='occasion' className='formLabel'>
              <span>*</span>Occasion:{" "}
            </label>
            <Field as='select' id='occasion' name='occasion' className='field'>
              {occasion.map((occasion) => (
                <option key={occasion.event} value={occasion.event}>
                  {occasion.label}
                </option>
              ))}
            </Field>
          </div>

          {/* BUTTON */}
          <button type='submit' className='reservationSubmit'>
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
}
