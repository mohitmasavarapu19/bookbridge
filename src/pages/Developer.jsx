import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaCode, FaBrain, FaServer, FaToolbox, FaBookOpen } from "react-icons/fa";

export default function Developer() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <FaCode className="text-cyan-400" />,
      items: ["C", "Python", "JavaScript", "HTML", "CSS"],
      color: "from-cyan-500/20 to-blue-500/5",
      borderColor: "group-hover:border-cyan-500/30"
    },
    {
      category: "Machine Learning",
      icon: <FaBrain className="text-purple-400" />,
      items: ["Scikit-learn", "Classification", "Regression", "Supervised Learning"],
      color: "from-purple-500/20 to-indigo-500/5",
      borderColor: "group-hover:border-purple-500/30"
    },
    {
      category: "Deep Learning",
      icon: <FaBrain className="text-pink-400" />,
      items: ["TensorFlow", "Neural Networks", "CNN", "Model Evaluation"],
      color: "from-pink-500/20 to-rose-500/5",
      borderColor: "group-hover:border-pink-500/30"
    },
    {
      category: "Web Development",
      icon: <FaServer className="text-emerald-400" />,
      items: ["React.js", "Tailwind CSS", "Vite", "Responsive Design"],
      color: "from-emerald-500/20 to-teal-500/5",
      borderColor: "group-hover:border-emerald-500/30"
    },
    {
      category: "Databases & Tools",
      icon: <FaToolbox className="text-amber-400" />,
      items: ["Firebase", "Firestore", "Git", "GitHub", "VS Code"],
      color: "from-amber-500/20 to-orange-500/5",
      borderColor: "group-hover:border-amber-500/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden pb-20">
      {/* Background radial spotlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 pt-16 relative z-10">
        
        {/* Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-3xl mb-12 shadow-2xl relative"
        >
        <div className="absolute -top-px left-10 right-10 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-4 bg-linear-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                MASAVARAPU SRI SIVA SAI MOHIT
              </h1>
              <p className="text-xl text-cyan-300 font-medium mt-2">
                Aspiring Software and AI/ML Engineer
              </p>
              <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed text-sm md:text-base">
                Aspiring Software and AI/ML Engineer with experience in full-stack web development, machine learning, and
                intelligent systems. Skilled in React.js, Firebase, Python, TensorFlow, and Scikit-learn with hands-on experience
                building modern web and AI-based applications.
              </p>
            </div>
            
            {/* Quick Contacts */}
            <div className="flex flex-col gap-3 w-full md:w-auto bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl">
              <a href="mailto:mohitmasavarapu1916@gmail.com" className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-cyan-400 transition">
                <FaEnvelope className="text-cyan-400" />
                <span>mohitmasavarapu1916@gmail.com</span>
              </a>
              <a href="tel:9347591593" className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-cyan-400 transition">
                <FaPhone className="text-cyan-400" />
                <span>+91 9347591593</span>
              </a>
              <a href="https://github.com/mohitmasavarapu19" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-cyan-400 transition">
                <FaGithub className="text-cyan-400" />
                <span>github.com/mohitmasavarapu19</span>
              </a>
              <a href="https://linkedin.com/in/mohit-masavarapu-548a80389" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-cyan-400 transition">
                <FaLinkedin className="text-cyan-400" />
                <span>linkedin.com/in/mohit-masavarapu...</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section: Technical Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 border-l-4 border-cyan-400 pl-3">
            <span>Technical Expertise</span>
            <span className="text-xs text-slate-500 font-normal">Skills inventory</span>
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group bg-linear-to-br ${skill.color} backdrop-blur-md border border-slate-800/80 p-6 rounded-2xl hover:bg-slate-900/60 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-slate-700 transition">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-950/80 border border-slate-800/80 hover:border-slate-700/80 text-gray-300 px-3 py-1.5 rounded-lg transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section: Featured Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 border-l-4 border-purple-400 pl-3">
            <span>Featured Projects</span>
            <span className="text-xs text-slate-500 font-normal">Production apps</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-linear-to-r from-slate-900/70 via-slate-900/50 to-slate-900/10 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden p-8 md:p-12 relative shadow-2xl"
          >
            <div className="absolute -top-px left-12 right-12 h-px bg-linear-to-r from-transparent via-purple-500/40 to-transparent"></div>
            <div className="absolute top-4 right-4 text-purple-400 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
              <FaBookOpen className="text-xs" />
              <span>Current Platform</span>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="space-y-6 lg:max-w-2xl">
                <div>
                  <h3 className="text-3xl font-extrabold text-white">
                    BookBridge – Student Book Marketplace
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["React.js", "Vite", "Tailwind CSS", "Firebase", "Firestore", "Framer Motion"].map((tech, i) => (
                      <span key={i} className="text-xs bg-purple-500/15 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Built a student marketplace platform for buying and selling second-hand academic books.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Developed a fully responsive frontend utilizing React.js and Tailwind CSS with micro-interactions.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Integrated Firebase Authentication and Firestore Database for secure login and real-time, cross-client book listings.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Implemented custom book uploads, real-time marketplace feeds with query parameters, and modular routing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Developer stats mock card */}
              <div className="lg:w-80 w-full flex flex-col justify-between border border-slate-800 bg-slate-950/80 p-6 rounded-2xl">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-900 pb-2">
                    Project Insights
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Database Layer</span>
                      <span className="text-xs text-cyan-400 font-medium">Cloud Firestore</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Session Provider</span>
                      <span className="text-xs text-cyan-400 font-medium">Firebase Auth</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Build Speed</span>
                      <span className="text-xs text-emerald-400 font-medium">Vite Optimized</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Animations</span>
                      <span className="text-xs text-purple-400 font-medium">Framer Motion</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-900 flex gap-4">
                  <a
                    href="https://github.com/mohitmasavarapu19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-xs font-bold transition text-gray-300 hover:text-white"
                  >
                    <FaGithub />
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
