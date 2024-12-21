import axios from "axios";

const API_URL = "http://localhost:8080/api/cars";

// Get all cars
export const getAllCars = () => axios.get(API_URL);

// Get car by ID
export const getCarById = (id) => axios.get(`${API_URL}/${id}`);

// Create a new car
export const createCar = (car) => axios.post(API_URL, car);

// Update an existing car
export const updateCar = (id, car) => axios.put(`${API_URL}/${id}`, car);

// Delete a car
export const deleteCar = (id) => axios.delete(`${API_URL}/${id}`);