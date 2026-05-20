export default function Books() {

  const books = [
    {
      title: "Operating Systems",
      price: "₹350",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Java Programming",
      price: "₹250",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    },
    {
      title: "Computer Networks",
      price: "₹400",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    },
  ];

  return (
    <div className="text-white px-10 py-20">

      <h1 className="text-5xl font-bold text-center mb-12">
        Available Books
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {books.map((book, i) => (
          <div
            key={i}
            className="bg-slate-900 rounded-3xl overflow-hidden hover:scale-105 transition"
          >

            <img src={book.image} className="h-64 w-full object-cover" />

            <div className="p-6">

              <h2 className="text-2xl font-bold">{book.title}</h2>

              <p className="text-cyan-400 text-xl mt-3 font-bold">
                {book.price}
              </p>

              <button className="mt-5 w-full bg-cyan-400 text-black py-3 rounded-xl font-bold">
                Contact Seller
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}