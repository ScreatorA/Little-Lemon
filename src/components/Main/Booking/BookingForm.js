//Formik and Yup for form Validation
import "./BookingForm.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function BookingForm({
  formData,
  handleChange,
  handleSubmit,
  reservationTimes,
}) {
  const occasion = [
    { event: "", label: "Select an occasion" },
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

  const formValidationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is Required!")
      .min(2, "Too short!")
      .max(30, "Too long!"),

    lastName: Yup.string()
      .required("Last Name is Required!")
      .min(2, "Too short!")
      .max(30, "Too short!"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required!")
      .min(5, "Email muste be at least 5 characters!"),

    date: Yup.date()
      .required("Date is Required!")
      .test(
        "future Date or present-Date",
        "Date needs to be a future Date or past Date",
        (value) =>
          value &&
          new Date(value).setHours(0, 0, 0, 0) >=
            new Date().setHours(0, 0, 0, 0)
      ),
    time: Yup.date().required("Time is required!"),
    // .test(
    //   "Time needs to be ", )
    occasion: Yup.string()
      .required("Occasion needs to be selected")
      .test(
        "Occassion is selected",
        "",
        (value) => value && value !== "Select an occasion"
      ),
  });

  return (
    <div>
      <h1 className='formHeading'>Make a Reservation</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          date: "",
          time: "",
          occasion: "",
          guests: "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}
        className='form'
      >
        {({ errors, touched, values }) => (
          <Form className='formContent'>
            {/* FIRST NAME */}
            <div className='firstName divField'>
              <label htmlFor='firstName' className='formLabel'>
                First Name<span>*</span>
              </label>
              <Field
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='  Zoro'
                className='field'
              />
              {/* Show error message if validation fails */}
              {errors.firstName && touched.firstName ? (
                <div className='error'>{errors.firstName}</div>
              ) : null}
              <ErrorMessage name='firstName' />
            </div>

            {/* LAST NAME */}
            <div className='lastName divField'>
              <label htmlFor='lastName' className='formLabel'>
                Last Name<span>*</span>
              </label>
              <Field
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='  Roronoa'
                className='field'
                minLength={2}
                maxLength={50}
                required
              />
            </div>

            {/* EMAIL */}
            <div className='email divField'>
              <label htmlFor='email' className='formLabel'>
                Email<span>*</span>
              </label>
              <Field
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='  Zoro.Roronoa@mail.de'
                className='field'
                minLength={5}
                required
              />
            </div>

            {/* RESERVATION DATE */}
            <div className='reservationDate divField'>
              <label htmlFor='date' className='formLabel'>
                Choose date<span>*</span>
              </label>
              <Field
                type='date'
                id='date'
                name='date'
                className='field'
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* RESERVATION TIME */}
            <div className='availableTimes divField'>
              <label htmlFor='time' className='formLabel'>
                Choose time<span>*</span>
              </label>
              <Field
                as='select'
                id='time'
                name='time'
                className='field'
                value={formData.time}
                onChange={handleChange}
                required
              >
                {reservationTimes.time.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
            </div>

            {/* SELECT OCCASION */}
            <div className='occasion divField'>
              <label htmlFor='occasion' className='formLabel'>
                Occasion<span>*</span>
              </label>
              <Field
                as='select'
                id='occasion'
                name='occasion'
                className='field'
                value={formData.occasion}
                onChange={handleChange}
              >
                {occasion.map((occasion) => (
                  <option key={occasion.event} value={occasion.event}>
                    {occasion.label}
                  </option>
                ))}
              </Field>
            </div>

            {/* SELECT NUMBER OF GUESTS*/}
            <div className='guests divField'>
              <label htmlFor='guests' className='formLabel'>
                Number of guests<span>*</span>
              </label>
              <Field
                type='number'
                name='guests'
                placeholder='  1'
                min='2'
                max='10'
                id='guests'
                className='field'
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            {/* BUTTON */}
            <button type='submit' className='reservationSubmit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
