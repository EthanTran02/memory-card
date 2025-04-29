import { useEffect, useState } from "react";

export default function List({ score, setScore, maxScore, setMaxScore, loading, setLoading}) {
  const [pokemonList, setPokemonList] = useState(null);
  const [chosenCard, setChosenCards] = useState(new Set());

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

  function handleCardClick(id) {
    if (chosenCard.has(id)) {
      if (score > maxScore) setMaxScore(score);
      setScore(0);
      setChosenCards(new Set());
    } else {
      setScore(score + 1);
      setChosenCards((prev) => new Set([...prev, id]));
    }

    const newList = [...pokemonList];
    shuffle(newList);
    setPokemonList(newList);
  }

  if (pokemonList) shuffle(pokemonList);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Pokemon list:</h1>
      <div id="cards">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id} onClick={() => handleCardClick(pokemon.id)}>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
      </div>
    </>
  );
}
