import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
    const {hash}=useLocation()

    useEffect(()=>{
        if(hash){
            const element=document.querySelector(hash)
            if(element){
                const headerOffset=80
                const elementPosition=element.getBoundingClientRect().top
                const offsetPosition=window.scrollY + elementPosition -headerOffset
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                })
            }
        }
    }, [hash])
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Who We Are */}
      <section id="who-we-are" className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Data Artisans Limited, incorporated in London in 2021, is a boutique 
            data consultancy focused on providing expert support in data science, 
            machine Learning, and data architecture solutions. From strategy to 
            implementation, the team helps clients unlock actionable insights and 
            modernize their data infrastructure.</p>

            <p className="text-gray-700 mb-4">With a strong presence in London's tech ecosystem, Data Artisans works 
            closely with businesses and educational institutions to build scalable 
            analytics platforms, cloud pipelines, and ML-powered applications. Their 
            mission is to make complex data accessible and impactful for decision-makers 
            across industries.We are a passionate team dedicated to empowering students and
            professionals with the right skills to excel in today's
            competitive job market.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to provide comprehensive, industry-focused courses
            that bridge the gap between theoretical knowledge and practical application.
          </p>
          <p className="text-gray-700">
            With years of experience in education and technology, we pride ourselves on
            creating programs that deliver real results.
          </p>
        </div>
        <img
          src="/who-we-are.jpg"
          alt="Who We Are"
          className="rounded-lg shadow-lg w-full"
        />
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/why-choose-us.jpg"
          alt="Why Choose Us"
          className="rounded-lg shadow-lg w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Choose Us</h2>
          <p className="text-gray-700 mb-4">
            Choosing the right platform for your career growth can be challenging.
            Here's why thousands of learners trust us:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li>Industry-relevant curriculum curated by experts</li>
            <li>Flexible learning options tailored to your schedule</li>
            <li>Dedicated placement support and career guidance</li>
          </ul>
          <p className="text-gray-700">
            Our holistic approach ensures that you not only learn but also gain the
            confidence to succeed in real-world scenarios.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Testimonials</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Don't just take our word for it - hear what our students have to say about
          their journey with us.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
            <img
              src="/user1.jpg"
              alt="user1"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">
              "The courses are well-structured and practical. The placement support
              helped me land my dream job!"
            </p>
            <h4 className="font-semibold">John Doe</h4>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
            <img
              src="/user2.jpg"
              alt="user2"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">
              "Amazing Learning experience! The mentors are very supportive and knowledgeable."
            </p>
            <h4 className="font-semibold">Sarah Smith</h4>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
            <img
              src="/user3.jpg"
              alt="user3"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">
              "I highly recommend these courses for anyone looking to upgrade their
              skills and get hired."
            </p>
            <h4 className="font-semibold">Alex Johnson</h4>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section id="golbal-offices">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Global Offices</h2>
        <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
          Our presence spans across multiple continents, ensuring we are always close to
          our learners and industry partners. Explore our global offices below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <img
            src="/office1.jpg"
            alt="office 1"
            className="rounded-lg shadow-md w-64 h-40 object-cover"
          />
          <img
            src="/office2.jpg"
            alt="office 2"
            className="rounded-lg shadow-md w-64 h-40 object-cover"
          />
          <img
            src="/office3.jpg"
            alt="office 3"
            className="rounded-lg shadow-md w-64 h-40 object-cover"
          />
          <img
            src="/office4.jpg"
            alt="office 4"
            className="rounded-lg shadow-md w-64 h-40 object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
