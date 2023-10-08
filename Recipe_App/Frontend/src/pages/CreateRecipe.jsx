import React, { useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';

const CreateRecipe = () => {
    const userid = useGetUserID();
    const [formData, setFormdata] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: userid,
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata(prevState => ({ ...prevState, [name]: value }))
    }

    const addIngredients = () => {
        setFormdata({ ...formData, ingredients: [...formData.ingredients, ""] });
    }

    const ingredientChange = (e, idx) => {
        const { value } = e.target;
        const ingredients = formData.ingredients;
        ingredients[idx] = value;
        setFormdata(prevState => ({ ...prevState, ingredients }))
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/recipes", formData);
            alert("Recipe created successfully!!")
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='create-recipes'>
            <form className="form" onSubmit={onSubmit}>
                <p className="title">Create the recipes </p>
                <div className="flex">
                    <label>
                        <input name='name' onChange={handleChange} placeholder="Enter the name of the recipe" type="text" className="input" />
                        <span>Name</span>
                    </label>
                    {formData.ingredients.map((ingredients, idx) => (
                        <label>
                            <input name='ingredients' key={idx} onChange={(e) => ingredientChange(event, idx)} placeholder="Enter the ingredients of the recipe" type="text" value={ingredients} className="input" />
                            <span>Ingredients</span>
                        </label>

                    ))}
                    <label>
                        <button onClick={addIngredients} className='add-ingredients' type='button'>Add+</button>
                        <textarea name='instructions' onChange={handleChange} placeholder="Enter the instructions for the recipe" type="text" className="input" />
                        <span>Instructions</span>
                    </label>
                    <label>
                        <input name='imageUrl' onChange={handleChange} placeholder="Drop the url of the recipe" type="text" className="input" />
                        <span>ImageURL</span>
                    </label>
                    <label>
                        <input name='cookingTime' onChange={handleChange} placeholder="Enter cooking time for the recipe" type="number" className="input" />
                        <span>Name of the Recipe</span>
                    </label>
                </div>
                <button type="submit" className='submit'>Submit</button>
            </form>

        </div>
    )
}

export default CreateRecipe;