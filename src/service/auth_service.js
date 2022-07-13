import { saveAccessToken,saveRole,saveTokenType } from "../util/web_storage";

import { axiosInstance } from "./service";

const API_URL = "/api/user";



const adminLogin = async (email, password) => {
    try {


        console.log(email+' '+password)
        const response = await axiosInstance
            .post(API_URL + "/login", {
                email,
                password,
            });

        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));

            saveRole(response.data.role);
            saveAccessToken(response.data.token);
            saveTokenType(response.data.tokenType);
        }
        return response.data;
    }
    catch (e) {
        return "Please enter valid email and password";
    }
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {

    adminLogin,
    logout,
    getCurrentUser,
};