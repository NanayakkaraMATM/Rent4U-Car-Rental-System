import { axiosInstance } from "./service";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/newbooking/create";

const adminBooking = async (data) => {


    try {
        console.log("Data: ", data);
        const response = await axiosInstance.post(API_URL, data);
        alert("Booking added!")
        return response.data;
    } catch (e) {
        console.log("API Error: ", e);
        throw e;
    }
};

export default {
    adminBooking,
};