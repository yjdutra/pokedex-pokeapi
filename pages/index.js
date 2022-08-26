/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { getData, getTypes } from "./src/utils";
import { StatusChart } from "./src/components/StatusChart";
import { TypesList } from "./src/components/TypesList";

export default function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonSearch, setPokemonSearch] = useState(null);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);

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
        setPokemon(data);
        setPokemonStats(getData(data.stats));
        setPokemonMoves(data.moves);
        setPokemonTypes(getTypes(data.types));
        console.log(pokemonTypes);
      });
    /* fetch(`https://pokeapi.co/api/v2/ability/${pokemonSearch}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
      }); */
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark  bg-dark mb-4 ">
        <a className="navbar-brand text-white" href=" ">
          Pokedex
        </a>
      </nav>
      <div className="input-group mb-3">
        <button
          className="input-group-text"
          id="basic-addon1"
          onClick={speciesSearch}
        >
          🔎
        </button>
        <input
          value={pokemonSearch}
          onChange={handleChange}
          type="text"
          className="form-control text-center"
          placeholder="Search Pokemon by name or pokedex number"
          aria-describedby="basic-addon1"
        />
      </div>

      {pokemon ? (
        <div className="container-fluid bg-dark rounded mb-4 p-4">
          <p className="text-center fs-1 fw-bold text-white">
            {pokemon.species.name}
          </p>
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
        </div>
      ) : null}
      {pokemon ? (
        <div className="d-flex justify-content-around">
          <div className="container-sm text-center">
            <h3>Stats</h3>
            {<StatusChart stats={pokemonStats} />}
          </div>
          <div className="container-sm text-center ">
            <div className="d-block p-2 bg-dark rounded-pill">
              <p className="text-center fs-1 fw-bold text-white">Types</p>
              <TypesList types={pokemonTypes} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
