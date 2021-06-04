import React from 'react';
import './App.css';
import { useState } from "react"
import { useCounterCalculator } from "./counterCalculator";

function App() {

  const { answerComponent, seeResult, resetCalculator, handleClick , input } = useCounterCalculator();

  return (
    <div className="App">
        <h1>Calculator</h1>
        <div>
          <h1>{answerComponent}</h1>
          <h3>Input : {input}</h3>
        </div>

        <div>
         <button value="1" onClick={handleClick}> 1 </button>
         <button value="2" onClick={handleClick}> 2 </button>
         <button value="3" onClick={handleClick}> 3 </button>
         <button value="+" onClick={handleClick}> + </button>
         <br></br>

         <button value="4" onClick={handleClick}> 4 </button>
         <button value="5" onClick={handleClick}> 5 </button>
         <button value="6" onClick={handleClick}> 6 </button>
         <button value="-" onClick={handleClick}> - </button>
         <br></br>

         <button value="7" onClick={handleClick}> 7 </button>
         <button value="8" onClick={handleClick}> 8 </button>
         <button value="9" onClick={handleClick}> 9 </button>
         <button value="*" onClick={handleClick}> x </button>
         <br></br>

         <button value="0" onClick={handleClick}> 0 </button>
         <button value="." onClick={handleClick}> . </button>
         <button onClick={seeResult}> = </button>
         <button value="/" onClick={handleClick}> / </button>

         <br></br>
         <div>
          <button onClick={resetCalculator}> RESET </button>
         </div>

        </div>
    </div>
  );
}

export default App;
