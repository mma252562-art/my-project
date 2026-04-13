import React from 'react'
import App from './App'
import { FaFacebook } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




export default function Home() {
  const movies = [
    {
      title: "The Grudge",
      year: 2020,
      cast: [
        "Andrea Riseborough",
        "Demián Bichir",
        "John Cho",
        "Betty Gilpin",
        "Lin Shaye",
        "Jacki Weaver"
      ],
      genres: ["Horror", "Supernatural"],
      href: "The_Grudge_(2020_film)",
      extract: "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
      thumbnail_width: 220,
      thumbnail_height: 326
    },
    {
      title: "Underwater",
      year: 2020,
      cast: [
        "Kristen Stewart",
        "Vincent Cassel",
        "Jessica Henwick",
        "John Gallagher Jr.",
        "Mamoudou Athie",
        "T.J. Miller"
      ],
      genres: ["Action", "Horror", "Science Fiction"],
      href: "Underwater_(film)",
      extract: "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
      thumbnail_width: 250,
      thumbnail_height: 398
    },
    {
      title: "Like a Boss",
      year: 2020,
      cast: [
        "Tiffany Haddish",
        "Rose Byrne",
        "Salma Hayek",
        "Jennifer Coolidge",
        "Billy Porter"
      ],
      genres: ["Comedy"],
      href: "Like_a_Boss_(film)",
      extract: "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 383
    },
    {
      title: "Three Christs",
      year: 2020,
      cast: [
        "Richard Gere",
        "Peter Dinklage",
        "Walton Goggins",
        "Bradley Whitford"
      ],
      genres: ["Drama"],
      href: "Three_Christs",
      extract: "Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 383
    },
    {
      title: "Inherit the Viper",
      year: 2020,
      cast: [
        "Josh Hartnett",
        "Margarita Levieva",
        "Chandler Riggs",
        "Bruce Dern",
        "Owen Teague"
      ],
      genres: ["Crime", "Drama"],
      href: "Inherit_the_Viper",
      extract: "Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg",
      thumbnail_width: 236,
      thumbnail_height: 350
    },
    {
      title: "The Sonata",
      year: 2020,
      cast: [
        "Freya Tingley",
        "Simon Abkarian",
        "Rutger Hauer",
        "James Faulkner"
      ],
      genres: ["Mystery", "Thriller"],
      href: "The_Sonata_(film)",
      extract: "The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg",
      thumbnail_width: 246,
      thumbnail_height: 350
    },
    {
      title: "The Murder of Nicole Brown Simpson",
      year: 2020,
      cast: [
        "Mena Suvari",
        "Nick Stahl",
        "Taryn Manning"
      ],
      genres: ["Crime", "Horror"],
      href: "The_Murder_of_Nicole_Brown_Simpson",
      extract: "The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg",
      thumbnail_width: 263,
      thumbnail_height: 380
    },
    {
      title: "Bad Boys for Life",
      year: 2020,
      cast: [
        "Will Smith",
        "Martin Lawrence",
        "Vanessa Hudgens",
        "Alexander Ludwig",
        "Charles Melton",
        "Paola Núñez",
        "Kate del Castillo",
        "Nicky Jam",
        "Joe Pantoliano"
      ],
      genres: ["Action", "Comedy"],
      href: "Bad_Boys_for_Life",
      extract: "Bad Boys for Life is a 2020 American buddy cop action comedy film.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
      thumbnail_width: 219,
      thumbnail_height: 325
    },
    {
      title: "Dolittle",
      year: 2020,
      cast: [
        "Robert Downey Jr.",
        "Antonio Banderas",
        "Michael Sheen",
        "Emma Thompson",
        "Rami Malek",
        "John Cena",
        "Kumail Nanjiani",
        "Octavia Spencer",
        "Tom Holland",
        "Craig Robinson",
        "Ralph Fiennes",
        "Selena Gomez",
        "Marion Cotillard"
      ],
      genres: ["Adventure", "Fantasy"],
      href: "Dolittle_(film)",
      extract: "Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png",
      thumbnail_width: 220,
      thumbnail_height: 326
    },
    {
      title: "A Fall from Grace",
      year: 2020,
      cast: [
        "Crystal R. Fox",
        "Phylicia Rashad",
        "Bresha Webb",
        "Mehcad Brooks",
        "Cicely Tyson",
        "Tyler Perry"
      ],
      genres: ["Thriller"],
      href: "A_Fall_from_Grace",
      extract: "A Fall from Grace is a 2020 American thriller film written and directed by Tyler Perry.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
      thumbnail_width: 259,
      thumbnail_height: 383
    }
  ];
 const TrindingMov = [
  {
    title: "John Henry",
    year: 2020,
    cast: [
      "Terry Crews",
      "Ludacris",
      "Jamila Velazquez",
      "Ken Foree",
      "Tyler Alvarez",
      "Joseph Julian Soria"
    ],
    genres: ["Drama", "Thriller"],
    href: "John_Henry_(2020_film)",
    extract: "John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg",
    thumbnail_width: 220,
    thumbnail_height: 316
  },
  {
    title: "The Rhythm Section",
    year: 2020,
    cast: [
      "Blake Lively",
      "Jude Law",
      "Sterling K. Brown"
    ],
    genres: ["Action", "Thriller"],
    href: "The_Rhythm_Section",
    extract: "The Rhythm Section is a 2020 action thriller film directed by Reed Morano.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/98/The_Rhythm_Section_poster.jpg",
    thumbnail_width: 260,
    thumbnail_height: 382
  },
  {
    title: "Gretel & Hansel",
    year: 2020,
    cast: [
      "Sophia Lillis",
      "Sammy Leakey",
      "Charles Babalola",
      "Jessica De Gouw",
      "Alice Krige"
    ],
    genres: ["Fantasy", "Horror"],
    href: "Gretel_%26_Hansel",
    extract: "Gretel & Hansel is a 2020 dark fantasy horror film based on the German folklore tale.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/de/Gretel_%26_Hansel_-_A_Grim_Fairy_Tale_theatrical_poster.jpeg",
    thumbnail_width: 220,
    thumbnail_height: 326
  },
  {
    title: "The Assistant",
    year: 2020,
    cast: [
      "Julia Garner",
      "Matthew Macfadyen"
    ],
    genres: ["Drama"],
    href: "The_Assistant_(2019_film)",
    extract: "The Assistant is a 2019 American drama film written and directed by Kitty Green.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9b/The_Assistant_poster.jpeg",
    thumbnail_width: 259,
    thumbnail_height: 383
  },
  {
    title: "Birds of Prey",
    year: 2020,
    cast: [
      "Margot Robbie",
      "Mary Elizabeth Winstead",
      "Jurnee Smollett-Bell",
      "Rosie Perez",
      "Chris Messina",
      "Ella Jay Basco",
      "Ali Wong",
      "Ewan McGregor"
    ],
    genres: ["Superhero"],
    href: "Birds_of_Prey_(2020_film)",
    extract: "Birds of Prey is a 2020 American superhero film based on the DC Comics team.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg",
    thumbnail_width: 220,
    thumbnail_height: 326
  },
  {
    title: "The Lodge",
    year: 2020,
    cast: [
      "Riley Keough",
      "Jaeden Martell",
      "Lia McHugh",
      "Richard Armitage",
      "Alicia Silverstone"
    ],
    genres: ["Horror"],
    href: "The_Lodge_(film)",
    extract: "The Lodge is a 2019 psychological horror film directed by Veronika Franz and Severin Fiala.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/cf/The_Lodge_poster.jpg",
    thumbnail_width: 220,
    thumbnail_height: 326
  },
  {
    title: "Timmy Failure: Mistakes Were Made",
    year: 2020,
    cast: [
      "Winslow Fegley",
      "Ophelia Lovibond",
      "Craig Robinson",
      "Wallace Shawn"
    ],
    genres: [
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy"
    ],
    href: "Timmy_Failure:_Mistakes_Were_Made",
    extract: "Timmy Failure: Mistakes Were Made is a 2020 adventure fantasy comedy-drama family film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/c8/Timmy_Failure_Mistakes_Were_Made_Poster.jpeg",
    thumbnail_width: 259,
    thumbnail_height: 383
  },
  {
    title: "Horse Girl",
    year: 2020,
    cast: [
      "Alison Brie",
      "Debby Ryan",
      "John Paul Reynolds",
      "Molly Shannon",
      "John Ortiz",
      "Paul Reiser"
    ],
    genres: ["Drama"],
    href: "Horse_Girl",
    extract: "Horse Girl is a 2020 American psychological drama film directed by Jeff Baena.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/3/37/Horse_Girl_poster.jpg",
    thumbnail_width: 259,
    thumbnail_height: 383
  }
];
const TVs = [
  {
    title: "To All the Boys: P.S. I Still Love You",
    year: 2020,
    cast: [
      "Lana Condor",
      "Noah Centineo",
      "Jordan Fisher",
      "Anna Cathcart",
      "John Corbett"
    ],
    genres: ["Comedy", "Teen", "Romance"],
    href: "To_All_the_Boys:_P.S._I_Still_Love_You",
    extract: "To All the Boys: P.S. I Still Love You is a 2020 American teen romantic comedy film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/bc/To_All_the_Boys_-_P.S._I_Still_Love_You_official_release_poster.jpg",
    thumbnail_width: 220,
    thumbnail_height: 326
  },
  {
    title: "Sonic the Hedgehog",
    year: 2020,
    cast: [
      "James Marsden",
      "Ben Schwartz",
      "Tika Sumpter",
      "Natasha Rothwell",
      "Adam Pally",
      "Neal McDonough",
      "Jim Carrey"
    ],
    genres: ["Action", "Adventure", "Comedy"],
    href: "Sonic_the_Hedgehog_(film)",
    extract: "Sonic the Hedgehog is a 2020 action-adventure comedy film based on the video game series.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic_the_Hedgehog_film_poster.jpg",
    thumbnail_width: 259,
    thumbnail_height: 384
  },
  {
    title: "Fantasy Island",
    year: 2020,
    cast: [
      "Michael Peña",
      "Maggie Q",
      "Lucy Hale",
      "Austin Stowell",
      "Portia Doubleday",
      "Jimmy O. Yang",
      "Ryan Hansen",
      "Michael Rooker"
    ],
    genres: ["Horror", "Supernatural"],
    href: "Fantasy_Island_(film)",
    extract: "Fantasy Island is a 2020 American supernatural horror film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/7/7e/Fantasy_Island_poster.jpg",
    thumbnail_width: 220,
    thumbnail_height: 326
  },
  {
    title: "The Photograph",
    year: 2020,
    cast: [
      "Issa Rae",
      "Lakeith Stanfield",
      "Chelsea Peretti",
      "Lil Rel Howery",
      "Courtney B. Vance"
    ],
    genres: ["Drama", "Romance"],
    href: "The_Photograph_(2020_film)",
    extract: "The Photograph is a 2020 American romantic drama film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/c4/The_Photograph_poster.jpg",
    thumbnail_width: 251,
    thumbnail_height: 397
  },
  {
    title: "Downhill",
    year: 2020,
    cast: [
      "Julia Louis-Dreyfus",
      "Will Ferrell",
      "Miranda Otto",
      "Zoë Chao",
      "Zach Woods"
    ],
    genres: ["Comedy", "Drama"],
    href: "Downhill_(2020_film)",
    extract: "Downhill is a 2020 American black comedy-drama film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/6a/Downhill_poster.jpeg",
    thumbnail_width: 258,
    thumbnail_height: 386
  },
  {
    title: "Spy Intervention",
    year: 2020,
    cast: [
      "Drew Van Acker",
      "Poppy Delevingne",
      "Natasha Bassett",
      "Max Silvestri",
      "Brittany Furlan",
      "Blake Anderson"
    ],
    genres: ["Action", "Comedy", "Spy"],
    href: "Spy_Intervention",
    extract: "Spy Intervention is a 2020 American action comedy spy film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/cf/Spy_Intervention_%282020%29_Film_Poster.jpg",
    thumbnail_width: 236,
    thumbnail_height: 350
  },
  {
    title: "The Kindness of Strangers",
    year: 2020,
    cast: [
      "Andrea Riseborough",
      "Tahar Rahim",
      "Zoe Kazan",
      "Bill Nighy",
      "Caleb Landry Jones",
      "Jay Baruchel"
    ],
    genres: ["Drama"],
    href: "The_Kindness_of_Strangers_(film)",
    extract: "The Kindness of Strangers is a 2019 internationally co-produced drama film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/8d/The_Kindness_of_Strangers_poster.jpg",
    thumbnail_width: 263,
    thumbnail_height: 379
  },
  {
    title: "The Call of the Wild",
    year: 2020,
    cast: [
      "Harrison Ford",
      "Omar Sy",
      "Cara Gee",
      "Dan Stevens",
      "Karen Gillan",
      "Bradley Whitford"
    ],
    genres: ["Adventure"],
    href: "The_Call_of_the_Wild_(2020_film)",
    extract: "The Call of the Wild is a 2020 American adventure film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/43/The_Call_of_the_Wild_poster.jpg",
    thumbnail_width: 251,
    thumbnail_height: 397
  },
  {
    title: "Emma",
    year: 2020,
    cast: [
      "Anya Taylor-Joy",
      "Johnny Flynn",
      "Josh O'Connor",
      "Callum Turner",
      "Mia Goth",
      "Miranda Hart",
      "Bill Nighy"
    ],
    genres: ["Comedy", "Historical", "Romance"],
    href: "Emma_(2020_film)",
    extract: "Emma is a 2020 period romantic comedy film based on Jane Austen's novel.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/53/Emma_poster.jpeg",
    thumbnail_width: 220,
    thumbnail_height: 326
  },
  {
    title: "The Last Thing He Wanted",
    year: 2020,
    cast: [
      "Anne Hathaway",
      "Ben Affleck",
      "Rosie Perez",
      "Edi Gathegi",
      "Mel Rodriguez",
      "Toby Jones",
      "Willem Dafoe"
    ],
    genres: ["Political", "Thriller"],
    href: "The_Last_Thing_He_Wanted_(film)",
    extract: "The Last Thing He Wanted is a 2020 political thriller film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Last_Thing_He_Wanted.jpg",
    thumbnail_width: 259,
    thumbnail_height: 383
  },
  {
    title: "Brahms: The Boy II",
    year: 2020,
    cast: [
      "Katie Holmes",
      "Owain Yeoman",
      "Christopher Convery",
      "Ralph Ineson"
    ],
    genres: ["Horror", "Supernatural"],
    href: "Brahms:_The_Boy_II",
    extract: "Brahms: The Boy II is a 2020 American supernatural horror film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/51/Brahms_The_Boy_Poster.jpg",
    thumbnail_width: 259,
    thumbnail_height: 383
  },
  {
    title: "The Night Clerk",
    year: 2020,
    cast: [
      "Tye Sheridan",
      "Ana de Armas",
      "Helen Hunt",
      "John Leguizamo"
    ],
    genres: ["Crime", "Drama"],
    href: "The_Night_Clerk",
    extract: "The Night Clerk is a 2020 American crime drama film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9f/The_Night_Clerk_poster.jpeg",
    thumbnail_width: 220,
    thumbnail_height: 330
  },
  {
    title: "Impractical Jokers: The Movie",
    year: 2020,
    cast: [
      "Brian Quinn",
      "Joe Gatto",
      "Sal Vulcano",
      "James Murray",
      "Paula Abdul"
    ],
    genres: ["Comedy"],
    href: "Impractical_Jokers:_The_Movie",
    extract: "Impractical Jokers: The Movie is a 2020 American reality comedy film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/6a/Impractical_Jokers_The_Movie_poster.png",
    thumbnail_width: 220,
    thumbnail_height: 325
  }
];

  return (
    
    <div className="w-full h-screen object-cover bg-[url(home.jpeg)] ">
      <div className=" container m-auto pt-60 ">

        <h1 className='text-white font-bold text-5xl'>OUR LETEST MOVIES</h1><br></br>
        
        <div className='grid grid-cols-5 gap-4 flex-wrap '>
          {movies.slice(0,10).map((movie) => (
            <div key={movie.title} className=" ">
              <img src={movie.thumbnail} alt={movie.title} className="w-100 h-70 rounded-4xl" />
              <p className=' text-center text-white'>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
