import { useState } from "react";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);
  return (
    <>
      <div className="flex">
        {" "}
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        {" "}
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        {" "}
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default App;
