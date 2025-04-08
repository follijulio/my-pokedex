"use client";

import { Pokemon } from "@/lib/models/Pokemon";
import { underdog } from "@/lib/fonts/fonts";
import { Card } from ".";
interface pokeProps {
  poke: Pokemon;
}

export const CardPokemon: React.FC<pokeProps> = ({ poke }) => {
  return (
    <section className="flex flex-row w-80 h-52 bg-gradient-to-b from-purple-900 to-gray-950 rounded-2xl shadow-md  border border-white p-2 gap-2 ">
      <div className="w-1/2 h-full card-container relative">
        <div className="card-inner relative w-full h-full">
          <div className="card-side card-front">
            <Card.PokemonDetails
              id={poke.id}
              image={poke.image}
              name={poke.name}
            />
          </div>
          <div className="card-side card-back">
            <Card.PokemonDetails
              className="bg-gradient-to-b  card "
              id={poke.id}
              image={poke.shinyImage}
              name={poke.name + " (Shiny)"}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div
          className={`flex flex-col h-full justify-center items-start gap-2 font-extrabold ${underdog.className} `}
        >
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-300">Species: {poke.species}</p>
            <p className="text-sm text-gray-300">Height: {poke.height}</p>
            <p className="text-sm text-gray-300">Abilities:</p>
            <ul className="list-disc list-inside text-gray-300">
              {poke.abilities.map((ability, i) => (
                <li key={i}>{ability}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
