import { useEffect, useState } from "react";

export default function List() {
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

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  if (pokemonList) shuffle(pokemonList);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Pokemon list:</h1>
      <div id="cards">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id}>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
