import { CheckCircle, Cpu, Laptop, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Training = () => (
  <section
    id="training"
    className="relative py-20 -mb-16 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 overflow-hidden text-white"
  >
    {/* Background Tech Glow */}
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>

    <div className="relative grid md:grid-cols-2 gap-12 items-center z-10">
      {/* Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Cpu className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Hands-On Course Training
          </h2>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          At <span className="font-semibold text-cyan-300">Data Artisans Limited</span>, 
          we deliver immersive, hands-on programs built around real industry use cases. 
          Learn the latest tools and frameworks through guided, project-based training.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Whether you’re launching your tech career or upgrading your expertise, 
          our curriculum bridges the gap between classroom learning and workplace readiness.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Our mentors are industry veterans empowering you with modern practices, 
          practical insights, and the confidence to excel in the fast-evolving tech landscape.
        </p>

        <ul className="space-y-3 text-gray-200">
          {[
            "Industry-relevant courses: SQL, Power BI, Azure, and more.",
            "Live interactive sessions with real-time doubt solving.",
            "Access to case studies and hands-on labs.",
            "Certifications to validate your skills.",
          ].map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle className="text-cyan-400 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

     {/* Right: Futuristic Image Card with Neon Glow + Hover Zoom */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="relative group"
>
  {/* Neon Outer Glow */}
  <div className="absolute inset-0 rounded-3xl bg-cyan-500/30 blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-700"></div>

  {/* Image Wrapper */}
  <div className="relative rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] transition-all duration-700">
    <img
      src="/training.jpg"
      alt="Tech Training"
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
      <div className="flex items-center gap-2 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
        <Laptop className="w-5 h-5" />
        <span className="text-sm tracking-wide uppercase font-medium">
          Empowering Future Innovators
        </span>
      </div>
    </div>
  </div>

  {/* Floating Sparkles */}
  <Sparkles className="absolute -top-4 -right-4 text-cyan-300 w-8 h-8 animate-pulse" />
</motion.div>
    </div>
  </section>
);

export default Training;
