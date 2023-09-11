import React, { useState } from "react";

import "./SavingsForm.css";

const SavingsForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userInput = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlySavings,
      "expected-return": expectedInterest,
      duration: investmentDuration,
    };
    //Check that all input fields have data before triggering the calculateHandler method.
    props.calculateHandler(userInput);
  };

  const onResetHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setCurrentSavings("");
    setExpectedInterest("");
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(e) => setCurrentSavings(e.target.value)}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(e) => setYearlySavings(e.target.value)}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(e) => setExpectedInterest(e.target.value)}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(e) => setInvestmentDuration(e.target.value)}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={onResetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default SavingsForm;
