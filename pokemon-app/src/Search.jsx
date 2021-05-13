import {useState} from "react"
function Search({handleSearch}){
  const [value,setValue] = useState("fire")
  return(
    <div>
      <select name ="type" onChange = {e=>setValue(e.target.value)}>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="dragon">Dragon</option>
          <option value="ghost">Ghost</option>
          </select>
          <button onClick={()=>handleSearch(value)}>Search</button>
    
    </div>
  )
}

export default Search;