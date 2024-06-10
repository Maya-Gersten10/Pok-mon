import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pokedex.css";
import { pokeData } from "../../data/pokeData";
console.log(pokeData);

const Pokedex = () => {
  const displayCount = 10;
  const [currIdx, setCurrIdx] = useState(0);
  const [displayedPokemon, setDisplayedPokemon] = useState(filterPokemonData(0));

  function filterPokemonData(newIdx) {
    return pokeData.filter((_, index) => index >= newIdx && index < newIdx + displayCount);
  }

  useEffect(() => {
    setDisplayedPokemon(filterPokemonData(currIdx));
  }, [currIdx]);

  const handlePrev = () => {
    setCurrIdx((prevIdx) => Math.max(prevIdx - displayCount, 0));
  };

  const handleNext = () => {
    setCurrIdx((prevIdx) => Math.min(prevIdx + displayCount, pokeData.length - displayCount));
  };

  return (
    <>
      <h1>Pokemon List</h1>
      <div className="pagination-container">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="num-results-container">
        Results {currIdx + 1} - {Math.min(currIdx + displayCount, pokeData.length)} of {pokeData.length}
      </div>
      <div className="pokemon-container">
        {displayedPokemon.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.number - 1}`} key={pokemon._id}>
            <div className="pokemon-link">
              <img src={pokemon.image} alt="a fierce pokemon" />
              <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Pokedex;