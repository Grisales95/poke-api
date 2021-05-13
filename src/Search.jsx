import {useState} from "react"
function Search({handleSearch}){
  const [value,setValue] = useState("fire")
  return(
    <div className="mb-3">
      <select className="form-control" name ="type" onChange = {e=>setValue(e.target.value)}>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="dragon">Dragon</option>
          <option value="ghost">Ghost</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="bug">Bug</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          </select>
          <div className="d-flex justify-content-center">
          <button  className = "btn btn-primary mt-2" onClick={()=>handleSearch(value)}>Search</button>
          </div>
          
    
    </div>
  )
}

export default Search;