import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const product = useSelector((state) => state.allProducts.products);
    const renderList = product.map((products) => {
        const { id, title, image, price, category } = products;
        return (
            <div className="col-xl-3 col-md-6 col-12" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card mt-3 product-card" style={{ width: "18rem", cursor: "pointer", display: "flex" }}>
                        <img src={image} className="img-fluid" alt={title} />
                        <div className="card-body">
                            <p className="card-text">{title}</p>
                            <p className="card-text">${price}</p>
                            <div>{category}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return (
        <div>
            <div className="row" >
                {renderList}
            </div>
        </div>
    )
}

export default ProductComponent