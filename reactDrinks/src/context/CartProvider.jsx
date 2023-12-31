import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types"
import actionTypes from "../actions/cart.actions";
import {cartInitialValues, cartReducer} from "../reducers/cart.reducer";


const CartContext = createContext();



const CartProvider = ({children})=>{

    const [state, dispatch] = useReducer(cartReducer, cartInitialValues)

    useEffect(() => {

    }, []);

    const addToCart= ( drink )=>{
        dispatch(
            {
                type : actionTypes.ADD_TO_CART,
                payload : drink
            }
        )
    }

    const removeOneFromCart = (idDrink)=>{
        dispatch(
            {
                type : actionTypes.REMOVE_ONE_FROM_CART,
                payload : {
                    idDrink
                }
            }
        )
    }

    const removeAllFromCart = (idDrink)=>{
        dispatch(
            {
                type : actionTypes.REMOVE_ALL_FROM_CART,
                payload : {
                    idDrink
                }
            }
        )
    }

    const clearCart = ()=>{
        dispatch(
            {
                type : actionTypes.CLEAR_CART,
            }
        )
    }

    let cartValues = {
        cart : state,
        addToCart,
        removeAllFromCart,
        removeOneFromCart,
        clearCart
    }
    return(
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children : PropTypes.node.isRequired
}



export { CartContext, CartProvider};