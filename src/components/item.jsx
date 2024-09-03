import Styles from './item.module.css'
function item({item}) {
  return (
    <div>
    <div className={Styles.itemContainer}>
        <div className={Styles.imageContainer}>
        <img className={Styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image} alt="" />

        </div>

    
        <div className={Styles.nameContainer}>
        <div className={Styles.name}>{item.name}</div>
        <div className={Styles.amount}>
         <div>{item.amount}{item.unit}</div>
        </div>
        </div>
        
       
       
       
</div>
</div>
  )
}

export default item