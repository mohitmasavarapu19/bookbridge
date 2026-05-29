import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FaSearch, FaFilter, FaTimes, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaUser, FaInfoCircle, FaDatabase } from "react-icons/fa";

const SEED_BOOKS = [
  {
    title: "Introduction to Algorithms (4th Edition)",
    author: "Thomas H. Cormen, Charles E. Leiserson",
    semester: "Semester 3",
    price: 650,
    condition: "Very Good",
    contactPhone: "9347591593",
    description: "Standard syllabus textbook for Data Structures & Algorithms. Pages are clean, no ink marks. Original print edition bought last year.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
    sellerId: "seed-user-1",
    sellerName: "Siva Mohit",
    sellerEmail: "mohitmasavarapu1916@gmail.com",
    createdAt: new Date(Date.now() - 3600000 * 24 * 3).toISOString() // 3 days ago
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    author: "James Kurose, Keith Ross",
    semester: "Semester 5",
    price: 420,
    condition: "Good",
    contactPhone: "9876543210",
    description: "Essential textbook for CN course. Covers transport layer, routing algorithms, and networking protocols. Slightly worn cover edges but inside is crisp.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    sellerId: "seed-user-2",
    sellerName: "Rahul Sharma",
    sellerEmail: "rahul.sharma@college.edu",
    createdAt: new Date(Date.now() - 3600000 * 24 * 1).toISOString() // 1 day ago
  },
  {
    title: "Database System Concepts (7th Edition)",
    author: "Abraham Silberschatz, Henry F. Korth",
    semester: "Semester 4",
    price: 480,
    condition: "Like New",
    contactPhone: "9944883311",
    description: "Used for the DBMS theory and lab courses. Extremely clean, not a single highlight or tear. Selling as I am moving to the next semester.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    sellerId: "seed-user-3",
    sellerName: "Priyanka Sen",
    sellerEmail: "priya.sen@college.edu",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString() // 12 hours ago
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    semester: "Semester 6",
    price: 720,
    condition: "Like New",
    contactPhone: "9347591593",
    description: "Comprehensive AI book. Essential reference guide for ML, NLP, and intelligent search algorithms. Beautiful paper quality.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
    sellerId: "seed-user-4",
    sellerName: "Siva Mohit",
    sellerEmail: "mohitmasavarapu1916@gmail.com",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString() // 4 hours ago
  },
  {
    title: "Discrete Mathematics and Its Applications",
    author: "Kenneth H. Rosen",
    semester: "Semester 2",
    price: 350,
    condition: "Fair",
    contactPhone: "9123456780",
    description: "Purchased in first year. Worn out front cover but pages are 100% readable. Highly recommended for logic, proofs, and graph theory.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600",
    sellerId: "seed-user-5",
    sellerName: "Arjun Varma",
    sellerEmail: "arjun.v@college.edu",
    createdAt: new Date(Date.now() - 3600000 * 24 * 5).toISOString() // 5 days ago
  },
  {
    title: "Design Patterns: Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson",
    semester: "Elective",
    price: 550,
    condition: "Very Good",
    contactPhone: "9000123456",
    description: "The classical Gang of Four (GoF) book on design pattern architectures. Very useful for software engineering and job interviews.",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600",
    sellerId: "seed-user-6",
    sellerName: "Deva Gupta",
    sellerEmail: "deva.g@college.edu",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString() // 2 hours ago
  }
];

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [semesterFilter, setSemesterFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedBook, setSelectedBook] = useState(null);
  const [seeding, setSeeding] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState(false);
  const [error, setError] = useState("");

  // Listen to Firestore books collection in real time
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "books"),
      (snapshot) => {
        const booksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setBooks(booksData);
        setLoading(false);
      },
      (error) => {
        console.error("Firestore listening error: ", error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const handleSeedDatabase = async () => {
    try {
      setSeeding(true);
      setError("");
      for (const book of SEED_BOOKS) {
        await addDoc(collection(db, "books"), book);
      }
      setSeedSuccess(true);
      setTimeout(() => setSeedSuccess(false), 3000);
    } catch (err) {
      console.error("Failed to seed database: ", err);
      setError("Failed to seed database. Please check your connection.");
    } finally {
      setSeeding(false);
    }
  };

  const getConditionColor = (cond) => {
    switch (cond) {
      case "Like New":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
      case "Very Good":
        return "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";
      case "Good":
        return "bg-sky-500/10 text-sky-400 border border-sky-500/20";
      case "Fair":
        return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
      case "Heavily Used":
        return "bg-rose-500/10 text-rose-400 border border-rose-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border border-slate-500/20";
    }
  };

  // Filter and sort logic
  const filteredBooks = books
    .filter((book) => {
      const titleMatch = book.title?.toLowerCase().includes(search.toLowerCase()) || false;
      const authorMatch = book.author?.toLowerCase().includes(search.toLowerCase()) || false;
      const descMatch = book.description?.toLowerCase().includes(search.toLowerCase()) || false;
      const matchesSearch = titleMatch || authorMatch || descMatch;

      const matchesSemester = semesterFilter === "All" || book.semester === semesterFilter;

      return matchesSearch && matchesSemester;
    })
    .sort((a, b) => {
      if (sortBy === "priceAsc") {
        return a.price - b.price;
      }
      if (sortBy === "priceDesc") {
        return b.price - a.price;
      }
      // default: newest
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 md:px-10 py-12 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Academic Book Marketplace
          </h1>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Browse and purchase engineering and academic books uploaded by fellow students
          </p>
        </div>

        {/* Filter controls panel */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-5 rounded-2xl mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between shadow-lg">
          {/* Search Input */}
          <div className="relative w-full lg:max-w-xs">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search title, author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-850 focus:border-cyan-500 outline-none text-xs md:text-sm transition text-white placeholder-gray-500"
            />
          </div>

          {/* Filters & Sorting */}
          <div className="flex flex-wrap gap-3 w-full lg:w-auto items-center justify-end">
            
            {/* Semester Filter */}
            <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-850 px-3 py-1.5 rounded-xl">
              <FaGraduationCap className="text-cyan-400 text-xs md:text-sm" />
              <select
                value={semesterFilter}
                onChange={(e) => setSemesterFilter(e.target.value)}
                className="bg-transparent border-none outline-none text-xs md:text-sm text-gray-300 cursor-pointer pr-4 appearance-none"
              >
                <option value="All" className="bg-slate-950">All Semesters</option>
                {Array.from({ length: 8 }, (_, idx) => (
                  <option key={idx} value={`Semester ${idx + 1}`} className="bg-slate-950">
                    Semester {idx + 1}
                  </option>
                ))}
                <option value="Elective" className="bg-slate-950">Electives</option>
                <option value="General" className="bg-slate-950">General / Other</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-850 px-3 py-1.5 rounded-xl">
              <FaFilter className="text-cyan-400 text-xs md:text-sm" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none outline-none text-xs md:text-sm text-gray-300 cursor-pointer pr-4 appearance-none"
              >
                <option value="newest" className="bg-slate-950">Newest Listings</option>
                <option value="priceAsc" className="bg-slate-950">Price: Low to High</option>
                <option value="priceDesc" className="bg-slate-950">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>
            <p className="text-gray-400 text-sm animate-pulse">Loading catalog...</p>
          </div>
        ) : (
          <>
            {/* Seeding Box for Empty DB */}
            {books.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900/40 border border-slate-850 p-8 rounded-3xl text-center max-w-xl mx-auto shadow-2xl"
              >
                <FaDatabase className="text-4xl text-cyan-500/80 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Marketplace is Empty</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
                  No book listings have been uploaded yet. To easily test the platform's search, sorting, filtering, and detail modals, seed the database with 6 sample textbooks.
                </p>
                <button
                  onClick={handleSeedDatabase}
                  disabled={seeding}
                  className="bg-linear-to-r from-cyan-400 to-blue-500 text-slate-950 px-6 py-3 rounded-xl font-bold text-xs md:text-sm transition hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] active:scale-95 disabled:opacity-60 cursor-pointer flex items-center gap-2 mx-auto"
                >
                  {seeding ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent"></span>
                      <span>Seeding...</span>
                    </>
                  ) : seedSuccess ? (
                    <span>Catalog Seeded!</span>
                  ) : (
                    <>
                      <FaDatabase />
                      <span>Seed Sample Books</span>
                    </>
                  )}
                </button>
                {error && (
                  <p className="text-rose-500 text-xs mt-4 text-center font-medium animate-pulse">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {/* Empty filter results */}
            {books.length > 0 && filteredBooks.length === 0 && (
              <div className="text-center py-20 bg-slate-900/20 border border-slate-850/50 rounded-3xl">
                <FaInfoCircle className="text-3xl text-slate-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-400">No books match your criteria</h3>
                <p className="text-xs text-gray-500 mt-1">Try clearing your filters or entering a different search term.</p>
              </div>
            )}

            {/* Grid Layout of Books */}
            {filteredBooks.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="group bg-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-850 shadow-xl flex flex-col h-full hover:border-slate-700/80 transition-all duration-300"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600";
                        }}
                      />
                      
                      {/* Semester badge */}
                      <span className="absolute top-3 left-3 text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full border border-slate-800">
                        {book.semester}
                      </span>

                      {/* Condition badge */}
                      <span className={`absolute bottom-3 left-3 text-[9px] font-bold px-2.5 py-0.5 rounded ${getConditionColor(book.condition)}`}>
                        {book.condition}
                      </span>
                    </div>

                    {/* Book Metadata */}
                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h2 className="text-lg font-bold text-slate-100 group-hover:text-white transition line-clamp-1 leading-snug">
                          {book.title}
                        </h2>
                        <p className="text-gray-400 text-xs mt-1.5 italic truncate">
                          by {book.author}
                        </p>
                        
                        <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                          {book.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-900/60 flex items-center justify-between">
                        <span className="text-lg font-extrabold text-cyan-400 flex items-center gap-0.5">
                          <span className="text-sm font-normal">₹</span>
                          {book.price}
                        </span>
                        
                        <button
                          onClick={() => setSelectedBook(book)}
                          className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 text-xs md:text-sm font-bold px-4 py-2 rounded-xl group-hover:text-slate-950 group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm cursor-pointer"
            ></motion.div>

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 z-25 bg-slate-950/80 hover:bg-slate-800 p-2.5 rounded-full border border-slate-850 hover:text-cyan-400 transition cursor-pointer"
              >
                <FaTimes />
              </button>

              {/* Left Column: Image cover preview */}
              <div className="w-full md:w-2/5 relative bg-slate-950 md:min-h-[400px]">
                <img
                  src={selectedBook.image}
                  alt={selectedBook.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-slate-900/50"></div>
                
                {/* Float badges on cover inside modal */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-slate-900/90 text-cyan-400 px-3 py-1 rounded-full border border-slate-800">
                    {selectedBook.semester}
                  </span>
                  <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded ${getConditionColor(selectedBook.condition)}`}>
                    {selectedBook.condition}
                  </span>
                </div>
              </div>

              {/* Right Column: Detailed Info */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      {selectedBook.title}
                    </h2>
                    <p className="text-sm text-gray-400 italic mt-1.5">
                      by {selectedBook.author}
                    </p>
                  </div>

                  <div className="bg-slate-950/65 border border-slate-850 p-4 rounded-2xl flex items-center justify-between">
                    <span className="text-xs text-gray-400">Asking Price</span>
                    <span className="text-2xl font-black text-cyan-400 flex items-center gap-0.5">
                      <span className="text-base font-normal">₹</span>
                      {selectedBook.price}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Book Description</h3>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed bg-slate-950/30 p-3 rounded-xl border border-slate-900/40">
                      {selectedBook.description}
                    </p>
                  </div>

                  {/* Seller Info Panel */}
                  <div className="bg-slate-950/60 border border-slate-850 p-4 rounded-2xl space-y-3">
                    <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Seller Details</h4>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaUser className="text-cyan-500/80 text-[10px]" />
                        <span className="truncate">{selectedBook.sellerName}</span>
                      </div>
                      
                      {selectedBook.createdAt && (
                        <div className="text-right text-[10px] text-gray-500 self-center">
                          Listed on {new Date(selectedBook.createdAt).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact CTA Action Buttons */}
                <div className="mt-8 pt-4 border-t border-slate-850 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${selectedBook.contactPhone}`}
                    className="flex-1 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-950 py-3 rounded-xl font-bold text-xs md:text-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <FaPhoneAlt />
                    <span>Call Seller (+91 {selectedBook.contactPhone})</span>
                  </a>
                  
                  <a
                    href={`mailto:${selectedBook.sellerEmail}?subject=Inquiry%20about%20your%20book:%20${encodeURIComponent(selectedBook.title)}`}
                    className="flex-1 bg-slate-950 hover:bg-slate-800 text-cyan-400 border border-slate-800 py-3 rounded-xl font-bold text-xs md:text-sm transition flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <FaEnvelope />
                    <span>Email Seller</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}