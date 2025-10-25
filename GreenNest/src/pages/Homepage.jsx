import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";



const careTips = [
  {
    title: "Watering",
    desc: "Most indoor plants prefer slightly moist soil. Water only when the top inch feels dry.",
    icon: "💧",
  },
  {
    title: "Sunlight",
    desc: "Place plants near windows with filtered light. Avoid harsh direct sunlight for delicate leaves.",
    icon: "☀️",
  },
  {
    title: "Fertilizing",
    desc: "Feed your plants every 2–4 weeks during the growing season with an organic fertilizer.",
    icon: "🌻",
  },
];

const experts = [
  {
    name: "Sophia Green",
    role: "Plant Stylist",
    img: "https://i.ibb.co/bgSZWtb1/logo-6.jpg",
  },
  {
    name: "Liam Forest",
    role: "Botanist",
    img: "https://i.ibb.co/TxdLkqyF/logo-3.jpg",
  },
  {
    name: "Emma Bloom",
    role: "Plant Therapist",
    img: "https://i.ibb.co/bgSZWtb1/logo-6.jpg",
  },
  {
    name: "Noah Leaf",
    role: "Eco Decor Specialist",
    img: "https://i.ibb.co/TxdLkqyF/logo-3.jpg",
  },
];

const Homepage = () => {
  const [plants, setPlants] = useState([]);

 
  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const slides = [
    {
      img: "https://i.ibb.co/tM2vd5Jr/House-Calls-Herman-Pelosi-Brooklyn-living-room-Gabriella-Herman-0.jpg",
      title: "Breathe Fresh. Live Green.",
      desc: "Discover air-purifying plants that make your home healthier.",
    },
    {
      img: "https://i.ibb.co/mQ0kyDm/roses-in-pots.jpg",
      title: "Nature Meets Comfort.",
      desc: "Create your indoor paradise with our curated plant collection.",
    },
    {
      img: "https://i.ibb.co/JWdj2xZG/n-LRue-Qw2-YPv-DPd8gyq-XTJ.jpg",
      title: "Grow Happiness Daily.",
      desc: "Bring balance and positivity through greenery.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-gray-800">
      
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4500 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[85vh]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[85vh] flex flex-col justify-center items-center text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/40 px-6 py-8 rounded-xl text-center">
                <h1 className="text-5xl md:text-6xl font-serif mb-3">
                  {slide.title}
                </h1>
                <p className="text-lg text-gray-100">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-4xl font-serif font-bold text-center text-green-800 mb-10">
           Top Rated ⭐ Indoor Plants
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.slice(0, 6).map((plant) => (
            <div
              key={plant.plantId}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-green-800">
                  {plant.plantName}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {plant.category} | ⭐ {plant.rating}
                </p>
                <p className="mt-2 font-semibold text-green-700">
                  ${plant.price}
                </p>
                <Link
                  to={`/plants/${plant.plantId}`}
                  className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    
<section className="relative py-16">
 
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-light"
    style={{ backgroundImage: "url('https://i.ibb.co/1JJ1w1vD/logo-10.jpg')" }}
  />

  <div className="absolute inset-0 bg-yellow-800 opacity-30" />

  <div className="relative z-10 max-w-6xl mx-auto py-12 px-6 md:px-20">
    <h2 className="text-center text-4xl font-serif font-bold text-purple mb-10">
       Plant Care Tips
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {careTips.map((tip, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300"
        >
          <div className="text-5xl mb-3">{tip.icon}</div>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            {tip.title}
          </h3>
          <p className="text-gray-700">{tip.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


     
      <section className="py-20 px-6 md:px-16 bg-[#f9f8f6] text-center">
        <h2 className="text-4xl font-serif font-bold text-green-800 mb-10">
          🌼 Meet Our 🌿 Green Experts ⭐
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {experts.map((expert, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-5 transition"
            >
              <img
                src={expert.img}
                alt={expert.name}
                className="w-full h-56 object-cover rounded-xl"
              />
              <h3 className="text-xl font-semibold text-green-800 mt-3">
                {expert.name}
              </h3>
              <p className="text-gray-600">{expert.role}</p>
            </div>
          ))}
        </div>
      </section>
  
     
      <section className="relative bg-green-100 py-20 px-6 text-center overflow-hidden">
 
        <div
            className="absolute inset-0 bg-cover bg-center filter blur-light opacity-40"
            style={{ backgroundImage: "url('https://i.ibb.co/mQ0kyDm/roses-in-pots.jpg')" }}
  />

  
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold text-green-800 mb-8">
      More Plants 
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
      Transform your living space with greenery! Add hanging planters,
      moss frames, and recycled pots for a fresh, eco-friendly aesthetic.
          </p>
          <Link to="/plants">
          <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition">
                       
      View Plants
      </button>
          </Link>
        </div>
      </section>
      <img
          src="https://i.ibb.co/xtXdGxPX/image-2.jpg"
          alt="Recycled Pots"
          className="rounded-sm  px-40 object-cover mb-4"
        />
     
       
<section className="relative bg-white py-20 px-6 text-center overflow-hidden">
  <div
    className="absolute inset-0  bg-center opacity-30"
    style={{ backgroundImage: "url('https://i.ibb.co/1JJ1w1vD/logo-10.jpg')" }}
  ></div>

  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-serif font-bold text-green-800 mb-6">
      EcoDecor 🌿
    </h2>
    <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
      Discover creative, sustainable décor ideas that bring nature into your home —
      from moss art and hanging gardens to upcycled pots and bamboo stands.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5">
        <img
          src="https://i.ibb.co/Nd3sR3Z4/1-24.webp"
          alt="Hanging Planters"
          className="rounded-xl w-full h-48 object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Recycled Pots
        </h3>
        <p className="text-gray-600 text-sm">
          Add elegance and life to small spaces with minimalist hanging pots.
        </p>
      </div>

    
      <div className="bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5">
        <img
          src="https://i.ibb.co/DfYV3613/choosing-indoor-plants.jpg"
          alt="Moss Wall Art"
          className="rounded-xl w-full h-48 object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Moss Art
        </h3>
        <p className="text-gray-600 text-sm">
          Create natural textures and bring freshness indoors with preserved moss.
        </p>
      </div>

    
      <div className="bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5">
        <img
          src="https://i.ibb.co/MkH4WWvk/bathroom-plants-lush.jpg"
          alt="Recycled Pots"
          className="rounded-xl w-full h-48 object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Hanging Planters
        </h3>
        <p className="text-gray-600 text-sm">
          Give old containers a new life with creative DIY eco-friendly designs.
        </p>
      </div>
    </div>

    <div className="mt-10">
      <Link
        to="/ecodecor"
        className="bg-green-700 text-white px-10 py-5 rounded-md hover:bg-green-800 transition"
      >
        Explore More EcoDecor
      </Link>
    </div>
    

    
  </div>
  
</section>



  
    </div>
    
    
  );
};

export default Homepage;
