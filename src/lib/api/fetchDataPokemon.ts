import axios from "axios";
import { Pokemon } from "../models/Pokemon";

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
      id: data.id,
      species: data.species.name,
      height: data.height,
      abilities: data.abilities.map(
        (ability: { ability: { name: string } }) => ability.ability.name
      ),
      appearances: data.game_indices.map(
        (apparition: { version: { name: string } }) => apparition.version.name
      ),
      shinyImage: data.sprites.other.home.front_shiny,
    } as Pokemon;
  });
  console.log(arrayPokemons);
  return arrayPokemons;
}

export { fetchDataParallel };
