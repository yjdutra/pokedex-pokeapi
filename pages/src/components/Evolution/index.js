/* eslint-disable @next/next/no-img-element */
export const Evolution = ({ evolve }) => {
  const image = () => {
    fetch(evolve.species.url).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    }).then((data)=>{
        pokemon.sprites.front_default
    })
  };

  return console.log(evolve);
  {
    /* <>
      <img
        src={image}
        alt="Imagem do pokemon"
        width={150}
        height={150}
      />
      <span>Shiny male</span>
    </>
  );
 */
  }
};
