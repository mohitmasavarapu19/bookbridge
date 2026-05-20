import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center px-8 py-5 border-b border-slate-800 text-white"
    >
      <h1 className="text-3xl font-bold text-cyan-400">
        BookBridge
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/sell">Sell</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </motion.nav>
  );
}