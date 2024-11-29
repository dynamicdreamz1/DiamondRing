import {
    diamondsFetchStart,
    diamondsFetchSuccess,
    diamondsFetchFailure,
} from "../slices/diamondSlice";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchDiamondList = (filter) => async (dispatch) => {
    try {
        dispatch(diamondsFetchStart());

        console.log("filter", filter);

        // Create a new FormData instance
        const formData = new FormData();

        // Iterate over the filter object and append each key-value pair to FormData
        for (const key in filter) {
            if (filter.hasOwnProperty(key)) {
                formData.append(key, filter[key]);
            }
        }

        // Send the formData with a POST request
        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        dispatch(
            diamondsFetchSuccess({
                diamonds: response.data, // Access the `product` field in the response
            })
        );

        return response?.data;
    } catch (error) {
        dispatch(diamondsFetchFailure(error.message));
        console.error("Error fetching product:", error);
        throw error;
    }
};

