// import React from "react";
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom";

function StudentCardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Kartu Nama Mahasiswa
      </h1>

      {/* Tombol Navigasi ke Kalkulator */}
      <Link
        to="/calculator"
        className="mb-8 px-6 py-3 bg-red-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-colors"
      >
        Buka Kalkulator &rarr;
      </Link>

      <div className="flex flex-wrap justify-center">
        {/* Penggunaan StudentCard dengan Props */}
        <StudentCard
          name="Budi Santoso"
          nim="25102021"
          dob="10 Januari 2004"
          hobby="Bermain Futsal"
        />

        <StudentCard
          name="Sara Wijaya"
          nim="25102022"
          dob="15 Maret 2003"
          hobby="Membaca Novel dan Melukis"
        />

        <StudentCard
          name="Aji Perdana"
          nim="25102023"
          dob="22 September 2005"
          hobby="Coding dan Main Game"
        />
      </div>
    </div>
  );
}

export default StudentCardPage;
