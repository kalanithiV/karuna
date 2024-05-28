import React, { useState } from "react";
import "../Calculator/calculator.css";
import UndoIcon from '@mui/icons-material/Undo';

interface calculatordetails {
  id: number,
  oprators: string,
  type: string
}

const Calculator: React.FC = () => {
  const [result, setResult] = useState("0");

  const listing: calculatordetails[] = [
    {
      id: 1,
      oprators: "(",
      type: "condition"
    },
    {
      id: 2,
      oprators: "(",
      type: "condition"
    }
    ,
    {
      id: 3,
      oprators: "u",
      type: "oneClear"
    }
    ,
    {
      id: 4,
      oprators: "AC",
      type: "clear"
    }
    ,
    {
      id: 5,
      oprators: "1",
      type: "Number"
    }
    ,
    {
      id: 6,
      oprators: "2",
      type: "Number"
    }
    ,
    {
      id: 7,
      oprators: "3",
      type: "Number"
    },
    {
      id: 8,
      oprators: "/",
      type: "condition"
    },
    {
      id: 9,
      oprators: "4",
      type: "Number"
    }
    ,
    {

      id: 10,
      oprators: "5",
      type: "Number"
    }
    ,
    {
      id: 11,
      oprators: "6",
      type: "Number"
    }
    ,
    {
      id: 12,
      oprators: "*",
      type: "condition"
    }
    ,
    {
      id: 13,
      oprators: "7",
      type: "Number"
    }
    ,
    {
      id: 14,
      oprators: "8",
      type: "Number"
    },
    {
      id: 15,
      oprators: "9",
      type: "Number"
    }
    ,
    {
      id: 16,
      oprators: "-",
      type: "condition"
    }
    ,
    {
      id: 17,
      oprators: "0",
      type: "Number"
    }
    ,
    {
      id: 18,
      oprators: ".",
      type: "Number"
    },
    {
      id: 19,
      oprators: "=",
      type: "equal"
    }
    ,
    {
      id: 19,
      oprators: "+",
      type: "condition"
    }
  ]

  const buttonClick = (value: string, type: string) => {
    // if (result === "0") {
    //   setResult(value);
    // } else {
    //   setResult(result + value);
    // }

    if (type === "Number" || type === "condition") {
      if (result === "0") {
        setResult(value);
      } else {
        setResult(result + value);
      }


    }
    else if (type === "clear") {
      setResult("0");
    }
    else if (type === "oneclear") {
      setResult(result.slice(0, -1) || "0");
    }
    else if (type === "equal") {
      try {
        const finalvalue = eval(result)
        setResult((finalvalue).toFixed(4));
      } catch (err) {
        alert("Incorrect calculation, please enter correct values");
      }
    }
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);

  };
  // const clearResult = () => {
  //   setResult("0");
  // };

  // const finalResult = () => {
  //   try {
  //     setResult(eval(result));
  //   } catch (err) {
  //     alert("Incorrect calculation, please enter correct values");
  //   }
  // };

  // const EraseButton = () => {
  //   setResult(result.slice(0, -1))
  // }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input type="text" value={result} onChange={handleChange} />

            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => buttonClick("", '(')} className="expressions">(</button>
            </td>
            <td>
              <button onClick={() => buttonClick("", ')')} className="expressions">)</button>
            </td>
            {/* <td>
              <button onClick={() => buttonClick('%')} className="expressions">%</button>
            </td> */}
            <td >
              <button onClick={() => buttonClick("", "oneclear")} className="expressions undoIcon"><UndoIcon /></button>
            </td>
            <td>
              <button onClick={() => buttonClick("", "clear")} className="expressions">AC</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => buttonClick("1", "Number")}>1</button>
            </td>
            <td>
              <button onClick={() => buttonClick("2", "Number")}>2</button>
            </td>
            <td>
              <button onClick={() => buttonClick('3', "Number")}>3</button>
            </td>
            <td>
              <button onClick={() => buttonClick('/', "condition")} className="expressions">/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => buttonClick('4', "Number")}>4</button>
            </td>
            <td>
              <button onClick={() => buttonClick('5', "Number")}>5</button>
            </td>
            <td>
              <button onClick={() => buttonClick('6', "Number")}>6</button>
            </td>
            <td>
              <button onClick={() => buttonClick('*', "Number")} className="expressions">*</button>
            </td>
          </tr>
          <tr>

            <td>
              <button onClick={() => buttonClick('7', "Number")}>7</button>
            </td>
            <td>
              <button onClick={() => buttonClick('8', "Number")}>8</button>
            </td>
            <td>
              <button onClick={() => buttonClick('9', "Number")}>9</button>
            </td>
            <td>
              <button onClick={() => buttonClick('-', "condition")} className="expressions">-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => buttonClick('0', "Number")}>0</button>
            </td>
            <td>
              <button onClick={() => buttonClick('.', "condition")}>.</button>
            </td>
            <td>
              <button onClick={() => buttonClick('0', "equal")} className="equalBut">=</button>
            </td>
            <td>
              <button onClick={() => buttonClick('+', "condition")} className="expressions">+</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="calculator">
        <div className="calculator_operators">
       <input type="text" value={result} onChange={handleChange} />
          {
            listing.map((items, index) => (
              <>
                <button key={items.id} onClick={() => buttonClick(items.oprators, items.type)} 
                
                className={items.type === "equal" ? "equalBut" : items.type === "condition" ? "expressions" :items.type === "clear" ? "expressions":items.type === "oneClear" ? "expressions undoIcon":""}
                >
                   {items.oprators === "u" ? <UndoIcon /> : items.oprators}
                   
                   </button>
              </>
            ))
          }
        </div>
      </div>


    </>

  );
}
export default Calculator;
