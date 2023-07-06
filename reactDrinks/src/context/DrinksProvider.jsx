import React, { createContext, useEffect, useState } from 'react'
import PropTypes from "prop-types"
import { filterDrinkService, getRecipeService } from "../services/drink.service"


const DrinksContext = createContext();

const DrinksProvider = ({children}) =>{
    const [Drinks, setDrinks] = useState([]);
    const [Modal, setModal] = useState(false);
    const [DrinkId, setDrinkId] = useState(null);
    const [Recipe, setRecipe] = useState({});
    const [Loading, setLoading] = useState(false);
    
    let handleModalClick = ()=>{
        setModal(!Modal);
    };

    let handleDrinkIdClick = (id)=>{
        setDrinkId(id)
    }; 

    let getRecipe = async (  ) =>{
        if (!DrinkId) return;

        try {
            setLoading(true);
            const recipeData = await getRecipeService(DrinkId);
            setRecipe(recipeData)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    let getDrink = async (data)=>{
        try {
            setLoading(true)
            const drinksData = await filterDrinkService(data.name, data.category)
            setDrinks(drinksData)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getRecipe();
    }, [DrinkId]);

    const contextValues = {
        Drinks,
        Modal,
        Recipe,
        Loading,
        handleModalClick,
        handleDrinkIdClick
    }

    return (
        <DrinksContext.Provider value={contextValues}>
            {children}
        </DrinksContext.Provider>
    )
}


DrinksProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {
    DrinksContext,
    DrinksProvider
}
