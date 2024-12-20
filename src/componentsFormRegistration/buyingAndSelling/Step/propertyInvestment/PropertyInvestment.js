import "./propertyInvestment.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

// Options for property type, emirate, and property status
const propertyTypeOptions = [
  { value: "Apartment", label: "Apartment" },
  { value: "Villa", label: "Villa" },
  { value: "Townhouse", label: "Townhouse" },
  { value: "Commercial", label: "Commercial" },
  { value: "Land", label: "Land" },
  { value: "Other", label: "Other" },
];

const emirateOptions = [
  { value: "Dubai", label: "Dubai" },
  { value: "Ras Al Khaimah", label: "Ras Al Khaimah" },
  { value: "Other", label: "Other" },
];

const customComponents = {
  ClearIndicator: () => null, // Hide the "Close" indicator that appears on open
};

const propertyStatusOptions = [
  { value: "Rented and Ready", label: "Rented and Ready" },
  { value: "Off-plan (Almost Ready)", label: "Off-plan (Almost Ready)" },
  {
    value: "Off-plan (Under Development)",
    label: "Off-plan (Under Development)",
  },
  { value: "Other", label: "Other" },
];

function PropertyInvestment({
  setStepSelect,
  setPropertyTypeSave,
  setInterestedEmirateSave,
  setPropertyStatusSave,
  setEstimatedBudgetFromSave,
  setEstimatedBudgetToSave,
  propertyTypeSave,
  interestedEmirateSave,
  propertyStatusSave,
  estimatedBudgetFromSave,
  estimatedBudgetToSave,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [activeNextStep, setActiveNextStep] = useState(false);

    // Format number with commas
    const formatWithCommas = (value) => {
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  
    // Handle budget input
    const handleBudgetInput = (e, setter) => {
      let value = e.target.value.replace(/[^\d]/g, ""); // Allow only digits
      if (value.length > 12) {
        value = value.slice(0, 12); // Limit to 12 digits
      }
      setter(value);
    };

  // Check if all required fields are filled to activate the Next button
  useEffect(() => {
    if (
      propertyTypeSave &&
      interestedEmirateSave.length > 0 &&
      propertyStatusSave.length > 0 &&
      estimatedBudgetFromSave &&
      estimatedBudgetToSave
    ) {
      setActiveNextStep(true);
    } else {
      setActiveNextStep(false);
    }
  }, [
    propertyTypeSave,
    interestedEmirateSave,
    propertyStatusSave,
    estimatedBudgetFromSave,
    estimatedBudgetToSave,
  ]);

  // Validate the form to ensure all required fields are filled
  const validateForm = () => {
    let tempErrors = {};
    if (!propertyTypeSave)
      tempErrors.propertyTypeSave = "Property type is required.";
    if (interestedEmirateSave.length === 0)
      tempErrors.interestedEmirateSave = "Emirate selection is required.";
    if (propertyStatusSave.length === 0)
      tempErrors.propertyStatusSave = "Property status is required.";
    if (!estimatedBudgetFromSave)
      tempErrors.estimatedBudgetFromSave = "Budget From is required.";
    if (!estimatedBudgetToSave) tempErrors.budgetTo = "Budget To is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    setShowErrors(true); // Show errors when button is clicked
    if (validateForm()) {
      setPropertyTypeSave(propertyTypeSave);
      setInterestedEmirateSave(interestedEmirateSave);
      setPropertyStatusSave(propertyStatusSave);
      setEstimatedBudgetFromSave(estimatedBudgetFromSave);
      setEstimatedBudgetToSave(estimatedBudgetToSave);

      setStepSelect(5);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("Validation Failed");
    }
  };

  // Handle going back to the previous page
  const handleBackPage = () => {
    setStepSelect(3);
  };

  return (
    <div className="stepField buyingAndSellingQpropertyInvestment">
      {/* Property Type */}
      <div className="salutationSection">
        <label>What type of property are you interested in?</label>
        <Select
          closeMenuOnSelect={false}
          options={propertyTypeOptions}
          value={propertyTypeSave}
          onChange={(selectedOptions) => setPropertyTypeSave(selectedOptions)}
          placeholder="Select Property Type"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.propertyTypeSave && (
          <span className="error">{errors.propertyTypeSave}</span>
        )}
      </div>

      {/* Emirate */}
      <div className="salutationSection salutationSectionMultiplSelect">
        <label>In which emirate are you interested to buy?</label>
        <Select
          closeMenuOnSelect={false}
          options={emirateOptions}
          value={interestedEmirateSave}
          onChange={(selectedOptions) =>
            setInterestedEmirateSave(selectedOptions)
          }
          placeholder="Select Emirate"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.interestedEmirateSave && (
          <span className="error">{errors.interestedEmirateSave}</span>
        )}
      </div>

      {/* Property Status */}
      <div className="salutationSection">
        <label>What is your preferred property status?</label>
        <Select
          closeMenuOnSelect={false}
          options={propertyStatusOptions}
          value={propertyStatusSave}
          onChange={(selectedOptions) => setPropertyStatusSave(selectedOptions)}
          placeholder="Select Property Status"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.propertyStatusSave && (
          <span className="error">{errors.propertyStatusSave}</span>
        )}
      </div>

      {/* Budget Range */}
      <div className="flexSection budgetRange">
        <div className="inputSection">
          <label>Estimated investment amount (Budget Range) ?</label>
          <div className="boxSpan">
            <input
              type="text"
              value={formatWithCommas(estimatedBudgetFromSave)}
              onChange={(e) => handleBudgetInput(e, setEstimatedBudgetFromSave)}
              placeholder="From"
              inputMode="numeric"
            />
            <span>AED</span>
          </div>
          {showErrors && errors.estimatedBudgetFromSave && (
            <span className="error">{errors.estimatedBudgetFromSave}</span>
          )}
        </div>

        <div className="inputSection">
          <div className="boxSpan">
            <input
              type="text"
              value={formatWithCommas(estimatedBudgetToSave)}
              onChange={(e) => handleBudgetInput(e, setEstimatedBudgetToSave)}
              placeholder="To"
              inputMode="numeric"
            />
            <span>AED</span>
          </div>
          {showErrors && errors.estimatedBudgetToSave && (
            <span className="error">{errors.estimatedBudgetToSave}</span>
          )}
        </div>
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

export default PropertyInvestment;
