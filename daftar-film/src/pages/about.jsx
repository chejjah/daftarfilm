import React from 'react';

function About() {
  return (
    <div className="container">
      <h1>ℹ️ About MovieVerse</h1>

      <div className="box">
        <p>
          <b>MovieVerse</b> adalah aplikasi web sederhana yang berfungsi sebagai katalog
          daftar film yang dapat digunakan untuk mencari dan melihat informasi film
          secara cepat dan terstruktur.
        </p>

        <p>
          Aplikasi ini dibuat untuk memberikan pengalaman pengguna dalam menjelajahi
          daftar film serta melihat detail informasi dari setiap film yang dipilih
          tanpa harus membuka banyak halaman yang berat atau kompleks.
        </p>

        <h3>🎯 Tujuan Pembuatan Aplikasi</h3>
        <p>
          Tujuan utama dari pembuatan MovieVerse adalah untuk melatih pemahaman
          dalam pengembangan aplikasi berbasis <b>React.js</b>, khususnya dalam
          implementasi navigasi antar halaman menggunakan <b>React Router</b>,
          serta pengelolaan data film secara sederhana menggunakan struktur JavaScript.
        </p>

        <h3>⚙️ Teknologi yang Digunakan</h3>
        <ul>
          <li><b>React.js</b> → sebagai library utama untuk membangun tampilan UI</li>
          <li><b>React Router</b> → untuk mengatur perpindahan halaman (routing)</li>
          <li><b>CSS</b> → untuk mengatur tampilan dan desain antarmuka</li>
        </ul>

        <h3>🎬 Fitur Aplikasi</h3>
        <p>
          MovieVerse memiliki beberapa fitur utama yang mendukung pengalaman pengguna:
        </p>

        <ul>
          <li>
            Menampilkan daftar film pada halaman utama yang dapat dipilih oleh pengguna
          </li>
          <li>
            Pencarian film berdasarkan judul (jika fitur search digunakan)
          </li>
          <li>
            Navigasi antar halaman menggunakan React Router tanpa reload halaman
          </li>
          <li>
            Dynamic routing untuk menampilkan detail film berdasarkan ID yang dipilih
          </li>
          <li>
            Halaman detail film yang berisi informasi seperti sinopsis, genre, rating,
            tahun rilis, dan durasi
          </li>
          <li>
            Halaman informasi aplikasi (About) dan kontak (Contact)
          </li>
        </ul>

        <p>
          Dengan adanya fitur tersebut, MovieVerse diharapkan dapat menjadi
          aplikasi katalog film sederhana yang interaktif, ringan, dan mudah digunakan.
        </p>
      </div>
    </div>
  );
}

export default About;