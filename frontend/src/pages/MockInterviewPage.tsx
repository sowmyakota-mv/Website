import { CheckCircle, Users, Headphones, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const MockInterviewPage = () => (
  <section
    id="mock-interviews"
    className="relative py-24 px-6 md:px-16 -mb-16 bg-gradient-to-br from-[#0f081e] via-[#5b2ca0] to-[#00f0ff] text-white overflow-hidden"
  >
    {/* Background Neon Glows */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.2),transparent_70%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.15),transparent_70%)]"></div>

    <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,255,255,0.1)]"
      >
        <div className="flex items-center gap-3 mb-4">
          <Headphones className="w-8 h-8 text-cyan-300" />
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Mock Interviews That Build Confidence
          </h2>
        </div>

        <p className="text-gray-200 mb-4 leading-relaxed">
          Our <span className="font-semibold text-cyan-300">mock interviews</span> simulate real-world interview scenarios, 
          helping you face hiring managers with confidence and clarity. Each session is tailored to your skill level and career goals.
        </p>

        <p className="text-gray-200 mb-4 leading-relaxed">
          We focus on both <span className="font-semibold text-cyan-300">technical questions</span> and <span className="font-semibold text-cyan-300">behavioral skills</span>, 
          giving you the complete preparation package to impress recruiters and excel under pressure.
        </p>

        <p className="text-gray-200 mb-8 leading-relaxed">
          Receive personalized feedback on your answers, body language, and problem-solving approach every session is designed to transform anxiety into performance power.
        </p>

        <ul className="space-y-4 text-gray-100">
          {[
            "Realistic interview simulations with industry experts.",
            "Detailed feedback to enhance responses, presentation & body language.",
            "Focus on both technical and behavioral questions.",
            "Tailored sessions to prepare for your dream role.",
          ].map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle className="text-cyan-400 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right: Visual / Image Card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute inset-0 rounded-3xl bg-pink-500/20 blur-2xl group-hover:opacity-100 transition-all duration-700"></div>

        <div className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] transition-all duration-700">
          <img
            src="/interview.jpg"
            alt="Mock Interview Sessions"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div className="flex items-center gap-2 text-cyan-300">
              <Users className="w-5 h-5" />
              <span className="uppercase text-sm tracking-wider font-medium">
                Simulate Real Interview Experience
              </span>
            </div>
          </div>
        </div>

        <Sparkles className="absolute -top-4 -right-4 text-cyan-400 w-8 h-8 animate-pulse" />
      </motion.div>
    </div>
  </section>
);

export default MockInterviewPage;
