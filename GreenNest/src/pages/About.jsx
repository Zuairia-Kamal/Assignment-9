import React from "react";
import MyContainer from "../components/MyContainer";

const About = () => {
  return (
    <div className="bg-[#fafcd0] py-1"
    
    >
      <MyContainer>
        
        <h1 className="text-4xl font-serif font-bold text-red-500 text-center py-65 mb-8"
        style={{ backgroundImage: "url('https://i.ibb.co/SwtD6L9J/out-0-a167916d-6ec9-487e-9f4b-697a1819eebb.png')" }}>
         About Us
        </h1>
        <h1 className="text-4xl font-serif font-bold text-orange-500 text-center py-7 mb-8">
          Why We Need to Plant More Trees 🌳
        </h1>
        <div
            className="flex items-center px-39  bg-center h-94"
            style={{ backgroundImage: "url('https://i.ibb.co/JFspQ1Ww/image-3.jpg')" }}
        ></div>
        
        <div>
            <h2 className="text-2xl px-10 text-center font-semibold text-green-700 mb-4">
            The Role of Trees in 🌎 Combating Greenhouse Gases
            </h2>
            <p className="text-gray-700 leading-relaxed px-10 py-9">
              Greenhouse gases, such as carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O), trap heat in the Earth’s atmosphere, leading to global warming and climate change. These gases are mainly released by human activities like burning fossil fuels, deforestation, and industrial pollution. When too much of these gases accumulate, they cause rising global temperatures, melting ice caps, and extreme weather patterns. Trees play a vital role in reducing greenhouse gases — they absorb carbon dioxide during photosynthesis, releasing oxygen back into the air. By planting more trees, we can naturally filter harmful gases, cool the planet, and restore balance to the environment. Every tree planted is a step toward a cleaner, healthier, and more sustainable Earth.
            </p>
          </div>
        
        <div className="grid md:grid-cols-1 gap-8 items-center mb-20">
          <img
            src="https://i.ibb.co/CKc1j2cX/Earthsenergybalance-Final-scaled.jpg"
            alt="Forest"
            className="rounded-xl px-20 shadow-md"
          />
          
        </div>

        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <img
            src="https://i.ibb.co/RGmZ09S6/i3.jpg"
            alt="Forest"
            className="rounded-xl px-6 shadow-md"
          />
          <div>
            <h2 className="text-2xl px-10 font-semibold text-green-700 mb-4">
              Trees — The Lungs of Our Planet
            </h2>
            <p className="text-gray-700 px-10 leading-relaxed">
              Trees play a vital role in maintaining the balance of our
              ecosystem. They absorb carbon dioxide and release oxygen,
              purifying the air we breathe. Every tree acts as a natural
              air filter, reducing pollution and creating healthier living
              environments for both humans and wildlife.
            </p>
          </div>
        </div>

      
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl px-10 font-semibold text-green-700 mb-4">
              Combating Greenhouse Gases 🌎
            </h2>
            <p className="text-gray-700 px-10 leading-relaxed">
              Greenhouse gases trap heat in our atmosphere, leading to global
              warming and climate change. By planting trees, we can help reduce
              the amount of carbon dioxide — one of the main greenhouse gases —
              in the air. Trees store this carbon in their trunks, roots, and
              leaves, acting as long-term carbon sinks.
            </p>
            <p className="text-gray-700 px-10 leading-relaxed mt-4">
              Even one mature tree can absorb up to 48 pounds of carbon dioxide
              per year. Imagine the difference millions of trees can make!
            </p>
          </div>
          <img
            src="https://i.ibb.co/Q7JGbbRG/image3-2.jpg"
            alt="Greenhouse Effect"
            className="rounded-xl px-6 shadow-md"
          />
        </div>
       
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <img
            src="https://i.ibb.co/wZF7YQzN/image3-4.jpg"
            alt="Forest"
            className="rounded-xl px-6 shadow-md"
          />
          <div>
            <h2 className="text-2xl px-10 font-semibold text-green-700 mb-4">
              Trees — The Lungs of Our Planet
            </h2>
            <p className="text-gray-700 px-10 leading-relaxed">
              Trees play a vital role in maintaining the balance of our
              ecosystem. They absorb carbon dioxide and release oxygen,
              purifying the air we breathe. Every tree acts as a natural
              air filter, reducing pollution and creating healthier living
              environments for both humans and wildlife.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl px-10 font-semibold text-green-700 mb-4">
              Combating Greenhouse Gases 🌎
            </h2>
            <p className="text-green-700 px-10 leading-relaxed">
              Greenhouse gases trap heat in our atmosphere, leading to global
              warming and climate change. By planting trees, we can help reduce
              the amount of carbon dioxide — one of the main greenhouse gases —
              in the air. Trees store this carbon in their trunks, roots, and
              leaves, acting as long-term carbon sinks.
            </p>
            <p className="text-gray-700 px-10 leading-relaxed mt-4">
              Even one mature tree can absorb up to 48 pounds of carbon dioxide
              per year. Imagine the difference millions of trees can make!
            </p>
          </div>
          <img
            src="https://i.ibb.co/fdYFFB41/i4.jpg"
            alt="Greenhouse Effect"
            className="rounded-xl px-5 shadow-md"
          />
        </div>

       
        <div className="text-center">
            <div
            className="flex items-center px-39 bg-cover bg-center h-64"
            style={{ backgroundImage: "url('https://i.ibb.co/mQ0kyDm/roses-in-pots.jpg')" }}
        ></div>
          <h2 className="text-2xl font-bold font-serif text-green-700 mb-4">
            A Greener Future Starts With You 🌱
          </h2>
          
          <p className="text-gray-700 px-10 leading-relaxed max-w-3xl mx-auto font-serif">
            Every small step counts — whether you plant a single seed, support
            eco-friendly projects, or encourage others to care for the
            environment. Together, we can make our planet greener, healthier,
            and more sustainable for future generations.
          </p>
          <button className="mt-6 font-serif bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-green-800 transition font-medium">
            Plant a Tree Today 🌷
          </button>
        </div>
      </MyContainer>
    </div>
  );
};

export default About;
