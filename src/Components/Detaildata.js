
import React, { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { removeselectedProducts, selectedProducts } from '../Containers/actions/actions';

const Detaildata = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    console.log(product);
    const { productid } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = useCallback(async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productid}`);
            dispatch(selectedProducts(response.data));
        } catch (err) {
            console.log(err, "err");
        }
    }, [dispatch, productid]);

    useEffect(() => {
        fetchProductDetail();

        return () => {
            dispatch(removeselectedProducts());
        };
    }, [fetchProductDetail, dispatch, productid]);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-8 border border-dark mt-3 my-3">
                    <img src={image} className='img-fluid mx-3 my-3 ' style={{ width: "70%", height: "70%" }} alt="" />
                </div>
                <div className="col-xl-4 border border-dark mt-3 my-3">
                    <div className="row mt-3  mx-3">
                        <h1>{title}</h1>
                    </div>
                    <div className="row mt-3  mx-3">
                        <h3 className='mt-3'>${price}</h3>
                        <button type="button" class="btn btn-secondary mt-4">{category}</button>
                        <p className='mt-3'>{description}</p>
                        <button type="button" class="btn btn-success mt-4 mx-auto" style={{ width: "30%" }}>{category}</button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Detaildata



