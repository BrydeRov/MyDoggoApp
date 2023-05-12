// Other
import axios from 'axios';

// React
import React  from "react";
import { useState, useEffect } from 'react';

// Components
import AppLayout from "../../assets/Layouts/AppLayout";
import RecipeCard from '../../Components/RecipeCard';

// MUI
import TextField from '@mui/material/TextField';
import Skeleton from '@mui/material/Skeleton';

const Index = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState('')
    const [loading, setLoading] = useState(true);

    const getRecipes = async (search) => {
        const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=c3005280&app_key=b8c8b4a6438e87768cbc5c2255832fbc&imageSize=SMALL`);
        setRecipes(data.hits);
        setLoading(false);
    }

    useEffect(() => {
        getRecipes();
    }, []);

    const handleChange = (event) => {
        setSearchRecipe(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getRecipes(searchRecipe)
        }
    };
    
    
    return (
        <AppLayout
            content={
                <>
                <div className="d-flex justify-content-center">
                    <TextField
                        value={searchRecipe}
                        className='mx-5 w-100 ' 
                        id="outlined-basic" 
                        label="Buscar Receta . . ." 
                        variant="outlined"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                {loading === false ? 
                    <div className="d-inline-flex flex-wrap m-5 justify-content-center">
                        {recipes?.map((item) => {
                            return (
                                <RecipeCard 
                                    key={item.recipe.label + 1}
                                    coverImage={item.recipe.image}
                                    title={item.recipe.label}
                                    subTitle={item.recipe.mealType}
                                    description={'Calorias: ' + item.recipe.calories}
                                    ingredients={
                                        item.recipe.ingredientLines.map(ingredient => {
                                            return (
                                                <li key={ingredient}>{ingredient}</li>
                                            )
                                        })
                                    }
                                />   
                            )
                        })}
                    </div> : 
                    <div className='d-inline-flex flex-wrap m-5 justify-content-center'>
                        <Skeleton className='m-3' variant="rectangular" width={305} height={305} />
                        <Skeleton className='m-3' variant="rectangular" width={305} height={305} />
                        <Skeleton className='m-3' variant="rectangular" width={305} height={305} />
                        <Skeleton className='m-3' variant="rectangular" width={305} height={305} />
                        <Skeleton className='m-3' variant="rectangular" width={305} height={305} />
                        <Skeleton className='m-3' variant="rectangular" width={305} height={305} />
                        <Skeleton className='m-3' variant="rectangular" width={305} height={305} />
                        <Skeleton className='m-3' variant="rectangular" width={305} height={305} />
                    </div>
                }
                </>
            }
        />
    )
}

export default Index;