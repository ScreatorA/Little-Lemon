//Formik and Yup for form Validation
import "./BookingForm.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function BookingForm({
  formData,
  handleChange,
  handleSubmit,
  reservationTimes,
  isSubmitting,
}) {
  const occasion = [
    { event: "default", label: "Select an occasion" },
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
      .min(2, "First Name Should at least have 2 Characters")
      .max(30, "First Name Should at most have 30 Characters"),

    lastName: Yup.string()
      .required("Last Name is Required!")
      .min(2, "Last Name Should at least have 2 Characters")
      .max(30, "Last Name Should at most have 30 Characters"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required!")
      .min(5, "Email must have at least 5 characters!"),

    date: Yup.date()
      .required("Date is Required!")
      .test(
        "future Date or present-Date",
        `The date must either be ${new Date().toLocaleDateString()} or lay in the future`,
        (value) =>
          value &&
          new Date(value).setHours(0, 0, 0, 0) >=
            new Date().setHours(0, 0, 0, 0)
      ),

    occasion: Yup.string()
      .required("Occasion is Required!")
      .test(
        "Occassion is selected",
        "Occasion needs to be selected",
        (value) => value && value !== "default"
      ),

    guests: Yup.number()
      .required("Guests number is Required!")
      .min(1, "Guests needs to be at least 1")
      .max(10, "Guests needs to be at most be 10"),
  });

  return (
    <div className='fullForm'>
      <Formik
        initialValues={formData}
        validationSchema={formValidationSchema}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        className='form'
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className='formContent'>
            <h1 className='formHeading'>Make a Reservation</h1>
            {/* FIRST NAME */}
            <div className='firstName divField'>
              <label htmlFor='firstName' className='formLabel'>
                First Name<span>*</span>
              </label>
              <Field
                type='text'
                id='firstName'
                name='firstName'
                placeholder='  Zoro'
                className={`field ${
                  errors.firstName && touched.firstName ? "field-error" : ""
                } ${
                  !errors.firstName && touched.firstName ? "field-success" : ""
                }`}
              />
              {!errors.firstName && touched.firstName && (
                <span className='success-icon'>O</span>
              )}
              {errors.firstName && touched.firstName && (
                <span className='error-icon'>X</span>
              )}
              {/* Show error message if validation fails */}
              {touched.firstName && (
                <ErrorMessage
                  name='firstName'
                  component='div'
                  className='error'
                  data-testid='firstNameError'
                />
              )}
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
                placeholder='  Roronoa'
                className={`field ${
                  errors.lastName && touched.lastName ? "field-error" : ""
                } ${
                  !errors.lastName && touched.lastName ? "field-success" : ""
                }`}
              />
              {!errors.lastName && touched.lastName && (
                <span className='success-icon'>O</span>
              )}
              {errors.lastName && touched.lastName && (
                <span className='error-icon'>X</span>
              )}
              {/* Show error message if validation fails */}
              {touched.lastName && (
                <ErrorMessage
                  name='lastName'
                  component='div'
                  className='error'
                  data-testid='lastNameError'
                />
              )}
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
                placeholder='  Zoro.Roronoa@mail.de'
                className={`field ${
                  errors.email && touched.email ? "field-error" : ""
                } ${!errors.email && touched.email ? "field-success" : ""}`}
              />
              {!errors.email && touched.email && (
                <span className='success-icon'>O</span>
              )}
              {errors.email && touched.email && (
                <span className='error-icon'>X</span>
              )}
              {/* Show error message if validation fails */}
              {touched.email && (
                <ErrorMessage
                  name='email'
                  component='div'
                  className='error'
                  data-testid='emailError'
                />
              )}
            </div>

            {/* RESERVATION DATE */}
            <div className='reservationDate divField'>
              <div className='dateLabelField'>
                <label htmlFor='date' className='formLabel'>
                  Choose date<span>*</span>
                </label>
                <Field
                  type='date'
                  id='date'
                  name='date'
                  d
                  className={`field ${
                    errors.date && touched.date ? "field-error" : ""
                  } ${!errors.date && touched.date ? "field-success" : ""}`}
                />
                {!errors.date && touched.date && (
                  <span className='success-icon'>O</span>
                )}
                {errors.date && touched.date && (
                  <span className='error-icon'>X</span>
                )}
              </div>
              {/* Show error message if validation fails */}
              {touched.date && (
                <ErrorMessage
                  name='date'
                  component='div'
                  className='error'
                  data-testid='dateError'
                />
              )}
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
                className={`field ${
                  errors.time && touched.time ? "field-error" : ""
                } ${!errors.time && touched.time ? "field-success" : ""}`}
              >
                {reservationTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              {!errors.time && touched.time && (
                <span className='success-icon'>O</span>
              )}
              {errors.time && touched.time && (
                <span className='error-icon'>X</span>
              )}
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
                className={`field ${
                  errors.occasion && touched.occasion ? "field-error" : ""
                } ${
                  !errors.occasion && touched.occasion ? "field-success" : ""
                }`}
              >
                {occasion.map((occasion) => (
                  <option key={occasion.event} value={occasion.event}>
                    {occasion.label}
                  </option>
                ))}
              </Field>
              {!errors.occasion && touched.occasion && (
                <span className='success-icon'>O</span>
              )}
              {errors.occasion && touched.occasion && (
                <span className='error-icon'>X</span>
              )}
              {/* Show error message if validation fails */}
              {touched.occasion && (
                <ErrorMessage
                  name='occasion'
                  component='div'
                  className='error'
                  data-testid='occasionError'
                />
              )}
            </div>

            {/* SELECT NUMBER OF GUESTS*/}
            <div className='guests divField'>
              <label htmlFor='guests' className='formLabel'>
                Number of guests<span>*</span>
              </label>
              <Field
                type='number'
                name='guests'
                placeholder='  2'
                id='guests'
                className={`field ${
                  errors.guests && touched.guests ? "field-error" : ""
                } ${!errors.guests && touched.guests ? "field-success" : ""}`}
              />
              {!errors.guests && touched.guests && (
                <span className='success-icon'>O</span>
              )}
              {errors.guests && touched.guests && (
                <span className='error-icon'>X</span>
              )}
              {/* Show error message if validation fails */}
              {touched.guests && (
                <ErrorMessage
                  name='guests'
                  component='div'
                  className='error'
                  data-testid='guestsError'
                />
              )}
            </div>

            {/* BUTTON */}
            <button
              type='submit'
              name='reservationSubmitButton'
              className='reservationSubmit'
              data-testid= "submitButtonError"
              disabled={isSubmitting || !(dirty && isValid)}
            >
              {isSubmitting ? (
                <>
                  <span className='spinner'></span>Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
