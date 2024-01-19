import { useState } from "react";
function App() {
  const [amount, setAmount] = useState("");
  const [userRating, setUserRating] = useState("dissatisfied");
  const [friendRating, setFriendRating] = useState("dissatisfied");

  function handleAmountChange(e) {
    const newAmount = Number(e.target.value);
    if (!newAmount) {
      setAmount("");
      return;
    }
    setAmount(newAmount);
    console.log(newAmount);
  }

  function handleRatingChange(rating) {
    setUserRating(rating);
  }

  function handleReset() {
    setAmount("");
    setUserRating("dissatisfied");
    setFriendRating("dissatisfied");
  }

  return (
    <div>
      <Bill amount={amount} onHandleAmountChange={handleAmountChange} />
      <SelectPercentage
        serviceRating={userRating}
        onChangeRating={handleRatingChange}
      >
        <b>How did you like the service?</b>
      </SelectPercentage>
      <SelectPercentage
        serviceRating={friendRating}
        onChangeRating={setFriendRating}
      >
        <b>How did your friend like the service?</b>
      </SelectPercentage>
      <br />
      {amount ? (
        <>
          <Total
            billAmount={amount}
            userRating={userRating}
            friendRating={friendRating}
          />
          <button onClick={handleReset}>Reset</button>
        </>
      ) : null}
    </div>
  );
}

function Bill({ amount, onHandleAmountChange }) {
  return (
    <div>
      <span>
        <b>How much was the bill?</b>
      </span>
      <input type="text" value={amount} onChange={onHandleAmountChange} />
    </div>
  );
}

function SelectPercentage({ serviceRating, onChangeRating, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={serviceRating}
        onChange={(e) => onChangeRating(e.target.value)}
      >
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ billAmount, userRating, friendRating }) {
  function getTipFromRating(rating) {
    if (rating === "dissatisfied") return 0;
    if (rating === "okay") return 0.05;
    if (rating === "good") return 0.1;
    if (rating === "amazing") return 0.2;
  }

  const userTip = getTipFromRating(userRating);
  const friendTip = getTipFromRating(friendRating);
  const tipAvg = (userTip + friendTip) / 2;
  const realTip = Math.round(billAmount * tipAvg);

  return (
    <h1>
      You pay ${billAmount + realTip} (${billAmount} + ${realTip} tip)
    </h1>
  );
}

export default App;
