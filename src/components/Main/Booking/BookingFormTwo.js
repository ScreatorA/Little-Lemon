//Using normal ChakraUI and Formik and Yup for form Validation
import "./BookingForm.css";

export default function BookingForm({
  formData,
  handleChange,
  handleSubmit,
  reservationTimes,
}) {
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
    <div className='form'>
      <h1 className='formHeading'>Reservation</h1>
      <form className='formContent' onSubmit={handleSubmit}>
        {/* FIRST NAME */}
        <div className='firstName divField'>
          <label htmlFor='firstName' className='formLabel'>
            <span>*</span>First Name:{" "}
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='  Zoro'
            className='field'
          />
        </div>

        {/* LAST NAME */}
        <div className='lastName divField'>
          <label htmlFor='lastName' className='formLabel'>
            <span>*</span>Last Name:{" "}
          </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='  Roronoa'
            className='field'
          />
        </div>

        {/* EMAIL */}
        <div className='email divField'>
          <label htmlFor='email' className='formLabel'>
            <span>*</span>Email:{" "}
          </label>
          <input
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='  Zoro.Roronoa@mail.de'
            className='field'
          />
        </div>

        {/* RESERVATION DATE */}
        <div className='reservationDate divField'>
          <label htmlFor='date' className='formLabel'>
            <span>*</span>Choose date:{" "}
          </label>
          <input
            type='date'
            id='date'
            name='date'
            className='field'
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {/* RESERVATION TIME */}
        <div className='availableTimes divField'>
          <label htmlFor='time' className='formLabel'>
            <span>*</span>Choose time:{" "}
          </label>
          <select
            type='select'
            id='time'
            name='time'
            className='field'
            value={formData.time}
            onChange={handleChange}
          >
            {reservationTimes.time.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* SELECT OCCASION */}
        <div className='occasion divField'>
          <label htmlFor='occasion' className='formLabel'>
            <span>*</span>Occasion:{" "}
          </label>
          <select
            type='select'
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
          </select>
        </div>

        {/* SELECT NUMBER OF GUESTS*/}
        <div className='guests divField'>
          <label htmlFor='guests' className='formLabel'>
            <span>*</span>Number of guests:{" "}
          </label>
          <input
            type='number'
            name='guests'
            placeholder='  1'
            min='1'
            max='10'
            id='guests'
            className='field'
            value={formData.guests}
            onChange={handleChange}
          />
        </div>

        {/* BUTTON */}
        <button
          type='submit'
          onClick={handleSubmit}
          className='reservationSubmit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
