import React from 'react'

const HeaderContain = ({ title, desc }) => {
    return (
        <div className="px-5 pb-6">
            <header className="max-w-7xl mx-auto text-center">
                <h1
                    className="text-black font-semibold text-1.5lg leading-none mb-1.5 md:text-3xl md:mb-2.5"
                    tabIndex="-1"
                >
                    {title}
                </h1>
                <p
                    className="leading-tighter text-black/50 text-1.5sm md:text-xl"
                    tabIndex="-1"
                >
                    {desc}
                </p>
            </header>
        </div>
    )
}

export default HeaderContain