import "./FormComponent.css";

import { useState } from "react";

export default function FormComponent() {
  const [FormValue, SetFormValue] = useState({
    Name: "",
    PhoneNumber: "",
    Age: "",
    IsEmployee: false,
    Statue: "",
  });
  const btnIsDisabled =
    FormValue.Name === "" ||
    FormValue.PhoneNumber === "" ||
    FormValue.Age === "";

  return (
    <div className="form-card">
      <h2>Requesting a Loan</h2>
      <hr />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert(FormValue.Name);
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          value={FormValue.Name}
          onChange={(event) => {
            SetFormValue({ ...FormValue, Name: event.target.value });
          }}
        />
        <label>Phone number: </label>
        <input
          type="text"
          value={FormValue.PhoneNumber}
          onChange={(event) => {
            SetFormValue({ ...FormValue, PhoneNumber: event.target.value });
          }}
        />
        <label>Age: </label>
        <input
          type="text"
          value={FormValue.Age}
          onChange={(event) => {
            SetFormValue({ ...FormValue, Age: event.target.value });
          }}
        />
        <div className="employeeGroup">
          <label>Are you an employee ? </label>
          <input
            type="checkbox"
            checked={FormValue.IsEmployee}
            id="checkbox"
            onChange={(event) => {
              SetFormValue({ ...FormValue, IsEmployee: event.target.checked });
            }}
          />
        </div>
        <label>Salary </label>
        <select
          value={FormValue.Statue}
          onChange={(event) => {
            SetFormValue({ ...FormValue, Statue: event.target.value });
          }}
        >
          <option>Less than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
        <hr />
        <button
          id="submit-btn"
          className={btnIsDisabled ? "disabled" : ""}
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
