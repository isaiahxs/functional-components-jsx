import { bulbasaur } from "./images";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaur} alt="Bulbasaur" />
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ backgroundColor: "white", color: "#00FF00" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
