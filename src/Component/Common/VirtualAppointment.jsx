import React from 'react';
import { PopupWidget } from 'react-calendly';

const VirtualAppointment = () => {

  const handlePopupOpen = () => {
    // Initialize the Calendly popup widget
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/programmer121-dynamicdreamz/30min', // Replace with your actual Calendly URL
    });
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

        {/* Button to open the popup */}
        <button
          className="va-button text-black underline inline-block"
          onClick={handlePopupOpen}
        >
          Book Appointment
        </button>

        {/* PopupWidget is not rendered until the button is clicked */}
        <PopupWidget
          url="https://calendly.com/programmer121-dynamicdreamz/30min"
          rootElement={document.getElementById('root')} // This is required for it to render correctly
        />
      </div>
    </div>
  );
};

export default VirtualAppointment;
