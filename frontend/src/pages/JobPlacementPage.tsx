import { CheckCircle, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function JobPlacementPage() {
  return (
    <section
      id="job-placement"
      className="relative py-24 px-6 md:px-16 -mb-16 bg-gradient-to-br from-[#0a0f2c] via-[#3c1f99] to-[#00f0ff] text-white overflow-hidden"
    >
      {/* Neon Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.2),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text / Modern Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,255,255,0.1)]"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-cyan-300" />
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Job Placement Assistance
            </h2>
          </div>

          <p className="text-gray-200 mb-4 leading-relaxed">
            At <span className="font-semibold text-cyan-300">Data Artisans</span>, we go beyond training by providing personalized job placement assistance. 
            Our dedicated team ensures your profile reaches the right employers, aligning with your skills, interests, and career goals.
          </p>

          <p className="text-gray-200 mb-4 leading-relaxed">
            Leveraging strong industry connections, exclusive partnerships, and proactive outreach strategies, 
            we guide you from application to interview, ensuring you’re fully prepared for every opportunity.
          </p>

          <p className="text-gray-200 mb-6 leading-relaxed">
            Whether launching your career or seeking your next challenge, our placement program empowers you with confidence, resources, and industry insight to succeed.
          </p>

          {/* Bullet List */}
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Our Placement Support Includes:
          </h3>
          <ul className="space-y-4 text-gray-200">
            {[
              "One-on-one placement guidance",
              "Exclusive job openings",
              "Continuous career support",
              "Employer networking opportunities",
              "Resume and portfolio optimization"
            ].map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <CheckCircle className="text-cyan-400 w-5 h-5 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Modern Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-3xl bg-pink-500/20 blur-2xl group-hover:opacity-100 transition-all duration-700"></div>
          <div className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] transition-all duration-700">
            <img
              src="/job-placement.jpg"
              alt="Job Placement Assistance"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="flex items-center gap-2 text-cyan-300">
                <Briefcase className="w-5 h-5" />
                <span className="uppercase text-sm tracking-wider font-medium">
                  Secure Your Dream Job
                </span>
              </div>
            </div>
          </div>
          <Sparkles className="absolute -top-4 -right-4 text-cyan-300 w-8 h-8 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}

export default JobPlacementPage;
