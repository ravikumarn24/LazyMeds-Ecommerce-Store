import React, { Component } from 'react'
import {Products} from './ProductData'

const ProductContext = React.createContext()
class ProductProvider extends Component {
    state ={
        products:Products
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
