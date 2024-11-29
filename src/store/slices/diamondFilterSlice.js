import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    labgrown: false, // Single string for diamond type
    shape: '', // Single string for shape
    // color: [], // Array for multiple colors
    // clarity: [], // Array for multiple clarity values
    // cut: [], // Array for multiple cut values
    // carat: { min: 0, max: 0 }, // Range for carat weight
    // budget: { min: 0, max: 0 }, // Range for budget
    // certificate: [], // Array for multiple certificates
};

const diamondFilterSlice = createSlice({
    name: 'diamond',
    initialState,
    reducers: {
        updateFilter(state, action) {
            // Dynamically update state based on the provided key-value pairs
            Object.entries(action.payload).forEach(([key, value]) => {
                state[key] = value;
            });
        },
        resetFilters(state) {
            Object.assign(state, initialState); // Reset to initial state
        },
    },
});

export const { updateFilter, resetFilters } = diamondFilterSlice.actions;

export default diamondFilterSlice.reducer;
