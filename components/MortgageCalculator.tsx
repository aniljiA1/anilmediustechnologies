import { useState } from 'react';

function currency(v: number) {
  return v.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function MortgageCalculator({ initialTaxes = 265 }: { initialTaxes?: number }) {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [interest, setInterest] = useState<number>(3.5);
  const [termYears, setTermYears] = useState<number>(30);
  const [propertyTaxes, setPropertyTaxes] = useState<number>(initialTaxes);
  const [insurance, setInsurance] = useState<number>(1200);

  function monthlyPI(P: number, annualRate: number, years: number) {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    if (r === 0) return P / n;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  const pi = monthlyPI(loanAmount, interest, termYears);
  const monthlyTaxes = propertyTaxes / 12;
  const monthlyInsurance = insurance / 12;
  const totalMonthly = Math.max(0, pi + monthlyTaxes + monthlyInsurance);

  return (
    <div className="max-w-3xl p-6 border rounded bg-white">
      <h3 className="text-xl font-semibold">Mortgage Calculator</h3>
      <div className="mt-4 grid gap-3">
        <label className="flex flex-col">
          <span className="text-sm text-gray-600">Loan amount</span>
          <input type="number" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value || 0))} className="p-2 border rounded" />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-gray-600">Interest rate (annual %)</span>
          <input type="number" step="0.01" value={interest} onChange={e => setInterest(Number(e.target.value || 0))} className="p-2 border rounded" />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-gray-600">Term (years)</span>
          <select value={termYears} onChange={e => setTermYears(Number(e.target.value))} className="p-2 border rounded">
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-gray-600">Annual property taxes</span>
          <input type="number" value={propertyTaxes} onChange={e => setPropertyTaxes(Number(e.target.value || 0))} className="p-2 border rounded" />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-gray-600">Annual home insurance</span>
          <input type="number" value={insurance} onChange={e => setInsurance(Number(e.target.value || 0))} className="p-2 border rounded" />
        </label>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-sm text-gray-600">Estimated monthly payment</div>
            <div className="text-2xl font-bold">{currency(totalMonthly)}</div>
          </div>
          <div className="text-sm text-right">
            <div>Principal & interest: {currency(pi)}</div>
            <div>Taxes: {currency(monthlyTaxes)}</div>
            <div>Insurance: {currency(monthlyInsurance)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
