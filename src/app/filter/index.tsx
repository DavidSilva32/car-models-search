"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // Importa o Link para navegação

const Filter = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    async function fetchMakes() {
      const res = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
      const data = await res.json();
      
      const sortedMakes = data.Results.sort((a: IMake, b: IMake) => a.MakeName.localeCompare(b.MakeName));
      setMakes(sortedMakes);
    }
    fetchMakes();
  }, []);

  // Gera os anos de 2015 até o ano atual
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Car Filter</h1>
      <div className="w-full max-w-sm">
        {/* Seleção de Marca */}
        <select
          className="border border-secondary bg-input-bg text-input-text p-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-shadow w-full mb-4"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value="">Select a make</option>
          {makes.map((make: IMake) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>

        {/* Seleção de Ano */}
        <select
          className="border border-secondary bg-input-bg text-input-text p-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-shadow w-full mb-4"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select a year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Botão de Navegação */}
        <Link href={`result/${selectedMake}/${selectedYear}`} passHref>
          <button
            className={`bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors w-full ${(!selectedMake || !selectedYear) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!selectedMake || !selectedYear}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Filter;
