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
  const [labelStep, setLabelStep] = useState(1);
  const [labelCount, setLabelCount] = useState(0);
  let newDate = new Date();
  newDate.setDate(newDate.getDate() + labelCount);

  let prepend;
  if (labelCount === 0) {
    prepend = "Today is";
  } else if (labelCount < 0) {
    prepend = `${Math.abs(labelCount)} day${
      labelCount < -1 ? "s" : ""
    } ago was`;
  } else {
    prepend = `${labelCount} from today is`;
  }

  return (
    <div className="center">
      <MiniCounter
        name="Step"
        number={labelStep}
        setLabel={setLabelStep}
        step={1}
      />
      <MiniCounter
        name="Count"
        number={labelCount}
        setLabel={setLabelCount}
        step={labelStep}
      />
      <span>
        {prepend} {newDate.toDateString()}
      </span>
    </div>
  );
}

function MiniCounter({ name, number, setLabel, step }) {
  function handleDecrease() {
    setLabel(() => number - 1 * step);
  }
  function handleIncrease() {
    setLabel(() => number + 1 * step);
  }
  return (
    <div className="center">
      <button onClick={handleDecrease}>-</button>
      <span>
        {name}: {number}
      </span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default App;
