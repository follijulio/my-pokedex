const CardPokemonDetails = ({
  name,
  image,
  id,
  className,
}: {
  name: string;
  image: string;
  id: number;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full bg-gradient-to-b  rounded-2xl p-2 
          ${className ? className : ""}`}
    >
      <img src={image} alt={name} className="w-24 h-24 object-cover" />
      <p className="font-bold text-xs">{name}</p>
      <p className="font-bold text-xs">ID: {id.toString().padStart(4, "0")}</p>
    </div>
  );
};

export default CardPokemonDetails;
