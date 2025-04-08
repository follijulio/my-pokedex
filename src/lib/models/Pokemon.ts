export class Pokemon {
  id: number;
  name: string;
  image: string;
  species: string;
  height: number;
  abilities: string[];
  appearances: string[];
  shinyImage: string;

  constructor(
    name: string,
    image: string,
    id: number,
    species: string,
    height: number,
    abilities: string[],
    appearances: string[],
    shinyImage: string
  ) {
    this.id = id;
    this.species = species;
    this.height = height;
    this.abilities = abilities;
    this.appearances = appearances;
    this.shinyImage = shinyImage;
    this.name = name;
    this.image = image;
  }
}