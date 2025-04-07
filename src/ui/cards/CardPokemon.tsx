interface CardPokemonProps {
  name: string;
  image: string;
}

export const CardPokemon: React.FC<CardPokemonProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-52 bg-gradient-to-b from-purple-900 to-gray-950 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white">
      <img src={image} alt={name} className="w-24 h-24 mb-2 object-cover" /><h2 className="text-lg font-semibold text-white">{name}</h2>
    </div>
  );
};
