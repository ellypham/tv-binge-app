import React from "react";

const Form = props => {
  const {
    handleChange,
    handleSubmit,
    hours,
    showName,
    showNameError,
    hoursError
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tvShow">What TV Show would you like to binge?</label>
        <input
          type="text"
          id="tvShow"
          name="showName"
          value={showName}
          onChange={handleChange}
        />
      </div>
      <div className="form-error">
        <p>{showNameError}</p>
      </div>
      <div>
        <label htmlFor="">How many hours per day do you have?</label>
        <input
          type="text"
          id="hoursDay"
          name="hours"
          value={hours}
          onChange={handleChange}
        />
      </div>
      <div className="form-error">
        <p>{hoursError}</p>
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
