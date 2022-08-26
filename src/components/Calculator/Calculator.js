import React from "react";
import { useState } from "react";
import "./Calculator.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createdigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <Button
          variant="outline-primary"
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          {i}
        </Button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    // const value = calc.slice(0, -1);
    const value = "";

    setCalc(value);

    const lol = "0";

    setResult(lol);
  };

  return (
    <>
      <div className="lol sm">
        <div className="calculator col-sm-9">
          <div className="display">
            {result ? <span>({result})</span> : ""} &nbsp;
            {calc || "0"}
          </div>
          <Stack className="operators" direction="horizontal" gap={0.15}>
            <Button variant="outline-primary" onClick={() => updateCalc("/")}>
              /
            </Button>
            <Button variant="outline-primary" onClick={() => updateCalc("*")}>
              *
            </Button>
            <Button variant="outline-primary" onClick={() => updateCalc("+")}>
              +
            </Button>
            <Button variant="outline-primary" onClick={() => updateCalc("-")}>
              -
            </Button>

            <Button variant="outline-primary" onClick={deleteLast}>
              DEL
            </Button>
          </Stack>

          <div className="digits">
            {createdigits()}
            <Button variant="outline-primary" onClick={() => updateCalc("0")}>
              0
            </Button>
            <Button variant="outline-primary" onClick={() => updateCalc(".")}>
              .
            </Button>
            <Button variant="outline-primary" onClick={calculate}>
              =
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
