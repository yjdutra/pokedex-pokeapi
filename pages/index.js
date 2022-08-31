/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { getData, getTypes } from "./src/utils";
import { StatusChart } from "./src/components/StatusChart";
import { TypesList } from "./src/components/TypesList";
import { Evolution } from "./src/components/Evolution";

export default function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonSearch, setPokemonSearch] = useState(null);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonLegendary, setPokemonLegendary] = useState(false);
  const [pokemonMythical, setPokemonMythical] = useState(false);
  const [pokemonBaby, setPokemonBaby] = useState(false);
  const [pokemonEvolve, setPokemonEvolve] = useState(null);
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
        setPokemonMoves(data.moves);
        setPokemonStats(getData(data.stats));
        setPokemonTypes(getTypes(data.types));
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonSearch}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        data.is_legendary === false
          ? setPokemonLegendary("❌")
          : setPokemonLegendary("✅");

        data.is_mythical === false
          ? setPokemonMythical("❌")
          : setPokemonMythical("✅");

        data.is_baby === false ? setPokemonBaby("❌") : setPokemonBaby("✅");

        fetch(`${data.evolution_chain.url}`)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
          })
          .then((data) => {
            console.log(data.chain);
            setPokemonEvolve(data.chain);
          });
      });

    /*  fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonSearch}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        //setPokemonEvolveTo();
        //setPokemonEvolveFrom();
      }); */
  };

  const evolutionSelect = () => {
    setPokemon(pokemonEvolve.species.name);
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark  bg-dark mb-4 ">
        <a className="navbar-brand text-white " href=" ">
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
          <div className=" container-fluid bg-white d-flex justify-content-around rounded">
            {pokemon.sprites.front_default ? (
              <div className="d-flex flex-column mb-2 ">
                <img
                  src={pokemon.sprites.front_default}
                  alt="Imagem do pokemon"
                  width={150}
                  height={150}
                />
                <span>Default male</span>
              </div>
            ) : null}

            {pokemon.sprites.front_shiny ? (
              <div className="d-flex flex-column mb-2 ">
                <img
                  src={pokemon.sprites.front_shiny}
                  alt="Imagem do pokemon"
                  width={150}
                  height={150}
                />
                <span>Shiny male</span>
              </div>
            ) : null}

            {pokemon.sprites.front_female ? (
              <div className="d-flex flex-column mb-2 ">
                <img
                  src={pokemon.sprites.front_female}
                  alt="Imagem do pokemon"
                  width={150}
                  height={150}
                />
                <span>Default female</span>
              </div>
            ) : null}

            {pokemon.sprites.front_shiny_female ? (
              <div className="d-flex flex-column mb-2 ">
                <img
                  src={pokemon.sprites.front_shiny_female}
                  alt="Imagem do pokemon"
                  width={150}
                  height={150}
                />
                <span>Shiny female</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      {pokemon ? (
        <div className="d-flex justify-content-around mb-3">
          <div className="container-sm text-center bg-dark rounded">
            <h3>Stats</h3>
            {<StatusChart stats={pokemonStats} />}
          </div>
          <div className="container-sm text-center">
            <div className="d-block p-2 bg-dark rounded mb-3">
              <p className="text-center fs-1 fw-bold text-white">Types</p>
              <TypesList types={pokemonTypes} />
            </div>

            <div className="d-block p-2 bg-dark rounded">
              <p className="text-center fs-1 fw-bold text-white">Types</p>
              <div className="text-white fs-3">{`Pokemon Baby : ${pokemonBaby}`}</div>
              <div className="text-white fs-3">{`Pokemon Mythical : ${pokemonMythical}`}</div>
              <div className="text-white fs-3">{`Pokemon Legendary : ${pokemonLegendary}`}</div>
            </div>
          </div>
        </div>
      ) : null}

      {pokemonEvolve ? (
        <div className="container-fluid bg-dark rounded mb-4 p-4">
          <p className="text-center fs-1 fw-bold text-white">Evolution stage</p>

          {pokemonEvolve.species.name ? (
            <a onClick={evolutionSelect}>
              <div className=" container-fluid bg-white d-flex justify-content-around rounded mb-1">
                {pokemonEvolve.species.name}
              </div>
            </a>
          ) : (
            null
          )}

          {pokemonEvolve.evolves_to[0].species.name ? (
            <div className=" container-fluid bg-white d-flex justify-content-around rounded mb-1">
              {pokemonEvolve.evolves_to[0].species.name}
            </div>
          ) : (
            null
          )}

          {pokemonEvolve.evolves_to[0].evolves_to[0].species.name ? (
            <div className=" container-fluid bg-white d-flex justify-content-around rounded mb-1">
              {pokemonEvolve.evolves_to[0].evolves_to[0].species.name}
            </div>
          ) : (
            null
          )}
        </div>
      ) : null}
    </>
  );
}
