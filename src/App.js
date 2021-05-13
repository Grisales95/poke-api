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
      
  }, [url,element,A,B])

  const handleNext = () => {
    setA(A + 10);
    setB(B + 10);
};

const handlePrev = () => {
    setA(A - 10);
    setB(B - 10);
};

  return(
    <div className="container">
      <div className = "d-flex justify-content-center my-5 color-white">
      <h1>Find your Pokemon by type!</h1>
      </div>
       <Search handleSearch = {setElement} />
          <div className=" container-pokemon">
          {urls ? (
                urls.map((url) => (
                      <Pokemon url={url.pokemon.url} key={url.pokemon.name} />     
                ))
            ) : (
                <h2 className="d-none">Pokemon</h2>
            )}
          </div>
           
        <div className="d-flex justify-content-center my-3">
                {A !== 0 && <button className = "btn btn-danger mx-2" onClick={handlePrev}>atras</button>}

                {B <= total && (
                    <button className = "btn btn-primary" onClick={handleNext}>siguiente</button>
                )}
            </div>
    </div>
  )
}
export default App