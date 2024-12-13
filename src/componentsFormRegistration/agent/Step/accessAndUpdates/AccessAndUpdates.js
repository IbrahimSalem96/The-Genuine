import "./accessAndUpdates.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

// Options for contact and early access
const contactOptions = [
  { value: "Yes", label: "Yes" },
  { value: "Maybe", label: "Maybe" },
  { value: "No", label: "No" },
];

const earlyAccessOptions = [
  { value: "Yes", label: "Yes" },
  { value: "Maybe", label: "Maybe" },
  { value: "No", label: "No" },
];

// Options for how did you hear about us
const sourceOptions = [
  { value: "Social Media", label: "Social Media" },
  { value: "Friend/Referral", label: "Friend/Referral" },
  { value: "Search Engine", label: "Search Engine" },
  { value: "Advertisement", label: "Advertisement" },
  { value: "Other", label: "Other" },
];

// Options for newsletter subscription
const newsletterOptions = [
  { value: "Yes", label: "Yes" },
  { value: "Maybe", label: "Maybe" },
  { value: "No", label: "No" },
];

const newsletterConfirmOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

// const whatsAppCommunityOptions = [
//   { value: "Yes", label: "Yes" },
//   { value: "No", label: "No" },
// ];

function AccessAndUpdates({
  setStepSelect,
  setContactPermission,
  setEarlyAccessSave,
  setReferralSource,
  setSubscribeNewsletter,
  setSubscribeNewsletterConfirm,
  setWhatsAppGroup,
  contactPermission,
  earlyAccessSave,
  referralSource,
  subscribeNewsletter,
  subscribeNewsletterConfirm,
  // whatsAppGroup,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [activeNextStep, setActiveNextStep] = useState(false);

  // Check if all required fields are filled to activate the Next button
  useEffect(() => {
    if (
      contactPermission &&
      earlyAccessSave &&
      referralSource &&
      subscribeNewsletter
    ) {
      setActiveNextStep(true);
    } else {
      setActiveNextStep(false);
    }
  }, [contactPermission, earlyAccessSave, referralSource, subscribeNewsletter]); //[contactPermission, earlyAccessSave, referralSource, subscribeNewsletter, whatsAppGroup]

  // Validate the form to ensure all required fields are filled
  const validateForm = () => {
    let tempErrors = {};
    if (!contactPermission)
      tempErrors.contactPermission = "Contact preference is required.";
    if (!earlyAccessSave)
      tempErrors.earlyAccess = "Early access preference is required.";
    if (!referralSource) tempErrors.referralSource = "Source of information is required.";
    if (!subscribeNewsletter)
      tempErrors.newsletter = "Newsletter subscription preference is required.";
    // if (!whatsAppGroup)
    //   tempErrors.whatsAppCommunity =
    //     "WhatsApp Community subscription preference is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    setShowErrors(true);
    if (validateForm()) {
      setStepSelect(4);
      setWhatsAppGroup("not show question")
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
    <div className="stepField buyingPageQaccessAndUpdates">
      {/* Contact Preference */}
      <div className="salutationSection">
        <label>Our platform is launching soon! May we contact you?</label>
        <Select
          options={contactOptions}
          value={contactPermission}
          onChange={(option) => setContactPermission(option)}
          placeholder="Select Preference"
        />
        {showErrors && errors.contactPermission && (
          <span className="error">{errors.contactPermission}</span>
        )}
      </div>

      {/* Early Access Preference */}
      <div className="salutationSection">
        <label>Would you like early access to our platform?</label>
        <Select
          options={earlyAccessOptions}
          value={earlyAccessSave}
          onChange={(option) => setEarlyAccessSave(option)}
          placeholder="Select"
        />
        {showErrors && errors.earlyAccessSave && (
          <span className="error">{errors.earlyAccessSave}</span>
        )}
      </div>

      {/* How Did You Hear About Us */}
      <div className="salutationSection">
        <label>How did you hear about us?</label>
        <Select
          options={sourceOptions}
          value={referralSource}
          onChange={(option) => setReferralSource(option)}
          placeholder="Select"
        />
        {showErrors && errors.referralSource && (
          <span className="error">{errors.referralSource}</span>
        )}
      </div>

      {/* Newsletter Subscription Preference */}
      <div className="salutationSection">
        <label>
          Would you like to subscribe to our newsletter for the latest updates
          and offers?
        </label>
        <Select
          options={newsletterOptions}
          value={subscribeNewsletter}
          onChange={(option) => setSubscribeNewsletter(option)}
          placeholder="Select"
        />
        {showErrors && errors.newsletter && (
          <span className="error">{errors.newsletter}</span>
        )}
      </div>

      <div className="salutationSection">
        <label>
          Would you like to confirm that we will share with you all our
          available properties for selling on daily and weekly basis?
        </label>
        <Select
          options={newsletterConfirmOptions}
          value={subscribeNewsletterConfirm}
          onChange={(option) => setSubscribeNewsletterConfirm(option)}
          placeholder="Select"
        />
      </div>

      {/* WhatsApp community */}
      {/* <div className="salutationSection">
        <label>
          We are creating a dedicated WhatsApp community to keep you informed
          about available property listings and company updates. Would you like
          to be enrolled in this group?
        </label>
        <Select
          options={whatsAppCommunityOptions}
          value={whatsAppGroup}
          onChange={(option) => setWhatsAppGroup(option)}
          placeholder="Select"
        />
        {showErrors && errors.whatsAppGroup && (
          <span className="error">{errors.whatsAppGroup}</span>
        )}
      </div> */}

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

export default AccessAndUpdates;
