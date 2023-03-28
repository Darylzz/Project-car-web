import axios from "../config/axios";

export const getAllUserCar = () => axios.get("/car");
export const getCarByUserId = userId => axios.get(`/car/${userId}`);
export const deleteCarUserById = carId => axios.delete(`/car/delete/${carId}`);
export const userAddCar = input => axios.post("/car/add", input);
export const updateCarUser = (input, carId) => axios.patch(`/car/update/${carId}`, input);
