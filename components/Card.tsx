interface CardProps {
  title: string
  description: string
  amount?: string   // optional
}

export default function Card({ title, description, amount }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      {amount && <p className="text-gray-900 font-semibold">{amount}</p>}
    </div>
  )
}
