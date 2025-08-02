import { Button } from "./ui/button";

function AboutSection(){
    return(
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
            <div className="w-full">
                    <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
                        <iframe 
                        src="https://www.youtube.com/embed/bCpEM6Qq_qs"
                        title="Data Artisans London"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"></iframe>
                    </div>
                </div>
            
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800 leading-sung">Welcome to <span className="text-blue-900">Data Artisans </span> 
                    <br/> Empowering careers beyond Education</h2>
                    <p className="text-gray-700 text-lg">
                        Data Artisans Limited, incorporated in London in 2021, is a boutique data consultancy 
                        focused on providing expert support in data science, machine Learning, and data architecture solutions. 
                        From strategy to implementation, the team helps clients unlock actionable insights and modernize their 
                        data infrastructure.
                    </p>
                    <p className="text-gray-700 text-lg">
                        With a stron presence in London's tech ecosystem, Data Artisans works closely with 
                        businesses and educational institutions to build scalable analytics platforms, cloud 
                        pipelines, and ML-powered applications. Their mission is to make complex data accessible 
                        and impactful for decision-makers across industries.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
                        <a href="/about">
                            Learn More About Us →
                        </a>
                    </Button>
                </div>
                
            </div>
        </section>
    )
}

export default AboutSection