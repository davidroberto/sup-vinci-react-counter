import { useEffect, useState } from "react";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
      .then((response) => {
        return response.json();
      })
      .then((responsePokemons) => {
        setPokemons(responsePokemons);
      });
  }, []);

  return (
    <section>
      {pokemons ? (
        <div>
          {pokemons.map((pokemon) => (
            <h2>{pokemon.name}</h2>
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
