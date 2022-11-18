import axios from "axios"
import { Navigate } from "react-router-dom";
// import Error404Ui from "../views/Error404Ui/Error404Ui";
// import { USER_MAIN_DATA } from "./dataMocked";

const instanceAxios = axios.create({
    baseUrl: process.env.REACT_APP_BASE_URL
});

const handleCheckUrl = async (url, urlMock) => {
    try {
        if (process.env.NODE_ENV === "production") {
            const response = instanceAxios.get(url);
            return (await response).data.data;
        }
        else {
            const response = instanceAxios.get(urlMock);
            return (await response).data;
        }
    } catch (error) {
        console.log(error);
        error && <Navigate to="/error" />
    }

}

const getUserInfos = (id) => {
    const url = `${process.env.REACT_APP_BASE_URL + `/${id}`}`
    const baseUrlMocked = `../../data/${id}/USER_MAIN_DATA.json`;
    return handleCheckUrl(url, baseUrlMocked);
}

const getUserActivity = (id) => {
    const url = `${process.env.REACT_APP_BASE_URL + `/${id}/activity`}`
    const baseUrlMocked = `../../data/${id}/USER_ACTIVITY.json`;
    return handleCheckUrl(url, baseUrlMocked);
}

const getAverageSession = (id) => {
    const url = `${process.env.REACT_APP_BASE_URL + `/${id}/average-sessions`}`
    const baseUrlMocked = `../../data/${id}/USER_AVERAGE_SESSIONS.json`;
    return handleCheckUrl(url, baseUrlMocked);
}

const getPerformance = (id) => {
    const url = `${process.env.REACT_APP_BASE_URL + `/${id}/performance`}`
    const baseUrlMocked = `../../data/${id}/USER_PERFORMANCE.json`;
    return handleCheckUrl(url, baseUrlMocked);
}

export {
    getUserInfos,
    getUserActivity,
    getAverageSession,
    getPerformance
}