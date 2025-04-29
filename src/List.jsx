import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12"
        );
        const data = await response.json();

        const detailedPromises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((result) => result.json())
        );
        const detailedData = await Promise.all(detailedPromises);
        console.log(detailedData);
        setPokemonList(detailedData);
      } catch (error) {
        console.errorror(`error: ${error}`);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  if (loading) return <h1>loading...</h1>;

  return (
    <>
      <h1>Pokemon list:</h1>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id}>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
      ))}
    </>
  );
}
