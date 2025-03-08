import React from 'react'
import { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {

const [input, setInput] = useState("");
const buttons =[
    "7","8","9","/"
    ,"4","5","6","*"
    ,"1","2","3","-"
    ,"0",".","=","+"
    ,"C"

];

const handleClick = (value) => {
    if (value === "C") {
      setInput(""); // Clears the input when "C" is clicked
    } else if (value === "=") {
      try {
        // Attempt to evaluate the expression
        setInput(evaluate(input).toString());
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        // If an error occurs (e.g., invalid input), display "Error"
        setInput("Error");
        
        // Clear the "Error" message after 1 second
        setTimeout(() => {
          setInput(""); // Clears the display after 1 second
        }, 1000);
      }
    } else {
      // Otherwise, add the clicked value to the input string
      setInput((prev) => prev + value);
    }
  };
  


    return (
        <div className="Calculator">
       <div className="display">{input || "0"}</div>
       <div className="buttons">
         {buttons.map((val) => (
           <button
             key={val}
             onClick={() => handleClick(val)}
             className={
               val === "C" ? "clear" :
               val === "=" ? "equals" :
               ["+", "-", "*", "/"].includes(val) ? "operator" : ""
             }
           >
             {val}
           </button>
         ))}
       </div>
     </div>
     );  
 }

export default Calculator