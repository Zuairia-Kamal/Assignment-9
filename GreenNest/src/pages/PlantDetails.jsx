import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import MyContainer from "../components/MyContainer";

const PlantDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [plant, setPlant] = useState(null);

  
  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPlant = data.find(
          (item) => item.plantId === Number(id)
        );
        setPlant(foundPlant);
      })
      .catch((err) => console.error("Error loading plant:", err));
  }, [id]);

 
  const handleBook = (e) => {
    e.preventDefault();
    toast.success(" Consultation booked successfully!");
    e.target.reset();
  };
  
  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">
          {plant === null ? "Loading plant details..." : "Plant not found!"}
        </p>
      </div>
    );
  }
  

  return (
    <div className="bg-[#f9f8f6] min-h-screen py-16">
      <MyContainer>
       
        <div className="grid md:grid-cols-2 gap-10 items-center">
        
          <img
            src={plant.image}
            alt={plant.plantName}
            className="rounded-2xl shadow-lg w-full object-cover h-[400px] border border-green-200"
          />

       
          <div className="text-gray-800">
            <h2 className="text-4xl font-serif font-bold text-green-800 mb-2">
              {plant.plantName}
            </h2>
            <p className="text-gray-600 text-lg mb-4">{plant.description}</p>

            <div className="space-y-2 mb-4">
              <p>
                <strong>Category:</strong> {plant.category}
              </p>
              <p>
                <strong>Price:</strong>{" "}
                <span className="text-green-700 font-semibold">
                  ${plant.price}
                </span>
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {plant.rating}
              </p>
              <p>
                <strong>Stock:</strong> {plant.availableStock} available
              </p>
              <p>
                <strong>Care Level:</strong> {plant.careLevel}
              </p>
              <p>
                <strong>Provided by:</strong> {plant.providerName}
              </p>
            </div>
          </div>
        </div>

       
        <hr className="my-12 border-green-200" />

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-lg mx-auto border border-green-100">
          <h3 className="text-3xl font-serif font-bold text-green-800 mb-6 text-center">
            Book a Consultation
          </h3>
          <form onSubmit={handleBook} className="space-y-5">
            <div>
              <label className="block font-medium text-green-800 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                placeholder="Enter your name"
                required
                className="w-full border border-green-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-green-800 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                placeholder="Enter your email"
                required
                className="w-full border border-green-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </MyContainer>
    </div>
  );
};

export default PlantDetails;
