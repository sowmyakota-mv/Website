import { CheckCircle, FileText, Sparkles, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const CvWritingPage = () => (
  <section
    id="cv-preparation"
    className="relative py-20 -mb-16 px-6 md:px-16 bg-gradient-to-br from-[#1a0b2e] via-[#3a0ca3] to-[#7209b7] overflow-hidden text-white"
  >
    {/* Background Glow Layers */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,150,0.2),transparent_70%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.15),transparent_70%)]"></div>

    <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      {/* Left: Neon Image Card */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute inset-0 rounded-3xl bg-fuchsia-500/20 blur-3xl group-hover:opacity-100 transition-all duration-700"></div>

        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,0,200,0.4)] group-hover:shadow-[0_0_50px_rgba(255,0,200,0.7)] transition-all duration-700">
          <img
            src="/cv-writing.jpg"
            alt="Professional CV Development"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div className="flex items-center gap-2 text-pink-300">
              <PenTool className="w-5 h-5" />
              <span className="uppercase text-sm tracking-wider font-medium">
                Crafting Careers with Precision
              </span>
            </div>
          </div>
        </div>

        <Sparkles className="absolute -top-4 -right-4 text-pink-400 w-8 h-8 animate-pulse" />
      </motion.div>

      {/* Right: Glass Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-8 h-8 text-white-400" />
          <h2 className="text-4xl font-bold  text-white">
            Professional CV Development
          </h2>
        </div>

        <p className="text-gray-200 mb-4 leading-relaxed">
          A great CV is your first step toward success. At{" "}
          <span className="font-semibold text-pink-300">Data Artisans Limited</span>,
          we build ATS-optimized resumes that highlight your strengths, showcase
          your skills, and align perfectly with market expectations.
        </p>

        <p className="text-gray-200 mb-4 leading-relaxed">
          Our expert writers and industry mentors ensure your CV doesn’t just
          pass filters it gets noticed. With guaranteed interview calls,
          you’re already one step closer to your dream job.
        </p>

        <p className="text-gray-200 mb-6 leading-relaxed">
          Combined with our personal branding and LinkedIn optimization services,
          we help you build a powerful digital career identity.
        </p>

        <ul className="space-y-3 text-gray-100">
          {[
            "Professionally crafted, ATS-compliant CV.",
            "Guaranteed job interview calls from top employers.",
            "Personal branding strategies to boost visibility.",
            "LinkedIn optimization for maximum recruiter reach.",
          ].map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle className="text-pink-400 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default CvWritingPage;
