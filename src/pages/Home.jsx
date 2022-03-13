import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import PokemonList from '../components/PokemonList'
const Home = () => {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const getPokemonList = async () => {
    let pokemonArray = []
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i))
    }
    setPokemon(pokemonArray)
    setLoading(false)
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res
  }

  useEffect(() => {
    getPokemonList()
  }, [])


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {pokemon.map((p) => (
            <div key={p.data.name}>
              <PokemonList pokemon={p.data} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Home
