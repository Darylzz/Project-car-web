import axios from "../config/axios";

export const getAllUserCar = () => axios.get("/car");
export const getCarByUserId = userId => axios.get(`/car/${userId}`);
