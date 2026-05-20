export default function SellBook() {
  return (
    <div className="text-white px-10 py-20">

      <div className="max-w-2xl mx-auto bg-slate-900 p-10 rounded-3xl">

        <h1 className="text-5xl font-bold text-center mb-10">
          Sell Your Book
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Book Name"
            className="w-full p-4 rounded-xl bg-slate-950"
          />

          <input
            type="text"
            placeholder="Semester"
            className="w-full p-4 rounded-xl bg-slate-950"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full p-4 rounded-xl bg-slate-950"
          />

          <button className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold">
            Upload Book
          </button>

        </div>

      </div>

    </div>
  );
}