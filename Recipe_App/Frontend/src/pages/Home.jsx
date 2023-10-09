import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const recipe = await axios.get("http://localhost:3001/recipes");
                setRecipes(recipe.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchRecipe();
    }, [])

    return (
        <div className='home-section'>
            <h1 className="text-center">Welcome to Recipe App</h1><br />
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <div>
                            <h2>{recipe.name}</h2>
                            <div className='instructions'><p> {recipe.instructions}</p></div>
                            <div><img src={recipe.imageUrl} alt="recipe-name" /></div>
                            <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
                        </div>
                    </li>
                ))};
            </ul>
        </div>
    )
}

export default Home