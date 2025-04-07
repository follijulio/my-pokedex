import axios from "axios";

type Pokemon = {
  name: string;
  image: string;
};

async function fetchDataParallel(count: number): Promise<Pokemon[]> {
  const URL = "https://pokeapi.co/api/v2/pokemon";

  const requests = [];

  for (let i = 1; i <= count; i++) {
    requests.push(axios.get(`${URL}/${i}/`));
  }

  const responses = await Promise.all(requests);

  const arrayPokemons: Pokemon[] = responses.map((response) => {
    
    const data = response.data;
    return {
      name: data.name,
      image: data.sprites.other.home.front_default,
    };

  });

  return arrayPokemons;
}

export { fetchDataParallel };
