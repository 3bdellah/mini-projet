import "./FormComponent.css";
//import { useState } from "react";

export default function FormComponent() {
  return (
    <div className="form-card">
      <h2>Requesting a Loan</h2>
      <hr />
      <label>Name: </label>
      <input type="text" />
      <label>Phone number: </label>
      <input type="text" />
      <label>Age: </label>
      <input type="text" />
      <div className="employeeGroup">
        <label>Are you an employee ? </label>
        <input type="checkbox" id="checkbox" />
      </div>
      <label>Salary </label>
      <select>
        <option>Less than 500$</option>
        <option>Between 500$ and 2000$</option>
        <option>Above 2000$</option>
      </select>
      <hr />
      <button id="submit-btn">Submit</button>
    </div>
  );
}
