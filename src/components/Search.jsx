import { useEffect, useState } from "react";
import Styles from "./search.module.css"
import PropTypes from 'prop-types'

//url for the api
const URL = "https://api.spoonacular.com/recipes/complexSearch"

//api key
const API_KEY = "d309902e6f034bf5a9b22c7f0ae4a573"
function Search({ setFoodData}) {
    //state for the query
    const [query, setQuery] = useState("pizza");

    //fetching data from the api
    useEffect(() => {
        async function fetcFood(){
            const res = await fetch(`${URL}?query= ${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            // console.log(data.results)
            setFoodData(data.results)
        }
        fetcFood()
    }, [query, setFoodData]
)
  return (
    <div className={Styles.searchContainer}>
        <input className={Styles.input} value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
    </div>
  )
}
Search.propTypes = {
    
     
 setFoodData: PropTypes.func.isRequired,

  }

export default Search