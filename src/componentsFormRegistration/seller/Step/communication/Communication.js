import "./communication.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

// Options for communication methods, days, and times
const methodOptions = [
  { id: 0, value: "Email", label: "Email" },
  { id: 1, value: "Phone", label: "Phone" },
  // { id: 2, value: "Message on WhatsApp", label: "Message on WhatsApp" },
  { id: 3, value: "SMS", label: "SMS" },
];

const daysOptions = [
  { id: 0, value: "monday", label: "Monday" },
  { id: 1, value: "tuesday", label: "Tuesday" },
  { id: 2, value: "wednesday", label: "Wednesday" },
  { id: 3, value: "thursday", label: "Thursday" },
  { id: 4, value: "friday", label: "Friday" },
  { id: 5, value: "saturday", label: "Saturday" },
  { id: 6, value: "sunday", label: "Sunday" },
];

const timesOptions = [
  { id: 0, value: "08:00 - 09:00", label: "08:00 - 09:00" },
  { id: 1, value: "09:00 - 10:00", label: "09:00 - 10:00" },
  { id: 2, value: "10:00 - 11:00", label: "10:00 - 11:00" },
  { id: 3, value: "11:00 - 12:00", label: "11:00 - 12:00" },
  { id: 4, value: "12:00 - 13:00", label: "12:00 - 13:00" },
  { id: 5, value: "13:00 - 14:00", label: "13:00 - 14:00" },
  { id: 6, value: "14:00 - 15:00", label: "14:00 - 15:00" },
  { id: 7, value: "15:00 - 16:00", label: "15:00 - 16:00" },
  { id: 8, value: "16:00 - 17:00", label: "16:00 - 17:00" },
  { id: 9, value: "17:00 - 18:00", label: "17:00 - 18:00" },
  { id: 10, value: "18:00 - 19:00", label: "18:00 - 19:00" },
  { id: 11, value: "19:00 - 20:00", label: "19:00 - 20:00" },
  { id: 12, value: "After 20:00", label: "After 20:00" },
];


const customComponents = {
  ClearIndicator: () => null,
};

function Communication({
  setStepSelect,
  setPreferredMethodSave,
  setPreferredDaysSave,
  setPreferredTimesSave,
  preferredMethodSave,
  preferredDaysSave,
  preferredTimesSave,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [activeNextStep, setActiveNextStep] = useState(false);

  // Check if all required fields are filled to activate the Next button
  useEffect(() => {
    if (
      preferredMethodSave &&
      preferredDaysSave.length > 0 &&
      preferredTimesSave.length > 0
    ) {
      setActiveNextStep(true);
    } else {
      setActiveNextStep(false);
    }
  }, [preferredMethodSave, preferredDaysSave, preferredTimesSave]);

  // Validate the form to ensure all required fields are filled
  const validateForm = () => {
    let tempErrors = {};
    if (!preferredMethodSave)
      tempErrors.preferredMethodSave =
        "Preferred method of communication is required.";
    if (preferredDaysSave.length === 0)
      tempErrors.preferredDaysSave =
        "Preferred communication days are required.";
    if (preferredTimesSave.length === 0)
      tempErrors.preferredTimesSave =
        "Preferred communication times are required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    setShowErrors(true); // Show errors when button is clicked
    if (validateForm()) {
      setPreferredMethodSave(preferredMethodSave);
      setPreferredDaysSave(preferredDaysSave);
      setPreferredTimesSave(preferredTimesSave);

      setStepSelect(4);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("Validation Failed");
    }
  };

  // Handle going back to the previous page
  const handleBackPage = () => {
    setStepSelect(2);
  };

  return (
    <div className="stepField buyingAndSellingQcommunication">
      {/* Preferred Method of Communication */}
      <div className="salutationSection">
        <label>Select Your Preferred Method of Communication:</label>
        <Select
          closeMenuOnSelect={false}
          options={methodOptions}
          value={preferredMethodSave}
          onChange={(selectedOptions) =>
            setPreferredMethodSave(selectedOptions)
          }
          placeholder="Select Method"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.setPreferredMethodSave && (
          <span className="error">{errors.setPreferredMethodSave}</span>
        )}
      </div>

      {/* Preferred Communication Days */}
      <div className="salutationSection">
        <label>Preferred Communication Days:</label>
        <Select
          closeMenuOnSelect={false}
          options={daysOptions}
          value={preferredDaysSave}
          onChange={(selectedOptions) => setPreferredDaysSave(selectedOptions)}
          placeholder="Select Days"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.preferredDaysSave && (
          <span className="error">{errors.preferredDaysSave}</span>
        )}
      </div>

      {/* Preferred Communication Times */}
      <div className="salutationSection">
        <label>Preferred Communication Times:</label>
        <Select
          closeMenuOnSelect={false}
          options={timesOptions}
          value={preferredTimesSave}
          onChange={(selectedOptions) => setPreferredTimesSave(selectedOptions)}
          placeholder="Select Times"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.preferredTimesSave && (
          <span className="error">{errors.preferredTimesSave}</span>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="btnSection">
        {/* Next Step Button */}
        <div
          className={activeNextStep ? "btnNext activeNext" : "btnNext"}
          onClick={handleSubmit}
        >
          <p>Continue</p>
          <Image src={iconNextStep} alt="next step" />
        </div>

        {/* Back Button */}
        <div className="btnback" onClick={handleBackPage}>
          <p>Back</p>
          <Image src={iconNextStep} alt="next step" />
        </div>
      </div>
    </div>
  );
}

export default Communication;
