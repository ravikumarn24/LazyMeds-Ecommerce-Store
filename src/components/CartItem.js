import React, { Component } from 'react'
import {increaseQty, removeFromCart, reduceFromCart} from './CartActions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class CartItem extends Component {
    increaseQty = (id) => {
        this.props.increaseQty(id);
    }
    reduceFromCart = (id) => {
        this.props.reduceFromCart(id)
    }
    removeFromCart = (id) => {
        this.props.removeFromCart(id);
    }
    render() {
        if(this.props.cart.length === 0){
            return (
                <tr>
                <td colSpan="5"><center>
                    Your Cart is Empty, Looking for our products ?? click <a href="/">here</a>
                    </center>
                </td>
                </tr>
            );
        }
        const {id,name,img,mrp,discount,cartQuantity} = this.props.cartItem;
        const discountedPrice = mrp-parseInt(discount*mrp);
        return (
                <tr>
                    <td class="">
                        <div >
                            {name}
                        </div>
                    </td>
                    <td class=" text-align-center" >
                        <Link to="/Cart"><button className="btn-xs btn-success py-1" onClick={() => {this.increaseQty(id)}}><i className="fas fa-plus"/></button></Link>
                        <strong className="px-2">{cartQuantity}</strong>
                        <Link to="/Cart"><button className="btn-xs btn-danger" onClick={() => {this.reduceFromCart(id)}}><i className="fas fa-minus"/></button></Link>
                    </td>
                    <td class=" text-center"><strong>Rs. {discountedPrice} </strong></td>
                    <td class=" text-center"><strong>Rs. {cartQuantity * discountedPrice } </strong></td>
                    <td class="">
                        <Link to="/Cart"><button type="button" class="close" onClick={() => {this.removeFromCart(id)}} aria-label="close">
                        <span aria-hidden="true">&times;</span>
                        </button></Link>
                    </td>
                </tr>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      cart: state.cart,
      state: state
    }
  }

const mapDispatchToProps= (dispatch)=>{
    
    return{
        increaseQty: (id)=>{dispatch(increaseQty(id))},
        reduceFromCart: (id)=>{dispatch(reduceFromCart(id))},
        removeFromCart: (id)=>{dispatch(removeFromCart(id))}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)

