import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ServicePage=()=>{
     const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = 80;
        const offsetTop = section.offsetTop - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

    const companies=[
        { name: "Google", logo: "/images/google-logo.png" },
    { name: "Microsoft", logo: "/images/microsoft-logo.png" },
    { name: "Amazon", logo: "/images/amazon-logo.png" },
    { name: "TCS", logo: "/images/tcs-logo.png" },
    { name: "Infosys", logo: "/images/infosys-logo.png" },
    { name: "Wipro", logo: "/images/wipro-logo.png" },
  ];
    

    return(
        <div>
        <section id="steps" className="py-16 px-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Detailed Step-by-Step Process</h1>
            <img src="/steps.jpg"
            alt="steps" className="w-full h-72 object-cover rounded-lg shadow-md mb-8"/>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">Our 3-month program is designed to guide you through every stage of your career journey, 
        from learning fundamentals to landing your dream job. We emphasize practical skills and 
        personalized support throughout the process.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">Here's how it works: we start with foundational concepts, then transition to
                real-world projects and advanced topics. Throughout, you'll receive mentorship
                and personalized support.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>Enroll easily with our seamless registration process.</li>
                <li>Attend interactive classes with industry experts.</li>
                <li>Work on live projects and build a strong portfolio.</li>
                <li>Regular assessments and feedback from mentors.</li>
                <li>Placement support including mock interviews & resume preparation.</li>
            </ul>
        </section>

        <section id="support" className="py-16 px-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
                Placement Support
            </h1>
            <img src="/support.jpg" alt="support" 
            className="w-full h-72 object-cover rounded-lg shadow-md mb-8"/>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                we believe that getting the right job is as important as acquiring the right skills.
                That's why we provide end-to-end placement assistance to ensure you stand out to recruiters.
            </p>
            <p className=" text-gray-700 mb-8 text-lg leading-relaxed">
                Our dedicated placement team connects you with top companies while preparing you with
                the tools needed to succeed in interviews.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>Resume building & LinkedIn profile Optimization.</li>
                <li>Mock interviews with industry experts.</li>
                <li>Access to exclusive job portals and career fairs.</li>
                <li>Regular updates on new openings and hiring drives.</li>
                <li>1:1 mentorship for interview preparation.</li>
            </ul>
        </section>

        <section id="hiring" className="py-16 px-6 max-w-6xl mx-auto">
            <h1 className="test-4xl font-bold text-blue-700 mb-6 text-center">
                Companies Hiring Our Graduates
            </h1>
            <img src="/hiring.jpg" alt="hiring"
            className="w-full h-72 object-cover rounded-lg shadow-md mb-8"/>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Below are some of the leading organizations that have hired our talented graduates:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
                {companies.map((company, index)=>(
                    <div key={index}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="/company.logo" alt="company"
                        className="h-16 mb-3"/>
                        <p className="text-gray-700 font-semibold">{company.name}</p>
                        </div>
                ))}
            </div>
        </section>
        </div>
    )
}
export default ServicePage