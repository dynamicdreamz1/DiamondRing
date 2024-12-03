import React from 'react'
import { PopupWidget } from 'react-calendly';


const GetInTouch = () => {

    const handlePopupOpen = () => {
        // Initialize the Calendly popup widget
        window.Calendly.initPopupWidget({
            url: 'https://calendly.com/programmer121-dynamicdreamz/30min', // Replace with your actual Calendly URL
        });
    };
    return (
        <section className='get-in-touch-sec product-common-sec flex items-center'>
            <div className='container mx-auto px-4'>
                <div className='product-common-text py-8 px-5'>
                    <h3 className='cfpb-fib-title uppercase mb-3 md:mb-6 text-black'>Get In Touch</h3>
                    <p className='cfpb-fib-text'>We are here to help you find the one for you. Set a personal appointment with our experts.</p>
                    <button onClick={handlePopupOpen} href="" className='cfpb-fib-link mt-7 flex justify-between items-center gap-3 md:justify-start md:mt-6'>
                        Book Now
                        <svg className="w-8 h-3" viewBox="0 0 34 14"><svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect><path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path></svg></svg>
                    </button>
                    <PopupWidget
                        url="https://calendly.com/programmer121-dynamicdreamz/30min"
                        rootElement={document.getElementById('root')} // This is required for it to render correctly
                    />
                </div>
            </div>
        </section>
    )
}

export default GetInTouch