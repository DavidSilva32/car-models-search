// app/result/[makeId]/[year].tsx

"use client";

// import ModelsList from "@/app/components/modelsList";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ErrorMessage from "@/app/components/errorMessage";
import Loading from "@/app/components/loading";

// Carregar dinamicamente o componente ModelsList
const ModelsList = dynamic(() => import("../../../components/modelsList"), {
  suspense: true,
});

interface IParams {
  makeId: string;
  year: string;
}

const ResultPage = ({ params }: { params: IParams }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Desestruturando makeId e year dos params
  const { makeId, year } = params;

  useEffect(() => {
    async function fetchModels() {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
      );

      if (res.ok) {
        const data = await res.json();

        const sortedModels = data.Results.sort((a: IModel, b: IModel) => a.Model_Name.localeCompare(b.Model_Name));
        setModels(sortedModels);
        console.log(sortedModels)
      } else {
        setError("Failed to fetch vehicle models. Please try again.");
      }

      setTimeout(() => setLoading(false), 2000);
    }

    fetchModels();
  }, [makeId, year]);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Vehicle Models for {year}</h1>
      {models.length > 0 ? (
        <ModelsList models={models} />
      ) : (
        <p className="text-lg text-center mt-4">No models found for the selected make and year.</p>
      )}
    </div>
  );
};

export default ResultPage;
