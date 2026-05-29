import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { FaBook, FaUser, FaTag, FaPhoneAlt, FaParagraph, FaList, FaLink, FaUpload } from "react-icons/fa";

const PRESET_COVERS = [
  { name: "Computer Science", url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600" },
  { name: "Mathematics", url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600" },
  { name: "Science & Physics", url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" },
  { name: "Literature & Arts", url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600" },
  { name: "General Notebook", url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600" }
];

export default function SellBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [semester, setSemester] = useState("Semester 1");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("Good");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  
  const [coverType, setCoverType] = useState("preset"); // 'preset' or 'custom'
  const [selectedPreset, setSelectedPreset] = useState(PRESET_COVERS[0].url);
  const [customCoverUrl, setCustomCoverUrl] = useState("");
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !author.trim() || !price || !phone.trim() || !description.trim()) {
      return setError("Please fill in all fields");
    }

    const priceNum = Number(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      return setError("Please enter a valid price greater than 0");
    }

    const imageUrl = coverType === "preset" ? selectedPreset : (customCoverUrl.trim() || PRESET_COVERS[4].url);

    try {
      setLoading(true);

      const bookData = {
        title: title.trim(),
        author: author.trim(),
        semester,
        price: priceNum,
        condition,
        contactPhone: phone.trim(),
        description: description.trim(),
        image: imageUrl,
        sellerId: currentUser.uid,
        sellerName: currentUser.displayName || currentUser.email.split("@")[0],
        sellerEmail: currentUser.email,
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, "books"), bookData);
      navigate("/books");
    } catch (err) {
      setError("Failed to upload book listing: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-16 relative overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 md:p-10 rounded-3xl relative z-10 shadow-2xl">
        <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 mb-4">
            <FaUpload className="text-3xl animate-bounce" />
          </div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Sell Your Book
          </h1>
          <p className="text-gray-400 text-sm mt-2">List your academic books for other students to buy</p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl text-sm mb-6 text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleUpload} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Left side inputs */}
            <div className="space-y-5">
              
              <div>
                <label className="text-xs text-gray-400 font-semibold mb-2 block uppercase tracking-wider">Book Title</label>
                <div className="relative">
                  <FaBook className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    type="text"
                    placeholder="e.g. Operating System Concepts"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl outline-none transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 font-semibold mb-2 block uppercase tracking-wider">Author Name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    type="text"
                    placeholder="e.g. Silberschatz, Galvin"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl outline-none transition text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-2 block uppercase tracking-wider">Semester</label>
                  <div className="relative">
                    <FaList className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                    <select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      disabled={loading}
                      className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl outline-none transition text-sm appearance-none cursor-pointer text-white"
                    >
                      {Array.from({ length: 8 }, (_, idx) => (
                        <option key={idx} value={`Semester ${idx + 1}`} className="bg-slate-950">
                          Semester {idx + 1}
                        </option>
                      ))}
                      <option value="Elective" className="bg-slate-950">Elective</option>
                      <option value="General" className="bg-slate-950">General / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-2 block uppercase tracking-wider">Price (₹)</label>
                  <div className="relative">
                    <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                    <input
                      type="number"
                      placeholder="Price in INR"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                      min="1"
                      disabled={loading}
                      className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl outline-none transition text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-2 block uppercase tracking-wider">Book Condition</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl outline-none transition text-sm appearance-none cursor-pointer text-white"
                  >
                    <option value="Like New" className="bg-slate-950">Like New</option>
                    <option value="Very Good" className="bg-slate-950">Very Good</option>
                    <option value="Good" className="bg-slate-950">Good</option>
                    <option value="Fair" className="bg-slate-950">Fair</option>
                    <option value="Heavily Used" className="bg-slate-950">Heavily Used</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold mb-2 block uppercase tracking-wider">Contact Phone</label>
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      disabled={loading}
                      className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl outline-none transition text-sm"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right side: Cover selector */}
            <div className="flex flex-col space-y-4">
              <label className="text-xs text-gray-400 font-semibold block uppercase tracking-wider">Book Cover Image</label>
              
              <div className="flex bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs mb-1">
                <button
                  type="button"
                  onClick={() => setCoverType("preset")}
                  className={`flex-1 py-1.5 rounded-lg font-medium transition cursor-pointer ${coverType === "preset" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-gray-400"}`}
                >
                  Choose Preset
                </button>
                <button
                  type="button"
                  onClick={() => setCoverType("custom")}
                  className={`flex-1 py-1.5 rounded-lg font-medium transition cursor-pointer ${coverType === "custom" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-gray-400"}`}
                >
                  Custom URL
                </button>
              </div>

              {coverType === "preset" ? (
                <div className="space-y-3 flex-grow">
                  <div className="grid grid-cols-5 gap-2">
                    {PRESET_COVERS.map((preset, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedPreset(preset.url)}
                        className={`relative rounded-lg overflow-hidden border-2 aspect-[3/4] transition ${selectedPreset === preset.url ? "border-cyan-400 scale-[1.03] shadow-[0_0_10px_rgba(34,211,238,0.3)]" : "border-transparent opacity-60 hover:opacity-100"}`}
                      >
                        <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-end p-1">
                          <span className="text-[7px] font-bold text-center w-full truncate leading-none">{preset.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Preview box */}
                  <div className="border border-slate-800 bg-slate-950/60 rounded-xl p-3 flex gap-3 items-center">
                    <img
                      src={selectedPreset}
                      alt="Selected cover preview"
                      className="w-16 h-20 object-cover rounded-lg border border-slate-800"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Selected Preset</span>
                      <p className="text-xs text-gray-300 mt-1 font-semibold">
                        {PRESET_COVERS.find(c => c.url === selectedPreset)?.name} Cover
                      </p>
                      <p className="text-[9px] text-gray-500 mt-0.5">High resolution textbook template cover</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 flex-grow">
                  <div className="relative">
                    <FaLink className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                    <input
                      type="url"
                      placeholder="Paste Image URL here (https://...)"
                      value={customCoverUrl}
                      onChange={(e) => setCustomCoverUrl(e.target.value)}
                      disabled={loading}
                      className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl outline-none transition text-sm"
                    />
                  </div>
                  
                  {/* Custom Preview box */}
                  <div className="border border-slate-800 bg-slate-950/60 rounded-xl p-3 flex gap-3 items-center">
                    <img
                      src={customCoverUrl.trim() || PRESET_COVERS[4].url}
                      alt="Custom preview"
                      onError={(e) => {
                        e.target.src = PRESET_COVERS[4].url;
                      }}
                      className="w-16 h-20 object-cover rounded-lg border border-slate-800"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Preview</span>
                      <p className="text-xs text-gray-300 mt-1 font-semibold truncate max-w-[200px]">
                        {customCoverUrl.trim() ? "Custom Image Loaded" : "Default Image"}
                      </p>
                      <p className="text-[9px] text-gray-500 mt-0.5">Falls back to preset cover if URL is invalid</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Bottom description box */}
          <div>
            <label className="text-xs text-gray-400 font-semibold mb-2 block uppercase tracking-wider font-semibold">Book Description</label>
            <div className="relative">
              <FaParagraph className="absolute left-4 top-4 text-gray-500 text-sm" />
              <textarea
                placeholder="Describe your book details... (e.g. edition, condition notes, availability, class notes included, syllabus relevance)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="4"
                disabled={loading}
                className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl outline-none transition text-sm resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 py-4 rounded-xl font-extrabold text-base transition hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-[1.01] active:scale-[0.99] flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-950 border-t-transparent"></span>
            ) : (
              <>
                <FaUpload />
                <span>Upload Book Listing</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}