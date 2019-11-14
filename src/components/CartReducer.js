import {Products} from './ProductData'
const initState ={
    products:Products,
    cart: []
}
const addToCart = (state,id) => {
    var selectedProduct =  state.products.find(product => product.id === id);
    var index =  state.cart.findIndex(product => product.id === id)
    if(index === -1){
         state.cart.push(selectedProduct);
         state.cart[ state.cart.length-1].cartQuantity += 1;
    }
    else{
         state.cart[index].cartQuantity += 1;
    }
    return state;
}
const reduceFromCart = (state,id) => {
    var selectedProduct =  state.products.find(product => product.id === id);
    var index =  state.cart.findIndex(product => product.id === id)
    if(index === -1){
        return;
    }
    else if( state.cart[index].cartQuantity > 1){
         state.cart[index].cartQuantity -= 1;
    }
    else{
         state.cart.splice(index,1);
    }
    return state;
}
const removeFromCart = (state,id) => {
    var selectedProduct =  state.products.find(product => product.id === id);
    var index = state.cart.findIndex(product => product.id === id)
    if(index === -1){
        return;
    }
    else{
         state.cart.splice(index,1);
    }
    return state;
}

const cartReducer = (state = initState,action)=>{
   
    console.log(action);
    if(action.type === "ADD_TO_CART"){
        var modified_state = addToCart(state, action.id);
        return {...modified_state,added:true};
    }
    else if(action.type === "INCREASE_QUANTITY"){
        var modified_state = addToCart(state, action.id);
        console.log(modified_state)
        return {...modified_state,increased:true};
    }
    else if(action.type === "REMOVE_FROM_CART"){
        var modified_state = removeFromCart(state, action.id);
        return {...modified_state,removed:true}
    }
    else if(action.type === "REDUCE_FROM_CART"){
        var modified_state = reduceFromCart(state, action.id);
        return {...modified_state,reduced: true}
    }
    else if(action.type === "COMPLETE_ORDER"){
        return {...state, orderComplete: true}
    }
    return {
        ...state
    }
}
export default cartReducer;