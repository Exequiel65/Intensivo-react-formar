import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import { getCategoriesService } from "../services/categories.service"


const CategoriesContext = createContext();

const CategoriesProvider = ({children}) => {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);


    const getCategories = async () =>{
        try {
            const categoriesData = await getCategoriesService();
            setCategories(categoriesData)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>
    )
}


CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { 
    CategoriesProvider
};

export default CategoriesContext;

