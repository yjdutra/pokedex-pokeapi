export default function Home() {
  const speciesSearch = () => {
    fetch("https://pokeapi.co/api/v2/pokemon-species/pikachu"/* "https://pokeapi.co/api/v2/pokemon/ditto" */)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        //setar um estado para caracteristicas do pokemon
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 ">
        <a className="navbar-brand text-white" href=" ">
          Pokedex
        </a>
      </nav>

      <div className="container-fluid bg-secondary m-2 p-4">
        <div className=" container-fluid bg-white">
          <img src="" alt="Imagem do pokemon" />
        </div>
        <button onClick={speciesSearch}>Search Pokemon</button>
      </div>
    </>
  );
}
