import actionTypes from "../actions/cart.actions";

export const cartInitialValues = {
    cartItems : [],
}

export function cartReducer (state, action){
    const payload = action.payload
    let drinkInCart = state.cartItems.find((item) => item.idDrink  === payload?.idDrink)
    
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // saber si el prod a agregar esta en el carrito
            
            if (drinkInCart) {
                // en el caso de que sea afirmativo, incrementar la cantidad +1
                let cartItemUpdate = state.cartItems.map(item => {
                    if (item.idDrink === payload.idDrink) {
                        return {
                            ...item,
                            quantity : item.quantity + 1
                        }
                    }
                    return item
                });
                return {
                    ...state,
                    cartItems : [...cartItemUpdate ]
                }
            } else {
                // en el caso de que sea negativo, agregamos el producto con cantidad 1
                payload.quantity = 1
                return {
                    ...state,
                    cartItems : [...state.cartItems, payload]
                }
            }

        case actionTypes.REMOVE_ONE_FROM_CART:
            // Existe el prod en el carrito
            // Quantity > 1 ? -> resta 1
            // Quantity < 1 -> quitar del carrito
            if (drinkInCart.quantity > 1) {
                let cartItemUpdate = state.cartItems.map(item => {
                    if (item.idDrink === payload.idDrink) {
                        return {
                            ...item,
                            quantity : item.quantity - 1
                        }
                    }
                    return item
                });
                return {
                    ...state,
                    cartItems : [...cartItemUpdate ]
                }
            } else {
                let cartItemUpdate = state.cartItems.filter(item => item.idDrink !== payload.idDrink );
                return {
                    ...state,
                    cartItems : [...cartItemUpdate ]
                }
            }

        case actionTypes.REMOVE_ALL_FROM_CART:
            if (drinkInCart) {
                let cartItemUpdate = state.cartItems.filter(item => item.idDrink !== payload.idDrink );
                return {
                    ...state,
                    cartItems : [...cartItemUpdate ]
                }
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state ,
                cartItems : []
            }
    }
}

