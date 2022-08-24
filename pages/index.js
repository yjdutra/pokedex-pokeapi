/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonSearch, setPokemonSearch] = useState(null);

  const handleChange = (event) => {
    setPokemonSearch(event.target.value);
  };

  const speciesSearch = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark  bg-dark mb-4 ">
        <a className="navbar-brand text-white" href=" ">
          Pokedex
        </a>
      </nav>
      <div className="input-group mb-3">
        <button className="input-group-text" id="basic-addon1" onClick={speciesSearch}>
          🔎
        </button>
        <input
          value={pokemonSearch}
          onChange={handleChange}
          type="text"
          className="form-control text-center"
          placeholder="Search Pokemon by name"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="container-fluid bg-secondary rounded mb-4 p-4">
        {pokemon ? (
          <div className=" container-fluid bg-white d-flex justify-content-around rounded-pill">
            {pokemon.sprites.front_default ? (
              <div className="d-flex flex-column mb-2 ">
                <img
                  src={pokemon.sprites.front_default}
                  alt="Imagem do pokemon"
                  width={100}
                  height={100}
                />
                <span>Default male</span>
              </div>
            ) : null}

            {pokemon.sprites.front_shiny ? (
              <div className="d-flex flex-column mb-2 ">
                <img
                  src={pokemon.sprites.front_shiny}
                  alt="Imagem do pokemon"
                  width={100}
                  height={100}
                />
                <span>Shiny male</span>
              </div>
            ) : null}

            {pokemon.sprites.front_female ? (
              <div className="d-flex flex-column mb-2 ">
                <img
                  src={pokemon.sprites.front_female}
                  alt="Imagem do pokemon"
                  width={100}
                  height={100}
                />
                <span>Default female</span>
              </div>
            ) : null}

            {pokemon.sprites.front_shiny_female ? (
              <div className="d-flex flex-column mb-2 ">
                <img
                  src={pokemon.sprites.front_shiny_female}
                  alt="Imagem do pokemon"
                  width={100}
                  height={100}
                />
                <span>Shiny female</span>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}
