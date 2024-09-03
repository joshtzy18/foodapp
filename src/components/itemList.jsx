import Item from "./item.jsx"
function itemList({food, isLoading}) {
  return (
    <div>
        {isLoading ? <p>Loading..</p> :food.extendedIngredients.map((item) => <Item item ={item} /> ) }

    </div>
  )
}

export default itemList