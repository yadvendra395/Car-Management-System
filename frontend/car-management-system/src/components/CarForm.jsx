import React, { useState, useEffect } from "react";
import { createCar, updateCar } from "../services/carService";

const CarForm = ({ selectedCar, onFormSubmit }) => {
    const [car, setCar] = useState({
        name: "",
        model: "",
        year: "",
        price: "",
        color: "",
        fuelType: "",
    });

    useEffect(() => {
        if (selectedCar) {
            setCar(selectedCar);
        }
    }, [selectedCar]);

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (car.id) {
            await updateCar(car.id, car);
        } else {
            await createCar(car);
        }
        onFormSubmit();
        window.location.reload;
        setCar({ name: "", model: "", year: "", price: "", color: "", fuelType: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-center">{car.id ? "Update Car" : "Add Car"}</h2>
            <div className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={car.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="model"
                        placeholder="Model"
                        value={car.model}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        value={car.year}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={car.price}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="color"
                        placeholder="Color"
                        value={car.color}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <select
                        name="fuelType"
                        value={car.fuelType}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Fuel Type</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {car.id ? "Update Car" : "Add Car"}
                </button>
            </div>
        </form>
    );
};

export default CarForm;
