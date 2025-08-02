import { ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function HeroSection({scrollToServices}) {
    const [showForm, setShowForm]=useState(false)
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"style={{
          backgroundImage: "url('/background-img.jpg')",
        }}
      >
       
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)",
          }}
        ></div>

        <div className="relative z-10 max-w-4xl text-gray-800 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get Your Dream Job After{" "}
            <span className="text-blue-500">Masters Abroad!</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Enroll in our 3 Month job readiness program and land your ideal role
            faster
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={()=>setShowForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-lg">
              Register with us <ArrowRight className="text-white-600 w-8 h-8"/>
            </Button>
            <Button onClick={scrollToServices} className="bg-white text-blue-600 border border-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg">
              <a href="#services">Learn More </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="relative z-20 flex justify-center -mt-10">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4">
          <input
            type="text"
            placeholder="What do you want to study?"
            className="flex-1 px-4 py-4 text-gray-700 focus:outline-none font-semibold placeholder-gray-400"
          />

          <select className="border-l border-gray-300 px-4 py-4 text-gray-700 focus:outline-none font-semibold"
          defaultValue="">
            <option>Courses</option>
            <option value="" disabled>Search...</option>
            <option>Backend Development</option>
            <option>Data Analytics</option>
            <option>Frontend Development</option>
            <option>UI/UX developer</option>
            <option>Android Development</option>
            <option>Java Developer</option>
          </select>

          <select className="border-l border-gray-300 px-4 py-4 text-gray-700 focus:outline-none font-semibold"
          defaultValue="">
            <option value="" disabled>Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 font-semibold">
            Search
          </button>
        </div>
      </div>
      {showForm && (
       <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="relative bg-white rounded-xl border border-gray-300 shadow-2xl p-8 w-[90%] max-w-lg">
            <Button onClick={()=>setShowForm(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6"/>
            </Button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Register With Us</h2>
            <RegistrationForm/>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;
