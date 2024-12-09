import React from 'react'
import { Link } from "react-router-dom"

const OurWork = () => {
    return (
        <section className='our-work-sec product-common-sec flex items-center mt-3'>
            <div className='container mx-auto px-4'>
                <div className='product-common-text py-8 px-5'>
                    <h3 className='cfpb-fib-title uppercase mb-3 md:mb-6'>OUR WORK</h3>
                    <p className='cfpb-fib-text'>We want your jewelry to be flawless and perfect in every detail. That’s why we take the time to hand-craft it individually.</p>
                    <Link to="/ring-select/ring-detail" className='cfpb-fib-link mt-7 flex justify-between items-center gap-3 md:justify-start md:mt-6'>
                        Read More
                        <svg className="w-8 h-3" viewBox="0 0 34 14"><svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect><path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path></svg></svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurWork