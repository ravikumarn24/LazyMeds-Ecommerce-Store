import React, { Component } from 'react'
import {Products} from './ProductData'

const ProductContext = React.createContext()
class ProductProvider extends Component {
    state ={
        products:Products,
        detailProdcut:Products
    }
    handleDetail = () => {
        console.log("hello from detail");
    }
    addToCart = () => {
        console.log("hello from add to cart");
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
