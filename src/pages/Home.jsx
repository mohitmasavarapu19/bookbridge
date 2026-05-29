import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBook, FaUsers, FaRocket, FaArrowRight, FaCodeBranch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-white min-h-[90vh] flex flex-col justify-between relative overflow-hidden bg-slate-950">
      
      {/* Background glowing effects */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 flex-grow flex flex-col justify-center py-16 md:py-24 relative z-10">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs md:text-sm mb-6 font-semibold"
          >
            <FaCodeBranch />
            <span>Built by Mohit Masavarapu – Aspiring AI/ML & Web Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-tight"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              BookBridge
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A dedicated campus marketplace for college students to buy and sell second-hand academic textbooks. Connect with peers, save money, and share knowledge easily.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/books"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-8 py-4 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition hover:scale-105 active:scale-95"
            >
              <span>Explore Marketplace</span>
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              to="/sell"
              className="w-full sm:w-auto bg-slate-900 border border-slate-800 text-gray-300 hover:text-white px-8 py-4 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-slate-850 hover:border-slate-700 transition active:scale-95"
            >
              <span>List a Textbook</span>
            </Link>
          </motion.div>
        </section>

        {/* FEATURES SECTION */}
        <section className="grid md:grid-cols-3 gap-6 md:gap-8 mt-24">
          
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-850 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center group hover:border-slate-805 transition-all duration-300"
          >
            <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400 mb-5 group-hover:scale-110 transition duration-300">
              <FaBook className="text-3xl" />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Easy Buying</h2>
            <p className="text-gray-400 text-xs md:text-sm mt-3 leading-relaxed">
              Browse textbooks sorted by semester. Find affordable reference material uploaded by seniors directly in your college.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-850 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center group hover:border-slate-805 transition-all duration-300"
          >
            <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400 mb-5 group-hover:scale-110 transition duration-300">
              <FaUsers className="text-3xl" />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Student Community</h2>
            <p className="text-gray-400 text-xs md:text-sm mt-3 leading-relaxed">
              Built to foster mutual help inside campuses. Skip heavy courier charges or online broker cuts; deal directly with classmates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-850 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center group hover:border-slate-805 transition-all duration-300"
          >
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 mb-5 group-hover:scale-110 transition duration-300">
              <FaRocket className="text-3xl" />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Fast Uploads</h2>
            <p className="text-gray-400 text-xs md:text-sm mt-3 leading-relaxed">
              Upload your listing in under 60 seconds. Add book info, pick an Unsplash cover preset, type your phone details, and go live!
            </p>
          </motion.div>

        </section>
      </div>

      {/* FOOTER credit section */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-center text-xs text-gray-500 px-4 relative z-10">
        <p>© 2026 BookBridge Student Marketplace. Built as a portfolio project by <Link to="/developer" className="text-cyan-400 hover:underline hover:text-cyan-300 font-semibold transition">Mohit Masavarapu</Link>.</p>
      </footer>

    </div>
  );
}