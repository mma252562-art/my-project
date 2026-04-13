import React from "react";

export default function D2026() {
  const TrendingMov =  [
  {
    title: "Neon Horizons",
    year: 2026,
    cast: ["Alex Rivera", "Maya Lin", "Jared Stone", "Sofia Chen"],
    genres: ["Sci-Fi", "Adventure"],
    href: "Neon_Horizons",
    extract: "Neon Horizons is a 2026 sci-fi adventure exploring distant galaxies and AI civilizations.",
    thumbnail: "https://via.placeholder.com/220x330.png?text=Neon+Horizons",
    thumbnail_width: 220,
    thumbnail_height: 330
  },
  {
    title: "Quantum Rift",
    year: 2026,
    cast: ["Liam Harper", "Ella Thompson", "Ravi Singh", "Clara Novak"],
    genres: ["Action", "Thriller"],
    href: "Quantum_Rift",
    extract: "Quantum Rift is a 2026 action thriller about parallel worlds colliding with reality.",
    thumbnail: "https://via.placeholder.com/220x330.png?text=Quantum+Rift",
    thumbnail_width: 220,
    thumbnail_height: 330
  },
  {
    title: "Eclipse of Souls",
    year: 2026,
    cast: ["Isabella Cruz", "Marcus Kane", "Nina Petrov", "Omar Haddad"],
    genres: ["Horror", "Mystery"],
    href: "Eclipse_of_Souls",
    extract: "Eclipse of Souls is a 2026 supernatural horror film set in a haunted futuristic city.",
    thumbnail: "https://via.placeholder.com/220x330.png?text=Eclipse+of+Souls",
    thumbnail_width: 220,
    thumbnail_height: 330
  },
  {
    title: "Celestial Dreams",
    year: 2026,
    cast: ["Sophia Li", "Daniel Kim", "Lara Jensen", "Tyler Brooks"],
    genres: ["Fantasy", "Romance"],
    href: "Celestial_Dreams",
    extract: "Celestial Dreams is a 2026 fantasy romance about star-crossed lovers traveling between worlds.",
    thumbnail: "https://via.placeholder.com/220x330.png?text=Celestial+Dreams",
    thumbnail_width: 220,
    thumbnail_height: 330
  }
];

  return (
 
<div>
    <div className="bg-[#131722] min-h-screen flex flex-col items-center gap-10 pt-20">
      <h1 className="text-white font-bold text-5xl mb-8">TRENDING MOVIES 2026</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {TrendingMov.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{movie.title} ({movie.year})</h2>
              <p className="text-gray-300 text-sm">{movie.genres.join(", ")}</p>
              <p className="text-gray-400 text-sm mt-2">{movie.extract}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {movie.cast.map((actor, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

</div>);
}