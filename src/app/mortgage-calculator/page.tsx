import MortgageCalculator from '../../components/MortgageCalculator';

export default function MortgageCalcPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mortgage Calculator</h1>
      <MortgageCalculator initialTaxes={265} />
    </div>
  )
}
