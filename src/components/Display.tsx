interface DisplayProps {
  value: string;
  previousValue: number | null;
  operation: string | null;
}

function Display({ value, previousValue, operation }: DisplayProps) {
  return (
    // Mengurangi margin bottom
    <div className="mb-4">
      {/* Mengurangi padding display */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-inner">
        <div className="text-right">
          {/* Text size dikurangi dari text-3xl ke text-xl */}
          <div className="text-gray-500 text-xl mb-1 h-7">
            {previousValue !== null && operation && operation !== "="
              ? `${previousValue} ${operation}`
              : ""}
          </div>
          {/* Text size dikurangi dari text-9xl ke text-6xl */}
          <div className="text-white text-6xl font-bold overflow-x-auto overflow-y-hidden whitespace-nowrap">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
