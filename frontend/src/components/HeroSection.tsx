import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import ScrollAnimation from "@/animation/ScrollAnimation";

function HeroSection() {

  return (
    <>
    <ScrollAnimation direction="up" delay={0.2}>
      <section className="relative flex flex-col lg:flex-row h-screen w-full">
        
        {/* Left Side - Text Content */}
<div
  className="lg:w-1/2 w-full flex flex-col justify-center px-6 py-8 text-center lg:text-left text-white h-3/2 lg:h-full"
  style={{
    background:
      "linear-gradient(135deg, #99b0f1ff 0%, #a7bef0ff 50%, #3b82f6 100%)",}}>
          <ScrollAnimation direction="up" delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight font-sans">
            Get Placed in <br/>
            <span className="text-[#243b7a] font-extrabold tracking-tight font-sans">
              UK Top Companies
            </span>
          </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.4}>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed font-sans">
            Unlock incredible career opportunities with expert guidance tailored to help you thrive in{" "}
            <span className="text-[#243b7a] font-semibold font-sans">UK Top Companies</span>. 
            We provide end-to-end support to accelerate your professional journey.{" "}
            <strong>Guidance for job placements, CV marketing, and professional training.</strong>
          </p>
          </ScrollAnimation>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <ScrollAnimation direction="up" delay={0.7}>
              <Button
                onClick={() => {
                  const section = document.getElementById("services")
                  if(section){
                    section.scrollIntoView({behavior: "smooth"})
                  }
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg flex items-center gap-2 text-lg font-semibold font-sans"
              >
                Get Started <ArrowDown className="w-6 h-6" />
              </Button>
            </ScrollAnimation>
          </div>
        </div>

        {/* Right Side - Full Video */}
<div className="lg:w-1/2 w-full h-3/2 lg:h-full overflow-hidden">
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
    </ScrollAnimation>
    </>
  );
}

export default HeroSection;
