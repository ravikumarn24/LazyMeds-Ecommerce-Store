import React, { Component } from 'react'
import {Products} from "./ProductData"
import {Product} from "./Product"
import {ProductConsumer} from "./Context"
import UploadPrescription from './UploadPrescription'
export default class ProductGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="upload-widget d-lg-none container alert alert-primary">
                    <span>Too lazy to find the right products ?, Upload your prescription and we will get it for you in no time</span>
                    <center><UploadPrescription/></center>
                </div>
                <div className="py-lg-5">
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
