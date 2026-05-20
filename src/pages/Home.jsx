import { motion } from "framer-motion";
import { FaBook, FaUsers, FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-white">

      {/* HERO */}
      <section className="text-center py-28 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold"
        >
          BookBridge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-xl text-gray-400"
        >
          Buy & Sell used college books easily
        </motion.p>

        <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
        >
        Explore Books
        </motion.button>

      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-900 p-8 rounded-3xl text-center"
        >
          <FaBook className="text-4xl mx-auto text-cyan-400" />
          <h2 className="text-2xl font-bold mt-4">Easy Buying</h2>
          <p className="text-gray-400 mt-2">
            Find affordable books from seniors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-900 p-8 rounded-3xl text-center"
        >
          <FaUsers className="text-4xl mx-auto text-cyan-400" />
          <h2 className="text-2xl font-bold mt-4">Student Community</h2>
          <p className="text-gray-400 mt-2">
            Connect with students in your college
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-900 p-8 rounded-3xl text-center"
        >
          <FaRocket className="text-4xl mx-auto text-cyan-400" />
          <h2 className="text-2xl font-bold mt-4">Fast Selling</h2>
          <p className="text-gray-400 mt-2">
            Upload and sell books instantly
          </p>
        </motion.div>

      </section>

    </div>
  );
}