import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    state = {
        products: storeProducts
    }
    render() {
        console.log(this.state.products)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="product" />
                        <div className="row">
                            <ProductConsumer>
                                {value =>{
                                //    return <h1>{hello}</h1>
                                console.log(value);
                                return value.products.map( product =>{
                                    return <Product key={product.id} product={product} />
                                })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <div>
            //     {/* <h3>Hello from ProductList</h3> */}
            //     <Product></Product>
            // </div>
        )
    }
}
