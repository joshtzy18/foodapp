import PropTypes from 'prop-types'
import FoodItem from "./FoodItem";
function FoodList({foodData, setFoodId}) {
  return (
    <div>
        {/* display the food items */}
        {foodData.map((food) => (<FoodItem key={food.id} setFoodId ={setFoodId} food = {food} />) )}
    </div>
  )
}
FoodList.propTypes = {
  foodData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  setFoodId: PropTypes.func
}

export default FoodList