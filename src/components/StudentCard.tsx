import { useState } from "react";

// Menambahkan Type untuk Props
interface StudentCardProps {
  name: string;
  nim: string;
  dob: string;
  hobby: string;
}

function StudentCard({ name, nim, dob, hobby }: StudentCardProps) {
  const [showHobby, setShowHobby] = useState(false);

  return (
    <div className="w-80 bg-white shadow-xl rounded-lg p-6 m-4 transition-all hover:shadow-2xl">
      <h2 className="text-xl font-bold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-600">{nim}</p>
      <div className="border-t border-gray-200 my-3"></div>
      <p className="text-gray-700">
        <span className="font-semibold">Tgl. Lahir: </span>
        {dob}
      </p>

      {/* Tombol Interaktif dengan State */}
      <button
        onClick={() => setShowHobby(!showHobby)}
        className="mt-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full hover:bg-blue-200 transition-colors"
      >
        {showHobby ? "Sembunyikan Hobi" : "Tampilkan Hobi"}
      </button>

      {/* Conditional Rendering Hobi */}
      {showHobby && (
        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
          <p className="text-gray-700">
            <span className="font-semibold">Hobi: </span>
            {hobby}
          </p>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
