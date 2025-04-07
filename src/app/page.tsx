"use client";

import { fetchDataParallel } from "@/lib/api/fetchDataPokemon";
import { Card } from "@/ui/cards";
import { useEffect, useState } from "react";
import { Underdog } from "next/font/google";

export const underdog = Underdog({
  weight: "400",
  subsets: ["latin"],
});

interface pokemonProps {
  name: string;
  image: string;
}

export default function Home() {
  // render
  return (
    <div className="flex flex-col items-center no-scrollbar bg-slate-950 h-full w-full text-white gap-4">
      <header>
        <nav className="p-2">
          <Title />
        </nav>
      </header>
      <div className=" overflow-auto no-scrollbar w-full flex justify-center pt-5">
        <Generator className="grid grid-cols-6 gap-8" />
      </div>
    </div>
  );
}

const Title = () => {
  return (
    <p className="text-6xl font-extrabold text-amber-200">
      <span>Poke</span>
      <span className={`${underdog.className}`}>Dex</span>
    </p>
  );
};

const Generator = ({ className }: { className: string }) => {
  const [data, setData] = useState<pokemonProps[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response: pokemonProps[] = await fetchDataParallel(1000);
      setData(response);
    };
    fetchDataAsync();
  }, []);
  return (
    <div className={className}>
      {data?.length > 0 ? (
        data.map((pokemon, index) => (
          <Card.Pokemon image={pokemon.image} name={pokemon.name} key={index} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
