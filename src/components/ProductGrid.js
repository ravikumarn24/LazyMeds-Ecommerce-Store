import React, { Component } from 'react'
import {Products} from "./ProductData"
import {Product} from "./Product"
import {ProductConsumer} from "./Context"
export default class ProductGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <ProductConsumer>
                                { (value)=>{
                                        return value.products.map(product => {
                                            return <Product key={product.id} product={product}/>
                                        })
                                }
                                }
                            </ProductConsumer>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
