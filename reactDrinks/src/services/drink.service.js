import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const getRecipeService = async ( drinkId ) =>{
    try {
        const url = `${apiUrl}lookip.php?i=${drinkId}`;
        const { data } = await axios.get(url);
        return data.drinks[0];

    } catch (error) {
        console.error(error)
        throw new Error("Hubo un error al obtener la receta")
    }
};

const filterDrinkService = async (name, category)=>{
    try {
        const url = `${apiUrl}filter.php?i=${name}&c=${category}`
        const { data } = await axios.get(url)
        return data.drinks;
    } catch (error) {
        console.error(error)
        throw new Error("Hubo un error al obtener las bebidas");
    }
}


export {
    getRecipeService,
    filterDrinkService
}