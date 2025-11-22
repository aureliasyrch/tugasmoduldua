import Button from "./Button";

interface ButtonGridProps {
  onNumberClick: (num: number) => void;
  onOperatorClick: (op: string) => void;
  onDecimalClick: () => void;
  onClear: () => void;
  onToggleSign: () => void;
}

function ButtonGrid({
  onNumberClick,
  onOperatorClick,
  onDecimalClick,
  onClear,
  onToggleSign,
}: ButtonGridProps) {
  return (

    <div className="grid grid-cols-4 gap-3">
      {/* Baris 1 */}
      <Button variant="function" onClick={onClear} className="col-span-2">
        AC
      </Button>
      <Button variant="function" onClick={onToggleSign}>
        +/-
      </Button>
      <Button variant="operator" onClick={() => onOperatorClick("/")}>
        ÷
      </Button>

      {/* Baris 2 */}
      <Button onClick={() => onNumberClick(7)}>7</Button>
      <Button onClick={() => onNumberClick(8)}>8</Button>
      <Button onClick={() => onNumberClick(9)}>9</Button>
      <Button variant="operator" onClick={() => onOperatorClick("*")}>
        x
      </Button>

      {/* Baris 3 */}
      <Button onClick={() => onNumberClick(4)}>4</Button>
      <Button onClick={() => onNumberClick(5)}>5</Button>
      <Button onClick={() => onNumberClick(6)}>6</Button>
      <Button variant="operator" onClick={() => onOperatorClick("-")}>
        -
      </Button>

      {/* Baris 4 */}
      <Button onClick={() => onNumberClick(1)}>1</Button>
      <Button onClick={() => onNumberClick(2)}>2</Button>
      <Button onClick={() => onNumberClick(3)}>3</Button>
      <Button variant="operator" onClick={() => onOperatorClick("+")}>
        +
      </Button>

      {/* Baris 5 */}
      <Button onClick={() => onNumberClick(0)} className="col-span-2">
        0
      </Button>
      <Button onClick={onDecimalClick}>.</Button>
      <Button variant="equals" onClick={() => onOperatorClick("=")}>
        =
      </Button>
    </div>
  );
}

export default ButtonGrid;
