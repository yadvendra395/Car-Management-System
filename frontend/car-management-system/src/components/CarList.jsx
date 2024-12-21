import React, { useEffect, useState } from "react";
import { getAllCars, deleteCar } from "../services/carService";

const CarList = ({ onEdit }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        const response = await getAllCars();
        setCars(response.data);
    };

    const handleDelete = async (id) => {
        await deleteCar(id);
        loadCars();
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Car List</h2>
            <ul className="space-y-4">
                {cars.map((car) => (
                    <li key={car.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:shadow-lg transition-all">
                        <div className="flex flex-col space-y-1">
                            <span className="font-semibold">{car.name}</span>
                            <span>{car.model}</span>
                            <span>{car.year}</span>
                            <span>{car.color}</span>
                            <span>{car.fuelType}</span>
                            <span className="font-semibold text-lg">${car.price}</span>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => onEdit(car)}
                                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(car.id)}
                                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;