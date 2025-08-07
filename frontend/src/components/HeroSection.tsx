import { ArrowDown, ArrowRight, Bold, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function HeroSection({ scrollToServices }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="relative flex flex-col lg:flex-row h-screen w-full">
        
        <div
          className="lg:w-1/2 w-full flex flex-col justify-center px-6 py-12 text-center lg:text-left text-white"
          style={{
            background:
              "linear-gradient(135deg, #99b0f1ff 0%, #a7bef0ff 50%, #3b82f6 100%)", 
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get Placed in  {" "}
            <br/>
            <span style={{color: "#243b7aff", fontWeight: "700" }}>UK Top Companies</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Unlock incredible career opportunities with expert guidance tailored to help you thrive in{" "}
            <span style={{color: "#243b7aff", fontWeight:"700"}}>UK Top Companies</span>. 
            We provide end-to-end support to accelerate your professional journey.{" "}
            <strong>Guidance for job placements, CV marketing, and professional training.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={() => {
                const section = document.getElementById("services")
                if(section){
                  section.scrollIntoView({behavior: "smooth"})
                }
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg flex items-center gap-2 text-lg font-semibold"
            >
              Get Started <ArrowDown className="w-6 h-6" />
            </Button>
            {/* <Button
              onClick={scrollToServices}
              className="bg-white text-blue-600 border border-white hover:bg-gray-100 px-6 py-4 rounded-lg text-lg"
            >
              Learn More
            </Button> */}
          </div>
        </div>

        {/* Right Side - Full Image */}
        <div className="lg:w-1/2 w-full h-64 lg:h-auto overflow-hidden">
          <video
            src="/33415-396631693_small.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Registration Modal */}
      {/* {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="relative bg-white rounded-xl border border-gray-300 shadow-2xl p-4 w-[90%] max-w-lg">
            <Button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </Button>
            <RegistrationForm />
          </div>
        </div>
      )} */}
    </>
  );
}

export default HeroSection;
