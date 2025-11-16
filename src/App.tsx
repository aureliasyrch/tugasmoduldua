import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentCardPage from "./pages/StudentCardPage";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  return (
    // Gunakan Router untuk membungkus seluruh aplikasi
    <Router>
      <Routes>
        {/* Route untuk Halaman Kartu Mahasiswa (Path utama "/") */}
        <Route path="/" element={<StudentCardPage />} />

        {/* Route untuk Halaman Kalkulator */}
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
