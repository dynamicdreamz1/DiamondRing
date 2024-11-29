import {
    diamondFetchStart,
    diamondFetchSuccess,
    diamondFetchFailure,
} from "../slices/diamondSlice";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchDiamondList = (filter) => async (dispatch) => {
    try {
        dispatch(diamondFetchStart());

        const response = await axios.post(API_URL, filter);

        dispatch(
            diamondFetchSuccess({
                diamonds: response.data, // Access the `product` field in the response
            })
        );

        return response?.data;
    } catch (error) {
        dispatch(diamondFetchFailure(error.message));
        console.error("Error fetching product:", error);
        throw error;
    }
};


