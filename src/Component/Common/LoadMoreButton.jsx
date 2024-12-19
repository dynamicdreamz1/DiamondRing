import React from 'react'

const LoadMoreButton = ({ handleLoadMore, loading }) => {
    return (
        <div className="load-more-btn-sec text-center">
            <button
                onClick={handleLoadMore}
                disabled={loading}
                className="bg-white text-black leading-tight ring-1 ring-black md:ring-2 overflow-hidden whitespace-nowrap relative transition-all duration-300 text-center rounded-full min-h-[3rem] tangiblee-load-more py-3.5 px-8"
            >
                {loading ? 'Loading...' : 'Load More'}
            </button>
        </div>
    )
}

export default LoadMoreButton