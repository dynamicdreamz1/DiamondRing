import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    labgrown: false, // Single string for diamond type
    shape: 'Round', // Single string for shape
    lab: [],
    price_from: 200,
    price_to: 100000,
    carat_from: 1,
    carat_to: 10,
    cut: [],
    polish: [],
    symmetry: [],
    color: ["J", "I", "H", "G", "F", "E", "D"],
    clarity: ["SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"],
    page: 0,
    order_by: "",
    order: "",
    // budget: { min: 0, max: 0 }, // Range for budget
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
