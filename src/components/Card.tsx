// src/components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  amount?: string;
}

const Card: React.FC<CardProps> = ({ title, description, amount }) => {
  return (
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      {amount && <p className="text-blue-600 font-bold">{amount}</p>}
    </div>
  );
};

export default Card; // ✅ default export
