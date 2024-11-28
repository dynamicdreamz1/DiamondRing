import React from 'react'

const VirtualAppointment = () => {
    return (
        <div class="va-container p-6 bg-customGray-50 rounded-xl mt-4">
            <div class="va-wrapper">
                <div class="va-title text-black mb-2">Virtual Appointment</div>
                <div class="va-content mb-4 text-customGray-600">
                    <p tabindex="-1">
                        <strong>See Keyzar's jewelry</strong> up close with a personal appointment. Explore engagement rings, diamonds, and fine jewelry in person through your device.</p>
                </div>
                <button class="va-button text-black underline inline-block">Book Appointment</button>
            </div>
        </div>
    )
}

export default VirtualAppointment