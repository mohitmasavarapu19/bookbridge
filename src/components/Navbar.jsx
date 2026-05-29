import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { FaBook, FaPlusCircle, FaSignOutAlt, FaLaptopCode, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Failed to log out", err);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 flex justify-between items-center px-4 md:px-12 py-4 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md text-white"
    >
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-linear-to-tr from-cyan-400 to-blue-500 p-2 rounded-xl text-slate-950 font-bold transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          <FaBook className="text-lg" />
        </div>
        <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
          BookBridge
        </span>
      </Link>

      <div className="flex items-center gap-2 md:gap-6">
        <Link
          to="/books"
          className={`flex items-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
            isActive("/books")
              ? "text-cyan-400 bg-cyan-500/10"
              : "text-gray-300 hover:text-white hover:bg-slate-900"
          }`}
        >
          <FaBook className="text-xs" />
          <span>Marketplace</span>
        </Link>

        <Link
          to="/sell"
          className={`flex items-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
            isActive("/sell")
              ? "text-cyan-400 bg-cyan-500/10"
              : "text-gray-300 hover:text-white hover:bg-slate-900"
          }`}
        >
          <FaPlusCircle className="text-xs" />
          <span>Sell Book</span>
        </Link>

        <Link
          to="/developer"
          className={`flex items-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
            isActive("/developer")
              ? "text-purple-400 bg-purple-500/10"
              : "text-gray-300 hover:text-white hover:bg-slate-900"
          }`}
        >
          <FaLaptopCode className="text-xs" />
          <span>Dev Hub</span>
        </Link>

        <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>

        {currentUser ? (
          <div className="flex items-center gap-2 md:gap-3">
            <span className="hidden md:flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{currentUser.displayName || currentUser.email.split("@")[0]}</span>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-all duration-200 cursor-pointer"
            >
              <FaSignOutAlt className="text-xs" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              to="/login"
              className={`flex items-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
                isActive("/login")
                  ? "text-cyan-400 bg-cyan-500/10"
                  : "text-gray-300 hover:text-white hover:bg-slate-900"
              }`}
            >
              <FaSignInAlt className="text-xs" />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-1 md:gap-1.5 px-2.5 md:px-3.5 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-bold bg-linear-to-r from-cyan-400 to-blue-500 text-slate-950 transition-all duration-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:scale-105"
            >
              <FaUserPlus className="text-xs" />
              <span>Sign Up</span>
            </Link>
          </div>
        )}
      </div>
    </motion.nav>
  );
}