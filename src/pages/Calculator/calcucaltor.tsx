import React, { useState } from "react";
import "../Calculator/calculator.css";
import UndoIcon from '@mui/icons-material/Undo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface CalculatorDetails {
  id: number,
  operators: string,
  type: string
}

const Calculator: React.FC = () => {
  const [result, setResult] = useState("0");
  const listing: CalculatorDetails[] = [
    {
      id: 1,
      operators: "(",
      type: "condition"
    },
    {
      id: 2,
      operators: "(",
      type: "condition"
    },
    {
      id: 3,
      operators: "u",
      type: "oneClear"
    },
    {
      id: 4,
      operators: "AC",
      type: "clear"
    },
    {
      id: 5,
      operators: "1",
      type: "Number"
    },
    {
      id: 6,
      operators: "2",
      type: "Number"
    },
    {
      id: 7,
      operators: "3",
      type: "Number"
    },
    {
      id: 8,
      operators: "/",
      type: "condition"
    },
    {
      id: 9,
      operators: "4",
      type: "Number"
    },
    {
      id: 10,
      operators: "5",
      type: "Number"
    },
    {
      id: 11,
      operators: "6",
      type: "Number"
    },
    {
      id: 12,
      operators: "*",
      type: "condition"
    },
    {
      id: 13,
      operators: "7",
      type: "Number"
    },
    {
      id: 14,
      operators: "8",
      type: "Number"
    },
    {
      id: 15,
      operators: "9",
      type: "Number"
    },
    {
      id: 16,
      operators: "-",
      type: "condition"
    },
    {
      id: 17,
      operators: "0",
      type: "Number"
    },
    {
      id: 18,
      operators: ".",
      type: "Number"
    },
    {
      id: 19,
      operators: "=",
      type: "equal"
    },
    {
      id: 20,
      operators: "+",
      type: "condition"
    }
  ];

  const buttonClick = (value: string, type: string) => {
    if (type === "Number" || type === "condition") {
      if (result === "0") {
        setResult(value);
      } else {
        setResult(result + value);
      }
    } else if (type === "clear") {
      setResult("0");
    } else if (type === "oneClear") {
      setResult(result.slice(0, -1) || "0");
    } else if (type === "equal") {
      try {
        const finalValue = eval(result);
        const fourDigits = String(finalValue).slice(0, 4)
        const remainingvalue = String(finalValue).slice(0, 3)

        console.log("eeeee", remainingvalue)
        const fullvalue = fourDigits + '.' + remainingvalue
        setResult(fullvalue);
        console.log("valueeee fixed", finalValue)
        if (finalValue === Infinity) {
          toast.error('Devision by zero is undefined', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
          });
          setResult("0")
        }
      } catch (err) {
        alert("incorrect");

      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };

  return (
    <>
      <div className="calculator">


        <div className="calculator_operators">
          <input type="text" value={result} onChange={handleChange} />
          {listing.map((items) => (
            <button
              key={items.id}
              onClick={() => buttonClick(items.operators, items.type)}
              className={
                items.type === "equal"
                  ? "equalBut"
                  : items.type === "condition"
                    ? "expressions"
                    : items.type === "clear"
                      ? "expressions"
                      : items.type === "oneClear"
                        ? "expressions undoIcon"
                        : ""
              }
            >
              {items.operators === "u" ? <UndoIcon /> : items.operators}
            </button>

          ))}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </>
  );
};

export default Calculator;
