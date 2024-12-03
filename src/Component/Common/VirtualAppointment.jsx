import React from "react";

const VirtualAppointment = () => {
    
  const handlePopupOpen = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/programmer121-dynamicdreamz/30min", // Replace with your actual Calendly URL
      });
    } else {
      console.error("Calendly script is not loaded.");
    }
  };

  return (
    <div className="va-container p-6 bg-customGray-50 rounded-xl mt-4">
      <div className="va-wrapper">
        <div className="va-title text-black mb-2">Virtual Appointment</div>
        <div className="va-content mb-4 text-customGray-600">
          <p tabIndex="-1">
            <strong>See Keyzar's jewelry</strong> up close with a personal appointment. Explore engagement rings, diamonds, and fine jewelry in person through your device.
          </p>
        </div>
        <button
          className="va-button text-black underline inline-block"
          onClick={handlePopupOpen}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default VirtualAppointment;
