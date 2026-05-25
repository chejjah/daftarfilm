import React from 'react';
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const movies = {
    "1": {
      title: "Avengers",
      desc: "Film Avengers menceritakan tentang sekelompok superhero dari Marvel yang bersatu untuk melawan ancaman besar seperti Loki dan Thanos.",
      genre: "Action, Sci-Fi",
      rating: "8.5/10",
      year: "2012",
      duration: "2h 23m"
    },
    "2": {
      title: "Spiderman",
      desc: "Peter Parker mendapatkan kekuatan laba-laba dan menjadi pahlawan di kota New York.",
      genre: "Action, Adventure",
      rating: "8.2/10",
      year: "2002",
      duration: "2h 1m"
    },
    "3": {
      title: "Batman",
      desc: "Bruce Wayne menjadi Batman untuk melawan kejahatan di kota Gotham.",
      genre: "Action, Crime",
      rating: "8.0/10",
      year: "2008",
      duration: "2h 32m"
    },
    "4": {
      title: "Narnia",
      desc: "Empat bersaudara masuk ke dunia Narnia melalui lemari ajaib.",
      genre: "Fantasy, Adventure",
      rating: "6.9/10",
      year: "2005",
      duration: "2h 20m"
    },
    "5": {
      title: "Beauty and the Beast",
      desc: "Belle jatuh cinta pada Beast yang sebenarnya seorang pangeran terkutuk.",
      genre: "Romance, Fantasy",
      rating: "7.2/10",
      year: "2017",
      duration: "2h 9m"
    },
    "6": {
      title: "Harry Potter",
      desc: "Harry Potter belajar sihir di Hogwarts dan melawan Voldemort.",
      genre: "Fantasy, Adventure",
      rating: "8.6/10",
      year: "2001",
      duration: "2h 32m"
    },
    "7": {
      title: "Avatar",
      desc: "Jake Sully menjelajahi Pandora dan membela suku Na'vi.",
      genre: "Sci-Fi, Adventure",
      rating: "7.8/10",
      year: "2009",
      duration: "2h 42m"
    },
    "8": {
      title: "Maze Runner",
      desc: "Sekelompok remaja mencoba keluar dari labirin misterius.",
      genre: "Action, Mystery",
      rating: "6.8/10",
      year: "2014",
      duration: "1h 53m"
    },
    "9": {
      title: "The Hobbit",
      desc: "Bilbo Baggins ikut perjalanan untuk merebut kembali kerajaan kurcaci.",
      genre: "Fantasy, Adventure",
      rating: "7.4/10",
      year: "2012",
      duration: "2h 49m"
    },
    "10": {
      title: "Transformers",
      desc: "Perang antara Autobots dan Decepticons di bumi.",
      genre: "Action, Sci-Fi",
      rating: "7.0/10",
      year: "2007",
      duration: "2h 23m"
    }
  };

  const movie = movies[id];

  if (!movie) {
    return (
      <div className="container">
        <h1>🎬 Film tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🎬 {movie.title}</h1>

      <div className="box">
        <p><b>Sinopsis:</b> {movie.desc}</p>
        <p><b>Genre:</b> {movie.genre}</p>
        <p><b>Rating:</b> {movie.rating}</p>
        <p><b>Tahun Rilis:</b> {movie.year}</p>
        <p><b>Durasi:</b> {movie.duration}</p>
      </div>
    </div>
  );
}

export default Detail;