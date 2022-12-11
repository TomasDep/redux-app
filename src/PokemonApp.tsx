import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "./store/slices";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state: any) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <h3>Loading: {isLoading ? "True" : "False"}</h3>
      <ul>
        {pokemons?.map((pokemon: { name: string; url: string }) => {
          return <li key={pokemon?.name}>{pokemon?.name}</li>;
        })}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        <span>Next</span>
      </button>
    </>
  );
};
