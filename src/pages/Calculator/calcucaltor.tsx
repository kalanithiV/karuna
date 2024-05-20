import React, { useState } from "react";
import "../Calculator/calculator.css";
import UndoIcon from '@mui/icons-material/Undo';
const Calculator:React.FC=()=>{
  const [result, setResult] = useState("0");

  const buttonClick = (value: string) => {
    if (result === "0") {
      setResult(value);
    } else {
      setResult(result + value);
    }
  };

  const clearResult = () => {
    setResult("0");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
    
  };

  const finalResult = () => {
    try {
      setResult(eval(result));
    } catch (err) {
      alert("Incorrect calculation, please enter correct values");
    }
  };
  const EraseButton =()=>{
    setResult(result.slice(0,-1))
}
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input type="text" value={result} onChange={handleChange} />
              
            </td>
            {/* <td >
            <button onClick={EraseButton} className="expressions"><UndoIcon /></button>
            </td>  */}
          </tr>
          <tr>
            <td>
              <button onClick={() => buttonClick('(')} className="expressions">(</button>
            </td>
            <td>
              <button onClick={() => buttonClick(')')} className="expressions">)</button>
            </td>
            {/* <td>
              <button onClick={() => buttonClick('%')} className="expressions">%</button>
            </td> */}
              <td >
            <button onClick={EraseButton} className="expressions undoIcon"><UndoIcon /></button>
            </td> 
            <td>
              <button onClick={clearResult} className="expressions">AC</button>
            </td>
            {/* <td >
            <button onClick={EraseButton} className="expressions undoIcon"><UndoIcon /></button>
            </td>  */}
          </tr>
          <tr>
            <td>
              <button onClick={() => buttonClick('1')}>1</button>
            </td>
            <td>
              <button onClick={() => buttonClick('2')}>2</button>
            </td>
            <td>
              <button onClick={() => buttonClick('3')}>3</button>
            </td>
            <td>
              <button onClick={() => buttonClick('/')} className="expressions">/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => buttonClick('4')}>4</button>
            </td>
            <td>
              <button onClick={() => buttonClick('5')}>5</button>
            </td>
            <td>
              <button onClick={() => buttonClick('6')}>6</button>
            </td>
            <td>
              <button onClick={() => buttonClick('*')} className="expressions">*</button>
            </td>
          </tr>
          <tr>
        
            <td>
              <button onClick={() => buttonClick('7')}>7</button>
            </td>
            <td>
              <button onClick={() => buttonClick('8')}>8</button>
            </td>
            <td>
              <button onClick={() => buttonClick('9')}>9</button>
            </td>
            <td>
              <button onClick={() => buttonClick('-')} className="expressions">-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => buttonClick('0')}>0</button>
            </td>
            <td>
              <button onClick={() => buttonClick('.')}>.</button>
            </td>
            <td>
              <button onClick={finalResult} className="equalBut">=</button>
            </td>
            <td>
              <button onClick={() => buttonClick('+')} className="expressions">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Calculator;
