import "./FormComponent.css";
import Model from "./Model";
import { useState } from "react";

export default function FormComponent() {
  const [showModel, SetShowModel] = useState(false);
  const [ErrorMessage, SetErrorMessage] = useState("");
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
  //   let Message = "";

  function HandelVerificationForm() {
    if (FormValue.PhoneNumber.length < 8 || FormValue.PhoneNumber.length > 10) {
      SetErrorMessage("erreur: phone number format is Incorrect");
    } else if (FormValue.Age < 18 || FormValue.Age > 100) {
      SetErrorMessage("erreur : the age is not allowed");
    } else {
      SetErrorMessage("");
    }
    SetShowModel(true);
  }
  function handelDivClick() {
    SetShowModel(false);
  }
  return (
    <>
      <div className="form-card">
        <h2>Requesting a Loan</h2>
        <hr />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            HandelVerificationForm();
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
            type="number"
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
                SetFormValue({
                  ...FormValue,
                  IsEmployee: event.target.checked,
                });
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
      <div
        onClick={handelDivClick}
        style={{ position: "absolute", left: "0px", top: "0px" }}
      >
        <Model errorMessage={ErrorMessage} IsVisible={showModel} />
      </div>
    </>
  );
}
