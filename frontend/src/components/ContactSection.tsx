import RegistrationForm from "./RegistrationForm";
import { Button } from "./ui/button";

function ContactSection(){
    return(
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center shadow-lg rounded-xl overflow-hidden" >
                <div className="relative h-full">
                    <img src="/Contact-background-img.jpg"
                    alt="future"
                    className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-white/60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-4" >
                    <h2 className="text-3xl font-bold text-gray-800 leading-snug" 
                    >
                        Are you ready to start building your future?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Contact Us and get a free consultation.
                        Take your first step toward success today!
                    </p>
                    {/* <Button asChild>
                        <a href="#contact" className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
                            Contact Now
                        </a>
                    </Button> */}
                </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
         
          <div className="w-full max-w-md">
            <RegistrationForm />
          </div>
        </div>
            </div>
        </section>
    )
}

export default ContactSection