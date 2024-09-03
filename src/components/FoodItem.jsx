import PropTypes from 'prop-types'
import Styles from './FoodItem.module.css'
function FoodItem({food, setFoodId}) {
  return (
    <div className={Styles.itemContainer}>
        {/* display the properties of the food object */}
        <img className={Styles.itemImage} src={food.image} alt="" />
        <div className={Styles.itemContent}>
        <p className={Styles.itemName}>{food.title}</p>
        </div>
     
     <div className={Styles.buttonContainer}> 
      <button onClick={() => {
        setFoodId(food.id)
      }} className={Styles.itemButton}> View Recipe</button>
     </div>
       
        </div>
  )
}

FoodItem.propTypes = {
    food: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
    setFoodId: PropTypes.func.isRequired,
  };
export default FoodItem