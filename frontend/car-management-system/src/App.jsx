import React, { useState } from "react";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";

function App() {
    const [selectedCar, setSelectedCar] = useState(null);

    const handleEdit = (car) => {
        setSelectedCar(car);
    };

    const handleFormSubmit = () => {
        setSelectedCar(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Car Management System
            </h1>
            <div className="w-full max-w-4xl px-4">
                <CarForm selectedCar={selectedCar} onFormSubmit={handleFormSubmit} />
            </div>
            <div className="w-full max-w-4xl px-4 mt-10">
                <CarList onEdit={handleEdit} />
            </div>
        </div>
    );
}

export default App;