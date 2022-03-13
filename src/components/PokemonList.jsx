const PokemonList = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt="" />
    </div>
  )
}

export default PokemonList
