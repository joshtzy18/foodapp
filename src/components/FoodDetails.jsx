import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Styles from "./foodDetails.module.css"
import ItemList from '../components/itemList.jsx'
function FoodDetails({foodId}) {
    const [food, setFood] = useState([])
    const [isLoading, setIsLoading] = useState(true)    
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "d309902e6f034bf5a9b22c7f0ae4a573"

    //fetching data from the api
    useEffect(() => {
       async function fetchFood(){
          const res = await fetch(`${URL}?apiKey=${API_KEY}`)
          const data = await res.json()
          console.log(data)
          setFood(data)
          setIsLoading(false)
        }
        fetchFood()
    }, [foodId])
  return (
    <div>
        {/* displaying the food details */}
        {foodId}
        <div className={Styles.recipeCard}> 
            <h1 className={Styles.recipeName}>{food.title}</h1>
            <img className={Styles.recipeImage} src={food.image} alt="" />
       <div className={Styles.recipeDetails}>
        <span>
            <strong>⏱{food.readyInMinutes} Minutes</strong>  
        </span>
        <span>
            <strong>👨‍🍳{food.servings} Servings</strong>
        </span>
        <span>
            <strong>{food.vegetarian ? " 🥕 Vegetarian" : " 🥩 Non-Vegetarian"}</strong>
        </span>
        <span>
            <strong>{food.vegan ? " 🐮 Vegan" : ""}</strong></span>
        </div>
        <div>
       💲<span>
        <strong>{food.pricePerServing/100} Per serving </strong>
        </span>
        </div>
        </div>
        <h2>Ingredients</h2>
        <ItemList food = {food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={Styles.recipeInstructions}> 
            <ol>
            {/* checking if the data is loading */}
            {isLoading ? <p>Loading...</p> :food.analyzedInstructions[0].steps.map((step) =>(<li>{step.step}</li>))}
            </ol>
        </div>
       
    </div>
  )
}

FoodDetails.propTypes = {
   foodId: PropTypes.node.isRequired,
}
export default FoodDetails