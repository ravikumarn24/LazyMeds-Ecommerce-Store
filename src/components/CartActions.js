export const addToCart= (id)=> {
    return{
        type: "ADD_TO_CART",
         id 
        }
    }
export const reduceFromCart= (id) => {
    return{
        type: "REDUCE_FROM_CART",
         id 
        }
}
export const removeFromCart= (id) => {
    return{
        type: "REMOVE_FROM_CART",
         id 
        }
}
export const increaseQty = (id) => {
    return{
        type: "INCREASE_QUANTITY",
        id
    }
}
export const completeOrder = () => {
    return{
        type: "COMPLETE_ORDER"
    }
}
export const setOriginalState = () => {
    return{
        type: "ORIGINAL_STATE"
    }
}