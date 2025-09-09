// src/app/page.tsx
import React from "react";
import Card from "@/components/Card"; // ✅ matches default export

export default function HomePage() {
  const cards = [
    { title: "Home Loan", description: "Check your eligibility", amount: "$250,000" },
    { title: "Refinance", description: "Lower your rates", amount: "$180,000" },
    { title: "Mortgage Calculator", description: "Estimate monthly payments" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Better Replica</h1>
          <p className="text-lg md:text-xl mb-6">
            Explore our services and find the perfect solution for your home.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              amount={card.amount}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
