import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>TicTacToe</h1>
      <Board />
    </>
  );
}

export default App;
