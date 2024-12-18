import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';

const CertificateFilter = () => {
    const filters = useSelector((state) => state.diamondFilter);
    const dispatch = useDispatch();

    const handleLabSelection = (selectedLab) => {
        const newLabSelection = [...filters.lab]; // Clone the current array to avoid mutating state

        if (newLabSelection.includes(selectedLab)) {
            // If it's already selected, remove it from the array
            const index = newLabSelection.indexOf(selectedLab);
            newLabSelection.splice(index, 1);
        } else {
            // Otherwise, add it to the array
            newLabSelection.push(selectedLab);
        }

        dispatch(updateFilter({ lab: newLabSelection })); // Update Redux with the new array
        dispatch(updateFilter({ page: 0 }));

    };

    return (
        <div className="collection-range-item">
            <div className="mb-2">
                <div className="text-base font-bold text-black leading-none">Certificate</div>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 md:mt-3">
                <button
                    className={`flex-1 px-2 h-10 transition-colors border rounded-lg uppercase text-center flex justify-center items-center text-1.5sm leading-tight border-borders ${filters.lab.includes('IGI') ? 'border-black' : 'text-customGray-500 bg-customGray-75'} md:min-h-[4rem]`}
                    onClick={() => handleLabSelection('IGI')}
                >
                    IGI
                </button>
                <button
                    className={`flex-1 px-2 h-10 transition-colors border rounded-lg uppercase text-center flex justify-center items-center text-1.5sm leading-tight border-borders ${filters.lab.includes('GIA') ? 'border-black' : 'text-customGray-500 bg-customGray-75'} md:min-h-[4rem]`}
                    onClick={() => handleLabSelection('GIA')}
                >
                    GIA
                </button>
            </div>
        </div>
    )
}

export default CertificateFilter