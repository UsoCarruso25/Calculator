import { useState } from "react";

const Contador = () => {
  const [display, setDisplay] = useState("0");
  const [primerNumero, setPrimerNumero] = useState(null);
  const [operacion, setOperacion] = useState(null);
  const [esperandoSegundoNumero, setEsperandoSegundoNumero] = useState(false);

  const manejarNumero = (num) => {
    if (esperandoSegundoNumero) {
      setDisplay(String(num));
      setEsperandoSegundoNumero(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const manejarOperacion = (op) => {
    const inputValue = parseFloat(display);

    if (primerNumero === null) {
      setPrimerNumero(inputValue);
    } else if (operacion) {
      const resultado = calcular();
      setDisplay(String(resultado));
      setPrimerNumero(resultado);
    }

    setOperacion(op);
    setEsperandoSegundoNumero(true);
  };

  const calcular = () => {
    const inputValue = parseFloat(display);
    if (primerNumero === null || operacion === null) return inputValue;

    switch (operacion) {
      case "+":
        return primerNumero + inputValue;
      case "-":
        return primerNumero - inputValue;
      case "*":
        return primerNumero * inputValue;
      case "/":
        if (inputValue === 0) {
          alert("No se puede dividir por cero");
          return primerNumero;
        }
        return primerNumero / inputValue;
      default:
        return inputValue;
    }
  };

  const manejarIgual = () => {
    if (primerNumero !== null && operacion !== null) {
      const resultado = calcular();
      setDisplay(String(resultado));
      setPrimerNumero(null);
      setOperacion(null);
      setEsperandoSegundoNumero(false);
    }
  };

  const limpiar = () => {
    setDisplay("0");
    setPrimerNumero(null);
    setOperacion(null);
    setEsperandoSegundoNumero(false);
  };

  const Aumentar = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue + 1));
  };

  const agregarPunto = () => {
    if (esperandoSegundoNumero) {
      setDisplay("0.");
      setEsperandoSegundoNumero(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  return (
    <div className="calculadora">
      <div className="display">
        <div className="operacion">
          {primerNumero} {operacion}
        </div>
        <div className="resultado">{display}</div>
      </div>

      <div className="botones-grid">
        <button className="boton boton-aumentar" onClick={Aumentar}>
          +1
        </button>
        <button className="boton boton-reset" onClick={limpiar}>
          AC
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(7)}>
          7
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(8)}>
          8
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(9)}>
          9
        </button>
        <button
          className="boton boton-operacion"
          onClick={() => manejarOperacion("/")}
        >
          ÷
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(4)}>
          4
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(5)}>
          5
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(6)}>
          6
        </button>
        <button
          className="boton boton-operacion"
          onClick={() => manejarOperacion("*")}
        >
          ×
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(1)}>
          1
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(2)}>
          2
        </button>
        <button className="boton boton-numero" onClick={() => manejarNumero(3)}>
          3
        </button>
        <button
          className="boton boton-operacion"
          onClick={() => manejarOperacion("-")}
        >
          −
        </button>
        <button
          className="boton boton-numero boton-cero"
          onClick={() => manejarNumero(0)}
        >
          0
        </button>
        <button className="boton boton-numero" onClick={agregarPunto}>
          .
        </button>
        <button
          className="boton boton-operacion"
          onClick={() => manejarOperacion("+")}
        >
          +
        </button>
        <button className="boton boton-igual" onClick={manejarIgual}>
          =
        </button>
      </div>

      <div className="marca">CALCULATOR HECHA POR JULIAN</div>
    </div>
  );
};

export default Contador;
