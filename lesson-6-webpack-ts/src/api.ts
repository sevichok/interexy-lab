import axios from "axios";

type Characters = {
  info: Info;
  results: Character[];
};
type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
type Location = {
  name: string;
  url: string;
};
type Origin = {
  name: string;
  url: string;
};

const str: string = "https://rickandmortyapi.com/api/character";

const getCharacters = async () => {
  const response = await axios.get(str);
  const data: Characters = response.data;
  const length = data.info.pages;
  const array: Object[] = [];
  for (let elem = 0; elem < length; elem++) {
    if (elem % 2 !== 0) {
      const response = await axios.get(str + `/?page=${elem}`);
      const data: Characters = response.data;
      data.results.map((element) => {
        array.push(element);
      });
    }
  }
  return array;
};

export default getCharacters;
