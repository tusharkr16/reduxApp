import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { setProducts } from '../Containers/actions/actions'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const product = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Err", err);
        })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("Products: ", product);

    return (
        <div>
            <ProductComponent />
        </div>
    )
}

export default ProductListing