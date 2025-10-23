import { CheckCircle, Rocket, Users, Network, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const MarketingTeamPage = () => (
  <section
    id="cv-marketing"
    className="relative py-24 px-6 md:px-16 -mb-16 bg-gradient-to-br from-[#0f051e] via-[#3a0ca3] to-[#4cc9f0] text-white overflow-hidden"
  >
    {/* Ambient Gradient Glows */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,200,0.25),transparent_70%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.2),transparent_70%)]"></div>

    <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* Left: Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,255,255,0.1)]"
      >
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="w-8 h-8 text-cyan-300" />
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Dedicated Marketing Team For Your Success
          </h2>
        </div>

        <p className="text-gray-200 mb-4 leading-relaxed">
          At <span className="font-semibold text-cyan-300">Data Artisans Limited</span>, 
          your success doesn’t stop at training, it begins there. Our dedicated marketing 
          professionals are committed to ensuring your profile reaches the right hands.
        </p>

        <p className="text-gray-200 mb-4 leading-relaxed">
          From optimizing your online presence to connecting you with premium employers, 
          our team employs data-driven marketing and networking strategies to make your 
          career launch powerful and visible.
        </p>

        <p className="text-gray-200 mb-8 leading-relaxed">
          You’re not just a candidate, you’re a brand. And we make sure your professional 
          brand shines across digital platforms and recruiter networks globally.
        </p>

        <ul className="space-y-4 text-gray-100">
          {[
            "Active job marketing to top recruiters and MNCs.",
            "Personalized job search & application tracking.",
            "Exclusive networking support & hiring events.",
            "Employer branding via digital campaigns.",
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

      {/* Right: Futuristic Marketing Visual */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-2xl group-hover:opacity-100 transition-all duration-700"></div>

        <div className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] transition-all duration-700">
          <img
            src="/marketing.jpg"
            alt="Dedicated Marketing Team"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div className="flex items-center gap-2 text-cyan-300">
              <Users className="w-5 h-5" />
              <span className="uppercase text-sm tracking-wider font-medium">
                Driving Your Career Visibility
              </span>
            </div>
          </div>
        </div>

        {/* Floating Spark Icon */}
        <Sparkles className="absolute -top-4 -right-4 text-cyan-400 w-8 h-8 animate-pulse" />

        {/* Network Animation Accent */}
        <Network className="absolute bottom-6 left-6 text-pink-300 w-10 h-10 opacity-60 animate-spin-slow" />
      </motion.div>
    </div>
  </section>
);

export default MarketingTeamPage;
