import { pokemonApi } from "../../../api";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

interface IApiPokemon {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}

export const getPokemons = (page = 0) => {
  return async (dispatch: any, getState: any) => {
    dispatch(startLoadingPokemons());
    const { data } = await pokemonApi.get<IApiPokemon>(
      `pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(
      setPokemons({
        pokemons: data.results,
        page: page + 1,
      })
    );
  };
};
