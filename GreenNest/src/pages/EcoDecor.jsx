
import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import { Link } from "react-router-dom";

const EcoDecor = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/ecodecor.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error loading plants:", err));
  }, []);

  return (
    <div className="bg-[#f9f8f6] min-h-screen py-16"
    style={{ backgroundImage: "url('https://i.ibb.co/LdRGch73/spring-flowers-65de4a13478ee.jpg')" }}
    >
      <MyContainer>
        <h2 className="text-4xl font-serif font-bold text-yellow-300 text-center mb-10">
          EcoDecor Plants 🌼
          
        </h2>

        {plants.length === 0 ? (
          <p className="text-center text-gray-600 font-serif">
            Loading plants 🌿🌿🌿
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
            {plants.map((p) => (
              <div
                key={p.ecodecorId}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-green-100"
              >
                <figure className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.ecodecorName}
                    className="h-60 w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </figure>

                <div className="p-5 text-center">
                  <h3 className="text-2xl font-semibold text-green-800">
                    {p.ecodecorName}
                  </h3>
                  <p className="text-gray-600 mt-1">{p.category}</p>

                  <div className="flex justify-center items-center gap-3 mt-3">
                    <span className="text-green-700 font-semibold text-lg">
                      ${p.price}
                    </span>
                    <span className="text-yellow-500 font-semibold">
                      ⭐ {p.rating}
                    </span>
                  </div>

                  <Link to={`/ecodecor/${p.ecodecorId}`}>
                    <button className="mt-3 bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-green-800 transition">
                     💐 Explore 💐
                     
                    </button>
                  </Link>
                </div>
                
              </div>
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default EcoDecor;
