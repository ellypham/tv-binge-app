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
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="tvShow">
        What TV Show would you like to binge?
      </label>
      <input
        className="form__input"
        type="text"
        id="tvShow"
        name="showName"
        value={showName}
        onChange={handleChange}
      />
      <div className="form__error">
        <span>{showNameError}</span>
      </div>
      <label className="form__label" htmlFor="">
        How many hours per day do you have?
      </label>
      <input
        className="form__input"
        type="text"
        id="hoursDay"
        name="hours"
        value={hours}
        onChange={handleChange}
      />
      <div className="form__error">
        <span>{hoursError}</span>
      </div>
      <input className="form__button" type="submit" value="submit" />
    </form>
  );
};

export default Form;
