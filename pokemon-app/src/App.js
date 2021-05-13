import React from "react"
import axios from "axios"
import {useState} from "react"
import Pokemon from "./Pokemon"
import Search from "./Search"

function App(){
  const [element,setElement] = useState("")
  const url = `https://pokeapi.co/api/v2/type/${element}`

  const [urls,setUrls] = useState();
  const [total,setTotal] = useState();
  const [A,setA] = useState(0);
  const [B, setB] = useState(10);

  React.useEffect(() =>{
      if(element){
        const getUrlPokemon = async () =>{
          const data = await axios(url)
          const totalPokemons = data.data.pokemon
          setTotal(totalPokemons.length)
          setUrls(totalPokemons.slice(A,B))
        }
         getUrlPokemon()
      }
      
  }, [element,A,B])

  const handleNext = () => {
    setA(A + 10);
    setB(B + 10);
};

const handlePrev = () => {
    setA(A - 10);
    setB(B - 10);
};

  return(
    <div>
       <h1>Find your Pokemon by type!</h1>
       <Search handleSearch = {setElement} />
            {urls ? (
                urls.map((url) => (
                    <Pokemon url={url.pokemon.url} key={url.pokemon.name} />
                ))
            ) : (
                <h2>Pokemon</h2>
            )}
        <p>
                {A !== 0 && <button onClick={handlePrev}>atras</button>}

                {B <= total && (
                    <button onClick={handleNext}>siguiente</button>
                )}
            </p>
    </div>
  )
}
export default App