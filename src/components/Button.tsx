import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "default" | "operator" | "function" | "equals";
}

function Button({
  children,
  onClick,
  className = "",
  variant = "default",
}: ButtonProps) {
  // PERBAIKAN: Mengurangi ukuran font (text-5xl -> text-3xl), padding (py-12 -> py-6), dan tinggi (h-32 -> h-20)
  const baseClasses =
    "text-3xl font-semibold rounded-3xl transition-all duration-200 active:scale-95 shadow-lg h-20 flex items-center justify-center";

  const variantClasses = {
    default: "bg-gray-700 hover:bg-gray-600 text-white",
    operator: "bg-orange-500 hover:bg-orange-400 text-white",
    function: "bg-gray-500 hover:bg-gray-400 text-white",
    equals: "bg-green-500 hover:bg-green-400 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
