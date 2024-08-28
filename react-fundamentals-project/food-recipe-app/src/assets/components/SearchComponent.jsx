import { useState } from "react"
import RecipeComponent from "./RecipeComponent"


const SearchComponent = () => {

    const [item, setItem] = useState('')
    const [recipe, setRecipe] = useState([])
    const [isClick , setIsClick] = useState(false)
    const [error, setError] = useState('')
    const handleSearch = async () => {
        if (item){
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${item}`);
                const data = await response.json()
                const recipeMeals = data.meals
                if (recipeMeals !== null){
                    setRecipe(recipeMeals)
                    setItem('')
                    setError('')
                    setIsClick(true)
                }else {
                    setIsClick(null)
                    setError('')
                }
            }catch (error){
                console.log(error);
            }
        }else {
            setError('Enter a recipe..')
            setIsClick(false)
        }

        console.log(error);
    }

  return (
    <>
     <div className="wrapper">
        <h1>Food Recipe App</h1>
        <div className="input-section">
            <input 
            type="text" 
            placeholder="Enter Recipe"
            value={item}
            onChange={(event) => setItem(event.target.value)}
            />
            <button className="btn-search" onClick={handleSearch}>Search</button>
        </div>
        {error ? <p>{error}</p> : null}
    </div>
        <div className="recipe-list">
            {isClick !== null  ? recipe && recipe.map((item) => {
                return  <RecipeComponent key={Number(item.idMeal)} item={item}/>
            }) : <h4 className="error">Enter a valid recipe.</h4>}
        </div>
    </>
   
  )
}

export default SearchComponent