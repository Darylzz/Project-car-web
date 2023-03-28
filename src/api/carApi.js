import axios from "../config/axios";

export const getAllUserCar = () => axios.get("/car");
