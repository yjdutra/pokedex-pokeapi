// Pega os dados de stats
export const getData = (pokemon) => {
  const data = pokemon.map((e) => {
    switch (e.stat.name) {
      case "hp":
        return ["HP", e.base_stat, "red"];
      case "attack":
        return ["Atack", e.base_stat, "orange"];
      case "defense":
        return ["Defese", e.base_stat, "green"];
      case "special-attack":
        return ["Special Atack", e.base_stat, "gold"];
      case "special-defense":
        return ["Special Defense", e.base_stat, "purple"];
      case "speed":
        return ["Speed", e.base_stat, "blue"];
    }
  });

  return data; /* .unshift(["Stats", "Value"]) */
};

//Pega os dados de types
export const getTypes = (pokemon) => {
  const data = pokemon.map((e) => {
    return [e.type.name];
  });

  return data
};
