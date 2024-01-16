import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleOnClickReset() {
    setStep(1);
    setCount(0);
  }

  let newDate = new Date();
  newDate.setDate(newDate.getDate() + count);

  let prepend;
  if (count === 0) {
    prepend = "Today is";
  } else if (count < 0) {
    prepend = `${Math.abs(count)} day${count < -1 ? "s" : ""} ago was`;
  } else {
    prepend = `${count} from today is`;
  }

  return (
    <div className="center">
      <div className="center">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <div className="center">
        <button onClick={() => setCount(count - 1 * step)}>-</button>
        <input
          type="text"
          placeholder="Item..."
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + 1 * step)}>+</button>
      </div>

      <span>
        {prepend} {newDate.toDateString()}
      </span>
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleOnClickReset}>RESET</button>
        </div>
      )}
    </div>
  );
}

export default App;
