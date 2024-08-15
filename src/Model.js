import "./FormComponent.css";
export default function Model({ IsVisible, errorMessage = null }) {
  if (IsVisible) {
    return (
      <div id="model">
        <div id="model-content">
          <h3 style={{ color: errorMessage ? "red" : "" }}>
            {errorMessage
              ? errorMessage
              : "The Form has been submitted successfully"}
          </h3>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
