// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const currencies = ["USD", "EUR", "CAD", "INR", "MXN"];
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("MXN");
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState("OUTPUT");
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeFromCurrency(newCurrency) {
    console.log(`From Currency changed to: ${newCurrency}`);
    setFromCurrency(newCurrency);
  }

  function handleChangeToCurrency(newCurrency) {
    console.log(`To Currency changed to: ${newCurrency}`);
    setToCurrency(newCurrency);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchConversion() {
        try {
          setIsLoading(true);
          console.log(`Amount changed ${amount}`);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching conversion");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Conversion not made");

          setOutput(data.rates[toCurrency]);
          setIsLoading(false);
        } catch (err) {
          if (err.name !== "AbortError") console.error(`ERROR: ${e}`);
        }
      }

      if (fromCurrency === toCurrency) return setOutput(amount);
      fetchConversion();

      return function () {
        controller.abort();
      };
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="number"
        min="0"
        value={amount}
        disabled={isLoading}
        onChange={(e) => setAmount(e.target.value)}
      />
      <CurrencyDropdown
        currentCurrency={fromCurrency}
        currencies={currencies}
        onChange={handleChangeFromCurrency}
        disabled={isLoading}
      />
      <CurrencyDropdown
        currentCurrency={toCurrency}
        currencies={currencies}
        onChange={handleChangeToCurrency}
        disabled={isLoading}
      />

      <p>
        {output} {toCurrency}
      </p>
    </div>
  );
}

function CurrencyDropdown({ currentCurrency, currencies, onChange, disabled }) {
  return (
    <select
      value={currentCurrency}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      {currencies.map((currency) => (
        <option key={currency}>{currency}</option>
      ))}
    </select>
  );
}
