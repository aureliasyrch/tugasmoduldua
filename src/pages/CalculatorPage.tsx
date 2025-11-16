import { useState } from "react";
import Display from "../components/Display";
import ButtonGrid from "../components/ButtonGrid";
import { Link } from "react-router-dom";

function CalculatorPage() {
  // ... (Logika state dan fungsi-fungsi Anda tetap sama, tidak perlu diubah) ...
  // State Management
  const [display, setDisplay] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);

  // Fungsi utilitas untuk perhitungan
  const calculate = (firstValue: number, secondValue: number, op: string) => {
    switch (op) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  // Handler Input Angka
  const inputNumber = (num: number) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  // Handler Input Desimal
  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  // Handler Clear (AC)
  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  // Handler Toggle Sign (+/-)
  const toggleSign = () => {
    const newValue = parseFloat(display) * -1;
    setDisplay(String(newValue));
  };

  // Handler Operator (+, -, *, /, =)
  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      const result = parseFloat(newValue.toFixed(8));
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation === "=" ? null : nextOperation);
  };

  return (
    // PERBAIKAN: Tambahkan justify-center
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8 flex flex-col justify-center items-center">
      {/* PERBAIKAN: Ubah max-w-lg menjadi max-w-sm */}
      <div className="max-w-sm w-full flex flex-col">
        {" "}
        {/* <-- UBAH INI */}
        {/* Tombol Back */}
        <Link
          to="/"
          className="text-white mb-6 block text-lg font-medium hover:text-orange-400 transition-colors"
        >
          &larr; Kembali ke Kartu Mahasiswa
        </Link>
        {/* PERBAIKAN: Ubah p-12 menjadi p-8 */}
        <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-700 flex flex-col">
          {" "}
          {/* <-- UBAH INI */}
          <Display
            value={display}
            previousValue={previousValue}
            operation={operation}
          />
          <ButtonGrid
            onNumberClick={inputNumber}
            onOperatorClick={performOperation}
            onDecimalClick={inputDecimal}
            onClear={clear}
            onToggleSign={toggleSign}
          />
          <div className="mt-6 text-center text-gray-500 text-xl">
            <p>Kalkulator dengan Component Architecture</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorPage;
