import React, { createContext, useEffect, useState } from 'react'
import PropTypes from "prop-types"
import { filterDrinkService, getRecipeService } from "../services/drink.service"


const DrinksContext = createContext();

const DrinksProvider = ({children}) =>{
    const [Drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [DrinkId, setDrinkId] = useState(null);
    const [Recipe, setRecipe] = useState({});
    const [Loading, setLoading] = useState(false);
    
    let handleModalClick = ()=>{
        setModal(!modal);
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
            const drinksWithPrice = drinksData.map((drink) =>
            {
                return {
                    ...drink,
                    price : Math.floor(Math.random() * 100),
                }
            })
            setDrinks(drinksWithPrice)
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
        modal,
        Recipe,
        Loading,
        handleModalClick,
        handleDrinkIdClick,
        getDrink
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

