import React, { useState } from "react";
import { Link } from "react-router-dom";

import avengersImg from "../assets/avengers.jpg";
import spidermanImg from "../assets/spiderman.jpg";
import batmanImg from "../assets/batman.jpg";
import narniaImg from "../assets/narnia.jpg";
import beautyImg from "../assets/beauty.jpg";
import harryImg from "../assets/harry.jpg";
import avatarImg from "../assets/avatar.jpg";
import mazeImg from "../assets/maze.jpg";
import hobbitImg from "../assets/hobbit.jpg";
import transformersImg from "../assets/transformers.jpg";

function Home() {
  const [movies] = useState([
    { id: "1", nama: "Avengers", img: avengersImg },
    { id: "2", nama: "Spiderman", img: spidermanImg },
    { id: "3", nama: "Batman", img: batmanImg },
    { id: "4", nama: "Narnia", img: narniaImg },
    { id: "5", nama: "Beauty and the Beast", img: beautyImg },
    { id: "6", nama: "Harry Potter", img: harryImg },
    { id: "7", nama: "Avatar", img: avatarImg },
    { id: "8", nama: "Maze Runner", img: mazeImg },
    { id: "9", nama: "The Hobbit", img: hobbitImg },
    { id: "10", nama: "Transformers", img: transformersImg },
  ]);

  return (
    <div className="container">
      <h1>🎬 Daftar Film</h1>

      <div className="grid">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img src={movie.img} alt={movie.nama} />

            <div className="card-content">
              <h4>{movie.nama}</h4>
              <Link to={`/movie/${movie.id}`}>Lihat Detail</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;