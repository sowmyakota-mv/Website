import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const services=[
    {
        title: "Enroll in 3-Month Program",
        description: "Start Your journey with industry-relevant courses tailored for career growth.",
        link:"/how-it-works#steps"
    },
    {
        title: "Get Hands-on Training",
        description: "Gain real-world experience with practical projects and expert guidance.",
        link:"/how-it-works#support"
    },
    {
        title: "Apply & Get Placed",
        description: "We assist in placements and connect you with top recruiters for your domain.",
        link:"/how-it-works#hiring"
    },
]
function ServicesSection(){
    return(
        <section id="how-it-works" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Services</h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    we Offer end-to-end support from enrollment to placement, empowering
                     students with practical skills and career guidance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index)=>(
                        <div key={index}
                        className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200
                        flex flex-col justify-between text-left">
                            <div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <Link to={service.link}>
                                    <ArrowRight className="text-blue-600 w-6 h-6"/></Link>
                                    </div>
                                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ServicesSection