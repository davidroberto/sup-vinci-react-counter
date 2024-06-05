import { useEffect, useState } from "react";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(null);
  const [pokemonToDisplay, setPokemonToDisplay] = useState(null);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
      .then((response) => {
        return response.json();
      })
      .then((responsePokemons) => {
        setPokemons(responsePokemons);
      });
  }, []);

  const handleClickPokemon = (event, id) => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + id)
      .then((response) => {
        return response.json();
      })
      .then((responsePokemon) => {
        setPokemonToDisplay(responsePokemon);
      });
  };

  return (
    <section>
      {pokemonToDisplay && (
        <article key={pokemonToDisplay.id}>
          <img src={pokemonToDisplay.image} alt={pokemonToDisplay.name} />
          <h2>{pokemonToDisplay.name}</h2>
        </article>
      )}

      {pokemons ? (
        <div>
          {pokemons.map((pokemon) => (
            <article key={pokemon.id} onClick={(event) => handleClickPokemon(event, pokemon.id)}>
              <h2>{pokemon.name}</h2>
            </article>
          ))}
        </div>
      ) : (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
    </section>
  );
};

export default Pokemons;
