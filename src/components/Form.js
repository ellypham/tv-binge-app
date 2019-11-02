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
      <div className="wrapper">
        <label className="form__label" htmlFor="tvShow">
          <p>What TV Show would you like to binge?</p>
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
          <p>How many hours per day do you have?</p>
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
        <button className="button form__button">Submit</button>
      </div>
    </form>
  );
};

export default Form;
