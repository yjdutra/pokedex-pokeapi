/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export const Evolution = ({ evolve }) => {
  const [pokemonImage, setPokemonImage] = useState(null);

  const PokeName = evolve.species.name;

  /*    (evolve) => {
    fetch(evolve.species.url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
          console.log(data);
        setPokemonImage(data.sprites.front_default);
      });
  }; */

  return (
    <>
      <img
        src={pokemonImage}
        alt="Imagem do pokemon"
        width={150}
        height={150}
      />
      <span>oi</span>
    </>
  );
};
