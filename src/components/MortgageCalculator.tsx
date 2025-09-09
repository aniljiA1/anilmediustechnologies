"use client";

import { useState } from "react";

type Props = { initialTaxes?: number };

export default function MortgageCalculator({ initialTaxes = 0 }: Props) {
  const [taxes, setTaxes] = useState(initialTaxes);
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(30);

  const monthlyInterest = rate / 100 / 12;
  const numberOfPayments = years * 12;
  const monthlyPayment =
    (amount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Mortgage Calculator</h2>
      <div className="mb-2">
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border px-2 py-1 w-full rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Rate (%)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="border px-2 py-1 w-full rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Years</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="border px-2 py-1 w-full rounded"
        />
      </div>
      <div className="mt-4">
        <p className="font-semibold">Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
        <p className="font-semibold">Taxes: ${taxes}</p>
      </div>
    </div>
  );
}
