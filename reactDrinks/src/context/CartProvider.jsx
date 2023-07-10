import { createContext, useReducer } from "react";
import PropTypes from "prop-types"
const CartContext = createContext();

const cartInitialValues = {
    cartItems : [],
}

const actionTypes = {
    ADD_TO_CART : "ADD_TO_CART",
    REMOVE_ONE_FROM_CART : "REMOVE_ONE_FROM_CART", 
    REMOVE_ALL_FROM_CART : "REMOVE_ALL_FROM_CART", 
    CLEAR_CART : "CLEAR_CART", 
}

function cartReducer (state, action){
    const payload = action.payload
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems : [...state.cartItems, payload]
            }
            
        case actionTypes.REMOVE_ONE_FROM_CART:
            
            break;
        case actionTypes.REMOVE_ALL_FROM_CART:
            
            break;
        case actionTypes.CLEAR_CART:
            
            break;
    
        default:
            break;
    }

}

const CartProvider = ({children})=>{

    const [state, dispatch] = useReducer(cartReducer, cartInitialValues)

    const addToCart= ( drink )=>{
        dispatch(
            {
                type : actionTypes.ADD_TO_CART,
                payload : drink
            }
        )
    }

    const removeOneFromCart = ()=>{
        
    }

    const removeAllFromCart = ()=>{

    }

    const clearCart = ()=>{

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