import {
    diamondsFetchStart,
    diamondsFetchSuccess,
    diamondsFetchFailure,
} from "../slices/diamondSlice";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

let cancelTokenSource = null;

export const fetchDiamondList = (filter,page) => async (dispatch) => {
    try {
        // Cancel the previous request if it exists
        if (cancelTokenSource) {
            cancelTokenSource.cancel("Operation canceled due to a new request.");
        }

        cancelTokenSource = axios.CancelToken.source();

        dispatch(diamondsFetchStart());

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
            cancelToken: cancelTokenSource.token,
        });

        dispatch(
            diamondsFetchSuccess({
                diamonds: response.data,
                append : page > 0 ? true : false
            })
        );

        return response?.data;

        
    } catch (error) {
        if (axios.isCancel(error)) {
            console.warn("Request canceled:", error.message);
        } else {
            dispatch(diamondsFetchFailure(error.message));
            console.error("Error fetching product:", error);
        }
        throw error;
    }
};
